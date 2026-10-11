import React, { Component } from "react";
import CounterDisplayer from "./CounterDisplayer";
import EvenCounterDisplayer from "./EvenCounterDisplayer";

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
        <div className="button-wrapper">
          <button className="click" onClick={this.allClicksCounter}>
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
