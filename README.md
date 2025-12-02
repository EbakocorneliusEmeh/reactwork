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