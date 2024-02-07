"use client";
import { useState } from "react";
import FooterBody from "./components/FooterBody";
import MobileFooter from "./components/MobileFooter";
import Image from "next/image";
export default function Footer() {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };
  return (
    <>
      <div
        className={`footer ${
          expanded ? "-bottom-[1.5rem]" : "hover:-bottom-[13.5rem]"
        } group fixed w-screen -bottom-56 max-md:hidden -ml-[2.5rem] flex justify-center items-center m-auto left-[3.5rem]`}
      >
        <div
          className={` ${
            expanded ? "" : "custom-box-shadow"
          } absolute w-[640px] -bottom-10 h-80 justify-center items-center rounded-lg`}
        ></div>
        <div
          className={`line-color ${
            expanded ? "footer-card" : "line-color "
          } absolute`}
        >
          <div className="bg-[#10151d] custom-border w-[640px] max-md:hidden h-80 flex justify-center m-auto rounded-lg">
            <div
              className="footer-head cursor-pointer h-14"
              onClick={toggleExpansion}
            >
              <Image
                width={27}
                height={27}
                alt="svg icon"
                src={"/images/icon/down.svg"}
                className={`right-0 mt-4 ${
                  expanded ? "text-gray-200" : "rotate-180 text-gray-400"
                } mr-5 absolute group-hover:text-gray-200 cursor-pointer `}
              />
              <h5 className="text-white text-sm left-0 mt-[1.3rem] ml-[1rem] absolute">
                {/* Summary about us :{" "} */}
                <div
                  className={`group-hover:text-[#7cff62af87] ${
                    expanded ? "text-[#7cff62af]" : ""
                  } text-green-700 transition-all duration-200`}
                >
                  Summary about us
                </div>{" "}
              </h5>
              <hr className="w-screen mt-14 border-gray-400" />
            </div>
            <div className="footer-body mt-20 left-0 absolute">
              <FooterBody />
            </div>
          </div>
        </div>
      </div>
      <MobileFooter />
    </>
  );
}
