
import React from 'react';

const SizeFilter = ({ sizes, selectedSize, setSelectedSize }) => (
  <div className="size-filter">
    {sizes.map((size) => (
      <button
        key={size}
        className={selectedSize === size ? 'selected' : ''}
        onClick={() => setSelectedSize(size)}
      >
        {size}
      </button>
    ))}
  </div>
);

export default SizeFilter;
