"use client";
import { useState } from "react";

import ReactMarkdown from "react-markdown";

export default function MyDocument({ receivedValues, message }) {
  return (
    <div
      className="font-[hand1] pb-10 w-[140mm] text-[#0d0947] bg-cover bg-center bg-repeat relative"
      // style={{ backgroundImage: "url('/images/note.png')" }}
    >
      <div className=" w-full text-center text-[30px] leading-6 flex flex-col  items-center h-[200mm]">
        <div className="head-details flex flex-col  items-center mt-20">
          <p className="Subject font-[hand1] font-bold">
            {receivedValues.subject}
          </p>
          <p className="Subject font-bold">{receivedValues.code}</p>
          <p className="Subject text-center font-bold">
            {receivedValues.assignment}
          </p>
        </div>

        <div className="footer-details flex flex-col  items-center mt-80">
          <p className=" font-bold">by: </p>
          <p className=" font-bold">{receivedValues.name}</p>
          <p className=" font-bold">{receivedValues.regNo}</p>
        </div>
      </div>
      <div className="containt text-[20px] ml-10 mr-6">
        {message.map((item, index) => (
          <div className="pdf-view" key={index}>
            <ReactMarkdown>{item.parts}</ReactMarkdown>
          </div>
        ))}
      </div>
    </div>
  );
}
