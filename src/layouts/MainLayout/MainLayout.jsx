import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../../containers/Header"
import Main from "../../containers/Main"
import Footer from "../../containers/Footer"
import "../../styles/variables.css"
import "../../styles/reset.css"
import "../../styles/typography.css"
import "../../styles/global.css"
import "../../styles/customPrismjs.css"
import "../../styles/remarkAutolink.css"

import { Container } from "./styles"

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
      <Header siteTitle={data.site.siteMetadata.title} />
      <Main>{children}</Main>
      <Footer />
    </Container>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainLayout
