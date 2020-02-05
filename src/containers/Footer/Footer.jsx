import React from "react"

import { FooterContainer, Link, GithubIcon, LinkedInIcon } from "./styles"

const Footer = () => (
  <FooterContainer>
    <Link>
      <GithubIcon />
      <span>Github</span>
    </Link>
    <Link>
      <LinkedInIcon />
      <span>LinkedIn</span>
    </Link>
  </FooterContainer>
)

export default Footer
