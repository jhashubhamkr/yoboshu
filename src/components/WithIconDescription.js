import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";

class WithIconDescription extends Component {
  render() {
    const { title, data } = this.props;
    return (
      <div className="description">
        <h2>{title}</h2>
        {data.map((data) => (
          <p>
            <FontAwesomeIcon icon={data.icon} className="my-icon"/>
            {data.item}
          </p>
        ))}
      </div>
    );
  }
}

export default WithIconDescription;
