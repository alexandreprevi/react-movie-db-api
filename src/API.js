import {
  MOVIE_SEARCH_BASE_URL,
  MOVIE_POPULAR_BASE_URL,
  API_URL,
  API_KEY,
} from "./config";

const apiSettings = {
  fetchMovies: async (searchTerm, page) => {
    const endpoint = searchTerm
      ? `${MOVIE_SEARCH_BASE_URL}${searchTerm}&page=${page}`
      : `${MOVIE_POPULAR_BASE_URL}&page=${page}`;
    return await (await fetch(endpoint)).json();
  },
  fetchMovie: async (movieId) => {
    const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
    return await (await fetch(endpoint)).json();
  },
  fetchCredits: async (movieId) => {
    const endpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
    return await (await fetch(endpoint)).json();
  },
  fetchPerson: async (personId) => {
    const endpoint = `${API_URL}person/${personId}?api_key=${API_KEY}`;
    return await (await fetch(endpoint)).json();
  },
  fetchPersonMovieCredits: async (personId) => {
    const endpoint = `${API_URL}person/${personId}/movie_credits?api_key=${API_KEY}`;
    return await (await fetch(endpoint)).json();
  },
};

export default apiSettings;
