import React from "react"
import { Link } from "gatsby"

import { HeaderContainer, TitleContainer, NavigationContainer } from "./styles"

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <TitleContainer>
      <h1>
        <Link to="/page-2/">{siteTitle}</Link>
      </h1>
    </TitleContainer>
    <NavigationContainer>
      <ul>
        <li>
          <Link to="/page-2/">Go to page 2</Link>
        </li>
        <li>
          <Link to="/page-2/">Go to page 2</Link>
        </li>
      </ul>
    </NavigationContainer>
  </HeaderContainer>
)

export default Header
