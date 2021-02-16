import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider.js";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue(); //

  const addToBasket = () => {
    // push item into data layer
    // reducer will be listening to this

    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
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
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
