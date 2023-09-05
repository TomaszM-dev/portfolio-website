"use client";
import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import Image from "@/node_modules/next/image";
import Link from "@/node_modules/next/link";
import about from "public/about.png";
import me from "public/me2.png";
import { IoMdLogIn } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { easeInOut } from "framer-motion";
import {
  leftAnimationVariant,
  rightAnimationVariant,
  upAnimationVariant,
  downAnimationVariant,
  scaleAnimationVariant,
} from "../animations/animations";

const Skills = () => {
  return (
    <motion.div
      initial={"offscreen"}
      whileInView={"onscreen"}
      transition={{ staggerChildren: 0.3 }}
      className="w-full  my-10 flex flex-col gap-6 "
    >
      <div className="flex gap-6  w-[100%] mx-auto  max-md:flex-wrap max-md:flex-col-reverse">
        <motion.div
          variants={leftAnimationVariant}
          className="gradientBg rounded-3xl flex  flex-col flex-[35%] p-10"
        >
          <h2 className="uppercase text-center mb-5 font-bold text-[1.2rem]">
            Languages
          </h2>
          <div className="flex flex-col gap-2 text-text2 text-center">
            <span>NextJS</span>
            <span>Prisma</span>
            <span>PostgreSQL</span>
            <span>TypeScript</span>
            <span>Tailwind</span>
            <span>ReactJS</span>
            <span>MongoDB</span>
            <span>JavaScript</span>
            <span>GIT</span>
            <span>Css/Sass/Styled-comp</span>
            <span>HTML</span>
          </div>
        </motion.div>
        <motion.div
          variants={upAnimationVariant}
          className="flex flex-col flex-[65%]  h-full "
        >
          <motion.h1
            variants={scaleAnimationVariant}
            className="text-center text-[2.5rem]  uppercase text-text2 font-[600] "
          >
            My skills
          </motion.h1>
          <div className="gradientBg rounded-3xl flex  h-[26rem] max-sm:h-[33rem] max-sm:mt-2 flex-col p-10 items-center justify-center">
            <h2 className="uppercase text-center mb-5 font-bold text-[1.2rem]">
              Dev Tools / Libraries
            </h2>
            <div className="flex flex-col gap-2 text-text2 justify-center items-center max-sm:p-2">
              <span className=" spacing w-[70%] mx-auto text-center mt-2  max-xmd:w-[100%]">
                Stripe, stripe-webhooks, Next-Auth, Zustand, LottieAnimations,
                FramerMotion, bcrypt, Prisma Client, daisyUI, shadcnUI,
                react-dom, react-router, react-intersection-observer, micro
                ,swr, next, figma, github, ChartJS, Vercel, Netlify,
                Wordpress-CLI, React-Chart, React-Reducer, SEO-optimization,
                Bootstrap, VS-code, swiper, prisma-schema, Railway, Email.js
              </span>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div className="flex gap-6 w-full max-xmd:flex-wrap max-xmd:flex-col-reverse">
        <motion.div
          variants={rightAnimationVariant}
          className="group gradientBg flex-[25%] rounded-3xl w-full  flex flex-col items-center justify-between p-5 px-5 relative"
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
        </motion.div>
        <motion.div
          variants={upAnimationVariant}
          className="group gradientBg flex-[50%] rounded-3xl w-full  flex flex-col  p-5 px-5 relative"
        >
          <h2 className="text-[2rem] mt-24 ">Let's</h2>
          <h2 className="text-[2rem] ">work together.</h2>
          <Link
            href="/about"
            className="group-hover:text-text1 group-hover:scale-125
duration-1000 text-text2 text-[2.4rem] absolute bottom-6 right-6  "
          >
            <IoMdLogIn />
          </Link>
        </motion.div>
        <motion.div
          variants={rightAnimationVariant}
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
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
