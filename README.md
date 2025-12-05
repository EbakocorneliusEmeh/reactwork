# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# reactwork








This Movie Explorer App is a fully responsive and modern movie discovery application built with React and Vite, using the TMDB API to fetch real movie data. The app allows users to search for movies, view detailed descriptions, explore actors, and navigate through a clean and visually appealing interface that works smoothly across desktop, tablet, and mobile devices. It includes a hero header section with a background image and tagline, a live search bar that updates results instantly, and a dedicated movie detail page where users can see the poster, overview, and top actors involved in the film. The application also includes a custom footer containing company information, help-center links, social media icons, legal references, and a TMDB acknowledgment.

Movie data is loaded securely using a TMDB API key stored in a .env file to avoid exposing sensitive information. The project is structured with organized React components such as Header, Search, Footer, MovieCard, HomePage, and Detail, which keep the code clean and maintainable. Navigation between pages is handled using React Router, while styling is implemented through responsive CSS with grid layouts, flexbox, and media queries that allow the layout to adjust seamlessly to different screen sizes. During development, the user runs the app using npm run dev, and for deployment, a production build can be created and deployed easily to platforms like Netlify or Vercel.

The Movie Explorer App is designed for anyone who wants to browse and discover movies with ease, offering fast loading, simple navigation, and an intuitive UI. It is open-source, intended for learning and personal use, and is not affiliated with TMDB despite using its public API. The application was developed by Ebako Cornelius, a React Frontend Developer passionate about building smooth and functional user interfaces.







### Movie Explorer App

This Movie Explorer App is a fully responsive and modern movie discovery application built with React and Vite, using the TMDB API to fetch real movie data. The app allows users to search for movies, view detailed descriptions, explore actors, and navigate through a clean and visually appealing interface that works smoothly across desktop, tablet, and mobile devices. It includes a hero header section with a background image and tagline, a live search bar that updates results instantly, and a dedicated movie detail page where users can see the poster, overview, and top actors involved in the film. The application also includes a custom footer containing company information, help-center links, social media icons, legal references, and a TMDB acknowledgment.

A modern, responsive movie discovery application built with React, Vite, and The Movie Database (TMDB) API. Users can search for movies, browse what’s now playing, and view detailed information including cast, posters, and movie descriptions—all inside a clean and fast UI, also user can click on the wacth movie button in the detail page that will direact them to the TMDB official site to wacth the movie

###  about the project
this prooject was buld from a react turtorail produce the almost all of the work, i added some deatures like the wacth movie that takes you the TMDB page were you can watch the movie this was with the hekp of the TMDB wacth movie page link that direacts a user after clicking on thye button 

### Features Implemented
### Core Functionality

# Live Movie Search – results update instantly as you type

# Now Playing Movies – real-time data from TMDB

# Movie Detail Page – poster, overview, and top actors

# Cast Information – displays major actors in each movie

# Hero Header Section – headline + background image

# Navigation with React Router – Home → Detail page

### UI & Styling

# Fully responsive (desktop, tablet, mobile)

# Mobile-friendly grid layouts (2×2 movie display)

# Attractive movie cards with hover effects

# Navigation bar + footer with company info, help links & social icons

# Security

API key securely stored in .env

No sensitive keys exposed on frontend

### Tech Stack

React

Vite

React Router

TMDB API

CSS (Grid, Flexbox, Media Queries)

### Installation & Setup Guide

Follow these steps to clone and run the application locally.

# Clone the repository
git clone https://github.com/EbakocorneliusEmeh/reactwork.git

# Navigate into the project folder
cd movie-explorer-app

# Install dependencies
npm install

# Create a .env file

Inside the project root, create:

.env


Add your TMDB API key:

VITE_TMDB_API_KEY=your_tmdb_api_key_here

### Run the development server
npm run dev


This will start the app on:

http://localhost:5173

### Building for Production

To create a production build:

npm run build


To preview the build:

npm run preview


You can then deploy the dist/ folder to:

Netlify

Vercel

GitHub Pages

Any static hosting platform

### Project Structure
src/
│── components/
│   ├── Header.jsx
│   ├── Search.jsx
│   ├── MovieCard.jsx
│   ├── Footer.jsx
│
│── pages/
│   ├── HomePage.jsx
│   ├── Detail.jsx
│
│── assets/
│── App.jsx
│── main.jsx

### Developer

Ebako Cornelius
React Frontend Developer passionate about creating smooth and functional UIs.

### Disclaimer

This project is not affiliated with TMDB.
It uses TMDB’s public API strictly for educational and personal learning purposes.