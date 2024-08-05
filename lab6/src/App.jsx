import React from 'react';
import { PizzaProvider } from './context/PizzaContext';
import IngredientList from './components/IngredientList';
import PizzaOrder from './components/PizzaOrder';
import OrderList from './components/OrderList';
import './App.css'

const App = () => {
  return (
    <PizzaProvider>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}>
          <IngredientList />
          <PizzaOrder />
        </div>
        <div style={{ flex: 1 }}>
          <OrderList />
        </div>
      </div>
    </PizzaProvider>
  );
};

export default App;
