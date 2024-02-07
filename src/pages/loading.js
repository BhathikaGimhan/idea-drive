"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Loading() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const startLoading = () => setLoading(true);
    const stopLoading = () => setLoading(false);

    // Listen for router events to start and stop loading
    router.events.on("routeChangeStart", startLoading);
    router.events.on("routeChangeComplete", stopLoading);
    router.events.on("routeChangeError", stopLoading);

    // Remove event listeners on unmount
    return () => {
      router.events.off("routeChangeStart", startLoading);
      router.events.off("routeChangeComplete", stopLoading);
      router.events.off("routeChangeError", stopLoading);
    };
  }, []);
  return (
    <main
      className={`flex min-h-fit flex-col  -mt-52 items-center justify-between ${
        loading ? "" : "hidden"
      } `}
    >
      <div className="relative flex place-items-center animate-pulse before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-0 after:bg-gradient-conic after:from-green-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-green-700/10 after:dark:from-green-900  after:dark:via-[#1c8b12]/40 before:lg:h-[360px]">
        <Image
          className="relative  animate-pulse"
          src="/images/idea-drive-logo.png"
          alt="Next.js Logo"
          width={100}
          height={37}
          priority
        />
      </div>

      <div className=" absolute mt-52 text-center">
        <h2 className={`mb-3 text-2xl ml-14 relative font-semibold flex`}>
          Idea Drive
          <Image
            className="relative animate-spin"
            src="/images/icon/loading.svg"
            alt="Next.js Logo"
            width={30}
            height={37}
            priority
          />
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          {/* We appreciate your patience while our website is loading. We're working hard to bring you the best possible experience, and we're confident that it will be worth the wait.

In the meantime, here's a fun animation to keep you entertained:

[Insert loading animation here] */}
          Please note that the loading time may vary depending on your internet
          speed and the number of visitors on the website. <br /> Thank you for
          your understanding!
        </p>
      </div>
    </main>
  );
}
