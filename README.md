# Eco_Tracker

Eco_Tracker is a React Native mobile application designed to help users track, monitor, and reduce their carbon footprint through daily habits, analytics, and AI-powered personalized coaching.

## Features

- **Eco Analytics Dashboard**: Visual representation of daily CO2 emissions and top contributors (Transport, Electricity, Waste) using interactive charts.
- **Eco Habits & Tasks**: Manage daily eco-friendly habits and earn points for sustainable choices.
- **AI Eco-Coach**: Personalized, AI-driven advice (powered by Google Gemini) to improve sustainability, provided in Sinhala.
- **User Authentication**: Secure login integration with Google Sign-In.
- **Modern UI**: Built with React Native and NativeWind (Tailwind CSS) for a responsive and intuitive experience.

## Tech Stack

- **Framework**: [React Native](https://reactnative.dev/) with [Expo](https://expo.dev/)
- **Language**: TypeScript
- **Styling**: [NativeWind](https://www.nativewind.dev/) (Tailwind CSS)
- **Navigation**: [React Navigation](https://reactnavigation.org/)
- **Backend/Services**:
  - [Firebase](https://firebase.google.com/) (Auth/Database)
  - [Google Generative AI](https://ai.google.dev/) (Gemini API for Coaching)
- **Data Visualization**: [react-native-chart-kit](https://www.npmjs.com/package/react-native-chart-kit)

## Project Structure

```text
src/
├── api/          # API client configurations
├── components/   # Reusable UI components
├── constants/    # App-wide constants (Tasks, Tips)
├── context/      # React Context for Auth and User state
├── models/       # TypeScript interfaces
├── navigation/   # Navigation configuration
├── screens/      # Application screens (Dashboard, Auth, Tasks, etc.)
└── services/     # Business logic and external API services
```

## Getting Started

### Prerequisites

- Node.js (v18+)
- Expo CLI (`npm install -g expo-cli`)
- Firebase project setup
- Google Cloud Project with Gemini API enabled

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Eco_Tracker
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables and Firebase/Google Services:
   - Ensure `google-services.json` is present in the root directory for Android.
   - Configure Firebase in `src/firebaseConfig.tsx`.
   - Update API keys in `src/services/EcoCoachService.tsx`.

4. Start the development server:
   ```bash
   npm start
   ```
