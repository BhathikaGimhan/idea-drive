import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function WaitingList() {
  const { data: session } = useSession();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const input = { data: postData };
      const data = {
        data: input,
        route: "notice",
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
      }

      const responseData = await response.json();
      fetchData();
      setResponse(`Document added successfully with ID: ${responseData.id}`);
    } catch (error) {
      setResponse(`Error: ${error.message}`);
    }
  };
  return (
    <div className=" m-auto">
      {session ? (
        <div class="flex flex-col mt-10 items-center justify-center dark">
          <div class="w-full sm:max-w-md max-md:w-full rounded-lg shadow-md p-6">
            <h2 class="text-2xl font-bold text-gray-200 mb-4">Join waitlist</h2>

            <form class="flex flex-col">
              <input
                placeholder="User name"
                class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                value={session.user.name}
                disabled
              />
              <input
                placeholder="User email"
                class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                value={session.user.email}
                disabled
              />
              <div className={`verivicaion w-full flex flex-col`}>
                <hr className="mb-4" />
                <input
                  placeholder="Verification Code"
                  class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-green-500 transition ease-in-out duration-150"
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
                  class="bg-gradient-to-r  from-green-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-green-600 hover:to-green-600 transition  duration-700"
                  type="submit"
                >
                  Join
                </button>
              </div>
            </form>

            <div class="flex justify-center mt-4"></div>
          </div>
        </div>
      ) : (
        <h1>login</h1>
      )}
    </div>
  );
}
