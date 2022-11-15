import React, { useEffect, useState } from "react";
import request from "../request";
import "../components/Banner.css";

const baseUrl = "https://image.tmdb.org/t/p/original/";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  //
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(request.fetchNetflixOriginals);
      const data = await response.json();
      setMovie(
        data.results[Math.floor(Math.random() * data.results.length - 1)]
      );
    };

    fetchData();
  }, []);

  // truncate function
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <>
      <header
        className="banner"
        style={{
          backgroundImage: `url("${baseUrl}${movie?.backdrop_path}")`,
          backgroundPosition: "top",
          backgroundSize: "cover",
        }}
      >
        <div className="banner-content">
          <h1 className="banner-title">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>

          <div className="banner-buttons">
            <button className="banner-button">Play</button>
            <button className="banner-button">My List</button>
          </div>

          <h1 className="banner-description">
            {truncate(movie?.overview, 150)}
          </h1>
        </div>

        <div className="banner-fade_bottom"></div>
      </header>
    </>
  );
};

export default Banner;
