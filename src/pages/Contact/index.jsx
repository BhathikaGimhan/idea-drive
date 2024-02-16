/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useEffect, useRef, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import { useSession } from "next-auth/react";

const Contact = () => {
  const form = useRef();
  const [firstName, setFirstName] = useState("");
  const [iconDone, setIconDone] = useState(true);
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  const handleGenarate = (event) => {
    setIconDone(false);
    event.preventDefault();

    // Create the message
    const fullMessage = `First Name: ${firstName}\nEmail: ${email}\nPhone Number: ${phoneNumber}\nService: ${service}`;

    if (
      firstName.trim() === "" ||
      email.trim() === "" ||
      phoneNumber.trim() === "" ||
      service.trim() === ""
    ) {
      setIconDone(true);
      alert("Please fill the form");
    } else {
      // Ai genarated message
      const genAI = new GoogleGenerativeAI(
        "AIzaSyArDcvm4OUPx45Uv-fVGulbsgQYPnIjuM8"
      );

      async function run() {
        // For text-only input, use the gemini-pro model
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        const prompt = `Remember this is Idea Drive company's web site. this is contact us page. this page can client connect with Idea Drive. this is client connected with us ${fullMessage}. please crate message for client and send it to Idea Drive. This is used by customers to purchase services from idea drive. no need letter format. short message is enough.`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        setMessage(text);
      }

      run();
    }
  };

  const sendMail = (e) => {
    e.preventDefault();
    if (
      firstName.trim() === "" ||
      email.trim() === "" ||
      phoneNumber.trim() === "" ||
      service.trim() === "" ||
      message.trim() === ""
    ) {
      alert("Please fill the form");
    } else {
      emailjs
        .sendForm(
          "service_f9a2mb7",
          "template_b4a86pm",
          form.current,
          "2Zz6RgGf2-1k5GJFU"
        )
        .then(
          (result) => {
            console.log(result.text);
            setFirstName("");
            setEmail("");
            setPhoneNumber("");
            setService("");
            setMessage("");
            setIconDone(true);
            alert("Message Sent");
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };
  const { data: session } = useSession();
  useEffect(() => {
    setEmail(session ? session.user.email : "");
    setFirstName(session ? session.user.name : "");
  }, [session]);
  return (
    <div className="z-[99999999999]">
      <div className=" inset-0">
        <div className="h-full -mt-5 rounded-3xl flex flex-col lg:flex-row w-full">
          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-12">
              <div className="h-full backdrop-blur-3xl md:rounded-r-3xl bg-[#0000006c] md:col-span-5 p-10 text-white">
                <p className="mt-1 xl:mt-5 text-sm leading-7 font-regular uppercase">
                  Contact
                </p>
                <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
                  Get In <span className="text-green-600">Touch</span>
                </h3>
                <p className="mt-3 leading-7 text-gray-200">
                  Thank you for considering Idea Drive for your project.
                  We&apos;d love to hear from you and discuss how we can help
                  you achieve your goals.
                </p>

                <div className="flex items-center mt-3">
                  <Image
                    className="h-6 mr-2 text-green-600"
                    src={"images/icon/mail.svg"}
                    width={20}
                    height={20}
                    alt="icon"
                  />
                  <span className="text-sm">ideadrive.info@gmail.com</span>
                </div>
                <div className="flex items-center mt-3">
                  {/* <CallOutlinedIcon className="h-6 mr-2 text-green-600"></CallOutlinedIcon> */}
                  <Image
                    src={"images/icon/call.svg"}
                    width={20}
                    height={20}
                    alt="icon"
                    className="h-6 mr-2 text-green-600"
                  />

                  <span className="text-sm">+94 776 685 719</span>
                </div>
                <div className="flex items-center mt-3">
                  {/* <UpdateOutlinedIcon className="h-6 mr-2 text-green-600"></UpdateOutlinedIcon> */}
                  <Image
                    className="h-6 mr-2 text-green-600"
                    src={"images/icon/time.svg"}
                    width={20}
                    height={20}
                    alt="icon"
                  />

                  <span className="text-sm">24/7</span>
                </div>
              </div>
              <form
                ref={form}
                className="md:col-span-7 p-10"
                onSubmit={sendMail}
              >
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                      for="grid-first-name"
                    >
                      User Name
                    </label>
                    <input
                      className="appearance-none block w-full bg-[#0004] backdrop-blur-3xl text-white border rounded py-1 px-2 mb-3 leading-tight focus:outline-none "
                      id="grid-first-name"
                      name="user_name"
                      type="text"
                      placeholder="Jane"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label
                      className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                      for="grid-last-name"
                    >
                      Email Address
                    </label>
                    <input
                      className="appearance-none block w-full bg-[#0004] backdrop-blur-3xl text-white border border-gray-200 rounded py-1 px-2 leading-tight focus:outline-none  focus:border-gray-500"
                      id="grid-last-name"
                      type="email"
                      name="user_email"
                      placeholder="your_email@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                      for="grid-first-name"
                    >
                      Phone Number
                    </label>
                    <input
                      className="appearance-none block w-full bg-[#0004] backdrop-blur-3xl text-white border rounded py-1 px-2 mb-3 leading-tight focus:outline-none "
                      id="grid-first-name"
                      type="text"
                      name="user_phone"
                      placeholder="+94 123 456 789"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                      for="grid-password"
                    >
                      Email Address
                    </label>
                    <div className="relative transition-all group rounded-lg bg-[#0004] backdrop-blur-3xl overflow-hidden ">
                      {/* < ="h-6 mr-2 text-green-600" /> */}

                      <Image
                        src={"images/icon/down.svg"}
                        width={20}
                        height={20}
                        alt="icon"
                        className="w-6 h-6 absolute text-white right-1 -rotate-45 stroke-pink-100 top-1 group-hover:rotate-0 transition-all duration-300"
                      />
                      <select
                        value={service}
                        name="service"
                        onChange={(e) => setService(e.target.value)}
                        className="appearance-none hover:placeholder-shown:bg-emerald-500 relative bg-transparent ring-0 outline-none border border-neutral-500 text-neutral-100 placeholder-violet-700 text-sm font-bold rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-1"
                      >
                        <option className="bg-[#000]">Hire</option>
                        <option className="bg-[#000]">Web Development</option>
                        <option className="bg-[#000]">
                          Software Development
                        </option>
                        <option className="bg-[#000]">App Development</option>
                        <option className="bg-[#000]">Graphic Design</option>
                        <option className="bg-[#000]">Digital Marketing</option>
                        <option className="bg-[#000]">SEO</option>
                        <option className="bg-[#000]">Join 30% Offer</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                      for="grid-password"
                    >
                      Your Message
                    </label>
                    useEffect
                    <div className="relative">
                      <textarea
                        name="message"
                        value={message}
                        onChange={(e) => {
                          setMessage(e.target.value);
                          if (e.target.value.trim() === "") {
                            setIconDone(true);
                          } else {
                            setIconDone(false);
                          }
                        }}
                        rows="7"
                        className="appearance-none block w-full bg-[#0004] backdrop-blur-3xl text-white border border-gray-200 rounded py-1 px-2 mb-3 leading-tight focus:outline-none  focus:border-gray-500"
                      />
                      <div
                        onClick={handleGenarate}
                        title="Generate message using AI"
                        className={`${
                          iconDone ? "" : "hidden"
                        } absolute right-2 rounded-full transition-all duration-1000 bg-transparent hover:s top-2 cursor-pointer `}
                      >
                        <Image
                          src={"images/icon/aiStar.svg"}
                          width={20}
                          height={20}
                          alt="icon"
                          className="absolute"
                        />
                        <Image
                          src={"images/icon/aiStar.svg"}
                          width={20}
                          height={20}
                          alt="icon"
                          className="animate-ping text-green-500"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between w-full px-3">
                    <button
                      className="shadow bg-green-600 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                      type="submit"
                    >
                      Send
                    </button>
                    <button
                      className="shadow bg-rose-600 hover:bg-rose-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                      type="button"
                      onClick={() => {
                        setFirstName("");
                        setEmail("");
                        setPhoneNumber("");
                        setService("");
                        setMessage("");
                        setIconDone(true);
                      }}
                    >
                      Clear
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="fixed max-md:hidden -z-10 right-0 opacity-10 bottom-0 max-lg:w-96 lg:w-[35rem]">
          {/* <img src="../../assets/images/contactus.png" alt="" loading="lazy" /> */}
          <Image
            src={"/images/contactus.png"}
            width={500}
            height={500}
            alt="icon"
          />
        </div>
      </div>
    </div>
  );
};
export default Contact;
