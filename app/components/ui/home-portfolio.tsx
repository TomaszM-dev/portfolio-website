import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMdLogIn } from "react-icons/io";
import work from "public/work.png";
import portfolio from "public/portfolio.png";

const HomePortfolio = () => {
  return (
    <Link
      href="/portfolio"
      className="gradientBg rounded-3xl max-sm:rounded-xl w-full  flex flex-col items-center justify-between  group p-5 px-5 relative max-xmd:flex-wrap"
    >
      <Image
        width={500}
        height={500}
        className="w-40 h-40"
        src={portfolio}
        alt="me"
      ></Image>
      <div className="flex flex-col gap-1 self-start mb-1">
        <span className="uppercase text-text2 text-[0.9rem]">My work</span>
        <span className="text-[1.2rem]">Portfolio</span>
      </div>
      <Link
        href="/portfolio"
        className="group-hover:text-text1 group-hover:scale-125
                duration-1000  text-text2 text-[2.4rem] absolute bottom-6 right-6  "
      >
        <IoMdLogIn />
      </Link>
    </Link>
  );
};

export default HomePortfolio;
