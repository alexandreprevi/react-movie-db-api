import React from "react";
import { useParams } from "react-router-dom";

// Custom Hook
import { usePersonFetch } from "./../hooks/usePersonFetch";

// Image
import NoImage from "../images/no_image.jpg";

// Components
import Grid from "./Grid";
import Spinner from "./Spinner";
import BreadCrumb from "./BreadCrumb";
import PersonInfo from "./PersonInfo";
import Thumb from "./Thumb";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";

const Person = () => {
  const { personId } = useParams();

  // Rename the state when destructuring
  const { state: person, loading, error } = usePersonFetch(personId);

  if (loading) return <Spinner />;
  if (error) return <div>Something ent wrong...</div>;

  console.log(person);
  return (
    <>
      <BreadCrumb title={person.person.name} />
      <PersonInfo person={person.person} />
      <Grid header="Movies">
        {person.personMovieCredits.cast.map((movie) => (
          <Thumb
            key={movie.id}
            clickable
            image={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : NoImage
            }
            movieId={movie.id}
          />
        ))}
      </Grid>
    </>
  );
};

export default Person;
