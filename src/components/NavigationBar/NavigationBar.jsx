import React from "react"

import routes from "../../configs/routes"
import { NavigationList, NavigationItem, NavigationLink } from "./styles"

const NavigationBar = () => (
  <NavigationList>
    {routes.map(route => (
      <NavigationItem>
        <NavigationLink to={route.to}>{route.name}</NavigationLink>
      </NavigationItem>
    ))}
  </NavigationList>
)

export default NavigationBar
