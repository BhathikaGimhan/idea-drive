import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

export default function WaitingList() {
  const { data: session } = useSession();
  const [name, setName] = useState(session ? session.user.name : "");
  const [email, setEmail] = useState(session ? session.user.email : "");
  const [user, setUser] = useState("user");
  const [code, setCode] = useState("");
  const [response, setResponse] = useState(0);
  const path = usePathname();

  const [verify, setVerify] = useState(false);
  const [xxx, setXXX] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch("/api/firebase/waiting-get");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonData = await response.json();
      setXXX(jsonData[0].id);
      setVerify(true);
      // setLoading(false);
    } catch (error) {
      console.log(error.message);
      // setLoading(false);
    }
  };
  const router = useRouter();

  const handleVerify = (event) => {
    // Save data to local storage
    event.preventDefault();
    if (xxx === code) {
      setResponse(2);
      setCode(code);
      localStorage.setItem("verify", JSON.stringify(code));
      setTimeout(() => {
        router.reload(path);
      }, 1000);

      // console.log(path);
    } else {
      setResponse(9);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const handleSubmit = async (event) => {
    setResponse(2);
    event.preventDefault();

    try {
      const input = { name: name, email: email, user: user, code: code };
      const data = {
        data: input,
        route: "waiting",
      };
      const response = await fetch("/api/firebase/post-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to add document");
      } else {
        setResponse(3);
        fetchData();
      }
    } catch (error) {
      setResponse(9);
    }
  };
  return (
    <div className=" m-auto mb-10 -mt-40">
      {session ? (
        <div className="flex flex-col mt-10 items-center justify-center dark">
          <div className="w-full sm:max-w-md max-md:w-full rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-200 mb-4">
              Join waitlist
            </h2>

            <div className="flex flex-col">
              <input
                placeholder="User name"
                className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                value={session.user.name}
                disabled
              />
              <input
                placeholder="User email"
                className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                value={session.user.email}
                disabled
              />
              <div className={`verivicaion w-full flex flex-col`}>
                {verify ? (
                  <>
                    <hr className="mb-4" />
                    <input
                      placeholder="Verification Code"
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                      className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-green-500 transition ease-in-out duration-150"
                      type="text"
                    />
                    <p className="text-green-300 text-xs -mt-3 italic">
                      Check if your{" "}
                      <Link
                        className="text-white underline font-medium hover:text-green-500"
                        href={`/Profile`}
                      >
                        profile
                      </Link>{" "}
                      <br /> verification code is available
                    </p>
                    <button
                      onClick={handleVerify}
                      className="bg-gradient-to-r flex text-center justify-center items-center m-auto w-full from-green-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-green-600 hover:to-green-600 transition  duration-700"
                      type="submit"
                    >
                      Verify
                      {response === 2 ? (
                        <Image
                          src={"/images/icon/loading.svg"}
                          width={20}
                          height={20}
                          alt="icon"
                          className="animate-spin -mr-6 ml-4"
                        />
                      ) : response === 3 ? (
                        <Image
                          src={"/images/icon/done.svg"}
                          width={20}
                          height={20}
                          alt="icon"
                          className="animate-bounce  -mr-6 ml-4"
                        />
                      ) : response === 9 ? (
                        <Image
                          src={"/images/icon/error.svg"}
                          width={20}
                          height={20}
                          alt="icon"
                          className="animate-ping -mr-6 ml-4"
                        />
                      ) : null}
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={handleSubmit}
                      className="bg-gradient-to-r flex text-center justify-center items-center m-auto w-full from-green-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-green-600 hover:to-green-600 transition  duration-700"
                      type="submit"
                    >
                      Join
                      {response === 2 ? (
                        <Image
                          src={"/images/icon/loading.svg"}
                          width={20}
                          height={20}
                          alt="icon"
                          className="animate-spin -mr-6 ml-4"
                        />
                      ) : response === 3 ? (
                        <Image
                          src={"/images/icon/done.svg"}
                          width={20}
                          height={20}
                          alt="icon"
                          className="animate-bounce  -mr-6 ml-4"
                        />
                      ) : response === 9 ? (
                        <Image
                          src={"/images/icon/error.svg"}
                          width={20}
                          height={20}
                          alt="icon"
                          className="animate-ping -mr-6 ml-4"
                        />
                      ) : null}
                    </button>
                  </>
                )}
              </div>
            </div>

            <div className="flex justify-center mt-4"></div>
          </div>
        </div>
      ) : (
        <h1>login</h1>
      )}
    </div>
  );
}
