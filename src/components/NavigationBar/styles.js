import styled from "styled-components"
import CustomLink from "../CustomLink"

export const NavigationList = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0;
`

export const NavigationItem = styled.li`
  list-style: none;
  padding: 0.2rem 0.5rem;
  margin: 0;

  &:not(:last-child) {
    margin-right: 1rem;
  }
`

export const NavigationLink = styled(CustomLink)`
  text-transform: capitalize;
  font-weight: 500;
`
