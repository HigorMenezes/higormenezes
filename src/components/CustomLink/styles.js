import styled from "styled-components";
import { Link } from "gatsby";

export const LinkContainer = styled(Link)`
  position: relative;
  overflow: hidden;

  &:hover,
  &:focus,
  &:active {
    color: var(--textLinkHover);

    &::after {
      height: 2px;
      background-color: var(--textLinkHover);
    }
  }

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 0%;
    width: 100%;
    height: 0px;
    margin-top: 0rem;
    background-color: var(--textLink);
    transition: height 0.2s;
  }
`;
