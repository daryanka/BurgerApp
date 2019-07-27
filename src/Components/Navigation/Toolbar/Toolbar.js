import React from "react";
import classes from "./Toolbar.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawToggle from "../NavigationItems/SideDraw/DrawToggle/DrawToggle";
import { tsPropertySignature } from "@babel/types";

const Toolbar = props => {
  return (
    <header className="Toolbar">
      <DrawToggle clicked={props.clicked} />
      <Logo height="80%" />
      <nav className="DesktopOnly">
        <NavigationItems />
      </nav>
    </header>
  );
};

export default Toolbar;
