import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

import LampButton from "../LampButton"

const DarkLightToggle = () => (
  <ThemeToggler>
    {({ theme, toggleTheme }) => (
      <LampButton
        theme={theme}
        onClick={() => toggleTheme(theme === "dark" ? "light" : "dark")}
      />
    )}
  </ThemeToggler>
)

export default DarkLightToggle
