import axios from 'axios';
import React, { useEffect, useState } from 'react';
import movieRequests from '../Requests';

function Main() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(movieRequests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  const movie = movies[Math.floor(Math.random() * movies.length)];
  console.log(movie);
  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <img
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
      </div>
    </div>
  );
}

export default Main;
