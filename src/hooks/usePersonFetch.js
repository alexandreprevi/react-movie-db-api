import { useState, useEffect } from "react";

// API
import API from "../API";

// Helpers
import { isPersistedState } from "./../helpers";

export const usePersonFetch = (personId) => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPerson = async () => {
      try {
        setLoading(true);
        setError(false);

        const person = await API.fetchPerson(personId);
        const personMovieCredits = await API.fetchPersonMovieCredits(personId);

        setState({ person, personMovieCredits });
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };

    const sessionState = isPersistedState(personId);
    // Check if the person is already saved in session storage
    if (sessionState) {
      console.log("Getting person from Session Storage...");
      setState(sessionState);
      setLoading(false);
      return;
    }

    console.log("Fetching person from API...");
    fetchPerson();
  }, [personId]);

  // Set person to session storage
  useEffect(() => {
    sessionStorage.setItem(personId, JSON.stringify(state));
  }, [personId, state]);

  return { state, loading, error };
};
