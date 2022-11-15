const apiKey = process.env.REACT_APP_API_KEY;

const requests = {
  fetchTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}&language=en-US`,
  fetchNetflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&with_networks=213`,
  fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US`,
  fetchActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=28`,
  fetchComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=35`,
  fetchHorrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=27`,
  fetchRomanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=10749`,
  fetchDocumantaries: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=99`,
};

export default requests;
