import styled from "styled-components"
import { Lightbulb } from "styled-icons/fa-regular/Lightbulb"

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
    box-shadow: 0 0 8px 8px yellow, 0 0 30px 20px yellow;
  }
`

export const Lamp = styled(Lightbulb)`
  height: 100%;
  color: var(--textNormal);
`
