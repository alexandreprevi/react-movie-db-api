import { useState, useEffect } from "react";

// API
import API from "../API";

// Helpers
import { isPersistedState } from "./../helpers";

export const useMovieFetch = (movieId) => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        setError(false);

        const movie = await API.fetchMovie(movieId);
        const credits = await API.fetchCredits(movieId);

        // Get directors only
        const directors = credits.crew.filter(
          (member) => member.job === "Director"
        );

        setState({ ...movie, actors: credits.cast, directors });
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };

    const sessionState = isPersistedState(movieId);
    // Check if the movie is already saved in session storage
    if (sessionState) {
      console.log("Getting movie from Session Storage...");
      setState(sessionState);
      setLoading(false);
      return;
    }

    console.log("Fetching movie from API...");
    fetchMovie();
  }, [movieId]);

  // Set movie to session storage
  useEffect(() => {
    sessionStorage.setItem(movieId, JSON.stringify(state));
  }, [movieId, state]);

  return { state, loading, error };
};
