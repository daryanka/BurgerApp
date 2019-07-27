import React, { useEffect, useState } from "react";
import Order from "../../Order/Order/Order";
import axios from "../../../axiosOrder";

const Orders = props => {
  const test = false;

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("/orders.json").then(res => {
      let fetchedOrders = [];
      for (let key in res.data) {
        fetchedOrders.push({ ...res.data[key], id: key });
      }
      setOrders(fetchedOrders);
      setLoading(false);
    });
  }, []);

  let orderPrint = orders.map(order => {
    return (
      <Order
        price={+order.priceOrder}
        key={order.id}
        ingredients={order.ingredientsOrder}
      />
    );
  });

  return orderPrint;
};

export default Orders;
