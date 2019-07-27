import React from "react";
import burgerLogo from "../../Assets/images/burger-logo.png";
import classes from "./logo.css";

const Logo = props => {
  let styleHeight = null;

  if (props.height) {
    styleHeight = { height: props.height };
  }

  return (
    <div style={styleHeight} className="Logo">
      <img src={burgerLogo} />
    </div>
  );
};

export default Logo;
