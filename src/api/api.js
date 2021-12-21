const API_KEY = "8e4ef0327f204b4b87256a8ea376bc51";

const api = {
fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en=US`,
fetchNetflixOringinals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_geners=10749`,

};

export default api;