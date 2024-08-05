// src/App.jsx
import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import { images } from './data/images';
import { categories } from './data/categories';
import './App.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredImages, setFilteredImages] = useState(images);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    if (searchTerm === '' && !selectedCategory) {
      setFilteredImages(images);
    } else {
      setFilteredImages(
        images.filter((image) => {
          const matchesSearchTerm = image.name.toLowerCase().includes(searchTerm.toLowerCase());
          const matchesCategory = selectedCategory ? image.category_id === selectedCategory : true;
          return matchesSearchTerm && matchesCategory;
        })
      );
    }
  }, [searchTerm, selectedCategory]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  return (
    <div className="app">
      <h1>SnapShot</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="category-buttons">
        {categories.map((category) => (
          <button key={category.id} onClick={() => handleCategoryClick(category.id)}>
            {category.name}
          </button>
        ))}
      </div>
      <ImageList images={filteredImages} />
    </div>
  );
};

export default App;
