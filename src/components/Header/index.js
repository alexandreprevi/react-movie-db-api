import React from "react";
import { Link } from "react-router-dom";

import CLAPLogo from "../../images/clapperboard.svg";
import TMDBLogo from "../../images/cib-the-movie-database.svg";

// Styles
import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.styles";

const Header = () => {
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <LogoImg src={CLAPLogo} alt="rmdb-logo" />
        </Link>
        <Link to="/">
          <p>Movies</p>
        </Link>
        <Link to="/person">
          <p>People</p>
        </Link>
        <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" />
      </Content>
    </Wrapper>
  );
};

export default Header;
