import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import classes from "./ContactData.css";
import axios from "../../../axiosOrder";
import Input from "../../UI/Input/Input";
import { useSelector } from "react-redux";

const ContactData = props => {
  const [formData, setFormData] = useState({
    name: "test",
    street: "",
    postcode: "",
    email: ""
  });

  const [delivaryMethod, setDeliveryMethod] = useState("slowest");

  const [orderFormEl, setOrderFormEl] = useState({
    name: {
      elementType: "input",
      value: "",
      validation: {
        required: true
      },
      valid: false,
      elementConfig: {
        type: "text",
        placeholder: "Your name"
      }
    },
    street: {
      elementType: "input",
      value: "",
      validation: {
        required: true
      },
      valid: false,
      elementConfig: {
        type: "text",
        placeholder: "Your Street"
      }
    },
    postcode: {
      elementType: "input",
      value: "",
      validation: {
        required: true
      },
      valid: false,
      elementConfig: {
        type: "text",
        placeholder: "Postcode"
      }
    },
    Email: {
      elementType: "input",
      value: "",
      validation: {
        required: true
      },
      valid: false,
      elementConfig: {
        type: "email",
        placeholder: "Your Email"
      }
    },
    deliveryMethod: {
      elementType: "select",
      value: "Fastest",
      elementConfig: {
        options: [{ value: "Fastest" }, { value: "Cheapest" }]
      }
    }
  });
  //Instead of mapStateToProps, useSelector is a hook
  const ingredients = useSelector(state => {
    return {
      ingredients: state.ingredients,
      price: state.totalPrice
    };
  });

  const orderHandler = e => {
    e.preventDefault();
    const formData = {};

    for (let formElement in orderFormEl) {
      formData[formElement] = orderFormEl[formElement].value;
    }

    const order = {
      ingredientsOrder: ingredients.ingredients,
      priceOrder: ingredients.price,
      delivaryMethod: formData.deliveryMethod,
      customer: {
        name: formData.name,
        email: formData.Email,
        address: {
          street: formData.street,
          postCode: formData.postcode
        }
      }
    };

    axios.post("/orders.json", order).then(re => {
      // console.log(re);
      props.history.push("/");
    });
  };

  const formElementsArry = [];

  for (let key in orderFormEl) {
    formElementsArry.push({
      id: key,
      config: orderFormEl[key]
    });
  }

  const checkValidity = (value, rules) => {
    let isValid = false;
    if (rules.required) {
      isValid = value.trim() !== "";
    }

    return isValid;
  };

  const inputChangedHandler = (event, identifier) => {
    let copy = { ...orderFormEl };

    //Below is a deep copy!
    let copyUpdated = {
      ...copy[identifier]
    };

    copyUpdated.value = event.target.value;
    copyUpdated.valid = checkValidity(
      copyUpdated.value,
      copyUpdated.validation
    );
    copy[identifier] = copyUpdated;
    console.log(copyUpdated.valid);
    setOrderFormEl(copy);
  };

  return (
    <div className="ContactData">
      <h4>Enter Contact Data</h4>
      <form onSubmit={orderHandler}>
        {/* <Input elementType="..." elementConfig="..." value="..." /> */}
        {formElementsArry.map(formElement => {
          return (
            <Input
              key={formElement.id}
              elementType={formElement.config.elementType}
              elementConfig={formElement.config.elementConfig}
              value={formElement.config.value}
              changed={e => inputChangedHandler(e, formElement.id)}
            />
          );
        })}
        <Button clicked={orderHandler} btnType="Success">
          Order
        </Button>
      </form>
    </div>
  );
};

export default ContactData;
