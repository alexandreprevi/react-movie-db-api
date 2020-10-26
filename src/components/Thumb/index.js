import React from "react";
import { Link } from "react-router-dom";

// PropTypes
import PropTypes from "prop-types";

// styles
import { Image } from "./Thumb";

const Thumb = ({ image, id, clickable, type }) => (
  <div>
    {clickable ? (
      <Link to={`/${type}/${id}`}>
        <Image src={image} alt={`${type}-thumb`} />
      </Link>
    ) : (
      <Image src={image} alt={`${type}-thumb`} />
    )}
  </div>
);

Thumb.propTypes = {
  image: PropTypes.string,
  id: PropTypes.number,
  clickable: PropTypes.bool,
};

export default Thumb;
