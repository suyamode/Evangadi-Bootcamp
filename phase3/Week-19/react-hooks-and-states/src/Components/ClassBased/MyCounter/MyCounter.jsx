import React, { Component } from "react";
import EvenCounterDisplayer from "../EvenCounterDisplayer/EvenCounterDisplayer.jsx";
import CounterDisplayer from "../CounterDisplayer/CounterDisplayer.jsx";
import styles from "./MyCounter.module.css";

export default class MyCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  allClicksCounter = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };
  resetCounter = () => {
    this.setState((prevState) => ({
      count: 0,
    }));
  };
  render() {
    return (
      <div>
        <h2>Click Counter App</h2>
        <div className={styles["button-wrapper"]}>
          <button className={styles.click} onClick={this.allClicksCounter}>
            Click
          </button>
          <button className="reset" onClick={this.resetCounter}>
            Reset
          </button>
        </div>
        <CounterDisplayer clicks={this.state.count} />
        <EvenCounterDisplayer clicks={this.state.count} />
      </div>
    );
  }
}
