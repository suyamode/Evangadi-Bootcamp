import { Component } from "react";
import menu from "../../items.js";
import FoodItem from "../FoodItem/FoodItem"; // Adjust this path to where your FoodItem component lives
import style from "./FoodListContainer.module.css";

export default class FoodListContainer extends Component {
  render() {
    return (
      <div className={style["foods-container"]}>
        {menu.map((item) => (
          <FoodItem key={item.id} {...item} />
        ))}
      </div>
    );
  }
}
