# Movie Dashboard Application

A responsive dashboard-style movie application built with React, Redux Toolkit, and TypeScript. Features movie browsing, searching, and detailed information display using The Movie Database (TMDB) API.

## Features

- **Responsive Dashboard Layout**: Collapsible sidebar navigation with hamburger menu
- **Movie Grid View**: Browse popular movies with poster images and ratings
- **Data Table View**: Sortable table displaying movie details by rating
- **Search Functionality**: Search movies by title with real-time results
- **Pagination**: Navigate through multiple pages of movie results
- **Movie Details Modal**: Click any movie to view detailed information
- **Loading States**: Smooth loading indicators throughout the app
- **Mobile Optimized**: Fully responsive design for all screen sizes

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **State Management**: Redux Toolkit
- **Styling**: TailwindCSS
- **Build Tool**: Vite
- **API**: The Movie Database (TMDB) API
- **Icons**: Lucide React

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- TMDB API key (free registration at https://www.themoviedb.org/settings/api)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd movie-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Configure API Key:
   - Open `src/services/movieApi.ts`
   - Replace `YOUR_TMDB_API_KEY_HERE` with your actual TMDB API key

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run test` - Run unit tests
- `npm run test:ui` - Run tests with UI
- `npm run test:coverage` - Run tests with coverage report
- `npm run cypress:open` - Open Cypress test runner
- `npm run cypress:run` - Run Cypress tests headlessly



## API Configuration

This application uses The Movie Database (TMDB) API. To get your API key:

1. Create a free account at https://www.themoviedb.org/
2. Go to Settings > API
3. Request an API key (v3 auth)
4. Copy your API key and add it to `src/services/movieApi.ts`

