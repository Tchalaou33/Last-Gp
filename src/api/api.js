const API_KEY = "8e4ef0327f204b4b87256a8ea376bc51";

const api = {
fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,   
fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en=US`,
fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_geners=10749`,
fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,

};

export default api;