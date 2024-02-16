import React from "react";
import Image from "next/image";

export default function ComingSoon() {
  return (
    <div>
      <div className="coming-soon border !border-green-950 rounded-3xl mr-10">
        <div className="body flex mt-5 flex-col justify-center items-center h-[50vh] ">
          <h2 className=" font-bold text-center animate-[pulse_1.5s_0s_ease-in-out_infinite] font-sans">
            Your Wallet is <br />
            {" </>"} Under Development {" </>"}
          </h2>
          <div className="w-full -z-[9999] h-full text-xl font-extrabold flex flex-col justify-center items-center m-auto">
            <div className="dev">
              <div class="p-4  max-md:w-72 md:w-96 mx-auto">
                <div class="animate-pulse flex space-x-4">
                  <div class="flex-1 space-y-6 py-1">
                    <div class="grid grid-cols-3 gap-4">
                      <div class="h-2 bg-slate-700 rounded animate-[pulse_1.5s_0.1s_ease-in-out_infinite]"></div>
                      <div class="h-2 w-2/5 bg-slate-700 rounded animate-[pulse_1.5s_0.3s_ease-in-out_infinite]"></div>
                    </div>
                    <div class="h-2 bg-slate-700 rounded col-span-1 animate-[pulse_1.5s_0.5s_ease-in-out_infinite]"></div>
                    <div class="space-y-5">
                      <div class="grid grid-cols-3 gap-4">
                        <div class="h-2 bg-slate-700 rounded col-span-2 animate-[pulse_1.5s_0.7s_ease-in-out_infinite]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h1 className="font-sans text-sm text-center w-[80%]">
              Our earning method is currently under development to bring you the
              best possible experience. Stay tuned for updates on how you can
              start earning soon
            </h1>
            <div className="dev">
              <div class="p-4 max-md:w-72 md:w-96 mx-auto">
                <div class="aflex space-x-4">
                  <div class="flex-1 space-y-6 py-1">
                    <div class="h-2 w-2/5 bg-slate-700 rounded animate-[pulse_1.5s_0.2s_ease-in-out_infinite]"></div>
                    <div class="space-y-5">
                      <div class="grid grid-cols-3 gap-4">
                        <div class="h-2 bg-slate-700 rounded col-span-2 animate-[pulse_1.5s_0.4s_ease-in-out_infinite]"></div>
                        <div class="h-2 bg-slate-700 rounded col-span-1 animate-[pulse_1.5s_0.6s_ease-in-out_infinite]"></div>
                      </div>
                      <div class="h-2 bg-slate-700 rounded animate-[pulse_1.5s_0.8s_ease-in-out_infinite]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
