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
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black" />
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl ">{movie?.title}</h1>
          <div>
            <button
              className="border bg-gray-300 text-black border-gray-300 py-2 px-5"
              type="button"
            >
              PLay
            </button>
            <button
              className="border text-white border-gray-300 py-2 px-5 ml-4"
              type="button"
            >
              Watch Later
            </button>
          </div>
          <p>{movie?.release_date}</p>
        </div>
      </div>
    </div>
  );
}

export default Main;
