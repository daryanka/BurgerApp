import React, { useState } from "react";
import Aux from "../../Auxs";
import Classes from "./layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDraw from "../Navigation/NavigationItems/SideDraw/SideDraw";

const Layout = props => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const sideDrawerClosedHandler = () => {
    setShowSideDrawer(false);
  };

  const showDrawerHandler = () => {
    const newSideDrawState = !showSideDrawer;
    setShowSideDrawer(newSideDrawState);
  };

  return (
    <Aux>
      <Toolbar clicked={showDrawerHandler} />
      <SideDraw open={showSideDrawer} closed={sideDrawerClosedHandler} />
      <main className="Content">{props.children}</main>
    </Aux>
  );
};

export default Layout;
