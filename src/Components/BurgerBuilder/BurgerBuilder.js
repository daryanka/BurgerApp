import React, { useState } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../Burger/Burger";
import BuildControls from "../Burger/BuildControls/BuildControls";
import Modal from "../UI/Modal/Modal";
import OrderSummary from "../Burger/OrderSummary/OrderSummary";
import axios from "../../axiosOrder";
import { useSelector, useDispatch } from "react-redux";
import * as actionTypes from "../../store/actions";

const BurgerBuilder = props => {
  //useSelector instead of mapStateToProps for using hooks
  const ingredientsSelector = useSelector(state => {
    return state.ingredients;
  });
  const totalPrice = useSelector(state => {
    return state.totalPrice;
  });

  //useDispatch instead of mapDispatchToProps
  const dispatch = useDispatch();

  const [ingredients, setIngredients] = useState({
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0
  });

  const [purchasing, setPurchasing] = useState(false); //For modal

  const [price, setPrice] = useState(4);

  const updatePurchaseState = ingridentsCopy => {
    const sum = Object.keys(ingridentsCopy)
      .map(igKey => {
        return ingridentsCopy[igKey];
      })
      .reduce((sum, currentVal) => {
        return sum + currentVal;
      }, 0);
    if (sum > 0) {
      return true;
    } else {
      return false;
    }
  };

  const purchaseHandler = () => {
    setPurchasing(true);
  };

  const addIngridentHandler = type => {
    dispatch({
      type: actionTypes.ADD_INGREDIENT,
      ingredientName: type
    });
  };

  const removeIngridentHandler = type => {
    const oldCount = ingredientsSelector[type];
    if (oldCount <= 0) {
      return;
    }
    dispatch({
      type: actionTypes.REMOVE_INGREDIENT,
      ingredientName: type
    });
  };

  const disabledInfo = {
    ...ingredientsSelector
  };

  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0;
  }

  const purchaseCancelHandler = () => {
    setPurchasing(false);
  };

  const purchaseContinueHandler = () => {
    const queryParams = [];

    for (let i in ingredientsSelector) {
      queryParams.push(
        encodeURIComponent(i) + "=" + encodeURIComponent(ingredientsSelector[i])
      );
    }

    const queryString = queryParams.join("&");

    props.history.push({
      pathname: "/checkout",
      search: queryString
    });
  };

  return (
    <Aux>
      <Modal show={purchasing} modalClosed={purchaseCancelHandler}>
        <OrderSummary
          purchaseContinue={purchaseContinueHandler}
          purchaseCancelled={purchaseCancelHandler}
          price={totalPrice}
          ingredients={ingredientsSelector}
        />
      </Modal>
      <Burger tellIngredients={ingredientsSelector} />
      <BuildControls
        priceTotal={totalPrice}
        ingredientAdded={addIngridentHandler}
        ingredientRemoved={removeIngridentHandler}
        disabled={disabledInfo}
        purchaseable={updatePurchaseState(ingredientsSelector)}
        ordered={purchaseHandler}
      />
    </Aux>
  );
};

export default BurgerBuilder;
