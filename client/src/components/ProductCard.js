import React from "react";
import "./ProductCard.css"; // Create this CSS file for custom styles

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img
        src={product.imageUrl || "/images/placeholder.jpg"}
        alt={product.name}
        className="product-image"
      />
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="product-category">{product.category}</p>
        <p className="product-desc">{product.description}</p>
        <div className="product-footer">
          <span className="product-price">${product.price.toFixed(2)}</span>
          <button className="buy-btn">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
