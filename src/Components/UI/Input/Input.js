import React from "react";
import classes from "./Input.css";

const Input = props => {
  let inputElement = null;

  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className="InputElement"
          onChange={props.changed}
          {...props.elementConfig}
          value={props.value}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          className="InputElement"
          onChange={props.changed}
          {...props.elementConfig}
          value={props.value}
        />
      );
      break;
    case "select":
      inputElement = (
        <select
          className="InputElement"
          value={props.value}
          onChange={props.changed}
        >
          {props.elementConfig.options.map(options => {
            return <option value={options.value}>{options.value}</option>;
          })}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          className="InputElement"
          onChange={props.changed}
          {...props.elementConfig}
          value={props.value}
        />
      );
  }

  return (
    <div>
      <label className="Label">{props.label}</label>
      {inputElement}
    </div>
  );
};

export default Input;
