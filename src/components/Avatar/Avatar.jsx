import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import { AvatarContainer } from "./styles"

const Avatar = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "myself.png" }) {
        childImageSharp {
          fluid(maxWidth: 150) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <AvatarContainer>
      <Img
        fluid={data.file.childImageSharp.fluid}
        objectFit="cover"
        alt=""
        style={{ top: "-10px" }}
      />
    </AvatarContainer>
  )
}

export default React.memo(Avatar)
