import React, { Component } from "react";

class ListDescription extends Component {
  render() {
    return (
      <div className="description">
        <h2>{this.props.title}</h2>
        <ul className="list-items">
          {this.props.data.map((item) => (
            <>
              <li>{item}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</li>
            </>
          ))}
        </ul>
      </div>
    );
  }
}

export default ListDescription;
