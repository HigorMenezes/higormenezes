import React from "react";

import routes from "../../configs/routes";
import { NavigationList, NavigationItem, NavigationLink } from "./styles";

const NavigationBar = () => (
  <NavigationList>
    {routes.map(({ to, name }) => (
      <NavigationItem key={to}>
        <NavigationLink aria-label={name} to={to}>
          {name}
        </NavigationLink>
      </NavigationItem>
    ))}
  </NavigationList>
);

export default React.memo(NavigationBar);
