import React from "react";
import classes from "./Button.css";

const Button = props => {
  const classesString = "Button " + props.btnType;

  return (
    <button onClick={props.clicked} className={classesString}>
      {props.children}
    </button>
  );
};

export default Button;
