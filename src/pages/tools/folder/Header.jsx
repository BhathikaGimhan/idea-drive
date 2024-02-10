"use client";

import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Header() {
  const [url, setUrl] = useState("");
  const router = useRouter();
  const currentRoute = usePathname();

  useEffect(() => {
    if (currentRoute === "/") {
      setUrl("");
    } else if (currentRoute === "/chat") {
      setUrl(" / QT Bot");
    } else if (currentRoute === "/chat/option/assignment") {
      setUrl(" / Assignment-Experimental");
    } else {
      setUrl(currentRoute);
    }
  }, [currentRoute]);

  const goBack = () => {
    if (currentRoute !== "/") {
      router.back();
    }
  };

  return (
    <div className="top-section fixed z-[99999]">
      <div className="round-btn md:absolute">
        <button
          className={`close-btn ${
            currentRoute == "/"
              ? "cursor-not-allowed  !border-[#e59696]"
              : "cursor-pointer !border-[#ff7070]"
          }`}
          onClick={goBack}
        ></button>
        <span className="maximize-btn"> </span>
        <span className="minimize-btn"> </span>
      </div>
      <div className="tabs">
        <h2 className="font-bold whitespace-nowrap"> Idea Drive{url}</h2>
      </div>
    </div>
  );
}
