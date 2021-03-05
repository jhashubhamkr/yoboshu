import React, { Component } from "react";

class CircleListDescription extends Component {
  render() {
    return (
      <div className="description">
        <h2>{this.props.title}</h2>
        <ul className="circular-list-items">
          {this.props.data.map((item) => (
            <li>{item.toUpperCase()}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CircleListDescription;
