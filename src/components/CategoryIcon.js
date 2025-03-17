import React from 'react';
import './CategoryIcon.css';

const CategoryIcon = ({ category }) => {
  const getIcon = () => {
    switch(category) {
      case 'Transportation':
        return '🚗';
      case 'Restaurant':
        return '🍽️';
      case 'Grocery':
        return '🛒';
      case 'Online Shopping':
        return '🛍️';
      case 'Other':
        return '📦';
      default:
        return '📋';
    }
  };

  return <span className="category-icon">{getIcon()}</span>;
};

export default CategoryIcon;