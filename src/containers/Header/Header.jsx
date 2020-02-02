import React from "react"
import { Link } from "gatsby"
import Avatar from "./components/Avatar"
import DarkLightToogle from "../../components/DarkLightToogle"

import {
  Container,
  HeaderContainer,
  TitleContainer,
  Title,
  NavigationContainer,
  NavigationLink,
} from "./styles"

const Header = ({ siteTitle }) => (
  <Container>
    <HeaderContainer>
      <Link to="/page-2/">
        <TitleContainer>
          <Avatar />
          <Title>{siteTitle}</Title>
        </TitleContainer>
      </Link>
      <DarkLightToogle />
    </HeaderContainer>

    <NavigationContainer>
      <ul>
        <li>
          <NavigationLink to="/page-2/">Go to page 2</NavigationLink>
        </li>
        <li>
          <NavigationLink to="/page-2/">Go to page 2</NavigationLink>
        </li>
      </ul>
    </NavigationContainer>
  </Container>
)

export default Header
