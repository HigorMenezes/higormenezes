import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../../containers/Header"
import Main from "../../containers/Main"
import "../../styles/variables.css"
import "../../styles/reset.css"
import "../../styles/typography.css"
import "../../styles/global.css"

import { Container, HeaderContainer } from "./styles"

const MainLayout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Container>
      <HeaderContainer>
        <Header siteTitle={data.site.siteMetadata.title} />
      </HeaderContainer>
      <Main>{children}</Main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </Container>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainLayout
