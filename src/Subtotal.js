import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider.js";
import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router-dom";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  const history = useHistory("");

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )} // what is displayed on thr screen
        decimalScale={2} // two decimal places
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"R"}
      />

      <button onClick={(e) => history.push("/payment")}>
        Proceed to checkout
      </button>
    </div>
  );
}

export default Subtotal;
