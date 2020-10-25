import styled from "styled-components";

export const Wrapper = styled.button`
  display: block;
  background: var(--darkMain);
  width: 25%;
  min-width: 12.5rem;
  height: 3.75rem;
  border-radius: 1.875rem;
  color: var(--white);
  border: 0;
  font-size: var(--fontLarge);
  margin: 1.25rem auto;
  transition: all 0.3s;
  outline: none;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;
