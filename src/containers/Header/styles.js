import styled from "styled-components"
import media from "styled-media-query"
import { RightArrowAlt } from "styled-icons/boxicons-regular/RightArrowAlt"

export const HeaderContainer = styled.header`
  width: 100%;
  height: 100%;
  max-width: 50rem;
  padding: 0.5rem 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const HeaderContent = styled.div`
  width: 100%;
  height: 70%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.h1`
  width: 100%;
  margin: 0.5rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`

export const NavigationContent = styled.nav`
  width: 100%;
  height: 30%;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  padding-left: 1rem;

  ${media.greaterThan("small")`
    padding-left: 5rem;
  `}
`

export const RightArrow = styled(RightArrowAlt)`
  width: 1.5rem;
  color: var(--textLink);
`
