import styled from "styled-components"
import { Link } from "gatsby"

export const LinkContainer = styled(Link)`
  position: relative;

  &:hover {
    color: var(--textLinkHover);

    &::after {
      height: 0.1rem;
      margin-top: 0.1rem;
    }
  }

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 0%;
    width: 100%;
    height: 0rem;
    margin-top: 0rem;
    background-color: var(--textLinkHover);

    transition: height 0.2s;
  }
`
