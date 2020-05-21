import React, { Component } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default class SimpleSlider extends Component {

  handleColor
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <h3>sadegh</h3>
          </div>
          <div>
            <h3>ali</h3>
          </div>
          <div>
            <h3>reza</h3>
          </div>
          
          
        </Slider>
      </div>
    );
  }
}