import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";

class DescriptionBanner extends Component {
  render() {
    const {
      name,
      experience,
      feePerSession,
      currency,
      certified,
    } = this.props.data;
    let certifiedMsg;
    if (certified) {
      certifiedMsg = "Certified";
    }
    return (
      <div>
        <div className="banner">
          <h1>{name.toUpperCase()}</h1>
          <p>
            <span className="experience">{experience} </span> years of Experience
          </p>
        </div>
        <div className="fee">
          <h3>{`${currency + " " + feePerSession}`}</h3>
          <p>Per Session</p>
          <br />
          <p>
            <FontAwesomeIcon icon="shield-alt" className="my-icon" />
            {certifiedMsg}
          </p>
        </div>
      </div>
    );
  }
}

export default DescriptionBanner;
