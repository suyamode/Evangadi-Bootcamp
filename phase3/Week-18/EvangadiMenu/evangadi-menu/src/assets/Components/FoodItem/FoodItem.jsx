import React from "react";
import foodItems from "../../items.js";
function FoodItem({ id, name, price, image, description }) {
  return (
    <div className="foods-container">
      <div className="single-food">
        <div className="img">
          <img src={image} />
        </div>
        <div className="title-price">
          <h3>{name}</h3>
          <p>{price}</p>
        </div>
        <div className="food-desc">{description}</div>
      </div>
    </div>
  );
}

export default FoodItem;
