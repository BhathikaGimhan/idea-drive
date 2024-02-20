import React from "react";

export default function App() {
  return (
    <div className="z-[99999999999]">
      <div className="h-[60vh] inset-0">
        <div className="h-full rounded-3xl shadow-lg bg-[#3a3a3a] shadow-black flex flex-col lg:flex-row w-full">
          <div className="left-bg rounded-l-xl lg:rounded-l-3xl max-lg:rounded-3xl lg:p-10 bg-[#3a3a3a] flex-1 relative">
            {" "}
            {/* Added relative positioning */}
            <div className="text-white lg:flex h-full">
              <h4 className="lg:text-4xl max-lg:mt-5 max-lg:ml-5 lg:absolute max-lg:text-lg bg-[#da5cda] px-4 pt-1 rounded-full w-fit">
                AppXcel
              </h4>{" "}
              <br />
              <p className="drop-shadow-2xl lg:justify-center lg:items-center lg:m-auto  max-lg:ml-2 max-lg:mr-2 lg:w-[100%] max-lg:text- lg:text-2xl">
                Transform ideas into intuitive, high-performance apps that
                resonate with your users and elevate your brand.
              </p>
              <button className="absolute bottom-0 max-lg:text-sm right-0 max-lg:mb-2 max-lg:mr-1 lg:mb-4 lg:mr-4 duration-500 hover:bg-[#dd7edd] shadow-black bg-[#da5cda] transition-all rounded-full p-2">
                Go
              </button>{" "}
              {/* Positioned at the bottom right */}
              <br />
            </div>
          </div>
          <div className="right-bg bg-[#242525] max-lg:rounded-b-2xl max-lg:rounded-tl-[5rem] lg:rounded-r-3xl lg:rounded-ss-[5rem] flex-1">
            <div className="lg:w-full lg:h-full max-lg:h-[35vh] max-lg:w-[10wh] flex p-10 relative justify-end items-end m-auto lg:bottom-2">
              <p className="absolute flex justify-end max-lg:top-6 max-lg:w-full max-md:right-1 items-end lg:right-10 m-auto">
                Application Development
              </p>
              <div className="max-lg:w-60 relative justify-center items-center m-auto max-lg:bottom-2">
                {/* <img src="../../assets/images/app.png" alt="" loading="lazy" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
