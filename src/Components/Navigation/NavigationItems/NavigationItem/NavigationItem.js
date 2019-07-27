import React from "react";
import classes from "./NavigationItem.css";
import { NavLink } from "react-router-dom";

const NavigationItem = props => {
  let classCss = null;

  if (props.active) {
    classCss = "active";
  }

  if (!props.active) {
    classCss = null;
  }

  return (
    <li className="NavigationItem">
      <NavLink exact={props.exact} activeClassName="active" to={props.link}>
        {props.children}
      </NavLink>
    </li>
  );
};

export default NavigationItem;
