"use client";
import Image from "next/image";
import { useState } from "react";
import WaitingList from "./WaitingList";

export default function Access() {
  const [close, setClose] = useState(false);

  return (
    <div>
      <div className={`${close ? "hidden" : ""} screen-body`}>
        <div className="red-alert bg-[#ffeb331c] backdrop-blur-3xl p-10 max-md:px-5 max-md:pb-5 md:m-20 z-50 rounded-xl border !border-[#eef775] max-md:m-5">
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
            Oh.. dear! 🙀 <br /> QT Bot's stirring up quite the commotion, and
            it's leaving everyone spellbound! Can't get a piece of the magic
            just yet? Fret not! Secure your ticket on our{" "}
            <strong className="text-green-500">waiting list</strong> , and we'll
            whisk you away to the next enchanting adventure!
          </p>
        </div>
      </div>
      <WaitingList />
    </div>
  );
}
