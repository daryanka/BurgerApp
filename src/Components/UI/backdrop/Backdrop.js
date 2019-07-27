import React from "react";
import classes from "./Backdrop.css";

const Backdrop = props => {
  let output = null;
  if (props.show) {
    output = <div onClick={props.clicked} className="Backdrop" />;
  }
  if (!props.show) {
    output = null;
  }

  return output;
};

export default Backdrop;
