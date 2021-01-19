import "./App.css";
import React from "react";
import Header from "./Header.js";
import Home from "./Home.js";
function App() {
  return (
    // BEM naming convenstion
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
