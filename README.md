# [Solarscape](https://solarscape.netlify.app/)

## Project Overview
Solarscape is a geospatial analysis project developed as part of the SMT201: Smart-City Management & Technology curriculum at Singapore Management University.
Our goal: To identify optimal solar farm locations in Singapore by balancing energy generation potential with ecological and social considerations.

## Key Insights

- **Initial Site Analysis**: Identify optimal locations using GIS-based spatial analysis with URA Master Plan 2019 data.
- **Land-Use Constraints**: Excluded urban areas such as residential and commercial zones, and unavailable areas such as natural reserves, protected areas and offshore islands.
- **Environmental Criteria**: Scored using various factors i.e. Proximity to Substations, Aspect, Slope, Proximity to Roads, Temperature
- **Decision-Making Framework**: Applied **Quantitative MCDA Scoring** with suitability thresholds.
- **Post-MCDA Evaluation**: Utilised satellite images for visual inspection/analysis of suitable sites.

## Getting Started
1. Clone the repository
2. Install Quarto
3. Run `quarto render`
4. Deploy using Netlify

