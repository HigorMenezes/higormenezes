import React from "react";
import PropTypes from "prop-types";

import { Button, Lamp } from "./styles";

const LampButton = ({ onClick, theme, ...rest }) => (
  <Button onClick={onClick} className={theme} aria-label="lâmpada" {...rest}>
    <Lamp />
  </Button>
);

LampButton.defaultProps = {
  theme: "",
};

LampButton.propTypes = {
  theme: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default LampButton;
