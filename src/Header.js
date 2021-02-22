import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider.js";
import { auth } from "./firebase.js";
// component that contains the logo search bar, cart, sign in and orders
function Header() {
  const [{ user, basket }] = useStateValue();
  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>

      <div className="header_searchBar">
        <input className="header_searchInput" type="=text" />{" "}
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <Link to={!user && "/Login"}>
          <div onClick={handleAuth} className="nav_option ">
            <span className="header_optionLineOne">
              Hi {user ? user.email : "Guest"}
            </span>
            <span className="header_optionLineTwo">
              {user ? "Sign out" : "Sign In"}
            </span>
          </div>
        </Link>

        <div className="nav_option ">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">&Orders</span>
        </div>
        <div className="nav_option ">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="nav_basket">
            <ShoppingBasketIcon />
            <span className="header_optionLineTwo header_basketCount">
              {basket?.length}
              {/* question mark is used for optional chaining for handling errors if object is undefined  */}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
