import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider.js";

function CheckoutProduct({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "RemoveFromBasket",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img src={image} alt="image" className="productImage" />

      <div className="checkoutProduct_info">
        <div className="checkoutProduct_title">{title}</div>
        <p className="checkoutProduct_price">
          <small>R</small>
          <strong>{price}</strong>
        </p>

        <div className="checkoutProduct_rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p>🌟</p>
            ))}
        </div>

        <button onClick={removeFromBasket} className="checkoutProduct_button">
          Remove from basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
