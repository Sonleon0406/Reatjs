import React, { useContext } from 'react';
import axios from 'axios';
import { PizzaContext } from '../context/PizzaContext';
import TotalPrice from './TotalPrice';

const PizzaOrder = () => {
  const { ingredients, total, resetPizza, addOrder, error, setErrorMessage } = useContext(PizzaContext);

  const handleCheckout = async () => {
    // Kiểm tra nếu không có thành phần nào được chọn
    const isEmptyOrder = ingredients.every((ingredient) => ingredient.quantity === 0);

    if (isEmptyOrder) {
      setErrorMessage('Vui lòng đặt hàng');
      return;
    }

    try {
      const orderDetails = {
        ingredients,
        total: total.toFixed(2),
      };

      const response = await axios.post('/api/orders', orderDetails);

      if (response.status === 200) {
        alert('Đơn hàng được đặt thành công!');
        addOrder(orderDetails);
        resetPizza();
        setErrorMessage(null);
      } else {
        setErrorMessage('Đã xảy ra lỗi khi đặt hàng.');
      }
    } catch (error) {
      console.error('Error placing order:', error);
      setErrorMessage('Đã xảy ra lỗi khi đặt hàng.');
    }
  };

  return (
    <div>
      <h2>Your pizza</h2>
      <TotalPrice />
      <button onClick={resetPizza}>Reset pizza</button>
      <button onClick={handleCheckout}>Checkout</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default PizzaOrder;
