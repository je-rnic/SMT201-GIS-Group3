import requests
import pandas as pd
from datetime import datetime, timedelta
from concurrent.futures import ThreadPoolExecutor, as_completed
import time
from shapely.geometry import Point
from geopandas import GeoDataFrame
import threading

# Configuration
BASE_URL = "https://api-open.data.gov.sg/v2/real-time/api/air-temperature"
MAX_WORKERS = 100
REQUEST_TIMEOUT = 15
RETRY_DELAY = 2
MAX_RETRIES = 3
INTERVALS = [6, 9, 12, 15, 18, 21]  # 24-hour format

# Thread-safe storage
station_data = {}
data_lock = threading.Lock()

class ProgressTracker:
    def __init__(self, total):
        self.start_time = time.time()
        self.total = total
        self.completed = 0
        self.lock = threading.Lock()
        
    def update(self):
        with self.lock:
            self.completed += 1
            
    def get_progress(self):
        with self.lock:
            elapsed = time.time() - self.start_time
            percent = self.completed / self.total * 100 if self.total > 0 else 0
            rate = self.completed / elapsed if elapsed > 0 else 0
            remaining = (self.total - self.completed) / rate if rate > 0 else 0
            return (
                f"Progress: {self.completed}/{self.total} ({percent:.1f}%) | "
                f"Elapsed: {self.format_time(elapsed)} | "
                f"ETA: {self.format_time(remaining)}"
            )
    
    @staticmethod
    def format_time(seconds):
        if seconds < 0: return "--:--:--"
        hours, rem = divmod(seconds, 3600)
        mins, secs = divmod(rem, 60)
        return f"{int(hours):02}:{int(mins):02}:{int(secs):02}"

def fetch_with_retry(timestamp):
    """Fetch data from API with retry logic"""
    for attempt in range(MAX_RETRIES):
        try:
            response = requests.get(BASE_URL, params={"date_time": timestamp}, timeout=REQUEST_TIMEOUT)
            response.raise_for_status()
            return response.json() if response.text.strip() else None
        except requests.exceptions.HTTPError as e:
            if response.status_code == 429:
                wait = RETRY_DELAY ** (attempt + 1)
                print(f"Rate limited. Waiting {wait}s...")
                time.sleep(wait)
            else:
                print(f"HTTP error: {e}")
                break
        except Exception as e:
            print(f"Attempt {attempt+1} failed: {str(e)}")
            time.sleep(RETRY_DELAY)
    return None

def process_result(data, target_hour, progress):
    """Process API response and update station data"""
    try:
        if not data or 'data' not in data:
            return
        
        # Create station lookup map
        stations = {s['id']: s for s in data['data']['stations']}
        
        # Process readings
        for reading in data['data']['readings'][0]['data']:
            station_id = reading['stationId']
            if station_id not in stations:
                continue
                
            with data_lock:
                # Initialize station if not exists
                if station_id not in station_data:
                    station_info = stations[station_id]
                    station_data[station_id] = {
                        'id': station_id,
                        'name': station_info['name'],
                        'latitude': station_info['location']['latitude'],
                        'longitude': station_info['location']['longitude'],
                        'intervals': {f"{h:02}:00": {'sum': 0, 'count': 0} for h in INTERVALS}
                    }
                
                # Update specific interval (target_hour only)
                time_key = f"{target_hour:02}:00"
                if time_key in station_data[station_id]['intervals']:
                    station_data[station_id]['intervals'][time_key]['sum'] += reading['value']
                    station_data[station_id]['intervals'][time_key]['count'] += 1
                    
                    # Debug statement
                    print(f"Updated station {station_id} at {time_key}: sum={station_data[station_id]['intervals'][time_key]['sum']}, count={station_data[station_id]['intervals'][time_key]['count']}")
                    
    except KeyError as e:
        print(f"Key error: {str(e)}")
    finally:
        progress.update()

def generate_dates():
    """Generate timestamps for last 180 days"""
    end_date = datetime(2025, 3, 17)
    start_date = end_date - timedelta(days=180)
    dates = []
    
    current = start_date
    while current <= end_date:
        for hour in INTERVALS:
            dates.append((
                current.replace(hour=hour, minute=0, second=0).isoformat(),
                hour
            ))
        current += timedelta(days=1)
    return dates

def create_shapefile():
    """Generate final shapefile with averages"""
    rows = []
    for station_id, data in station_data.items():
        avg_data = {}
        total_sum = 0
        total_count = 0
        
        # Calculate interval averages
        for interval in [f"{h:02}:00" for h in INTERVALS]:
            key = interval.replace(':', '')
            interval_data = data['intervals'][interval]
            
            if interval_data['count'] > 0:
                avg = interval_data['sum'] / interval_data['count']
                avg_data[f'avg_{key}'] = avg
                total_sum += avg
                total_count += 1
            else:
                avg_data[f'avg_{key}'] = None
        
        # Calculate overall average
        avg_data['overall_avg'] = total_sum / total_count if total_count > 0 else None
        
        rows.append({
            'id': data['id'],
            'name': data['name'],
            'latitude': data['latitude'],
            'longitude': data['longitude'],
            **avg_data
        })
    
    # Create and save GeoDataFrame
    df = pd.DataFrame(rows)
    geometry = [Point(xy) for xy in zip(df.longitude, df.latitude)]
    gdf = GeoDataFrame(df, geometry=geometry, crs="EPSG:4326")
    gdf.to_file('temperature_averages.shp')
    return gdf

def main():
    """Main execution flow"""
    dates = generate_dates()
    total = len(dates)
    progress = ProgressTracker(total)
    
    print(f"Starting processing of {total} requests")
    
    with ThreadPoolExecutor(max_workers=MAX_WORKERS) as executor:
        futures = {executor.submit(fetch_with_retry, ts): (ts, hour) for ts, hour in dates}
        
        try:
            for future in as_completed(futures):
                ts, hour = futures[future]
                data = future.result()
                if data:
                    process_result(data, hour, progress)
                print(progress.get_progress(), end='\r')
                
        except KeyboardInterrupt:
            print("\nUser interrupted. Saving partial data...")
            
    print("\nProcessing completed. Generating output...")
    
    if station_data:
        gdf = create_shapefile()
        print("\nFirst 5 records:")
        print(gdf.head())
        print("\nShapefile saved successfully!")
    else:
        print("No data collected")

if __name__ == "__main__":
    main()