import "./App.css";
import React, {useEffect }from "react";
import Header from "./Header.js";
import Home from "./Home.js";
import Checkout from "./Checkout.js";
import Login from "./Login.js";
import { auth } from "./firebase";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider.js";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // only runs once when the array is empty
    // it is a dynamic if statements

    auth.onAuthStateChanged((authUser) => {
      console.log("User name, ", authUser);

      if (authUser) {
        dispatch({ type: "Set_User", user: authUser }); // user is logged in push to context api
      } else {
        dispatch({ type: "Set_User", user: null }); // no user is logged in
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          {/* 
    default router always at the bottom  */}
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
