import React from "react";
import Image from "next/image";

export default function notfound() {
  return (
    <div className=" flex flex-col justify-center animate-pulse items-center -mt-20">
      <Image
        draggable="false"
        src="/images/sadQT.png"
        className="bot-sad -z-[999999999]"
        width={200}
        height={200}
        alt="Sad QT bot"
      />
      <h1 className="font-bold text-center whitespace-nowrap">
        <span className="text-3xl text-green-200">Ooooooooooops!</span> <br />
        <code className="animate-pulse text-xl font-light text-green-500">
          404 |
        </code>{" "}
        Page <span className="text-red-200">Not Found.</span> <br /> Apologies
        for the inconvenience!
      </h1>
    </div>
  );
}
