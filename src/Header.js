import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
// component that contains the logo search bar, cart, sign in and orders
function Header() {
  return (
    <div className="header">
      <img
        className="header_logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />

      <div className="header_searchBar">
        <input className="header_searchInput" type="=text" />{" "}
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <div className="nav_option ">
          <span className="header_optionLineOne">Hi Guest</span>
          <span className="header_optionLineTwo">Sign in</span>
        </div>
        <div className="nav_option ">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">&Orders</span>
        </div>
        <div className="nav_option ">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>

        <div className="nav_basket">
          <ShoppingBasketIcon />
          <span className="header_optionLineTwo header_basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
