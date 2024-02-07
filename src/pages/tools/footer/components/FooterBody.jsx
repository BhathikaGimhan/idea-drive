import { useState } from "react";
import Image from "next/image";

const FooterBody = () => {
  const [selectedIcon, setSelectedIcon] = useState("contact");

  const handleIconClick = (icon) => {
    setSelectedIcon(icon);
  };
  return (
    <div>
      <ul className="icon-list ml-3 list-none p-0 m-0">
        <li
          className={`footer-icon  ${
            selectedIcon === "contact"
              ? "translate-x-[2.58rem] rounded-l-full bg-[#10151d]"
              : "rounded-full"
          }`}
          onClick={() => handleIconClick("contact")}
        >
          <Image
            width={30}
            height={30}
            alt="svg icon"
            src={"/images/icon/call.svg"}
          />
          <label className="footer-lable">Contact</label>
        </li>
        <li
          className={`footer-icon  mt-[3.8rem] ${
            selectedIcon === "location"
              ? "translate-x-[2.58rem] rounded-l-full bg-[#10151d]"
              : "rounded-full"
          }`}
          onClick={() => handleIconClick("location")}
        >
          <Image
            width={30}
            height={30}
            alt="svg icon"
            src={"/images/icon/location.svg"}
          />
          <label className="footer-lable">Location</label>
        </li>
        <li
          className={`footer-icon mt-[7.6rem] ${
            selectedIcon === "copyright"
              ? "translate-x-[2.58rem] rounded-l-full bg-[#10151d]"
              : "rounded-full"
          }`}
          onClick={() => handleIconClick("copyright")}
        >
          <Image
            width={30}
            height={30}
            alt="svg icon"
            src={"/images/icon/copyr.svg"}
          />
          <label className="footer-lable">Copyright</label>
        </li>
      </ul>
      <div className="containt z-0 w-72 h-48 border-l flex justify-center items-center pl-3 absolute -mt-5 left-80">
        {selectedIcon === "contact" ? (
          <div className="flex flex-col gap-2">
            <a className="flex" href="mailto:ideadrive.info@gmail.com">
              Email:{" "}
              <samp className=" ml-1 text-green-400 hover:text-green-300">
                {" "}
                ideadrive.info@gmail.com
              </samp>
            </a>
            <a href="tel:+94776685719">
              Whatsapp:{" "}
              <samp className=" text-green-400 hover:text-green-300">
                (+94)77 668 5719
              </samp>
            </a>
          </div>
        ) : selectedIcon === "location" ? (
          <>
            <p>Sri Lanka</p>
          </>
        ) : selectedIcon === "copyright" ? (
          <p className="text-center">
            &copy; 2023 Idea Drive.
            <br />
            All Rights Reserved.
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default FooterBody;
