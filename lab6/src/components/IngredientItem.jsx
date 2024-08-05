import React, { useContext } from 'react';
import { PizzaContext } from '../context/PizzaContext';

const IngredientItem = ({ ingredient }) => {
  const { addIngredient, removeIngredient } = useContext(PizzaContext);

  return (
    <div>
      <span>{ingredient.name}</span>
      <span>{ingredient.price}</span>
      <button onClick={() => removeIngredient(ingredient)}>-</button>
      <span>{ingredient.quantity}</span>
      <button onClick={() => addIngredient(ingredient)}>+</button>
    </div>
  );
};

export default IngredientItem;
