import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--darkMain);
  padding: 1rem;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--maxWidth);
  padding: 0.5rem 0;
  margin: 0 auto;
  color: var(--white);

  a {
    color: var(--white);
    text-decoration: none;
  }
`;

export const LogoImg = styled.img`
  width: 5rem;

  @media screen and (max-width: 500px) {
    width: 4rem;
  }
`;

export const TMDBLogoImg = styled.img`
  width: 6rem;

  @media screen and (max-width: 500px) {
    width: 4rem;
  } ;
`;
