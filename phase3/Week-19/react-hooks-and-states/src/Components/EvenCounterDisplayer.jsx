import React, { Component } from "react";

export default class EvenCounterDisplayer extends Component {
  render() {
    const count = this.props.clicks;
    const evenClicks = count % 2 === 0 ? count : count - 1;

    return (
      <div>
        <p>
          Even Counter: <strong>{evenClicks}</strong>
        </p>
      </div>
    );
  }
}
