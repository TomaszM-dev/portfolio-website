import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMdLogIn } from "react-icons/io";
import about from "public/about.png";
import about2 from "public/about2.png";

const HomeAbout = () => {
  return (
    <>
      <div className="flex w-full  gap-5 max-xmd:flex-wrap">
        <Link
          href="/about"
          className="gradientBg rounded-3xl max-sm:rounded-xl w-full  flex flex-col items-center justify-between p-5 px-5 relative group"
        >
          <Image
            width={500}
            height={500}
            className="p-2  mt-2 w-40 object-cover"
            src={about2}
            alt="me"
          ></Image>
          <div className="flex flex-col gap-1 self-start mb-1">
            <span className="uppercase text-text2 text-[0.9rem]">
              More about me
            </span>
            <span className="text-[1.2rem]">Credentials</span>
          </div>
          <Link
            href="/about"
            className=" group-hover:text-text1 group-hover:scale-125 text-text2 text-[2.4rem] absolute bottom-6 right-6  duration-1000   "
          >
            <IoMdLogIn />
          </Link>
        </Link>
      </div>
    </>
  );
};

export default HomeAbout;
