import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const Detail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const res = await fetch(
          `${API_BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=credits`
        );
        const data = await res.json();
        setMovie(data);
        setCast(data.credits.cast.slice(0, 5));
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <main className="detail-page">
      <div className="wrapper">
        <section className="movie-detail">
          <div className="con">
            <div className="heroo">
              {movie.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  alt={movie.title}
                />
              ) : (
                <div className="placeholder">No Image</div>
              )}
            </div>

            <div className="head">
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
            </div>

            <h3 className="Actors">Main Actors:</h3>
            <div className="actors-grid">
              {cast.map((actor) => (
                <div key={actor.id} className="actor-card">
                  {actor.profile_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                      alt={actor.name}
                    />
                  ) : (
                    <div className="placeholder">No Image</div>
                  )}
                  <p>{actor.name}</p>
                  <p className="character">as {actor.character}</p>
                </div>
              ))}
            </div>

            <div className="big-btn">
              <a
                href={`https://www.themoviedb.org/movie/${movie.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="watch-button"
              >
                Watch Movie
              </a>

              <Link to="/" className="back-button">
                Back to Movies
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Detail;
