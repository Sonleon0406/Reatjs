
import React from 'react';
import ProductList from '../components/ProductList';
import Cart from '../components/Cart';

const Shop = ({
  products,
  addToCart,
  cartItems,
  removeFromCart,
  updateQuantity,
  selectedSize,
  setSelectedSize,
  checkout,
  setCheckout
}) => (
  <div className="shop-page" style={{ display: 'flex' }}>
    <div style={{ flex: 2 }}>
      <ProductList
        products={products}
        addToCart={addToCart}
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
      />
    </div>
    <div style={{ flex: 1 }}>
      <Cart
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
        checkout={checkout}
        setCheckout={setCheckout}
      />
    </div>
  </div>
);

export default Shop;
