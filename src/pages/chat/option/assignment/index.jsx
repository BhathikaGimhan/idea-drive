"use client";
import Image from "next/image";
import Link from "next/link";
import Options from "../tools/Options";
import { useEffect, useLayoutEffect, useState } from "react";
import { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Front from "./form/Front";
import MyDocument from "./form/pdf";
import { GoogleGenerativeAI } from "@google/generative-ai";
import withAuth from "@/pages/components/withAuth";
import Access from "@/pages/components/accessToken";
const genAI = new GoogleGenerativeAI("AIzaSyArDcvm4OUPx45Uv-fVGulbsgQYPnIjuM8");

const Assignment = () => {
  const [option, setOption] = useState("chat");
  const [button, setButton] = useState(1);
  const [showPdf, setShowPdf] = useState(false);
  const [download, setDownload] = useState(0);
  const [loading, setLoading] = useState(0);

  const handleOptionClick = (option) => {
    setOption(option);
  };

  const reportTemplateRef = useRef(null);

  const handleDownloadPdf = async (downloadMode) => {
    setLoading(downloadMode);
    setDownload(downloadMode);
    const data = reportTemplateRef.current;
    setTimeout(() => {
      if (downloadMode === 1) {
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
          setLoading(0);
        });
      } else if (downloadMode === 2) {
        const htmlToPdf = `<!DOCTYPE html>
          <html>
          <body>
              ${data}
          </body>
          </html>`;
        if (htmlToPdf) {
          // const canvas = await html2canvas(element);
          // const data = canvas.toDataURL("image/png");
          var Tdoc = new jsPDF("p", "pt", "a4");
          Tdoc.html(data, {
            callback: function (Tdoc) {
              Tdoc.save();
              setLoading(0);
            },
            margin: [32, 200, 60, 25],
          });
        }
      }
    }, 500);
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
    setButton(2);
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
      setButton(3);
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

  const [sssss, setShow] = useState(false);
  useEffect(() => {
    // const session = sessionState;
    // console.log(session);
    // if (!session) {
    //   router.push("/");
    // }
    // localStorage.getItem("verify");
    if (localStorage.getItem("verify") === null) {
      setShow(true);
    }
  }, []);
  return (
    <>
      {sssss ? (
        <Access />
      ) : (
        <div className="assignment-body">
          <Image
            src={"/images/assignment.webp"}
            alt="svg icon"
            className="absolute -right-10 -bottom-5 -z-[999999] opacity-10"
            width={400}
            height={100}
          />
          <div className=" relative mt-2">
            <div className="form-veiw -mt-10  ">
              {showPdf ? (
                <div className="owal w-screen h-[200vh] -mt-52 fixed bg-[#0000009a]"></div>
              ) : null}

              <div
                className={` pdf-view-class right mt-9 fixed  z-50 transition-all max-w-fit duration-700 ${
                  showPdf ? "left-0" : "-left-[530px]"
                }  bg-[#10151d]  max-h-[77vh] max-md:mt-10 overflow-auto `}
              >
                <button
                  onClick={() => setShowPdf(!showPdf)}
                  type="button"
                  class="fixed flex justify-center items-center sm:ml-[33rem] max-sm:left-0 mt-[16rem] group  sm:rounded-e-xl max-sm:rounded-xl !shadow-green-900 transition-all duration-500 hover:!shadow-green-500 w-10 h-20 bg-[#10151d]"
                >
                  <Image
                    src={"/images/icon/right.svg"}
                    width={30}
                    height={30}
                    className={`group-hover:animate-pulse ${
                      showPdf ? "rotate-180" : "rotate-0"
                    }`}
                    alt="icon"
                  />
                </button>
                <div className=" overflow-auto -z-50">
                  <div className=" m-2 sm:w-[518px] max-sm:w-[87vw] text-white bg-black">
                    <div className="max-sm:m-10">
                      <MyDocument
                        receivedValues={receivedValues}
                        message={chatHistory}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="left ml-10  py-10">
                <div className=" mt-0 right-0">
                  <Front valuesToSend={valuesToSend} onSend={handleSend} />
                  <div className="button-section gap-3 mx-7 pb-5 flex flex-col">
                    <div className="chooos flex gap-1 w-full">
                      <button
                        className={`px-2 py-1 ${
                          button === 3 ? "" : "hidden"
                        } border transition-all w-full duration-400 flex justify-center items-center hover:bg-green-950 !border-green-500 rounded-full `}
                        onClick={() => handleDownloadPdf(1)}
                      >
                        <Image
                          src={`/images/icon/${
                            loading === 1 ? "loading.svg" : "pen.svg"
                          }`}
                          className={`${loading === 1 ? "animate-spin" : ""}`}
                          width={20}
                          height={20}
                          alt="icon"
                        />
                        Download
                      </button>
                      <button
                        onClick={() => handleDownloadPdf(2)}
                        className={`px-2 py-1 ${
                          button === 3 ? "" : "hidden"
                        } border transition-all w-full flex justify-center items-center duration-400 hover:bg-green-950 !border-green-500 rounded-full `}
                      >
                        <Image
                          src={`/images/icon/${
                            loading === 2 ? "loading.svg" : "type.svg"
                          }`}
                          className={`${loading === 2 ? "animate-spin" : ""}`}
                          width={20}
                          height={20}
                          alt="icon"
                        />
                        Download
                      </button>
                    </div>
                    <button
                      className={`px-2 py-1 border flex justify-center transition-all duration-400 hover:bg-green-950 !border-green-500 rounded-full `}
                      onClick={genarate}
                    >
                      Genarate PDF
                      {button === 2 ? (
                        <Image
                          className="ml-5 animate-spin"
                          width={20}
                          height={20}
                          src={"/images/icon/loading.svg"}
                          alt="Logo"
                        />
                      ) : (
                        ""
                      )}
                    </button>
                  </div>
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
          <div className="fixed -left-[100rem]">
            <div
              id="pdf"
              className={`${
                download === 1
                  ? "font-[hand1] w-[140mm] text-[#080077] bg-white"
                  : download === 2
                  ? "w-[140mm] text-[#000] bg-white  font-serif"
                  : ""
              }`}
              ref={reportTemplateRef}
            >
              <MyDocument
                receivedValues={receivedValues}
                message={chatHistory}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default withAuth(Assignment);
