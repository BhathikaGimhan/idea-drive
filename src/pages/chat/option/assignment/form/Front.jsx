import React from "react";

export default function Front({ valuesToSend, onSend }) {
  const handleChange = (name, value) => {
    const updatedValues = { ...valuesToSend, [name]: value };
    onSend(updatedValues);
  };
  return (
    <div>
      <div className="front-body min-w-full ">
        <div className="form mx-7 ">
          <div className=" ">
            <div className="flex flex-wrap  mb-6">
              <div className="w-full md:w-1/2 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-green-50 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  Full Name:
                </label>
                <input
                  className="appearance-none block w-full bg-transparent text-green-50 border border-green-900 rounded py-3 px-4 mb-3 leading-tight focus:outline-none "
                  value={valuesToSend?.name || ""}
                  onChange={(e) => handleChange("name", e.target.value)}
                  type="text"
                  placeholder="Jane Done"
                />
              </div>
              <div className="w-full md:w-1/2  md:pl-3">
                <label
                  className="block uppercase tracking-wide text-green-50 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Reg. No:
                </label>
                <input
                  className="appearance-none block w-full bg-transparent text-green-50 border border-green-900 rounded py-3 px-4 leading-tight focus:outline-none  focus:border-green-500"
                  value={valuesToSend?.regNo || ""}
                  onChange={(e) => handleChange("regNo", e.target.value)}
                  type="text"
                  placeholder="19/CS/001"
                />
              </div>
            </div>

            <div className="flex flex-wrap  mb-6">
              <div className="w-full md:w-[66%] mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-green-50 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  Subject Title:
                </label>
                <input
                  className="appearance-none block w-full bg-transparent text-green-50 border border-green-900 rounded py-3 px-4 mb-3 leading-tight focus:outline-none "
                  value={valuesToSend?.subject || ""}
                  onChange={(e) => handleChange("subject", e.target.value)}
                  type="text"
                  placeholder="Object Oriented Programming"
                />
              </div>
              <div className="w-full md:w-1/3  md:pl-3">
                <label
                  className="block uppercase tracking-wide text-green-50 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Subject Code:
                </label>
                <input
                  className="appearance-none block w-full bg-transparent text-green-50 border border-green-900 rounded py-3 px-4 leading-tight focus:outline-none  focus:border-green-500"
                  value={valuesToSend?.code || ""}
                  onChange={(e) => handleChange("code", e.target.value)}
                  type="text"
                  placeholder="CS-301"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-green-50 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Assignment Title:
                </label>
                <input
                  className="appearance-none block w-full bg-transparent text-green-50 border border-green-900 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus:border-green-500"
                  value={valuesToSend?.assignment || ""}
                  onChange={(e) => handleChange("assignment", e.target.value)}
                  type="text"
                  placeholder="Assignment 1 or Name of Assignment"
                />
                {/* <p className="text-green-300 text-xs italic">
                  Make it as long and as crazy as youlike
                </p> */}
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-3">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-green-50 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Assignment Title
                </label>
                <textarea
                  className=" appearance-none block w-full bg-transparent text-green-50 border border-green-900 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus:border-green-500"
                  value={valuesToSend?.ai || ""}
                  onChange={(e) => handleChange("ai", e.target.value)}
                  type="text"
                  placeholder="Assignment 1 or Name of Assignment"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
