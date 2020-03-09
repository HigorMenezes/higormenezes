import styled from "styled-components";

export const PostContainer = styled.article`
  width: 100%;
`;

export const Small = styled.small`
  display: flex;
  color: var(--textNormal);

  & > :not(:last-child)::after {
    content: "•";
    padding: 0rem 0.3rem;
  }
`;

export const Header = styled.header`
  width: 100%;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;

  &::after {
    content: "...";
    align-self: center;
    letter-spacing: 0.5rem;
    margin-top: 1rem;
  }
`;

export const Title = styled.h1`
  width: 100%;
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: var(--textTitle);
`;
