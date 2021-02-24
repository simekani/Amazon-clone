import React, { useEffect, useState } from "react";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider.js";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import axios from "axios";
function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState("");
  const [succeeded, setSucceeded] = useState(false);
  const [clientSecret, setClientSecret] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true); // allows you to click buy button only once

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElements(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        // payment intent = payment confermation
        setSucceeded(true);
        setError(null);
        setProcessing(false);
      });
  };

  const handleChange = (event) => {
    // listen for details being enterd
    // display errors as the details are entered
    setDisabled(event.empty); // if there is no event set buttonto disabled
    setError(event.error ? event.error.message : ""); // if error display else dont show anything
  };
  useEffect(() => {
    // when the basket changes the client secret will get updated because a new amount will have to be charged
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        // stripe expects you to pass the total in cents/ subunits
        url: `/payments/create?total=${getBasketTotal(basket * 100)}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);

  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
          Checkout ( <Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address </h3>
            <div className="payment_address">
              <p>{user?.email}</p>
              <p>Ruimsig </p>
              <p>Roodepoort, 1724</p>
            </div>
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment_items">
            {basket.map((item) => (
              <CheckoutProduct
                key={item.id}
                {...item}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment_details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment_priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3 className="">Order Total: {value}</h3>
                    </>
                  )} // what is displayed on thr screen
                  decimalScale={2} // two decimal places
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"R"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {error ? <div>{error}</div> : ""}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
