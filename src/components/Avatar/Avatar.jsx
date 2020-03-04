import React from "react";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

import { AvatarContainer } from "./styles";

const Avatar = () => {
  const { file } = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "myself.png" }) {
        childImageSharp {
          fluid(maxWidth: 150) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <AvatarContainer>
      <Img
        fluid={file.childImageSharp.fluid}
        objectFit="cover"
        alt="Higor Menezes"
        style={{ top: "-10px" }}
      />
    </AvatarContainer>
  );
};

export default React.memo(Avatar);
