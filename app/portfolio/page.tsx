"use client";
import React from "react";
import Image from "@/node_modules/next/image";
import mac from "public/degustomac.png";
import phone from "public/degustophone.png";
import { TbBrandNextjs, TbBrandMongodb } from "react-icons/tb";
import {
  SiTypescript,
  SiPrisma,
  SiPostgresql,
  SiTailwindcss,
  SiFigma,
  SiStripe,
  SiStyledcomponents,
} from "react-icons/si";
import { BsFiletypeSql, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiOutlineExternalLink } from "react-icons/hi";
import { BiLogoReact, BiLineChart, BiLogoJavascript } from "react-icons/bi";
import bdesignedMac from "public/b-designedmac.png";
import bdesignedPhone from "public/b-designedPhone.png";
import bumamac from "public/bumamac.png";
import bumaphone from "public/bumaphone.png";
import cryptophone from "public/cryptophone.png";
import dashboardphone from "public/dashboardphone.png";
import cryptomac from "public/cryptomax1.png";
import wikbromac from "public/wikbromac.png";
import dashboardmac from "public/dashboardmac.png";
import speedRentMac from "public/speedrentmac.png";
import wikbrophone from "public/wikbrophone.png";
import speedRentPhone from "public/speedrentphone.png";
import shadcnLogo from "public/shadcn-logo.png";
import { FaSass } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { easeInOut } from "framer-motion";
import {
  leftAnimationVariant,
  rightAnimationVariant,
  upAnimationVariant,
  downAnimationVariant,
  scaleAnimationVariant,
} from "../animations/animations";
import Link from "@/node_modules/next/link";

const Portfolio = () => {
  return (
    <motion.div
      initial={"offscreen"}
      whileInView={"onscreen"}
      transition={{ staggerChildren: 0.3 }}
      className="w-full   my-20 flex flex-col gap-6 "
    >
      <motion.h1
        variants={leftAnimationVariant}
        className="text-[2rem] uppercase text-text2 font-bold"
      >
        Some things i build:
      </motion.h1>
      <motion.div
        variants={upAnimationVariant}
        className="flex gap-6 w-full    max-xl:flex-col  mt-10  max-xl:flex-wrap "
      >
        <div className="gradientBg  rounded-3xl max-sm:rounded-xl flex flex-[30%] p-10 relative">
          <div className="flex flex-col gap-3 justify-center">
            <span className="uppercase font-bold text-text2">
              Web app store
            </span>
            <h1 className="text-[1.4rem] font-bold">SpeedRent Store</h1>
            <span className="text-[1.1rem]">
              Introducing SpeedRent – Your Ultimate Vehicle Rental Solution!
              Rent a vehicle on your terms, whether it's for a day or a month,
              and experience the convenience of secure payments via Stripe
            </span>
            <div className="flex mt-5 gap-5 text-[2rem] text-text2 max-sm:justify-center flex-wrap">
              <SiFigma />
              <SiTailwindcss />
              <SiTypescript />
              <SiStripe />
              <TbBrandNextjs />
            </div>
          </div>
          <div className="absolute right-7 top-6 flex gap-4 text-[1.8rem]">
            <Link
              className="hover:scale-125 hover:translate-y-[-2px] duration-500 transition-all"
              href="https://github.com/TomaszM-dev/speedRent-admin-panel"
              target={"_blank"}
            >
              <BsGithub />
            </Link>
            <Link
              className="hover:scale-125 hover:translate-y-[-2px] duration-500 transition-all"
              href="https://speed-rent-admin-panel.vercel.app/"
              target={"_blank"}
            >
              <HiOutlineExternalLink />
            </Link>
          </div>
        </div>
        <div className="gradientBg rounded-3xl max-sm:rounded-xl flex flex-[50%] items-center justify-center  max-md:flex-col ">
          <Image
            width={700}
            height={700}
            className="w-[28rem] object-cover  rounded-3xl max-sm:rounded-xl p-4 mt-2"
            src={speedRentMac}
            alt="me"
          ></Image>
          <Image
            width={700}
            height={700}
            className="w-48 object-cover  rounded-3xl max-sm:rounded-xl p-4"
            src={speedRentPhone}
            alt="me"
          ></Image>
        </div>
      </motion.div>
      <motion.div
        variants={upAnimationVariant}
        className="flex gap-6 w-full flex-row-reverse   max-xl:flex-col  mt-10  max-xl:flex-wrap "
      >
        <div className="gradientBg  rounded-3xl max-sm:rounded-xl flex flex-[30%] p-10 relative">
          <div className="flex flex-col gap-3 justify-center">
            <span className="uppercase font-bold text-text2">
              admin dashboard for SpeedRent
            </span>
            <h1 className="text-[1.4rem] font-bold">SpeedRent Admin</h1>
            <span className="text-[1.1rem]">
              in this admin panel , you have the tools to create and customize
              stores effortlessly, manage product catalogs, add new products,
              update existing ones, and organize them into categories and types
              and track revenue.
            </span>
            <div className="flex mt-5 gap-5 text-[2rem] text-text2 max-sm:justify-center flex-wrap">
              <SiPrisma />
              <BsFiletypeSql />
              <SiTailwindcss />
              <SiTypescript />
              <SiStripe />
              <TbBrandNextjs />
            </div>
          </div>
          <div className="absolute right-7 top-6 flex gap-4 text-[1.8rem]">
            <Link
              className="hover:scale-125 hover:translate-y-[-2px] duration-500 transition-all"
              href="https://github.com/TomaszM-dev/speedRent-admin-panel"
              target={"_blank"}
            >
              <BsGithub />
            </Link>
            <Link
              className="hover:scale-125 hover:translate-y-[-2px] duration-500 transition-all"
              href="https://speed-rent-admin-panel.vercel.app/"
              target={"_blank"}
            >
              <HiOutlineExternalLink />
            </Link>
          </div>
        </div>
        <div className="gradientBg rounded-3xl max-sm:rounded-xl flex flex-[50%] items-center justify-center  max-md:flex-col ">
          <Image
            width={700}
            height={700}
            className="w-[28rem] object-cover  rounded-3xl max-sm:rounded-xl p-4 mt-2"
            src={dashboardmac}
            alt="me"
          ></Image>
          <Image
            width={700}
            height={700}
            className="w-48 object-cover  rounded-3xl max-sm:rounded-xl p-4"
            src={dashboardphone}
            alt="me"
          ></Image>
        </div>
      </motion.div>
      <motion.div
        variants={upAnimationVariant}
        className="flex gap-6 w-full    max-xl:flex-col  mt-10  max-xl:flex-wrap "
      >
        <div className="gradientBg  rounded-3xl max-sm:rounded-xl flex flex-[30%] p-10 relative">
          <div className="flex flex-col gap-3 justify-center">
            <span className="uppercase font-bold text-text2">
              web app store
            </span>
            <h1 className="text-[1.4rem] font-bold">DegustoVR</h1>
            <span className="text-[1.1rem]">
              DegustoVR is online store fully compatible with stripe payments,
              you can create your own account add items to cart, place an order.
            </span>
            <div className="flex mt-5 gap-5 text-[2rem] text-text2 max-sm:justify-center flex-wrap">
              <SiFigma />
              <SiPostgresql />
              <SiPrisma />
              <SiTailwindcss />
              <SiTypescript />
              <SiStripe />
              <TbBrandNextjs />
            </div>
          </div>
          <div className="absolute right-7 top-6 flex gap-4 text-[1.8rem]">
            <Link
              className="hover:scale-125 hover:translate-y-[-2px] duration-500 transition-all"
              href="https://github.com/TomaszM-dev/degustoTs"
              target={"_blank"}
            >
              <BsGithub />
            </Link>
            <Link
              className="hover:scale-125 hover:translate-y-[-2px] duration-500 transition-all"
              href="https://degusto-ts.vercel.app/"
              target={"_blank"}
            >
              <HiOutlineExternalLink />
            </Link>
          </div>
        </div>
        <div className="gradientBg rounded-3xl max-sm:rounded-xl flex flex-[50%] items-center justify-center  max-md:flex-col ">
          <Image
            width={700}
            height={700}
            className="w-[28rem] object-cover  rounded-3xl max-sm:rounded-xl p-4 mt-2"
            src={mac}
            alt="me"
          ></Image>
          <Image
            width={700}
            height={700}
            className="w-48 object-cover  rounded-3xl max-sm:rounded-xl p-4"
            src={phone}
            alt="me"
          ></Image>
        </div>
      </motion.div>

      <motion.div
        variants={upAnimationVariant}
        className="flex gap-6 w-full flex-row-reverse  mt-10  max-xl:flex-wrap   max-xl:flex-col"
      >
        <div className="gradientBg rounded-3xl max-sm:rounded-xl flex flex-[30%] p-10 relative ">
          <div className="flex flex-col gap-3 justify-center">
            <span className="uppercase font-bold text-text2">
              web app store
            </span>
            <h1 className="text-[1.4rem] font-bold">B-Designed</h1>
            <span className="text-[1.1rem]">
              B-Designed is online store and also website where you can post
              something, you can create your own account add items to cart,
              place an order, write a blog post.
            </span>
            <div className="flex mt-5 gap-5 text-[2.2rem] text-text2">
              <SiFigma />
              <SiTailwindcss />
              <TbBrandNextjs />
              <TbBrandMongodb />
            </div>
          </div>
          <div className="absolute right-7 top-6 flex gap-4 text-[1.8rem]">
            <Link
              className="hover:scale-125 hover:translate-y-[-2px] duration-500 transition-all"
              href="https://github.com/TomaszM-dev/b-designed"
              target={"_blank"}
            >
              <BsGithub />
            </Link>
            <Link
              href="https://b-designed.vercel.app/"
              target={"_blank"}
              className="hover:scale-125 hover:translate-y-[-2px] duration-500 transition-all"
            >
              <HiOutlineExternalLink />
            </Link>
          </div>
        </div>
        <div className="gradientBg rounded-3xl max-sm:rounded-xl flex flex-[50%] justify-center  items-center  max-md:flex-col ">
          <Image
            width={700}
            height={700}
            className="w-[26rem] object-cover  rounded-3xl max-sm:rounded-xl p-4"
            src={bdesignedMac}
            alt="me"
          ></Image>
          <Image
            width={700}
            height={700}
            className="w-56 object-cover rounded-3xl max-sm:rounded-xl p-4"
            src={bdesignedPhone}
            alt="me"
          ></Image>
        </div>
      </motion.div>
      <motion.div
        variants={upAnimationVariant}
        className="flex gap-6 w-full   mt-10 max-xl:flex-wrap max-xl:flex-col "
      >
        <div className="gradientBg rounded-3xl max-sm:rounded-xl flex flex-[30%] p-10 relative">
          <div className="flex flex-col gap-3 justify-center">
            <span className="uppercase font-bold text-text2">Landing Page</span>
            <h1 className="text-[1.4rem] font-bold">Buma AS</h1>
            <span className="">
              This landing page was made for my client company based in norway,
              whe are waiting still for images and content of the website but it
              is nearly ready
            </span>
            <div className="flex mt-5 gap-5 text-[2.2rem] text-text2 items-center">
              <SiFigma />
              <BiLogoReact />
              <div className="text-[3.3rem]">
                <SiStyledcomponents />
              </div>
            </div>
          </div>
          <div className="absolute right-7 top-6 flex gap-4 text-[1.8rem]">
            <Link
              className="hover:scale-125 hover:translate-y-[-2px] duration-500 transition-all"
              href="https://github.com/TomaszM-dev/BumaAs-website"
              target={"_blank"}
            >
              <BsGithub />
            </Link>
            <Link
              className="hover:scale-125 hover:translate-y-[-2px] duration-500 transition-all"
              href="https://buma-as-website.vercel.app/"
              target={"_blank"}
            >
              <HiOutlineExternalLink />
            </Link>
          </div>
        </div>
        <div className="gradientBg rounded-3xl max-sm:rounded-xl flex flex-[50%] items-center justify-center max-md:flex-col ">
          <Image
            width={700}
            height={700}
            className="w-[26rem] object-cover  rounded-3xl max-sm:rounded-xl p-4"
            src={bumamac}
            alt="me"
          ></Image>
          <Image
            width={700}
            height={700}
            className="w-48 object-bottom rounded-3xl max-sm:rounded-xl p-4"
            src={bumaphone}
            alt="me"
          ></Image>
        </div>
      </motion.div>
      <div className="flex gap-6 w-full   mt-10 flex-row-reverse  max-xl:flex-wrap max-xl:flex-col ">
        <div className="gradientBg rounded-3xl max-sm:rounded-xl flex flex-[30%]  p-10 relative">
          <div className="flex flex-col gap-3 justify-center">
            <span className="uppercase font-bold text-text2">Banking App</span>
            <h1 className="text-[1.4rem] font-bold">CryptoBanking</h1>
            <span className="">
              CryptoBank is website where you can create your own account,
              manage your expenses, check latest prices of pair of currencies
              that you are interersted about, play game
            </span>
            <div className="flex mt-5 gap-5 text-[2.2rem] text-text2 items-center">
              <FaSass />
              <BiLineChart />
              <BiLogoJavascript />
            </div>
          </div>
          <div className="absolute right-7 top-6 flex gap-4 text-[1.8rem]">
            <Link
              className="hover:scale-125 hover:translate-y-[-2px] duration-500 transition-all"
              href="https://github.com/TomaszM-dev/CryptoBanking-"
              target={"_blank"}
            >
              <BsGithub />
            </Link>
            <Link
              className="hover:scale-125 hover:translate-y-[-2px] duration-500 transition-all"
              href="https://crypto-banking-fin.vercel.app/"
              target={"_blank"}
            >
              <HiOutlineExternalLink />
            </Link>
          </div>
        </div>
        <div className="gradientBg rounded-3xl max-sm:rounded-xl flex flex-[50%] items-center justify-center  max-md:flex-col">
          <Image
            width={700}
            height={700}
            className="w-[28rem]  object-cover  rounded-3xl max-sm:rounded-xl p-4"
            src={cryptomac}
            alt="me"
          ></Image>
          <Image
            width={700}
            height={700}
            className="w-48 object-fit rounded-3xl max-sm:rounded-xl p-4"
            src={cryptophone}
            alt="me"
          ></Image>
        </div>
      </div>
      <div className="flex gap-6 w-full   mt-10  max-xl:flex-wrap max-xl:flex-col  ">
        <div className="gradientBg rounded-3xl max-sm:rounded-xl flex flex-[30%]  p-10 relative">
          <div className="flex flex-col gap-3 justify-center">
            <span className="uppercase font-bold text-text2">Landing page</span>
            <h1 className="text-[1.4rem] font-bold">Vikbro</h1>
            <span className="">
              This website presents their work as a carpenters, you can see
              their latest project and also get to know their company better
            </span>
            <div className="flex mt-5 gap-5 text-[2.2rem] text-text2 items-center">
              <FaSass />
              <BiLogoJavascript />
            </div>
          </div>
          <div className="absolute right-7 top-6 flex gap-4 text-[1.8rem]">
            <Link
              className="hover:scale-125 hover:translate-y-[-2px] duration-500 transition-all"
              href="https://github.com/TomaszM-dev/Vikbro-client-website"
              target={"_blank"}
            >
              <BsGithub />
            </Link>
            <Link
              className="hover:scale-125 hover:translate-y-[-2px] duration-500 transition-all"
              href="https://vikbro.vercel.app/"
              target={"_blank"}
            >
              <HiOutlineExternalLink />
            </Link>
          </div>
        </div>
        <div className="gradientBg rounded-3xl max-sm:rounded-xl flex flex-[50%] items-center justify-center max-sm:flex-col ">
          <Image
            width={700}
            height={700}
            className="w-[28rem]  object-cover  rounded-3xl max-sm:rounded-xl p-4"
            src={wikbromac}
            alt="me"
          ></Image>
          <Image
            width={700}
            height={700}
            className="w-48 object-fit rounded-3xl max-sm:rounded-xl p-4"
            src={wikbrophone}
            alt="me"
          ></Image>
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;
