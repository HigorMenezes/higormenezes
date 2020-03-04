import React from "react";
import PropTypes from "prop-types";

import { MainContainer } from "./styles";

const Main = ({ children }) => <MainContainer>{children}</MainContainer>;

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
