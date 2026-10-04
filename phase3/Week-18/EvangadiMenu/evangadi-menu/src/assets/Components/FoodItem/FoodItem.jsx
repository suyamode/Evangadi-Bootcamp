import React, { Component } from "react";
import menu from "../../items.js";
import SingleFoodItem from "../SingleFood/SingleFoodItem.jsx";
import style from "./FoodItem.module.css";

export default class FoodItem extends Component {
  render() {
    return (
      <div className={style["foods-container"]}>
        {menu.map((item) => (
          <SingleFoodItem key={item.id} {...item} />
        ))}
      </div>
    );
  }
}
