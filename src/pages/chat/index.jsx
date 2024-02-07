"use client";
import { Suspense, useState } from "react";
import Image from "next/image";

import ChatWindow from "./ChatWindow";
import Translate from "./option/translate/Translate";
import Options from "./option/tools/Options";
import Loading from "../loading";
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI("AIzaSyArDcvm4OUPx45Uv-fVGulbsgQYPnIjuM8");

export default function chat() {
  const [message, setMessage] = useState("");
  const [value, setValue] = useState("");
  const [translate, setTranslate] = useState("");
  const [clearTranslationInput, setTranslateInput] = useState(false);
  const [option, setOption] = useState("chat");
  const [loading, setLoadning] = useState(false);
  const [chatHistory, setChatHistory] = useState([
    {
      role: "model",
      parts: "Hi, I'm Idea Drive's AI assistant. How can I help you?",
    },
  ]);
  const sendMessage = async () => {
    setValue("");
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts:
            "remember your name is QT Bot develop by Idea drive . your crated by Bhathika Gimhan. he is software and wed developer. your owner name is Bhathika Gimhan. his email address is bgmaduragoda@gmail.com. his phone number is 0776685719. your in the web site web site's name is Idea Drive.This website provides many services to the client. These include website development, software development, mobile application development, graphic design, logo design, SEO service, video editing and digital marketing. web site name is.",
        },
        {
          role: "model",
          parts: "Hi, I'm Idea Drive's AI assistant. How can I help you?",
        },
      ],
    });
    try {
      // Send user-entered message to AI and update chat box.
      if (option === "translate") {
        setLoadning(true);
        setTranslateInput(true);
        setTranslate("");
        const msg = translate; // Get message from state
        const result = await chat.sendMessage(msg);
        const response = await result.response;
        const text = response.text();
        setMessage(message + "\n" + text); // Prepend existing message with new response

        setChatHistory([
          ...chatHistory,
          { role: "user", parts: translate },
          { role: "model", parts: response.text() },
        ]);
        setLoadning(false);
      } else {
        setLoadning(true);
        setValue("");
        const msg = value; // Get message from state
        const result = await chat.sendMessage(msg);
        const response = await result.response;
        const text = response.text();
        setMessage(message + "\n" + text); // Prepend existing message with new response

        setChatHistory([
          ...chatHistory,
          { role: "user", parts: value },
          { role: "model", parts: response.text() },
        ]);
        setLoadning(false);
      }
    } catch (error) {
      // Handle the error (e.g., display an alert or update the UI with an error message)
      // console.error(error.message);
      const text =
        "Oops... it seems your message contains inappropriate content. My developer has implemented a filter to block such messages. Kindly resend your message without any inappropriate content. Thank you!";
      setMessage(message + "\n" + text);
      setChatHistory([
        ...chatHistory,
        { role: "user", parts: value },
        { role: "model", parts: text },
      ]);
      // You might want to inform the user about the issue, e.g., by updating the UI
    }
  };

  const handleOptionClick = (option) => {
    setOption(option);
  };

  return (
    <>
      <div className="chat-body">
        <div className="chat max-w-full overflow-x-auto">
          <div className="chat-view -z-10 relative w-full mb-[5.5rem]">
            <Suspense fallback={<Loading />}>
              <ChatWindow chatHistory={chatHistory} />
            </Suspense>
          </div>

          <div className="chat-btn mb-0 z-50 !bg-[#10151d] absolute h-20  bottom-0 left-0 w-full ">
            <div className="fixed bg-[#10151d] z-50 flex bottom-5 left-5 pr-10 w-full mt-6">
              {option == "translate" ? (
                <Translate
                  ontranslate={(translatedText) => setTranslate(translatedText)}
                  clearTranslationInput={clearTranslationInput}
                />
              ) : (
                ""
              )}
              <div className="flex flex-col gap-5 pr-5">
                <Options handleClick={handleOptionClick} />
              </div>

              <input
                value={option === "translate" ? translate : value}
                onClick={(e) => e.stopPropagation()}
                onChange={(e) => setValue(e.target.value)}
                type="text"
                placeholder="Chat here..."
                className="chat-input"
              />
              <div className="send-btn">
                <button onClick={sendMessage}>
                  {loading ? (
                    <Image
                      src="/images/icon/loading.svg"
                      width={30}
                      height={30}
                      alt="svg icon"
                      className="animate-spin"
                    />
                  ) : (
                    <Image
                      src="/images/icon/send.svg"
                      width={30}
                      height={30}
                      alt="svg icon"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
