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

export const usePersonsPageFetch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [state, setState] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  const fetchPersons = async (page, searchTerm = "") => {
    try {
      setError(false);
      setLoading(true);

      const persons = await API.fetchPersons(searchTerm, page);

      setState((prev) => ({
        ...persons,
        results:
          page > 1
            ? [...prev.results, ...persons.results]
            : [...persons.results],
      }));
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  // Initial fetch and on search
  useEffect(() => {
    if (!searchTerm) {
      // Try to get from sessionStorage
      const sessionState = isPersistedState("personPageState");
      if (sessionState) {
        console.log("Getting from Session Storage...");
        return setState(sessionState);
      }
    }

    console.log("Fetching from API...");
    setState(initialState);
    fetchPersons(1, searchTerm);
  }, [searchTerm]);

  // Load more persons
  useEffect(() => {
    if (!loadingMore) return;

    fetchPersons(state.page + 1, searchTerm);
    setLoadingMore(false);
  }, [loadingMore, searchTerm, state.page]);

  // Set to sessionStorage
  useEffect(() => {
    if (!searchTerm)
      sessionStorage.setItem("personPageState", JSON.stringify(state));
  }, [searchTerm, state]);

  return { state, loading, error, searchTerm, setSearchTerm, setLoadingMore };
};
