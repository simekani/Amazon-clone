import React from "react";
import "./Product.css";

function Product({ id, title, image, price, rating }) {
  return (
    <div className="product_container">
      <div className="product_info">
        <p> {title}</p>
        <p className="product_price">
          <small>R</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>

      <img src={image} className="product_image" />
      <button>Add to basket</button>
    </div>
  );
}

export default Product;
