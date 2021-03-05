import React, { Component } from "react";

class BasicDescription extends Component {
  render() {
    return (
      <div className="description">
        <h2>{this.props.title}</h2>
        <p>{this.props.data}</p>
      </div>
    );
  }
}

export default BasicDescription;
