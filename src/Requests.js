const key = '754452fd9b1b87b6839e903c0162a00c';

const movieRequests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestLatest: `https://api.themoviedb.org/3/movie/latest?api_key=${key}&language=en-US`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestUpCOming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  requestSimilar: `https://api.themoviedb.org/3/movie/{movie_id}/similar?api_key=${key}&language=en-US&page=1`,
};

export default movieRequests;
