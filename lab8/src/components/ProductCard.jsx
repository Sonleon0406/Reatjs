import React from 'react';

const ProductCard = ({ product, addToCart }) => (
  <div className="product-card">
    <img src={product.image} alt={product.name} />
    <h3>{product.name}</h3>
    <p>${product.price.toFixed(2)}</p>
    <button onClick={() => addToCart(product)}>Add to Cart</button>
  </div>
);

export default ProductCard;