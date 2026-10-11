import React, { Component } from "react";
import CounterDisplayer from "./CounterDisplayer";

export default class MyCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
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
        <button onClick={this.allClicksCounter}>Click</button>
        <button onClick={this.resetCounter}>Reset</button>
        <CounterDisplayer clicks={this.state.count} />
      </div>
    );
  }
}
