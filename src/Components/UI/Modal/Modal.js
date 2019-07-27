import React from "react";
import classes from "./Modal.css";
import Aux from "../../../hoc/Aux";
import Backdrop from "../backdrop/Backdrop";

const Modal = props => {
  let translate = null;
  let opa = null;

  if (props.show) {
    translate = "translateY(0)";
    opa = "1";
  }
  if (!props.show) {
    translate = "translateY(-100vh)";
    opa = 0;
  }

  return (
    <Aux>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div style={{ transform: translate, opacity: opa }} className="Modal">
        {props.children}
      </div>
    </Aux>
  );
};

export default Modal;
