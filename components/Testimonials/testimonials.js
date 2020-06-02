import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "30%",
      slidesToShow: 1,
      speed: 500,
      dots: true,
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            centerPadding: "20%"
          }
        },
        {
          breakpoint: 768,
          settings: {
            centerPadding: "10%"
          }
        }
      ]
    };
    return (
      <Slider {...settings}>
        <div className="w-1/3 p-8 px-4">
          <div className="p-4 bg-white rounded shadow-xl md:p-12 slider_one">
            <img
              src="./static/images/example-img.jpg"
              className="w-16 h-16 mx-auto mb-8 rounded-full"
            ></img>
            <p className="text-base text-center md:text-lg ">
              Vivamus pulvinar mattis molestie. Proin tincidunt lacinia felis
              eget interdum. Praesent venenatis lorem a elementum venenatis.
              Fusce eu elit vel lacus ornare finibus. Curabitur dignissim
              hendrerit faucibus. Pellentesque habitant morbi tristique senectus
              et netus et malesuada.
            </p>
            <span className="block mt-5 font-mono text-base text-center text-webPurple">
              Pat Cooper, SENIOR DEVELOPER AT APPLE
            </span>
          </div>
        </div>
        <div className="w-1/3 p-8 px-4">
          <div className="p-4 bg-white rounded shadow-xl md:p-12 slider_one">
            <img
              src="./static/images/example-img.jpg"
              className="w-16 h-16 mx-auto mb-8 rounded-full"
            ></img>
            <p className="text-base text-center md:text-lg ">
              Vivamus pulvinar mattis molestie. Proin tincidunt lacinia felis
              eget interdum. Praesent venenatis lorem a elementum venenatis.
              Fusce eu elit vel lacus ornare finibus. Curabitur dignissim
              hendrerit faucibus. Pellentesque habitant morbi tristique senectus
              et netus et malesuada.
            </p>
            <span className="block mt-5 font-mono text-base text-center text-webPurple">
              Pat Cooper, SENIOR DEVELOPER AT APPLE
            </span>
          </div>
        </div>
        <div className="w-1/3 p-8 px-4">
          <div className="p-4 bg-white rounded shadow-xl md:p-12 slider_one">
            <img
              src="./static/images/example-img.jpg"
              className="w-16 h-16 mx-auto mb-8 rounded-full"
            ></img>
            <p className="text-base text-center md:text-lg ">
              Vivamus pulvinar mattis molestie. Proin tincidunt lacinia felis
              eget interdum. Praesent venenatis lorem a elementum venenatis.
              Fusce eu elit vel lacus ornare finibus. Curabitur dignissim
              hendrerit faucibus. Pellentesque habitant morbi tristique senectus
              et netus et malesuada.
            </p>
            <span className="block mt-5 font-mono text-base text-center text-webPurple">
              Pat Cooper, SENIOR DEVELOPER AT APPLE
            </span>
          </div>
        </div>
      </Slider>
    );
  }
}
