import React, { useState, useEffect } from "react";
import CheckoutSummary from "../Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";
import { Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { stat } from "fs";

const Checkout = props => {
  const checkoutCancelledHandler = () => {
    props.history.goBack();
  };

  const checkoutContinueHandler = () => {
    props.history.replace("/checkout/contact-data");
  };

  return (
    <div>
      <CheckoutSummary
        checkoutContinue={checkoutContinueHandler}
        checkoutCancelled={checkoutCancelledHandler}
      />
      <Route
        path={props.match.path + "/contact-data"}
        render={props => <ContactData {...props} />}
      />
    </div>
  );
};

export default Checkout;
