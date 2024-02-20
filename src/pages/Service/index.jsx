"use client";
import Link from "next/link";
import Image from "next/image";

const ServiceCard = ({ iconSrc, title, description }) => (
  <div className="card group">
    <div className="icon">
      <Link href={"/Contact"}>
        <Image
          src={iconSrc}
          width={20}
          height={20}
          alt="icon"
          className="image group-hover:shadow-[0px_0px_10px#2aff2a] shadow-[3px_3px_10px#10cc1060]"
        />
      </Link>
    </div>
    <div className="details">
      <h1 className="text-green-100 group-hover:text-white">{title}</h1>
      <p className="text-green-100 group-hover:text-white">{description}</p>
    </div>
  </div>
);

export default function Service() {
  const services = [
    {
      iconSrc: "/images/icon/web.svg",
      title: "Website Development",
      description:
        "Get a responsive website that grows your business! Idea Drive : Web Design & Development.",
    },
    {
      iconSrc: "/images/icon/app.svg",
      title: "App Development",
      description:
        "Get a responsive app that grows your business! Idea Drive : App Design & Development.",
    },
    {
      iconSrc: "/images/icon/software.svg",
      title: "Software Development",
      description:
        "Get a responsive software that grows your business! Idea Drive : Software Design & Development.",
    },
    {
      iconSrc: "/images/icon/grapic.svg",
      title: "Graphic Design",
      description:
        "Get responsive graphics that enhance your business! Idea Drive : Graphic Design & Development.",
    },
    {
      iconSrc: "/images/icon/seo.svg",
      title: "SEO Services",
      description:
        "Get SEO services that boost your online presence! Idea Drive : SEO Strategy & Implementation.",
    },
  ];

  return (
    <div className="m-10">
      <div className="home-body">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
}
