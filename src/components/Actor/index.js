import React from "react";
import { Link } from "react-router-dom";

// PropTypes
import PropTypes from "prop-types";

// Styles
import { Wrapper, Image } from "./Actor.styles";

const Actor = ({ name, personId, character, imageUrl }) => (
  <Wrapper>
    <Link to={`/person/${personId}`}>
      <Image src={imageUrl} alt="actor-thumb" />
    </Link>
    <h3>{name}</h3>
    <p>{character}</p>
  </Wrapper>
);

Actor.propTypes = {
  name: PropTypes.string,
  character: PropTypes.string,
  imageUrl: PropTypes.string,
};

export default Actor;
