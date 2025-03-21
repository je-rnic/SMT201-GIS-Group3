# averageDNIandDWN.py

""" This script processes CSV files containing solar radiation data to calculate the average Downward Shortwave Radiation (DWN) and average Direct Normal Irradiance (DNI) for each location. The results are written to an output CSV file.

Usage:

1. Place the CSV files to be processed in the Raw_Datasets folder.
2. Run the script (make sure cd to inside GIS_Code_Files):
python averageDWNandDNI.py
3. Output will be written to GIS_Metafolder/Outputs/averageDWNandDNIOutput.csv'

"""
 

import csv
import glob

def process_csv(file_path):
    with open(file_path, 'r') as file:
        reader = csv.reader(file)
        lines = list(reader)
        
        # Extract latitude and longitude from line 4
        location_line = lines[3][0]
        location_parts = location_line.split()
        latitude = float(location_parts[2])
        longitude = float(location_parts[4])
        
        # Initialize sums and counts for averages
        total_dni = 0
        total_dwn = 0
        count_dni = 0
        count_dwn = 0
        
        # Process data from line 29 onwards
        for line in lines[28:]:
            try:
                dwn = float(line[3])
                """ print(f"dwn: ${dwn}") """
                dni = float(line[5])
                """ print(f"dni: ${dni}") """
                if dni >= 0:
                    total_dni += dni
                    count_dni += 1
                if dwn >= 0:
                    total_dwn += dwn
                    count_dwn += 1
            except ValueError:
                continue
        
        # Calculate averages
        avg_dni = total_dni / count_dni if count_dni > 0 else 0
        avg_dwn = total_dwn / count_dwn if count_dwn > 0 else 0
        print(f"avg dni {avg_dni} and avg dwn {avg_dwn}")
        return latitude, longitude, avg_dwn, avg_dni

def main():
    input_folder = '../Raw_Datasets/*.csv'
    output_file = '../Outputs/averageDWNandDNIOutput.csv'
    
    with open(output_file, 'w', newline='') as csvfile:
        fieldnames = ['Lat', 'Long', 'Average ALLSKY_SFC_SW_DWN', 'Average ALLSKY_SFC_SW_DNI']
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        writer.writeheader()
        
        for file_path in glob.glob(input_folder):
            print(f"Processing file: {file_path}")
            lat, long, avg_dwn, avg_dni = process_csv(file_path)
            writer.writerow({
                'Lat': lat,
                'Long': long,
                'Average ALLSKY_SFC_SW_DWN': avg_dwn,
                'Average ALLSKY_SFC_SW_DNI': avg_dni
            })
            print(f"Finished processing file: {file_path}")
    print(f"All files processed. Output written to {output_file}")
    
if __name__ == "__main__":
    main()