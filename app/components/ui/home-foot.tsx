import Link from "next/link";
import React from "react";
import { IoMdLogIn } from "react-icons/io";

const HomeFoot = () => {
  return (
    <>
      <div className="gradientBg flex-[50%] max-lg:justify-center rounded-3xl max-sm:rounded-xl w-full  flex  max-xmd:items-center    gap-6 p-5 px-5 relative max-md:flex-col">
        <div className="flex flex-col items-center gradientBg max-md:w-[70%] px-10 py-5 rounded-3xl max-sm:rounded-xl ">
          <span className="text-[2rem] mb-3 ">03+</span>
          <span className="text-text2 uppercase font-bold text-center">
            years of studing
          </span>
          <span className="text-text2 uppercase font-bold">experience</span>
        </div>
        <div className="flex flex-col items-center gradientBg max-md:w-[70%] px-10 py-5 rounded-3xl max-sm:rounded-xl ">
          <span className="text-[2rem] mb-3">02</span>
          <span className="text-text2 uppercase font-bold">Clients</span>
          <span className="text-text2 uppercase font-bold">worldwide</span>
        </div>
        <div className="flex flex-col items-center gradientBg max-md:w-[70%] px-10 py-5 rounded-3xl max-sm:rounded-xl ">
          <span className="text-[2rem] mb-3">+11</span>
          <span className="text-text2 uppercase font-bold">Total</span>
          <span className="text-text2 uppercase font-bold">projects</span>
        </div>
      </div>
      <div className="group gradientBg flex-[50%] rounded-3xl max-sm:rounded-xl w-full  flex flex-col    p-5 px-5 relative">
        <h2 className="text-[2rem] mt-20 max-xmd:mt-10 ">Let's</h2>
        <h2 className="text-[2rem] ">work together.</h2>
        <Link
          href="/contact"
          className="group-hover:text-text1 group-hover:scale-125
duration-1000  text-text2 text-[2.4rem] absolute bottom-6 right-6  "
        >
          <IoMdLogIn />
        </Link>
      </div>
    </>
  );
};

export default HomeFoot;
