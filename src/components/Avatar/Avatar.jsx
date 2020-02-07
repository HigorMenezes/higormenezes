import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { AvatarContainer, Image } from "./styles"

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
      <Image fluid={data.file.childImageSharp.fluid} />
    </AvatarContainer>
  )
}

export default React.memo(Avatar)
