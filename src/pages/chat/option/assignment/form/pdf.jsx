"use client";
import ReactMarkdown from "react-markdown";

export default function MyDocument({ receivedValues, message }) {
  return (
    <div
      className="pb-10 "
      // style={{ backgroundImage: "url('/images/note.png')" }}
    >
      <div className=" w-full text-center text-[30px] leading-8 flex flex-col  items-center h-[200mm]">
        <div className="head-details flex flex-col  items-center mt-20">
          <h2 className="Subject font-bold">{receivedValues.subject}</h2>
          <h2 className="Subject font-bold">{receivedValues.code}</h2>
          <h2 className="Subject text-center font-bold">
            {receivedValues.assignment}
          </h2>
        </div>

        <div className="footer-details flex flex-col  items-center mt-80">
          <h2 className=" font-bold">by: </h2>
          <h2 className=" font-bold">{receivedValues.name}</h2>
          <h2 className=" font-bold">{receivedValues.regNo}</h2>
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
