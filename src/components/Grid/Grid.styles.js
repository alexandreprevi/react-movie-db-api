import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 01.25rem;

  h1 {
    color: var(--medMain);

    @media screen and (max-width: 768px) {
      font-size: var(--fontLarge);
    }
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(12.5rem, 1fr));
  grid-gap: 2rem;
`;
