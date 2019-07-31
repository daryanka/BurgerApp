import React from "react";
import Aux from "../../../Auxs";
import Button from "../../UI/Button/Button";

const OrderSummary = props => {
  const IngridentSummary = Object.keys(props.ingredients).map(igKeys => {
    return (
      <li key={igKeys}>
        <span style={{ textTransform: "capitalize" }}>{igKeys}</span>:{" "}
        {props.ingredients[igKeys]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>Your Burger Summary:</p>
      <ul>{IngridentSummary}</ul>
      <p>
        <strong>Total Price: {props.price.toFixed(2)}</strong>
      </p>
      <p>Continue To Checkout?</p>
      <Button clicked={props.purchaseCancelled} btnType="Danger">
        Cancel
      </Button>
      <Button clicked={props.purchaseContinue} btnType="Success">
        Continue
      </Button>
    </Aux>
  );
};

export default OrderSummary;
