"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

import Link from "next/link";

export default function Bot() {
  const currentRoute = usePathname();
  const routes = useRouter();
  const { data: session } = useSession();

  const [message, setMessage] = useState(false);
  const [back, setBack] = useState("");
  const [chatRout, setChatRout] = useState(false);
  const handleClose = () => {
    setMessage(false);
  };
  const handleOpen = () => {
    setChatRout(!chatRout);
    if (!chatRout) {
      setBack(usePathname);
      routes.push("/chat");
    } else {
      setBack("/chat");
    }
    // const j = routes.back();
  };
  useEffect(() => {
    if (currentRoute == "/chat") {
      setChatRout(true);
    } else {
      setTimeout(() => {
        setMessage(true);
      }, 2000);
    }
  }, []);

  return (
    <>
      <Link href={back}>
        <Image
          onClick={handleOpen}
          draggable="false"
          src="/images/assistan.png"
          className={`${
            currentRoute == "/chat" || currentRoute == "/chat/option/assignment"
              ? "-right-3"
              : "-right-12"
          } ai-bot transition-all z-30 duration-1000 cursor-pointer`}
          width={100}
          height={300}
          alt="QT bot image"
        />
      </Link>

      <div
        className={`chat-box  ${
          message ? "" : "-mt-96"
        } z-20 transition-all duration-700 fixed  top-8 md:max-h-[400px] overflow-auto  right-[2rem] p-4 rounded-s-3xl rounded-b-3xl border backdrop-blur-md !border-green-950 bg-[#ffffff21] md:w-96 h-fit `}
      >
        <Image
          onClick={handleClose}
          width={27}
          height={27}
          alt="svg icon"
          src={"/images/icon/close.svg"}
          className="-mt-2 "
        />

        <div className="button-section flex gap-4">
          {session ? (
            <p>
              Hello {session.user.name} im QT bot... <br />
              you can chat with me. please click me for chat.
            </p>
          ) : (
            <p>
              . im QT bot... <br />
              you can chat with me. please click me for chat.
            </p>
          )}
        </div>
      </div>
    </>
  );
}
