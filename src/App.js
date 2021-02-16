import "./App.css";
import React from "react";
import Header from "./Header.js";
import Home from "./Home.js";
import Checkout from "./Checkout.js";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          {/* 
    default router always at the bottom  */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
