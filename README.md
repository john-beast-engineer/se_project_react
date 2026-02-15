# WTWR (What to Wear)

## About the Project

A React weather application that fetches real-time weather data and recommends clothing based on current conditions. Users can toggle between Fahrenheit and Celsius, navigate between a weather-filtered home page and a full wardrobe profile page, and manage clothing items through a mock REST API.

## Features

- Fetches weather data from OpenWeather API
- Displays current temperature and location
- Temperature unit toggle (Fahrenheit/Celsius) using React Context
- Client-side routing between home and profile pages
- Filters clothing recommendations by weather type (hot/warm/cold) on the home page
- Displays full wardrobe on the profile page
- Add new clothing items via modal form with custom useForm hook
- Delete clothing items with confirmation modal
- Persistent data storage through json-server mock API
- Dynamic weather background images (day/night, six weather conditions)

## Technologies Used

- React 18
- React Router v6
- React Context API
- Custom Hooks (useForm)
- Vite
- json-server (mock REST API)
- OpenWeather API

## Getting Started

### Prerequisites

- Node.js installed
- OpenWeather API key
- json-server installed globally (`npm install -g json-server@^0`)

### Installation

1. Clone the repo

   git clone https://github.com/john-beast-engineer/se_project_react.git

2. Install dependencies

   npm install

3. Add your API key to `src/utils/constants.js`

4. Start the mock server (in a separate terminal)

   json-server --watch db.json --id \_id --port 3001

5. Run the app

   npm run dev

## Demo

[Project Walkthrough Video](https://www.loom.com/share/8c91e391ee2b49c58c99683a48fdbb70)

## Author

John Pettiford
