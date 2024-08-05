
import React from 'react';

const CartItem = ({ item, removeFromCart, updateQuantity }) => (
  <div className="cart-item">
    <img src={item.image} alt={item.name} />
    <div>
      <h4>{item.name}</h4>
      <p>${item.price}</p>
      <div>
        <button onClick={() => updateQuantity(item, -1)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => updateQuantity(item, 1)}>+</button>
        <button onClick={() => removeFromCart(item)}>Remove</button>
      </div>
    </div>
  </div>
);

export default CartItem;
