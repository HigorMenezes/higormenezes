import styled from "styled-components"
import media from "styled-media-query"
import { RightArrowAlt } from "styled-icons/boxicons-regular/RightArrowAlt"

export const HeaderContainer = styled.header`
  width: 100%;
  height: calc(var(--headerHeight) + var(--navbarHeight));
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0%;
  left: 0%;
  z-index: var(--indexTop);
  background-color: var(--bgTransparent);

  box-shadow: var(--shadow);

  margin-bottom: 2rem;

  transition: margin 0.5s;

  &.hide {
    margin-top: calc(-1 * var(--headerHeight));
  }
`

export const HeaderContent = styled.div`
  width: 100%;
  height: 100%;
  max-width: 50rem;
  padding: 0rem 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const HeaderTitle = styled.div`
  width: 100%;
  height: var(--headerHeight);

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

export const HeaderNavigation = styled.nav`
  width: 100%;
  height: var(--navbarHeight);

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
