import React from "react";
import "./QuickView.css"; // Import CSS

const QuickView = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="quickview-overlay">
      <div className="quickview-modal">
        <span className="close-btn" onClick={onClose}>
          ×
        </span>
        <img src={product.image} alt={product.name} />
        <h2>{product.name}</h2>
        <p>${product.price}</p>
      </div>
    </div>
  );
};

export default QuickView;