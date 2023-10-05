import React from "react";
import { motion } from "framer-motion";
import { downAnimationVariant } from "@/app/animations/animations";
import {
  SiFigma,
  SiPostgresql,
  SiPrisma,
  SiStripe,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import Link from "next/link";
import { IoMdLogIn } from "react-icons/io";

const HomeSkills = () => {
  return (
    <motion.div
      variants={downAnimationVariant}
      className=" group gradientBg flex-[50%] rounded-3xl max-sm:rounded-xl w-full  flex flex-col items-center gap-10 p-5 px-5 relative"
    >
      <div className="flex gap-8 mt-16 text-[2.4rem] rounded-lg max-md:flex-wrap max-md:items-center max-md:justify-center ">
        <SiFigma />
        <SiPostgresql />
        <SiPrisma />
        <SiStripe />
        <SiTailwindcss />
        <SiTypescript />
        <TbBrandNextjs />
      </div>
      <div className="flex flex-col gap-1 self-start mt-6">
        <span className="uppercase text-text2 text-[0.9rem]">Skills</span>
        <span className="text-[1.2rem]">My favorite tech stack </span>
      </div>
      <Link
        href="/skills"
        className="group-hover:text-text1 group-hover:scale-125
duration-1000  text-text2 text-[2.4rem] absolute bottom-6 right-6  "
      >
        <IoMdLogIn />
      </Link>
    </motion.div>
  );
};

export default HomeSkills;
