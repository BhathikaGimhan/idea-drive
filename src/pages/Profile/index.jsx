"use client";
import React from "react";
import Image from "next/image";
import { useSession, signOut, signIn } from "next-auth/react";

export default function index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data: session } = useSession();

  return (
    <>
      <div className="profile-body flex max-md:flex-col justify-center items-center flex-wrap">
        <div className="profile max-md:w-full md:w-2/5 max-md:mt-20 flex flex-col justify-center items-center">
          <div className="ditail font-sans md:fixed flex flex-col border !border-green-950 p-10 rounded-3xl gap-8 ">
            <div className="user-profile w-full md:-ml-10 md:absolute justify-center items-center md:-mt-20 z-40">
              {session ? (
                <Image
                  src={session.user.image}
                  alt="avatar"
                  width={60}
                  height={60}
                  className="rounded-full md:m-auto"
                />
              ) : (
                <>
                  <div className="prfile w-16 h-16 md:m-auto rounded-full bg-green-500"></div>
                </>
              )}
            </div>
            <div className="user">
              <h2 className="">Name: </h2>
              <h1 className=" font-bold">
                {session ? session.user.name : "Idea Drive"}
              </h1>
            </div>
            <div className="email">
              <h2 className="">Email: </h2>
              <h2 className=" font-bold">
                {session ? session.user.email : "ideadrive.info@gmail.com"}
              </h2>
            </div>
            <div className="verification">
              <h2 className="">Verification Code: </h2>
              <h2 className=" font-bold">XXXXXXX</h2>
            </div>
            <div className="role">
              <h2 className="">Privilege : </h2>
              <h2 className=" font-bold">Super Admin</h2>
            </div>
            <div className="logout">
              {session ? (
                <button
                  className="px-4 py-2 flex w-full justify-center items-center m-auto bg-red-700 rounded-xl"
                  onClick={() => signOut()}
                >
                  Log out
                  <Image
                    src={"/images/icon/logout.svg"}
                    width={20}
                    height={20}
                    alt="icon"
                    className="ml-4"
                  />
                </button>
              ) : (
                <button
                  className="px-4 py-2 flex w-full justify-center items-center m-auto bg-green-700 rounded-xl"
                  onClick={() => signIn()}
                >
                  Log in
                  <Image
                    src={"/images/icon/login.svg"}
                    width={20}
                    height={20}
                    alt="icon"
                    className="ml-4"
                  />
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="earning max-md:w-full md:w-[60%] bg-white h-28"></div>
      </div>
    </>
    // <div className="flex justify-center">
    //   <div className="group before:hover:scale-95 before:hover:h-72 before:hover:w-80 before:hover:h-44 before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-sky-200 via-hreen-200 to-green-700 before:absolute before:top-0 w-80 h-72 relative bg-transparent flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
    //     <div className="w-28 h-28 bg-blue-700 mt-8 rounded-full border-4 border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-24  group-hover:-translate-y-20 transition-all duration-500">
    //       {session ? (
    //         <Image
    //           width={200}
    //           height={200}
    //           alt="avatar"
    //           src={image}
    //           className="rounded-full bottom-0 w-20 h-20"
    //         />
    //       ) : (
    //         <span className="text-2xl font-semibold">Plese Login</span>
    //       )}
    //     </div>
    //     <div className="z-10  group-hover:-translate-y-10 transition-all duration-500">
    //       {session ? (
    //         <span className="text-2xl font-semibold">{session.user.email}</span>
    //       ) : (
    //         <span className="text-2xl font-semibold">Plese Login</span>
    //       )}
    //       <p>Support Specialist</p>
    //     </div>
    //     <a
    //       className="bg-blue-700 px-4 py-1 text-slate-50 rounded-md z-10 hover:scale-125 transition-all duration-500 hover:bg-blue-500"
    //       href="#"
    //     >
    //       Folow
    //     </a>
    //   </div>
    // </div>
  );
}
