import React, { Component } from "react";
import Header from "./assets/Components/Header/Header";
import foods from "./assets/items";

import "./commonResource/style.css";
import "./App.css";
import "./index.css";
import FoodListContainer from "./assets/Components/FoodListContainer/FoodListContainer";

class App extends Component {
  render() {
    return (
      <div className="all-container">
        <Header />
        <FoodListContainer />
      </div>
    );
  }
}

export default App;
