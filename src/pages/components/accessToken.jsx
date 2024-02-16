"use client";
import Image from "next/image";
import { useState } from "react";
import WaitingList from "./WaitingList";

export default function Access() {
  const [close, setClose] = useState(false);

  return (
    <div>
      <div
        className={`${
          close ? "hidden" : ""
        } absolute w-full left-0 m-auto screen-body`}
      >
        <div className="red-alert bg-[#524d2667] backdrop-blur-3xl p-10 max-md:px-5 max-md:pb-5 md:m-20 z-50 rounded-xl border !border-[#eef775] max-md:m-5">
          <button
            className=" absolute -mt-8 -ml-8 max-md:-ml-3  "
            onClick={() => setClose(!close)}
          >
            <Image
              src={"/images/icon/close.svg"}
              alt="svg icon"
              width={20}
              height={20}
            />
          </button>

          <p>
            Oh.. dear! 🙀 <br /> QT Bot&apos;s stirring up quite the commotion,
            and it&apos;s leaving everyone spellbound! Can&apos;t get a piece of
            the magic just yet? Fret not! Secure your ticket on our
            <strong className="text-green-500">waiting list</strong> , and
            we&apos;ll whisk you away to the next enchanting adventure!
          </p>
        </div>
      </div>
      <WaitingList />
    </div>
  );
}
