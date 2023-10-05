import { rightAnimationVariant } from "@/app/animations/animations";
import Link from "next/link";
import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { motion } from "framer-motion";
import { IoMdLogIn } from "react-icons/io";

const HomeContact = () => {
  return (
    <motion.div
      variants={rightAnimationVariant}
      className="group gradientBg flex-[25%] rounded-3xl  max-sm:rounded-xl w-full  flex flex-col items-center justify-between p-5 px-5 relative"
    >
      <div className="flex gap-5 mt-8 text-[2.4rem]">
        <Link
          href="https://github.com/TomaszM-dev"
          target="_blank"
          className="hover:scale-125 hover:translate-y-[-2px] duration-500 transition-all p-4 rounded-full gradientBg cursor-pointer"
        >
          <BsGithub />
        </Link>
        <Link
          href="https://www.linkedin.com/in/tomaszmalocha/"
          target="_blank"
          className="hover:scale-125 hover:translate-y-[-2px] duration-500 transition-all p-4 rounded-full gradientBg cursor-pointer "
        >
          <BsLinkedin />
        </Link>
      </div>
      <div className="flex flex-col gap-1 self-start mt-6">
        <span className="uppercase text-text2 text-[0.9rem]">Stay with me</span>
        <span className="text-[1.2rem]">Profiles</span>
      </div>
      <Link
        href="/contact"
        className="group-hover:text-text1 group-hover:scale-125
duration-1000  text-text2 text-[2.4rem] absolute bottom-6 right-6  "
      >
        <IoMdLogIn />
      </Link>
    </motion.div>
  );
};

export default HomeContact;
