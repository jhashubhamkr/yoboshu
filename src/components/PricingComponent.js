import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PriceComponent from "./PriceComponent";

class PricingComponent extends Component {
  render() {
    const { title, data } = this.props;
    return (
      <div className="description">
        <h2>{title}</h2>
        {data.map((item) => (
          <PriceComponent data={item} />
        ))}
        <small>
          <strong>Note:</strong> Above charges are for in-person training. it
          does not include group discount. Moreover price for online training is
          20% less than in-person training.
        </small>
        <div className="money-back">
            Money Back Guarentee
            <FontAwesomeIcon icon="info-circle" className="my-icon"/>
        </div>
      </div>
    );
  }
}

export default PricingComponent;
