import React from "react";

// Hook
import { usePersonsPageFetch } from "./../hooks/usePersonsPageFetch";

const PersonsPage = () => {
  const {
    state,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    setLoadingMore,
  } = usePersonsPageFetch();

  if (error) return <div>Something went wrong...</div>;

  return <div>Persons Page</div>;
};

export default PersonsPage;
