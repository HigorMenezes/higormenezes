import styled from "styled-components"
import CustomLink from "../../components/CustomLink"

export const Container = styled.header`
  width: 100%;
  height: 7.6rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const HeaderContainer = styled.div`
  width: 100%;
  height: 70%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const TitleContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

export const Title = styled.h1`
  width: 100%;
  height: 100%;
  margin: 0.5rem;
`

export const NavigationContainer = styled.nav`
  width: 100%;
  height: 30%;

  display: flex;
  align-items: center;
  justify-content: center;

  ul {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;

    li {
      list-style-type: none;
      padding: 0.2rem 0.5rem;
      margin: 0;

      &:not(:last-child) {
        margin-right: 1rem;
      }
    }
  }
`

export const NavigationLink = styled(CustomLink)`
  text-transform: uppercase;
  font-weight: 500;
`
