import React, { useState, useEffect } from "react";
import "./Banner.css";
function Banner() {
  const [movie, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const resp = await fetch(
        "https://api.themoviedb.org/3/discover/tv?api_key=f6a6b9d7308cf6b34cb64a20db488140&with_networks=213"
      );
      const respData = await resp.json();
      setMovies(
        respData.results[Math.floor(Math.random() * respData.results.length)]
      );
      return respData;
    }
    fetchData();
  }, []);
  console.log(movie);
  return (
    <header
      className="banner"
      style={{
        background: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}") center/cover`,
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie.title || movie.name || movie.original_name}
        </h1>
        <div className="banner_buttons">
          <button>Play</button>
          <button>My List</button>
        </div>
        <p className="banner_description">{movie.overview}</p>
      </div>
    </header>
  );
}

export default Banner;
