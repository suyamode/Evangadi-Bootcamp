import React from "react";
import SlideShow from "./SlideShow";
import styles from "../styles/displayRow.module.css";
import { Movies } from "../assets/Data";

function DisplayRow() {
  return (
    <div className={styles.mainWrapper}>
      <SlideShow title="Movie Suggestions" movies={Movies} />
    </div>
  );
}

export default DisplayRow;
