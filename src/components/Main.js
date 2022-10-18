import axios from 'axios';
import React, { useEffect, useState } from 'react';
import movieRequests from '../Requests';

function Main() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(movieRequests.requestLatest).then((response) => {
      setMovies(response.data);
    });
  }, []);
  console.log(movies);
  return <div>Main</div>;
}

export default Main;
