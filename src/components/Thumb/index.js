import React from "react";
import { Link } from "react-router-dom";

// PropTypes
import PropTypes from "prop-types";

// styles
import { Image } from "./Thumb";

const Thumb = ({ image, movieId, clickable, type }) => (
  <div>
    {clickable ? (
      <Link to={`/movie/${movieId}`}>
        <Image src={image} alt="movie-thumb" />
      </Link>
    ) : (
      <Image src={image} alt={`${type}-thumb`} />
    )}
  </div>
);

Thumb.propTypes = {
  image: PropTypes.string,
  movieId: PropTypes.number,
  clickable: PropTypes.bool,
};

export default Thumb;
