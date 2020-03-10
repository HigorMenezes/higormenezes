import React from "react";

import { FooterContainer, Link, GithubIcon, LinkedInIcon } from "./styles";

const Footer = () => (
  <FooterContainer>
    <Link href="https://github.com/HigorMenezes" aria-label="Github">
      <GithubIcon />
      <span>Github</span>
    </Link>
    <Link
      href="https://www.linkedin.com/in/higor-aparecido-menezes-95ab4a182/"
      aria-label="LinkedIn"
    >
      <LinkedInIcon />
      <span>LinkedIn</span>
    </Link>
  </FooterContainer>
);

export default Footer;
