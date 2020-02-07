import React from "react"
import Avatar from "../../components/Avatar"
import DarkLightToggle from "../../components/DarkLightToggle"
import NavigationBar from "../../components/NavigationBar"

import {
  HeaderContainer,
  HeaderContent,
  HeaderTitle,
  HeaderNavigation,
  Title,
  RightArrow,
} from "./styles"

import useScroll from "../../hooks/useScroll"
import checkShouldShowHeader from "../../helpers/checkShouldShowHeader"

const Header = ({ siteTitle }) => {
  const { delta, distanceFromTop } = useScroll()
  const shouldShowHeader = checkShouldShowHeader({ delta, distanceFromTop })

  return (
    <HeaderContainer className={shouldShowHeader ? "show" : "hide"}>
      <HeaderContent>
        <HeaderTitle>
          <Avatar />
          <Title>{siteTitle}</Title>
          <DarkLightToggle />
        </HeaderTitle>
        <HeaderNavigation>
          <RightArrow />
          <NavigationBar />
        </HeaderNavigation>
      </HeaderContent>
    </HeaderContainer>
  )
}

export default Header
