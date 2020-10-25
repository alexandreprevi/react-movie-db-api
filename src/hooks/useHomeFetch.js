import { useState, useEffect } from "react";

// API
import API from "../API";

// Helpers
import { isPersistedState } from "./../helpers";

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

export const useHomeFetch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  const fetchMovies = async (page, searchTerm = "") => {
    try {
      setError(false);
      setLoading(true);

      const movies = await API.fetchMovies(searchTerm, page);

      setState((prev) => ({
        // we return an object
        ...movies, // spread the movies fetched API.fetchMovies
        // if page > 1 we return an array. spread from prev state and append spread from new movies else just return movies
        results:
          page > 1 ? [...prev.results, ...movies.results] : [...movies.results],
      }));
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  // Initial fetch and on search
  useEffect(() => {
    if (!searchTerm) {
      // Get from sessionStorage
      const sessionState = isPersistedState("homePageState");
      if (sessionState) {
        console.log("Getting from Session Storage...");
        return setState(sessionState);
      }
    }
    console.log("Fetching from API...");
    setState(initialState);
    fetchMovies(1, searchTerm);
  }, [searchTerm]);

  // Load more movies
  useEffect(() => {
    if (!loadingMore) return;

    fetchMovies(state.page + 1, searchTerm);
    setLoadingMore(false);
  }, [loadingMore, searchTerm, state.page]);

  // Set to sessionStorage
  useEffect(() => {
    if (!searchTerm)
      sessionStorage.setItem("homePageState", JSON.stringify(state));
  }, [searchTerm, state]);

  return { state, loading, error, searchTerm, setSearchTerm, setLoadingMore };
};
