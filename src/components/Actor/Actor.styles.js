import styled from "styled-components";

export const Wrapper = styled.div`
  color: (--white);
  background: var(--darkMain);
  border-radius: 1.25rem;
  padding: 0.3125rem;
  text-align: center;

  h3 {
    margin: 0.625rem 0 0 0;
  }

  p {
    margin: 0.3125rem 0;
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 12.5rem;
  object-fit: cover;
  border-radius: 1rem;
`;
