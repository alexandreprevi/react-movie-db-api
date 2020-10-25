import React from "react";

// Proptypes
import PropTypes from "prop-types";

// Styles
import { Wrapper, Content, Text } from "./PersonInfo.styles";

// Components
const PersonInfo = ({ person }) => {
  return (
    <Wrapper backdrop={person.profile_path}>
      <Content>
        <Text>
          <h1>{person.name}</h1>
          <h3>Birth</h3>
          <p>
            {person.birthday} in {person.place_of_birth}
          </p>
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
