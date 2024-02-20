"use client";
import { useSession, signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function LoginBtn() {
  const { data: session } = useSession();
  const route = usePathname();
  const [url, setUrl] = useState("");
  useEffect(() => {
    if (route === "/Profile") {
      setUrl("profile");
    } else {
      setUrl("");
    }
  }, [route]);
  if (session) {
    return (
      <>
        {/* onClick={() => signOut()} */}
        <Link href={"/Profile"}>
          <div className="side-bar-btn group">
            <div className="bar-icon">
              <Image
                src={"/images/icon/profile.svg"}
                alt="svg icon"
                width={50}
                height={50}
                className="side-bar-icon"
              />
            </div>
            <div className="tool-tip group">LogOut</div>
            <div
              className={`side-active ${url === "profile" ? "" : "hidden"}`}
            ></div>
          </div>
        </Link>
      </>
    );
  }
  return (
    <>
      <div onClick={() => signIn()} className="side-bar-btn group">
        <div className="bar-icon">
          <Image
            src={"/images/icon/login.svg"}
            alt="svg icon"
            width={50}
            height={50}
            className="side-bar-icon"
          />
        </div>
        <div className="tool-tip group">LogIn</div>
      </div>
    </>
  );
}
