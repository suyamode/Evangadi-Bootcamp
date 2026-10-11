import React, { Component } from "react";

export default class CounterDisplayer extends Component {
  render() {
    return (
      <div>
        <p>
          All Clicks Counter: <strong>{this.props.clicks}</strong>{" "}
        </p>
      </div>
    );
  }
}
