"use client";
import { useSession, signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function LoginBtn() {
  const { data: session } = useSession();
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
            <div className="side-active"></div>
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
        <div className="side-active"></div>
      </div>
    </>
  );
}
