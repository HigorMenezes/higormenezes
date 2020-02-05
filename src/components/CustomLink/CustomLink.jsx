import React from "react"

import { LinkContainer } from "./styles"

const CustomLink = ({ to, ...rest }) => <LinkContainer to={to} {...rest} />

export default CustomLink
