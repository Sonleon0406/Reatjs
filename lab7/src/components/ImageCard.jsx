// src/components/ImageCard.jsx
import React from 'react';

const ImageCard = ({ image }) => (
  <div className="image-card">
    <img src={image.url} alt={image.name} />
    <h3>{image.name}</h3>
  </div>
);

export default ImageCard;
