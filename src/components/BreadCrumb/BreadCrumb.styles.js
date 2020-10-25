import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 4.375rem;
  background: var(--medMain);
  color: var(--white);
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: var(--maxWidth);
  padding: 01.25rem;

  span {
    font-size: var(--fontMedium);
    color: var(--white);
    padding-right: 0.625rem;

    @media screen and (max-width: 768px) {
      font-size: var(--fontSmall);
    }
  }
`;
