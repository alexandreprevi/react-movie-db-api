import React from "react";

// Config
import { POSTER_SIZE, IMAGE_BASE_URL } from "../config";

// Hook
import { usePersonsPageFetch } from "./../hooks/usePersonsPageFetch";

// Image
import NoImage from "../images/no_image.jpg";

// Components
import SearchBar from "./SearchBar/index";
import Grid from "./Grid/index";
import Spinner from "./Spinner";
import Thumb from "./Thumb/index";
import Button from "./Button/index";
import PersonInfo from "./PersonInfo/index";

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
  console.log(state.results[0]);

  return (
    <>
      {!searchTerm && state.results[0] ? (
        <PersonInfo person={state.results[0]} />
      ) : null}
      <SearchBar text="Search People" setSearchTerm={setSearchTerm} />
      <Grid header={searchTerm ? "Search Result" : "Popular People"}>
        {state.results.map((person) => (
          <Thumb
            key={person.id}
            type="person"
            id={person.id}
            clickable
            image={
              person.profile_path
                ? IMAGE_BASE_URL + POSTER_SIZE + person.profile_path
                : NoImage
            }
          />
        ))}
      </Grid>
      {loading && <Spinner />}
      {state.page < state.total_pages && !loading && (
        <Button text="Load More" callback={() => setLoadingMore(true)} />
      )}
    </>
  );
};

export default PersonsPage;
