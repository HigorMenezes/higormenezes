import styled, { css } from "styled-components"
import { Linkedin } from "styled-icons/fa-brands/Linkedin"
import { Github } from "styled-icons/fa-brands/Github"

export const FooterContainer = styled.footer`
  width: 100%;
  height: var(--footerHeight);
  padding: 0.5rem 1rem;
  box-shadow: var(--shadow);
  background-color: var(--bgTransparent);

  position: fixed;
  top: 100%;
  left: 0%;
  margin-top: calc(-1 * var(--footerHeight));
  z-index: var(--indexTop);

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Link = styled.a.attrs({ target: "_blank" })`
  padding: 0.2rem 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`

const commonIcon = css`
  height: 1.5rem;
  color: var(--normalText);
  padding: 0.2rem;
`

export const LinkedInIcon = styled(Linkedin)`
  ${commonIcon}
`

export const GithubIcon = styled(Github)`
  ${commonIcon}
`
