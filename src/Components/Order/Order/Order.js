import React from "react";
import classes from "./Order.css";

const Order = props => {
  const ingredients = [];

  for (let ingName in props.ingredients) {
    ingredients.push({
      name: ingName,
      amount: props.ingredients[ingName]
    });
  }

  console.log("Ing= ", ingredients);

  const ingredientOutput = ingredients.map(ig => {
    return (
      <span
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0 8px",
          border: "1px solid #eee"
        }}
        key={ig.name}
      >
        {ig.name} ({ig.amount})
      </span>
    );
  });

  return (
    <div className="Order">
      <p>{ingredientOutput}</p>
      <p>
        Price <strong>GBP {props.price.toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default Order;
