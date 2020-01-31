import styled from "styled-components"

export const HeaderContainer = styled.header`
  width: 100%;
  height: 7.6rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const TitleContainer = styled.div`
  width: 100%;
`

export const NavigationContainer = styled.nav`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  ul {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    li {
      list-style-type: none;
      padding: 0.2rem 0.5rem;

      &:not(:last-child) {
        margin-right: 1rem;
      }
    }
  }
`
