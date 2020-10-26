import React, { useState, useEffect, useRef } from "react";

// PropTypes
import PropTypes from "prop-types";

// Image
import searchIcon from "../../images/search-icon.svg";

// Styles
import { Wrapper, Content } from "./SearchBar.styles";

const SearchBar = ({ setSearchTerm, text }) => {
  const [state, setState] = useState("");
  const initial = useRef(true);

  useEffect(() => {
    // useRef to check if it is the initial render. If so we just want to return.
    if (initial.current) {
      initial.current = false;
      return;
    }
    const timer = setTimeout(() => {
      setSearchTerm(state);
    }, 500);

    return () => clearTimeout(timer);
  }, [setSearchTerm, state]);

  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt="search-icon" />
        <input
          type="text"
          placeholder={text}
          onChange={(event) => setState(event.currentTarget.value)}
          value={state}
        />
      </Content>
    </Wrapper>
  );
};

SearchBar.propTypes = {
  callback: PropTypes.func,
};

export default SearchBar;
