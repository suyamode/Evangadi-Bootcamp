import React, { Component } from "react";

export default class CounterDisplayer extends Component {
  render() {
    return (
      <div>
        <p>
          The button has been clicked <strong>{this.props.clicks}</strong>{" "}
          times!
        </p>
      </div>
    );
  }
}
