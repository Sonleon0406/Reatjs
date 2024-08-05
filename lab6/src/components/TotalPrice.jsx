import React, { useContext } from 'react';
import { PizzaContext } from '../context/PizzaContext';

const TotalPrice = () => {
  const { total } = useContext(PizzaContext);

  return <h3>Total: {total.toFixed(2)}</h3>;
};

export default TotalPrice;
