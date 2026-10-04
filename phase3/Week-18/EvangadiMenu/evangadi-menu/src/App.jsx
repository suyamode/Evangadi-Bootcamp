import { Component } from "react";
import Header from "./assets/Components/Header/Header";
import "./App.css";
import "./index.css";
import FoodItem from "./assets/Components/FoodItem/FoodItem.jsx";

class App extends Component {
  render() {
    return (
      <div className="all-container">
        <Header />
        <FoodItem />
      </div>
    );
  }
}

export default App;
