import React, { useContext } from 'react';
import { PizzaContext } from '../context/PizzaContext';

const OrderList = () => {
  const { orders } = useContext(PizzaContext);

  return (
    <div>
      <h2>Order List</h2>
      {orders.map((order, index) => (
        <div key={index}>
          <h3>Order {index + 1}</h3>
          <ul>
            {order.ingredients.map((ingredient, i) => (
              <li key={i}>
                {ingredient.name}: {ingredient.quantity}
              </li>
            ))}
          </ul>
          <p>Total: ${order.total}</p>
        </div>
      ))}
    </div>
  );
};

export default OrderList;
