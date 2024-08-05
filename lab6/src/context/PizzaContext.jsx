import React, { createContext, useReducer, useState } from 'react';

const PizzaContext = createContext();

const initialState = {
  ingredients: [
    { name: 'Cold cuts', price: 5, quantity: 0 },
    { name: 'Pepperoni', price: 3.55, quantity: 0 },
    { name: 'Feta', price: 2.55, quantity: 0 },
    { name: 'Mozzarella', price: 1.55, quantity: 0 },
    { name: 'Swiss cheese', price: 3, quantity: 0 },
    { name: 'Spices', price: 0.55, quantity: 0 },
    { name: 'Vegetables', price: 1.255, quantity: 0 },
  ],
  total: 0,
};

const pizzaReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_INGREDIENT':
      return {
        ...state,
        ingredients: state.ingredients.map((ingredient) =>
          ingredient.name === action.payload.name
            ? { ...ingredient, quantity: ingredient.quantity + 1 }
            : ingredient
        ),
        total: state.total + action.payload.price,
      };
    case 'REMOVE_INGREDIENT':
      return {
        ...state,
        ingredients: state.ingredients.map((ingredient) =>
          ingredient.name === action.payload.name && ingredient.quantity > 0
            ? { ...ingredient, quantity: ingredient.quantity - 1 }
            : ingredient
        ),
        total: state.total - action.payload.price,
      };
    case 'RESET_PIZZA':
      return initialState;
    default:
      return state;
  }
};

const PizzaProvider = ({ children }) => {
  const [state, dispatch] = useReducer(pizzaReducer, initialState);
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);

  const addIngredient = (ingredient) => {
    dispatch({ type: 'ADD_INGREDIENT', payload: ingredient });
  };

  const removeIngredient = (ingredient) => {
    dispatch({ type: 'REMOVE_INGREDIENT', payload: ingredient });
  };

  const resetPizza = () => {
    dispatch({ type: 'RESET_PIZZA' });
  };

  const addOrder = (order) => {
    setOrders([...orders, order]);
  };

  const setErrorMessage = (message) => {
    setError(message);
  };

  return (
    <PizzaContext.Provider value={{ ...state, addIngredient, removeIngredient, resetPizza, orders, addOrder, error, setErrorMessage }}>
      {children}
    </PizzaContext.Provider>
  );
};

export { PizzaContext, PizzaProvider };
