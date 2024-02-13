"use client";
import AppBar from "@/pages/components/AppBar";
import Image from "next/image";
import { useState } from "react";

export default function SideBar() {
  const [sideBar, setSideBar] = useState(true);
  const toggleSideBar = () => {
    setSideBar(!sideBar);
  };
  return (
    <div>
      <div className="side-bar-containt">
        {sideBar ? (
          <>
            <Image
              src={"/images/idea-drive-logo.png"}
              alt="svg icon"
              width={100}
              height={100}
              className="side-bar-icon max-md:-mt-1 md:z-50 logo absolute"
            />
            <button onClick={toggleSideBar} className="menu-icon absolute">
              <Image
                src={"/images/icon/menu.svg"}
                alt="svg icon"
                width={40}
                height={40}
                className={`menu-svg ${
                  sideBar ? "ml-16 transform -scale-x-[1]" : "ml-44"
                } fixed transition-all duration-200  mt-3 md:hidden`}
              />
            </button>
          </>
        ) : (
          ""
        )}

        <div
          className={`side-bar ${
            sideBar ? "max-md:-ml-[15rem]" : "max-md:-ml-1"
          } fixed h-full max-md:w-60 max-md:shadow-xl md:-mt-10 transition-all duration-300 !shadow-black max-md:border max-md:border-[#129e003a] bg-[#00000000] backdrop-blur-[8px] p-2 flex flex-col md:justify-center gap-10`}
        >
          <h1 className="sidebar-heading md:hidden absolute mt-3 ml-16 font-extrabold">
            IDEA DRIVE
            {sideBar ? (
              ""
            ) : (
              <>
                <Image
                  src={"/images/idea-drive-logo.png"}
                  alt="svg icon"
                  width={100}
                  height={100}
                  className="side-bar-icon max-md:-mt-12 max-md:-ml-[4rem] logo fixed z-50"
                />
                <button onClick={toggleSideBar} className="md:hidden">
                  <Image
                    src={"/images/icon/close.svg"}
                    alt="svg icon"
                    width={40}
                    height={40}
                    className="fixed right-[1rem] top-5 -mt-2 "
                  />
                </button>
              </>
            )}
          </h1>
          <div className={` side-bar-btn group md:mt-10 max-md:mt-20`}>
            <div className="bar-icon">
              <Image
                src={"/images/icon/service.svg"}
                alt="svg icon"
                width={50}
                height={50}
                className="side-bar-icon"
              />
            </div>
            <div className="tool-tip group">Service</div>
            <div className="side-active"></div>
          </div>
          <div className="side-bar-btn group">
            <div className="bar-icon">
              <Image
                src={"/images/icon/sms.svg"}
                alt="svg icon"
                width={50}
                height={50}
                className="side-bar-icon"
              />
            </div>
            <div className="tool-tip group">Contact</div>
            <div className="side-active"></div>
          </div>
          <div className="side-bar-btn group">
            <div className="bar-icon">
              <Image
                src={"/images/icon/members.svg"}
                alt="svg icon"
                width={50}
                height={50}
                className="side-bar-icon"
              />
            </div>
            <div className="tool-tip group md:px-12 max-md:mt-4 md:mt-2">
              Members
            </div>
            <div className="side-active"></div>
          </div>
          <div className="side-bar-btn group">
            <div className="bar-icon">
              <Image
                src={"/images/icon/reviews.svg"}
                alt="svg icon"
                width={50}
                height={50}
                className="side-bar-icon"
              />
            </div>
            <div className="tool-tip group">Review</div>
            <div className="side-active"></div>
          </div>
          <div className="side-bar-btn group">
            <div className="bar-icon">
              <Image
                src={"/images/icon/about.svg"}
                alt="svg icon"
                width={50}
                height={50}
                className="rotate-180 side-bar-icon"
              />
            </div>
            <div className="tool-tip group">About</div>
            <div className="side-active"></div>
          </div>
          <AppBar />
        </div>
      </div>
    </div>
  );
}
