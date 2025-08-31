# Sunshine Tracker

## Overview
Sunshine Tracker is a mobile application built with React Native and Expo that allows users to track and compare sunlight duration data. The app retrieves sunlight data from a FastAPI backend and provides visualizations and historical comparisons.

## Features
- View current sunlight duration data.
- Compare sunlight duration across different days, weeks, and months.
- Visualize sunlight data using charts.
- Access historical sunlight data for reference.

## Setup Instructions

### Prerequisites
- Node.js and npm installed on your machine.
- Python 3.7 or higher installed.
- FastAPI and required dependencies listed in `backend/requirements.txt`.

### Mobile Application Setup
1. Navigate to the `mobile` directory:
   ```
   cd SunApp
   ```
2. Install the necessary dependencies:
   ```
   npm install
   ```
3. Start the Expo development server:
   ```
   npm start
   ```
### Web
1. Navigate to the `Web` directory:
   ```
   cd Web
   ```
2. Install the necessary dependencies:
   ```
   npm install
   ```
3. Start the Expo development server:
   ```
   npm start
   ```
### Backend Setup
1. Navigate to the `backend` directory:
   ```
   cd backend
   ```
2. Create a virtual environment (optional but recommended):
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```
3. Install the required dependencies:
   ```
   pip install -r requirements.txt
   ```
4. Run the FastAPI application:
   ```
   uvicorn main:app --reload
   ```

## Usage
- Open the mobile app to view the current sunlight data on the Home Screen.
- Navigate to the Compare Screen to analyze sunlight duration across different time frames.
- Access the History Screen to view past sunlight data.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.