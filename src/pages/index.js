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
    <div className="justify-center flex items-center mt-0">
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
        <h2 className=" flex flex-col text-4xl mt-20 justify-center items-center">
          check over service <br />
          <Link href={"/Service"}>
            <Image
              src={"images/icon/right.svg"}
              width={30}
              height={30}
              alt="icon"
              className=" px-3 py-1 rounded-full bg-green-950 hover:bg-green-500 transition-all duration-700 w-20 h-10 "
            />
          </Link>
        </h2>
      </div>
    </div>
  );
}

export default TextAnimation;
