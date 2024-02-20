"use client";
import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import Web from "./components/home/Web";
import DigitalMarketing from "./components/home/DigitalMarketing";
import Erp from "./components/home/Erp";
import Graphic from "./components/home/Graphic";
import Seo from "./components/home/Seo";
import System from "./components/home/System";
import App from "./components/home/App";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function TextAnimation() {
  const CustomPrevArrow = (props) => (
    <div
      {...props}
      className="custom-prev-arrow absolute top-[50%] bg-[#383838] transition-all duration-300 shadow-md shadow-black max-md:hidden cursor-pointer hover:bg-[#525252] p-2 rounded-full left-5 z-[999999999999]"
      onClick={props.onClick}
    >
      {/* You can customize the appearance of the previous arrow here */}
      {"arrow left"}
    </div>
  );

  const CustomNextArrow = (props) => (
    <div
      {...props}
      className="custom-next-arrow absolute top-[50%] bg-[#383838] transition-all duration-300 shadow-md shadow-black max-md:hidden cursor-pointer hover:bg-[#525252] p-2 rounded-full right-5 z-[999999999999]"
      onClick={props.onClick}
    >
      {/* You can customize the appearance of the next arrow here */}
      {"arrow right"}
    </div>
  );
  const sliderSettings = {
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };
  return (
    <div className=" ">
      <div className="">
        <Slider {...sliderSettings}>
          <div className="m-10">
            <div className="home-body">
              <div className="card group">
                <div className="icon">
                  <div className="image group-hover:shadow-[0px_0px_10px#2aff2a] shadow-[3px_3px_10px#10cc1060]" />
                </div>
                <div className="details">
                  <h1 className="text-green-100 group-hover:text-white">
                    {"asdfasdf"}
                  </h1>
                  <p className="text-green-100 group-hover:text-white">
                    {"sdfadsafasdasdfadsff asdfa sdfasdf "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="m-10">
            <div className="home-body">
              <div className="card group">
                <div className="icon">
                  <div className="image group-hover:shadow-[0px_0px_10px#2aff2a] shadow-[3px_3px_10px#10cc1060]" />
                </div>
                <div className="details">
                  <h1 className="text-green-100 group-hover:text-white">
                    {"asdfasdf"}
                  </h1>
                  <p className="text-green-100 group-hover:text-white">
                    {"sdfadsafasdasdfadsff asdfa sdfasdf "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default TextAnimation;
