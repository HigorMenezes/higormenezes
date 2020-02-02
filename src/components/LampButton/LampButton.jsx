import React from "react"

import { Button, Lamp } from "./styles"

const LampButton = ({ onClick, theme, ...rest }) => (
  <Button onClick={onClick} className={theme} {...rest}>
    <Lamp />
  </Button>
)

export default LampButton
