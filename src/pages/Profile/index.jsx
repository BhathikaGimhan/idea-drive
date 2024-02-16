"use client";
import { useLayoutEffect, useState } from "react";
import Image from "next/image";
import { useSession, signOut, signIn } from "next-auth/react";
import ComingSoon from "../components/ComingSoon";
import SuperAdmin from "../components/SuperAdmin";
import Login from "../components/Login";

export default function index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data: session } = useSession();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isAdmin, setAdmin] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [code, setCode] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [role, setRole] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useLayoutEffect(() => {
    fetchData();
    const isAdmin = session
      ? session.user.email === "bgmaduragoda@gmail.com"
        ? "admin"
        : "user"
      : "login";

    setAdmin(isAdmin);
  }, [session]);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/firebase/waiting-get");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonData = await response.json();
      setCode(jsonData[0].code);
      setRole(jsonData[0].user);
      // setVerify(true);
      // setLoading(false);
    } catch (error) {
      console.log(error.message);
      // setLoading(false);
    }
  };

  return (
    <>
      <div className="profile-body flex max-md:flex-col justify-center items-center flex-wrap">
        <div className="profile max-md:w-full md:w-2/5 max-md:mt-10 flex flex-col justify-center items-center">
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
              <h2 className=" font-bold">{code === "" ? "XXXXXXXXX" : code}</h2>
            </div>
            <div className="role">
              <h2 className="">Privilege : </h2>
              <h2 className=" font-bold">{role}</h2>
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
        <div className="earning max-md:w-full md:w-[60%] max-md:mt-10 flex flex-col justify-center items-center m-auto  h-full rounded-3xl max-md:mb-36">
          {isAdmin === "user" ? (
            <ComingSoon />
          ) : isAdmin === "admin" ? (
            <SuperAdmin />
          ) : isAdmin === "login" ? (
            // <Login />
            <ComingSoon />
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
