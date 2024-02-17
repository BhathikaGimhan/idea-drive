import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <div className="m-10 absolute top-10">
      <div className="home-body group">
        <div className="card ">
          <div className="icon ">
            <Image
              src={"/images/icon/web.svg"}
              width={20}
              height={20}
              alt="icon"
              className=" image group-hover:shadow-[0px_0px_10px#2aff2a] shadow-[3px_3px_10px#10cc1060]"
            />
          </div>
          <div className="details">
            <h1 className=" text-green-100 group-hover:text-white">
              Web Site Development
            </h1>
            <p className="text-green-100 group-hover:text-white">
              Get a responsive website that grows your business! Idea Drive: Web
              Design & Development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
