import React from "react";
import classes from "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = props => {
  let transformedIngredients = Object.keys(props.tellIngredients)
    .map(igKeys => {
      return [...Array(props.tellIngredients[igKeys])].map((_, i) => {
        return <BurgerIngredient key={igKeys + i} type={igKeys} />;
      });
    })
    .reduce((accumelator, currentValue) => {
      return accumelator.concat(currentValue);
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please Start adding ingridents.</p>;
  }

  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
