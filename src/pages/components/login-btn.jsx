"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

export default function LoginBtn() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <div onClick={() => signOut()} className="side-bar-btn group">
          <div className="bar-icon">
            <Image
              src={"/images/icon/logout.svg"}
              alt="svg icon"
              width={50}
              height={50}
              className="side-bar-icon"
            />
          </div>
          <div className="tool-tip group">LogOut</div>
          <div className="side-active"></div>
        </div>
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
        <div className="side-active"></div>
      </div>
    </>
  );
}
