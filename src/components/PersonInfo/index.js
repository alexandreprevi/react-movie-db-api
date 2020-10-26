import React from "react";

// Proptypes
import PropTypes from "prop-types";

// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";

// Image
import NoImage from "../../images/no_image.jpg";

// Styles
import { Wrapper, Content, Text } from "./PersonInfo.styles";

// Components
import Thumb from "../Thumb";

const PersonInfo = ({ person }) => {
  return (
    <Wrapper backdrop={person.profile_path}>
      <Content>
        <Thumb
          type={"person"}
          image={
            person.profile_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${person.profile_path}`
              : NoImage
          }
          clickable={false}
        />
        <Text>
          <h1>{person.name}</h1>
          {person.birthday && (
            <>
              <h3>Birth</h3>
              <p>
                {person.birthday} in {person.place_of_birth}
              </p>
            </>
          )}
          <h3>Popularity</h3>
          <p>{person.popularity}</p>
          {person.biography.length > 1 && (
            <>
              <h3>Biography</h3>
              <p>{person.biography}</p>
            </>
          )}
        </Text>
      </Content>
    </Wrapper>
  );
};

PersonInfo.propTypes = {
  person: PropTypes.object,
};

export default PersonInfo;
