import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import classes from "./CheckoutSummary.css";
import { useSelector } from "react-redux";

const CheckoutSummary = props => {
  const ingredients = useSelector(state => {
    return state.ingredients;
  });

  return (
    <div className="CheckoutSummary">
      <h1>We hope it tastes well!</h1>
      <div style={{ width: "100%", margin: "50px auto" }}>
        <Burger tellIngredients={ingredients} />
      </div>
      <Button btnType="Danger" clicked={props.checkoutCancelled}>
        Cancel
      </Button>
      <Button btnType="Success" clicked={props.checkoutContinue}>
        Continue
      </Button>
    </div>
  );
};

export default CheckoutSummary;
