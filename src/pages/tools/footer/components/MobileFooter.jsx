import { useState } from "react";
import Image from "next/image";

const MobileFooter = () => {
  const [selectedIcon, setSelectedIcon] = useState(false);
  const [close, setClose] = useState(true);

  const handleIconClick = (icon) => {
    setSelectedIcon(icon);
    if (icon === "close") {
      setClose(true);
    } else {
      setClose(false);
    }
  };
  return (
    <div>
      <div className="icon-bar z-[999999] fixed md:hidden bottom-0 left-0 right-0 bg-[#10151d] pb-2 -mt-2 flex justify-center">
        <div className="flex items-center duration-700 transition-all -top-2  gap-5">
          <div
            className={`icon mobile-footer-item ${
              selectedIcon === "contact"
                ? " -top-[0.2rem] bg-[#171e29]"
                : " top-0"
            }`}
            onClick={() => handleIconClick("contact")}
          >
            <Image
              width={27}
              height={27}
              alt="svg icon"
              src={"/images/icon/call.svg"}
            />
            <label className="text-white text-sm">Contact</label>
          </div>
          <div
            className={`icon mobile-footer-item ${
              selectedIcon === "location"
                ? "-top-[0.2rem] bg-[#171e29]"
                : "top-0"
            } `}
            onClick={() => handleIconClick("location")}
          >
            <Image
              width={27}
              height={27}
              alt="svg icon"
              src={"/images/icon/location.svg"}
            />
            <label className="text-white text-sm">Location</label>
          </div>
          <div
            className={`icon mobile-footer-item ${
              selectedIcon === "copyright"
                ? "-top-[0.2rem] bg-[#171e29]"
                : "top-0"
            }`}
            onClick={() => handleIconClick("copyright")}
          >
            <Image
              width={25}
              height={25}
              alt="svg icon"
              src={"/images/icon/copyr.svg"}
            />
            <label className="text-white text-sm">Copyrights</label>
          </div>
        </div>
      </div>
      <div
        className={`mb-footer-body ${
          close ? "-bottom-[7.5rem]" : "bottom-[3.2rem]"
        } fixed md:hidden transition-all duration-300 left-0 right-0 h-40 -z-30 border border-slate-800 rounded-md bg-[#171e29] p-2 flex justify-end`}
      >
        <Image
          onClick={() => handleIconClick("close")}
          width={27}
          height={27}
          alt="svg icon"
          src={"/images/icon/close.svg"}
          className="absolute"
        />
        {selectedIcon === "contact" ? (
          <div
            className={`contact col flex flex-col justify-center items-center m-auto pt-2 pb-5`}
          >
            <p className="text-center pb-3 pt-[1.9rem]">
              <a href="tel:+94776685719">
                Whatsapp:{" "}
                <samp className=" text-green-400 hover:text-green-300">
                  (+94)77 668 5719
                </samp>
              </a>
            </p>
            <br />
            <p className="text-center">
              <a className="flex" href="mailto:ideadrive.info@gmail.com">
                Email:{" "}
                <samp className=" ml-1 text-green-400 hover:text-green-300">
                  {" "}
                  ideadrive.info@gmail.com
                </samp>
              </a>
            </p>
          </div>
        ) : selectedIcon === "location" ? (
          <div
            className={`contact row flex justify-center items-center m-auto pt-9 pb-5`}
          >
            <p className="text-center pb-3 pt-[1.9rem]"> Sri Lanka </p>
          </div>
        ) : selectedIcon === "copyright" ? (
          <div
            className={`contact row flex justify-center items-center m-auto pt-7 pb-5`}
          >
            <p className="text-center pb-3 pt-[1.9rem]">
              {" "}
              &copy; 2024 Idea Drive. All Rights Reserved.{" "}
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default MobileFooter;
