import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Search from "../component/Search";
import Header from "../component/header";
import Footer from "./footer";
import '../App.css';

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [nowPlaying, setNowPlaying] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch Now Playing
  const fetchNowPlaying = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}/movie/now_playing?api_key=${API_KEY}`);
      if (!res.ok) throw new Error("Failed fetching now playing movies");
      const data = await res.json();
      setNowPlaying(data.results);
      setErrorMessage("");
    } catch (err) {
      console.error(err);
      setErrorMessage("Error fetching now playing movies.");
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch Popular
  const fetchPopularMovies = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/movie/popular?api_key=${API_KEY}`);
      if (!res.ok) throw new Error("Failed fetching popular movies");
      const data = await res.json();
      setPopularMovies(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  // Search All Movies
  const searchMovies = async (query) => {
    if (!query) {
      setSearchResults([]);
      return;
    }
    setIsLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}&api_key=${API_KEY}`);
      if (!res.ok) throw new Error("Failed searching movies");
      const data = await res.json();
      setSearchResults(data.results);
    } catch (err) {
      console.error(err);
      setErrorMessage("Error searching movies.");
    } finally {
      setIsLoading(false);
    }
  };

  // Initial Load
  useEffect(() => {
    fetchNowPlaying();
    fetchPopularMovies();
  }, []);

  // Debounce search
  useEffect(() => {
    const timeout = setTimeout(() => {
      searchMovies(searchTerm);
    }, 500);
    return () => clearTimeout(timeout);
  }, [searchTerm]);

  // Render either search results or default sections
  const renderMovies = (moviesArray) => (
    <div className="movies-grid">
      {moviesArray.map((movie) => (
        <Link to={`/movie/${movie.id}`} key={movie.id} className="movie-card-link">
          <div className="movie-cardd">
            {movie.poster_path ? (
              <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
            ) : (
              <div className="placeholder">No Image</div>
            )}
            <h3 title={movie.title} className="movie-title">{movie.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );

  return (
    <main>
      <div className="wrapper">

        <Header />
       

        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        {searchTerm && searchResults.length > 0 ? (
          <section className="search-results">
            <h2>Search Results</h2>
            {renderMovies(searchResults)}
          </section>
        ) : (
          <>
            <section className="popular-movies">
              <h2>Popular Movies</h2>
              <div className="popular-scroll">
                {popularMovies.length > 0 ? popularMovies.map((movie, index) => (
                  <Link to={`/movie/${movie.id}`} key={movie.id} className="movie-card-link">
                    <div className="movie-cardd">
                      <div className="rank-number">{index + 1}</div>
                      {movie.poster_path ? (
                        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
                      ) : (
                        <div className="placeholder">No Image</div>
                      )}
                      <h3 title={movie.title} className="movie-title">{movie.title}</h3>
                    </div>
                  </Link>
                )) : <p>No popular movies right now.</p>}
              </div>
            </section>

            <section className="now-playing">
              <h2>Now Playing</h2>
              {errorMessage && <p className="text-red-500">{errorMessage}</p>}
              {isLoading ? <p>Loading movies...</p> : renderMovies(nowPlaying)}
            </section>
          </>
        )}
      </div>
      <Footer />
    </main>
  );
};

export default Home;
