import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import Avatar from "../../components/Avatar";
import DarkLightToggle from "../../components/DarkLightToggle";
import NavigationBar from "../../components/NavigationBar";

import {
  HeaderContainer,
  HeaderContent,
  HeaderTitle,
  HeaderLink,
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
          <HeaderLink to="/">
            <Avatar />
            <Title>{siteTitle}</Title>
          </HeaderLink>
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

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
};

export default Header;
