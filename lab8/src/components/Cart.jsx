import React, { useState } from 'react';

const Cart = ({ cartItems, removeFromCart, updateQuantity, checkout, setCheckout }) => {
  const [orderSuccess, setOrderSuccess] = useState(false);

  const handleCheckout = () => {
    const confirmCheckout = window.confirm('Bạn có chắc chắn muốn thêm vào giỏ hàng ?');

    if (confirmCheckout) {
      setCheckout(true);
      setOrderSuccess(false);
    }
  };

  const handlePlaceOrder = () => {
    setOrderSuccess(true);
    setCheckout(false);
  };

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div>
                <h4>{item.name}</h4>
                <p>${item.price.toFixed(2)}</p>
                <div>
                  <button onClick={() => updateQuantity(item, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item, 1)}>+</button>
                </div>
                <button onClick={() => removeFromCart(item)}>Remove</button>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <h3>
              Total: ${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}
            </h3>
            <button onClick={handleCheckout}>Checkout</button>
          </div>
          {checkout && (
            <div className="checkout-info">
              <h3>Order Information</h3>
              {cartItems.map((item) => (
                <div key={item.id}>
                  <p>{item.name} x {item.quantity}</p>
                </div>
              ))}
              <button onClick={handlePlaceOrder}>Xác nhận</button>
            </div>
          )}
          {orderSuccess && (
            <div className="order-success">
              <h3>Đã đặt hàng !</h3>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Cart;
