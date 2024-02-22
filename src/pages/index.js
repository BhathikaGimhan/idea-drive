"use client";
import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";

function TextAnimation() {
  const sliderSettings = {
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    vertical: true,
    prevArrow: false,
    nextArrow: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false,
    verticalSwiping: false,
  };
  return (
    <div className="justify-center font-medium flex items-center mt-0">
      <Image
        width={300}
        height={300}
        src={"/images/idea-drive-logo.png"}
        alt="logo"
        className="absolute -z-50 -mt-40 opacity-30 blur-md animate-pulse"
      />
      <div className="text-5xl text-center max-lg:text-3xl max-sm:text-xl">
        Welcome To{" "}
        <span className="text-green-500 text-6xl text-center max-lg:text-4xl max-sm:text-2xl">
          Idea Drive,
        </span>
        <br /> We will{" "}
        <span className="text-purple-600 ext-6xl text-center max-lg:text-4xl max-sm:text-2xl">
          Develop
        </span>{" "}
        Your
        <Slider {...sliderSettings}>
          <div className="home-component w-full">
            <div className="home-text  py-1">
              <h1 className="">ideas</h1>
            </div>
          </div>
          <div className="home-component">
            <div className="home-text py-1">
              <h1 className="">Websites</h1>
            </div>
          </div>
          <div className="home-component">
            <div className="home-text py-1">
              <h1 className="">Designs</h1>
            </div>
          </div>
          <div className="home-component">
            <div className="home-text py-1">
              <h1 className="">Software</h1>
            </div>
          </div>
          <div className="home-component">
            <div className="home-text py-1">
              <h1 className="">Mobile Applications</h1>
            </div>
          </div>
          <div className="home-component">
            <div className="home-text py-1">
              <h1 className="">Company&apos;s Creations</h1>
            </div>
          </div>
        </Slider>
        <div className="flex flex-col text-center items-center justify-center m-auto mt-10">
          <h2 className="text-4xl max-md:text-2xl max-sm:text-lg mb-6">
            Explore Our Services
          </h2>
          <div className="flex flex-col items-center justify-center">
            <p className="text-lg  max-md:text-sm ">Check out our services:</p>
            <Link href={"/Service"}>
              <div className="null">
                <button className="group mt-4 flex items-center justify-start w-12 h-12 max-md:w-8 max-md:h-8 bg-green-600 rounded-full cursor-pointer relative overflow-hidden transition-all duration-200 shadow-lg hover:w-40 hover:rounded-lg active:translate-x-1 active:translate-y-1">
                  <div className="flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-3">
                    <Image
                      src={"images/icon/right.svg"}
                      width={40}
                      height={40}
                      alt="icon"
                    />
                  </div>
                  <div className="absolute right-5 transform translate-x-full opacity-0 text-white text-lg font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                    View More
                  </div>
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TextAnimation;
