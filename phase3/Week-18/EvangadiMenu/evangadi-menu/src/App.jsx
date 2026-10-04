import { useState } from "react";
import "./commonResource/style.css";
import FoodItem from "./assets/Components/FoodItem/FoodItem";
import foods from "./assets/items.js";
import "./App.css";

function App() {
  return foods.map((item) => {
    <FoodItem
      name={item.name}
      image={item.image}
      price={item.price}
      description={item.description}
    />;
  });
}

export default App;
