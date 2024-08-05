import React, { useContext } from 'react';
import { PizzaContext } from '../context/PizzaContext';
import IngredientItem from './IngredientItem';

const IngredientList = () => {
  const { ingredients } = useContext(PizzaContext);

  return (
    <div>
      {ingredients.map((ingredient) => (
        <IngredientItem key={ingredient.name} ingredient={ingredient} />
      ))}
    </div>
  );
};

export default IngredientList;
