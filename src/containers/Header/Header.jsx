import React from "react"
import Avatar from "../../components/Avatar"
import DarkLightToggle from "../../components/DarkLightToggle"
import NavigationBar from "../../components/NavigationBar"

import {
  HeaderContainer,
  HeaderContent,
  Title,
  NavigationContent,
  RightArrow,
} from "./styles"

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <HeaderContent>
      <Avatar />
      <Title>{siteTitle}</Title>
      <DarkLightToggle />
    </HeaderContent>
    <NavigationContent>
      <RightArrow />
      <NavigationBar />
    </NavigationContent>
  </HeaderContainer>
)

export default Header
