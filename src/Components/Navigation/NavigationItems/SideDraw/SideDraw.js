import React from "react";
import Logo from "../../../Logo/Logo";
import NavigationItems from "../NavigationItems";
import classes from "./SideDraw.css";
import Aux from "../../../../Auxs";
import Backdrop from "../../../UI/backdrop/Backdrop";

const SideDraw = props => {
  let sideDrawState = null;
  let showCopy = props.open;

  if (props.open) {
    sideDrawState = "Open";
  }
  if (!props.open) {
    sideDrawState = "Closed";
  }

  if (window.innerWidth >= 500) {
    showCopy = false;
  }

  return (
    <Aux>
      <Backdrop show={showCopy} clicked={props.closed} />
      <div className={"SideDrawer" + " " + sideDrawState}>
        <Logo height="11%" />
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default SideDraw;
