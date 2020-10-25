import styled from "styled-components";

// config
import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../../config";

export const Wrapper = styled.div`
  background: ${({ backdrop }) =>
    backdrop ? `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop})` : "#000"};
  background-size: cover;
  background-position: center;
  padding: 1.25rem;
  animation: animatePersonInfo 1s;

  @keyframes animatePersonInfo {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
export const Content = styled.div`
  display: flex;
  max-width: var(--maxWidth);
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 1.25rem;

  @media screen and (max-width: 768px) {
    display: block;
    max-height: none;
  }
`;
export const Text = styled.div`
  width: 100%;
  padding: 1.25rem 2.5rem;
  color: var(--white);
  overflow: hidden;
`;
