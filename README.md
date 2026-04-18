# WTWR (What to Wear)

## About the Project

A full-stack weather application that fetches real-time weather data and recommends clothing based on current conditions. Users can register, log in, and manage a personal wardrobe. Authentication is handled with JWT tokens stored in localStorage.

## Features

- Real-time weather data from OpenWeather API
- Temperature unit toggle (Fahrenheit/Celsius) via React Context
- User registration and login with JWT authentication
- Persistent login across page refreshes via token verification
- Protected profile route — accessible to authenticated users only
- Add, delete, and like clothing items
- Filter clothing recommendations by weather type on the home page
- Profile page displays only the current user's items
- Edit profile name and avatar
- Sign out clears token and resets session

## Technologies Used

**Frontend**

- React 18
- React Router v6
- React Context API
- Custom Hooks (useForm)
- Vite

**Backend**

- Express.js
- MongoDB / Mongoose
- JWT authentication
- bcryptjs

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB running locally
- OpenWeather API key

### Installation

1. Clone the frontend repo
   git clone https://github.com/john-beast-engineer/se_project_react.git

2. Clone the backend repo
   git clone https://github.com/john-beast-engineer/se_project_express.git

3. Install dependencies in both projects
   npm install

4. Start the backend (port 3001)
   npm run dev

5. Start the frontend (port 3000)
   npm run dev

## Backend Repository

[se_project_express](https://github.com/john-beast-engineer/se_project_express)

## Demo

[Project Walkthrough Video](https://www.loom.com/share/8c91e391ee2b49c58c99683a48fdbb70)

## Author

John Pettiford
