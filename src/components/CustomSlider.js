import React, { Component } from "react";
import Slider from "infinite-react-carousel";

export default class CustomSlider extends Component {
  render() {
    const settings = {
      arrows: false,
      arrowsBlock: false,
      autoplay: true,
      dots: false,
      autoplaySpeed: 3000,
      className: "newCLass",
    };
    return (
      <div style={{overflow:"hidden"}}>
        <Slider {...settings}>
            {this.props.images.map((image) => (
                <div>
                    <img src={image} width="100%"/>
                </div>
            ))}
        </Slider>
      </div>
    );
  }
}
