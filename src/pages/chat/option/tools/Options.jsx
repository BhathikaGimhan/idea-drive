"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Options({ handleClick }) {
  const currentRoute = usePathname();
  const [show, setShow] = useState(true);
  const tiggerShow = () => {
    setShow(!show);
  };
  return (
    <>
      <button onClick={tiggerShow} className=" show-option ">
        <Image
          src="/images/icon/add.svg"
          width={40}
          height={40}
          alt="svg icon"
          className={`rounded-full mt-2 -ml-5 transition-all duration-300 absolute ${
            show ? "" : "rotate-45"
          }`}
        />
      </button>
      <div
        className={`add-items transition-all duration-300 ${
          show ? "-left-40" : "left-0"
        }`}
      >
        <button className="add-chat-btn group">
          <Image
            src="/images/icon/image-add.svg"
            width={30}
            height={30}
            alt="svg icon"
            onClick={() => {
              handleClick("image");
              setShow(!show);
            }}
          />
          <label htmlFor="image" className=" tool-tip-chat group ">
            Add Image
          </label>
        </button>

        <button className="add-chat-btn group">
          <Link href={"/chat/option/assignment"}>
            <Image
              src="/images/icon/assignment.svg"
              width={30}
              height={30}
              alt="svg icon"
              onClick={() => {
                handleClick("assignment");
                setShow(!show);
              }}
            />
            <label htmlFor="image" className=" tool-tip-chat group">
              Assignment
            </label>
          </Link>
        </button>
        {currentRoute == "/chat" ? (
          <button className="add-chat-btn group">
            <Image
              src="/images/icon/translate.svg"
              width={30}
              height={30}
              alt="svg icon"
              onClick={() => {
                handleClick("translate");
                setShow(!show);
              }}
            />
            <label htmlFor="image" className=" tool-tip-chat group">
              Translate
            </label>
          </button>
        ) : (
          ""
        )}
        <button className="add-chat-btn group">
          <Link href={"/chat"}>
            <Image
              src="/images/icon/chat.svg"
              width={30}
              height={30}
              alt="svg icon"
              onClick={() => {
                setShow(!show);
              }}
            />
            <label htmlFor="image" className=" tool-tip-chat group">
              Chat
            </label>
          </Link>
        </button>
      </div>
    </>
  );
}
