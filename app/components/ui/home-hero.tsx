import { leftAnimationVariant } from "@/app/animations/animations";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import mee from "public/mee.png";
import { IoMdLogIn } from "react-icons/io";

const HomeHero = () => {
  return (
    <motion.div className="flex gap-6 w-full  max-lg:flex-wrap   ">
      <motion.div
        variants={leftAnimationVariant}
        className="text-white flex-[50%] group relative gradientBg rounded-3xl max-sm:rounded-xl px-10 py-2  flex items-center gap-8 group-hover hover:text-text1 max-md:flex-col max-md:gap-4 overflow-hidden"
      >
        <Image
          width={1000}
          height={1000}
          className="w-[13rem] h-[17rem]  object-cover rounded-tl-xl rounded-br-xl max-lg:p-5 max-sm:p-0 max-sm:my-4  "
          src={mee}
          alt="me"
        ></Image>
        <div className="flex flex-col max-md:mb-10">
          <h2 className="uppercase text-text2 ">A web developer</h2>
          <span className="text-[2rem] my-2 leading-[2.1rem]">
            Tomasz Malocha
          </span>
          <span className="text-text2">
            Hello! I am Web Developer based in Poland, Cracow (...)
          </span>
          <Link
            href="/about"
            className="group-hover:text-text1 group-hover:scale-125 transition-all text-text2 text-[2.4rem] absolute bottom-6 right-6  duration-1000 "
          >
            <IoMdLogIn />
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HomeHero;
