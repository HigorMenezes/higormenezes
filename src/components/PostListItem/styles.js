import styled from "styled-components"
import { Link } from "gatsby"

export const PostListItemContainer = styled(Link)`
  position: relative;
  width: 100%;
  padding: 1rem;
  border: 0.05rem solid var(--hr);
  border-radius: 0.3rem;

  transition: border 0.3s, box-shadow 0.3s;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }

  &:hover {
    border: 0.05rem solid var(--textLink);
    box-shadow: var(--shadow);
  }
`

export const Small = styled.small`
  display: flex;
  color: var(--textNormal);
  align-self: flex-end;

  & :not(:last-child)::after {
    content: "•";
    padding: 0rem 0.3rem;
  }
`

export const Article = styled.article`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const Header = styled.header`
  width: 100%;

  display: flex;
  flex-direction: column;
`

export const Title = styled.h3`
  width: 100%;
  font-size: 1.7rem;
  margin-bottom: 0.5rem;
  color: var(--textTitle);
`

export const Spoiler = styled.p`
  color: var(--textNormal);
  margin-bottom: 0.5rem;
  padding-left: 0.5rem;
`
