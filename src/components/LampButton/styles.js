import styled from "styled-components";
import { Lightbulb } from "styled-icons/fa-regular";

export const Button = styled.button`
  position: relative;
  height: 2rem;
  width: 2rem;
  padding: 0.3rem;
  background-color: transparent;
  cursor: pointer;
  border: none;
  ${props => props.theme}

  &::after {
    content: "";
    position: absolute;
    width: 0.1rem;
    height: 0.1rem;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.4;
    border-radius: 50%;
  }

  &.light::after {
    box-shadow: 0 0 0.5rem 0.5rem yellow, 0 0 2rem 1.3rem yellow;
  }
`;

export const Lamp = styled(Lightbulb)`
  height: 100%;
  color: var(--textNormal);
`;
