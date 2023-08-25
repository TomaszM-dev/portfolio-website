"use client";
import React from "react";
import Image from "@/node_modules/next/image";
import Link from "@/node_modules/next/link";
import about from "public/about.png";
import me from "public/me2.png";
import { IoMdLogIn } from "react-icons/io";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import { easeInOut } from "framer-motion";
import {
  leftAnimationVariant,
  rightAnimationVariant,
  upAnimationVariant,
  downAnimationVariant,
  scaleAnimationVariant,
} from "../animations/animations";

const About = () => {
  return (
    <motion.div
      initial={"offscreen"}
      whileInView={"onscreen"}
      transition={{ staggerChildren: 0.3 }}
      className="w-full  my-10 flex flex-col gap-6 "
    >
      <div className="flex gap-6 w-full  max-xmd:flex-wrap max-xmd:flex-col-reverse   ">
        <motion.div
          variants={scaleAnimationVariant}
          className="gradientBg rounded-3xl flex flex-[30%]  max-xmd:flex-[100%] justify-center "
        >
          <Image
            width={700}
            height={700}
            className="w-full h-full max-lg:w-[22rem] object-cover  rounded-3xl p-4 "
            src={me}
            alt="me"
          ></Image>
        </motion.div>
        <motion.div
          variants={upAnimationVariant}
          className="flex-[70%] flex flex-col  "
        >
          <h1 className="text-center text-[2.5rem] uppercase text-text2 font-[600] ">
            Self summary
          </h1>
          <div className="gradientBg rounded-3xl flex flex-[70%] p-10 flex-col gap-1">
            <span className="uppercase text-[1.2rem]">About me</span>
            <h2 className="text-[2rem] mt-10">Tomasz Malocha.</h2>
            <p className="text-text2 text-[1.1rem]">
              I am a Cracow, Poland based web developer with a focus of creating
              beatifull full stack apps. I am big fan of making website look
              spectacular and in the same time functional
            </p>
          </div>
        </motion.div>
      </div>
      <div className="flex gap-6 w-full max-xmd:flex-wrap  ">
        <motion.div
          variants={leftAnimationVariant}
          className="gradientBg rounded-3xl flex flex-[50%]  flex-col p-10"
        >
          <h3 className="uppercase text-[1.2rem]">Education</h3>

          <div className="flex flex-col gap-2 mt-8">
            <p className="text-text2">2016-2020</p>
            <p className="text-[1.2rem]">
              IT Technical School | Zespół Szkół w Rabce-Zdroju im. ks. prof.
              Józefa Tischnera
            </p>
          </div>
          <div className="flex flex-col gap-2 mt-8">
            <p className="text-text2">2019-06-22</p>
            <p className="text-[1.2rem]">ECDL profile Certificate</p>
          </div>
          <div className="flex flex-col gap-2 mt-8">
            <p className="text-text2">2019-04-23</p>
            <p className="text-[1.2rem]">Programming Web Apps certificate</p>
          </div>
        </motion.div>
        <motion.div
          variants={rightAnimationVariant}
          className="gradientBg rounded-3xl flex flex-[50%]  flex-col p-10"
        >
          <h3 className="uppercase text-[1.2rem]">Experience</h3>

          <div className="flex flex-col gap-2 mt-8">
            <p className="text-text2">2019-2020</p>
            <p className="text-[1.2rem]">
              IT Technical School | Internship from school
            </p>
          </div>
          <div className="flex flex-col gap-2 mt-8">
            <p className="text-text2">2023</p>
            <p className="text-[1.2rem]">
              Landing Page for company based in Norway (BUMA AS)
            </p>
          </div>
        </motion.div>
      </div>
      <motion.div
        variants={scaleAnimationVariant}
        className="flex gap-6 w-full max-xmd:flex-wrap max-xmd:flex-col-reverse  "
      >
        <div className="group gradientBg flex-[25%] rounded-3xl w-full  flex flex-col items-center justify-between p-5 px-5 relative">
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
            <span className="uppercase text-text2 text-[0.9rem]">
              Stay with me
            </span>
            <span className="text-[1.2rem]">Profiles</span>
          </div>
          <Link
            href="/contact"
            className="group-hover:text-text1 group-hover:scale-125
duration-1000 text-text2 text-[2.4rem] absolute bottom-6 right-6  "
          >
            <IoMdLogIn />
          </Link>
        </div>
        <div className="group gradientBg flex-[50%] rounded-3xl w-full  flex flex-col  p-5 px-5 relative">
          <h2 className="text-[2rem] mt-24 ">Let's</h2>
          <h2 className="text-[2rem] ">work together.</h2>
          <Link
            href="/contact"
            className="group-hover:text-text1 group-hover:scale-125
duration-1000 text-text2 text-[2.4rem] absolute bottom-6 right-6  "
          >
            <IoMdLogIn />
          </Link>
        </div>
        <Link
          href="/about"
          className="group flex-[25%] gradientBg rounded-3xl w-full  flex flex-col items-center justify-between p-5 px-5 relative"
        >
          <Image
            width={500}
            height={500}
            className="p-5 h-26 w-26 mb-2"
            src={about}
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
            className="group-hover:text-text1 group-hover:scale-125
duration-1000 text-text2 text-[2.4rem] absolute bottom-6 right-6  "
          >
            <IoMdLogIn />
          </Link>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default About;
