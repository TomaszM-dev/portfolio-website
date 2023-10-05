import { upAnimationVariant } from "@/app/animations/animations";
import Image from "next/image";
import React from "react";
import { IoMdLogIn } from "react-icons/io";
import { motion } from "framer-motion";
import cv from "public/cv.png";

const HomeCv = () => {
  return (
    <motion.div
      variants={upAnimationVariant}
      className="group gradientBg flex-[25%] max-sm:rounded-xl rounded-3xl w-full  flex flex-col items-center justify-between p-5 px-5 relative"
    >
      <Image
        width={500}
        height={500}
        className="w-[8rem]"
        src={cv}
        alt="me"
      ></Image>
      <div className="flex flex-col gap-1 self-start mt-6">
        <span className="uppercase text-text2 text-[0.9rem]">My Cv</span>
        <span className="text-[1.2rem]">Download</span>
      </div>
      <a
        href="/TMalochaCV.pdf"
        download="T-MalochaCV"
        className="group-hover:text-text1 group-hover:scale-125
duration-1000  text-text2 text-[2.4rem] absolute bottom-6 right-6  "
      >
        <IoMdLogIn />
      </a>
    </motion.div>
  );
};

export default HomeCv;
