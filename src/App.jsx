

// import { useEffect, useState } from 'react'
// import './App.css'

// const Card = ({ title }) => {
//   const [count, setCount] = useState(0);
//   const [hasLiked, setHasLiked] = useState(false);

//   useEffect(() => {
//     console.log(`${title} has been liked: ${hasLiked}`);
//   }, [hasLiked]);

//   return (
//     <div className="Card">
//       <h2>{title}</h2>
//       <button 
//   className={hasLiked ? "btn-liked" : "btn-like"}
//   onClick={() => setHasLiked(!hasLiked)}
// >
//   {hasLiked ? "Liked" : "Like"}
// </button>

// <div style={{ marginTop: "10px" }}>
//   <p>Count: {count}</p>

//   <button className="btn-increase" onClick={() => setCount(count + 1)}>
//     Increase
//   </button>

//   <button className="btn-decrease" onClick={() => setCount(count - 1)}>
//     Decrease
//   </button>
// </div>

//  </div>
//   );
// };

// const App = () => {
//   return (
//     <div>
//       <h2>Functional Arrow Component</h2>

//       <Card title="Star Wars" rating={5} iscool={true} actors={[{ name: 'Actors' }]} />
//       <Card title="Avatar" />
//       <Card title="The Lion King" />
//     </div>
//   );
// };

// export default App;




// import React, { useEffect, useState } from "react";
// import Search from "./component/Search";

// // API
// const API_BASE_URL = "https://api.themoviedb.org/3";
// const API_KEY = import.meta.env.VITE_TMDB_API_KEY; // your v3 key

// const App = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const [movies, setMovies] = useState([]);
//   const [isLoading, setIsLoading] = useState(false); // loading state

//   // Fetch popular movies
//   const fetchMovies = async () => {
//     setIsLoading(true);
//     try {
//       const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`;
//       const response = await fetch(endpoint);

//       if (!response.ok) {
//         const errData = await response.json();
//         throw new Error(errData.status_message || "Failed fetching movies");
//       }

//       const data = await response.json();
//       setMovies(data.results);
//       setErrorMessage("");
//     } catch (error) {
//       console.error("Error fetching movies:", error);
//       setErrorMessage("Error fetching movies. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Search movies by query
//   const searchMovies = async (query) => {
//     if (!query) return fetchMovies(); // reset to popular movies if empty

//     setIsLoading(true);
//     try {
//       const endpoint = `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}&api_key=${API_KEY}`;
//       const response = await fetch(endpoint);

//       if (!response.ok) {
//         const errData = await response.json();
//         throw new Error(errData.status_message || "Failed searching movies");
//       }

//       const data = await response.json();
//       setMovies(data.results);
//       setErrorMessage("");
//     } catch (error) {
//       console.error("Error searching movies:", error);
//       setErrorMessage("Error searching movies. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Load popular movies on mount
//   useEffect(() => {
//     fetchMovies();
//   }, []);

//   // Trigger search when searchTerm changes (with debounce)
//   useEffect(() => {
//     const delayDebounce = setTimeout(() => {
//       if (searchTerm) {
//         searchMovies(searchTerm);
//       } else {
//         fetchMovies();
//       }
//     }, 500); // 500ms delay

//     return () => clearTimeout(delayDebounce);
//   }, [searchTerm]);

//   return (
//     <main>
//       <div className="pattern" />

//       <div className="wrapper">
//         <header>
//           <h1>Find Movies you will enjoy without the Hassle</h1>
//           <Search 
//             searchTerm={searchTerm} 
//             setSearchTerm={setSearchTerm}
//           />
//         </header>

//         <section className="all-movies">
//           <h2>All Movies</h2>

//           {errorMessage && <p className="text-red-500">{errorMessage}</p>}

//           <div className="movies-grid">
//             {isLoading ? (
//               <p>Loading movies...</p>
//             ) : movies.length > 0 ? (
//               movies.map((movie) => (
//                 <div className="movie-card" key={movie.id}>
//                   {movie.poster_path ? (
//                     <img 
//                       src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
//                       alt={movie.title} 
//                     />
//                   ) : (
//                     <div className="placeholder">No Image</div>
//                   )}
//                   <h3>{movie.title}</h3>
//                 </div>
//               ))
//             ) : (
//               <p>No movies found yet.</p>
//             )}
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// };

// export default App;



import React, { useEffect, useState } from "react";
import Search from "./component/Search";


const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovies = async () => {
    setIsLoading(true);
    try {
      const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`;
      const response = await fetch(endpoint);

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.status_message || "Failed fetching movies");
      }

      const data = await response.json();
      setMovies(data.results);
      setErrorMessage("");
    } catch (error) {
      console.error("Error fetching movies:", error);
      setErrorMessage("Error fetching movies. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  
  const searchMovies = async (query) => {
    if (!query) return fetchMovies();

    setIsLoading(true);
    try {
      const endpoint = `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}&api_key=${API_KEY}`;
      const response = await fetch(endpoint);

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.status_message || "Failed searching movies");
      }

      const data = await response.json();
      setMovies(data.results);
      setErrorMessage("");
    } catch (error) {
      console.error("Error searching movies:", error);
      setErrorMessage("Error searching movies. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchTerm) {
        searchMovies(searchTerm);
      } else {
        fetchMovies();
      }
    }, 500);
    return () => clearTimeout(delayDebounce);
  }, [searchTerm]);

  return (
    <main>
      <div className="pattern" />

      <div className="wrapper">
        <header>
          <h1>Find Movies you will enjoy without the Hassle</h1>
          <Search 
            searchTerm={searchTerm} 
            setSearchTerm={setSearchTerm}
          />
        </header>

        <section className="all-movies">
          <h2>All Movies</h2>

          {errorMessage && <p className="text-red-500">{errorMessage}</p>}

          <div className="movies-grid">
            {isLoading ? (
              <p>Loading movies...</p>
            ) : movies.length > 0 ? (
              movies.map((movie) => (
                <a 
                  key={movie.id}
                  href={`https://www.themoviedb.org/movie/${movie.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="movie-card">
                    {movie.poster_path ? (
                      <img 
                        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
                        alt={movie.title} 
                      />
                    ) : (
                      <div className="placeholder">No Image</div>
                    )}
                    <h3>{movie.title}</h3>
                  </div>
                </a>
              ))
            ) : (
              <p>No movies found yet.</p>
            )}
          </div>
        </section>
      </div>
    </main>
  );
};

export default App;
