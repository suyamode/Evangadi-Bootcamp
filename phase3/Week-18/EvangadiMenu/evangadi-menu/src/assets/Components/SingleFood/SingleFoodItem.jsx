import { Component } from "react";
import styles from "./SingleFoodItem.module.css";

class FoodItem extends Component {
  render() {
    const { title, category, price, img, desc } = this.props;

    return (
      <div className={styles["single-food"]}>
        <div className={styles["img"]}>
          <img src={img} alt={img} />
        </div>

        {category && <span className={styles["category"]}>{category}</span>}

        <div className={styles["title-price"]}>
          <h3>{title}</h3>
          <p>${price}</p>
        </div>

        <div className={styles["food-desc"]}>{desc}</div>
      </div>
    );
  }
}

export default FoodItem;
