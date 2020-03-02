import React from "react";
import Avatar from "../../components/Avatar";
import DarkLightToggle from "../../components/DarkLightToggle";
import NavigationBar from "../../components/NavigationBar";

import {
  HeaderContainer,
  HeaderContent,
  HeaderTitle,
  HeaderNavigation,
  Title,
  RightArrow,
} from "./styles";

import useHideHeader from "../../hooks/useHideHeader";

const Header = ({ siteTitle }) => {
  const { hide } = useHideHeader();

  return (
    <HeaderContainer className={hide ? "hide" : "show"}>
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
  );
};

export default Header;
