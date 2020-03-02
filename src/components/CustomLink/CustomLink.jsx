import React from "react";
import PropTypes from "prop-types";
import { LinkContainer } from "./styles";

const CustomLink = ({ to, ...rest }) => <LinkContainer to={to} {...rest} />;

CustomLink.propTypes = {
  to: PropTypes.string.isRequired,
};

export default CustomLink;
