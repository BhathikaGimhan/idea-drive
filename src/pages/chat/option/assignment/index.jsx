"use client";
import Image from "next/image";
import Link from "next/link";
import Options from "../tools/Options";
import { useState } from "react";
import { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Front from "./form/Front";
import MyDocument from "./form/pdf";
import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI("AIzaSyArDcvm4OUPx45Uv-fVGulbsgQYPnIjuM8");

export default function Assignment() {
  const [option, setOption] = useState("chat");
  const handleOptionClick = (option) => {
    setOption(option);
  };

  const reportTemplateRef = useRef(null);
  const handleDownloadPdf = async () => {
    const data = reportTemplateRef.current;
    html2canvas(data).then((canvas) => {
      const imgWidth = 208;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;
      let x = 0;
      heightLeft -= pageHeight;
      const doc = new jsPDF("p", "mm");
      doc.addImage(canvas, "PNG", 0, 0, imgWidth, imgHeight, "", "FAST");
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        x = position + 15;
        position = x;
        doc.addPage();
        doc.addImage(
          canvas,
          "PNG",
          0,
          position,
          imgWidth,
          imgHeight,
          "",
          "FAST"
        );
        heightLeft -= pageHeight;
      }
      doc.save("Downld.pdf");
    });
  };

  const [valuesToSend, setValuesToSend] = useState({
    name: "",
    regNo: "",
    subject: "",
    code: "",
    assignment: "",
    ai: "",
  });

  const [receivedValues, setReceivedValues] = useState({
    name: "",
    regNo: "",
    subject: "",
    code: "",
    assignment: "",
    ai: "",
  });

  const handleSend = (values) => {
    setValuesToSend(values);
    setReceivedValues(values);
  };

  const [message, setMessage] = useState("");
  const [value, setValue] = useState("");
  const [chatHistory, setChatHistory] = useState([
    {
      role: "model",
      parts: "",
    },
  ]);
  const genarate = async () => {
    setValue("");
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts:
            "remember your name is Idea drive Assistant. your crated by Bhathika Gimhan. he is software and wed developer. your owner name is Bhathika Gimhan. his email address is bgmaduragoda@gmail.com. his phone number is 0776685719. your in the web site web site's name is Idea Drive.This website provides many services to the client. These include website development, software development, mobile application development, graphic design, logo design, SEO service, video editing and digital marketing. web site name is. You should answer all the questions asked of you using these things",
        },
        {
          role: "model",
          parts: "",
        },
      ],
    });
    try {
      // Send user-entered message to AI and update chat box
      const msg = receivedValues.ai; // Get message from state
      const result = await chat.sendMessage(msg);
      const response = await result.response;
      const text = response.text();
      setMessage(message + "\n" + text); // Prepend existing message with new response

      setChatHistory([
        ...chatHistory,
        { role: "user", parts: value },
        { role: "model", parts: response.text() },
      ]);

      setValue("");
    } catch (error) {
      // Handle the error (e.g., display an alert or update the UI with an error message)
      // console.error(error.message);
      const text =
        "Oops... it seems your message contains inappropriate content. My developer has implemented a filter to block such messages. Kindly resend your message without any inappropriate content. Thank you!";
      setMessage(message + "\n" + text);
      setChatHistory([
        ...chatHistory,
        { role: "user", parts: receivedValues.ai },
        { role: "model", parts: text },
      ]);
      // You might want to inform the user about the issue, e.g., by updating the UI
    }
  };
  return (
    <div>
      <div className=" relative">
        <div className="form-veiw flex top-40  ">
          <div className="right bg-neutral-400 max-md:-left-[30rem]">
            <div className="max-h-full -ml-24  -z-50">
              <div className="">
                <div id="pdf" ref={reportTemplateRef}>
                  <MyDocument
                    receivedValues={receivedValues}
                    message={chatHistory}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="left w-full">
            <div className="ml-[2vw] mt-4 fixed">
              <Front valuesToSend={valuesToSend} onSend={handleSend} />
              <button onClick={handleDownloadPdf}>click</button>
              <button onClick={genarate}>AI</button>
              <Link href="/chat/option/assignment/Doc">Go</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="chat-btn mb-0 z-50 !bg-[#10151d] absolute h-16 rounded-r-full  bottom-0 left-0 w-16 ">
        <div className="fixed bg-[#10151d] z-50 flex left-5 pr-10 w-full mt-6">
          <div className="flex flex-col gap-5 -mt-5 pr-5">
            <Options handleClick={handleOptionClick} />
          </div>
        </div>
      </div>
    </div>
  );
}
