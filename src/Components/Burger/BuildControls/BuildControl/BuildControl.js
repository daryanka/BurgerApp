import React from "react";
import classes from "./BuildControl.css";

const BuildControl = props => {
  return (
    <div className="BuildControl">
      <div className="Label">{props.label}</div>
      <button
        disabled={props.disabled}
        className="Less"
        onClick={props.removed}
      >
        Less
      </button>
      <button className="More" onClick={props.added}>
        More
      </button>
    </div>
  );
};

export default BuildControl;
