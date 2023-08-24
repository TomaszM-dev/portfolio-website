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
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { HiOutlineExternalLink } from "react-icons/hi";
import { BiLogoReact, BiLineChart, BiLogoJavascript } from "react-icons/bi";
import bdesignedMac from "public/b-designedmac.png";
import bdesignedPhone from "public/b-designedPhone.png";
import bumamac from "public/bumamac.png";
import bumaphone from "public/bumaphone.png";
import cryptophone from "public/cryptophone.png";
import cryptomac from "public/cryptomax1.png";
import wikbromac from "public/wikbromac.png";
import wikbrophone from "public/wikbrophone.png";

import { FaSass } from "react-icons/fa";

const Portfolio = () => {
  return (
    <div className="w-full   my-20 flex flex-col gap-6 ">
      <h1 className="text-[2rem] uppercase text-text2 font-bold">
        Some things i build:
      </h1>
      <div className="flex gap-6 w-full  mt-10  ">
        <div className="gradientBg rounded-3xl flex flex-[30%] p-10 relative">
          <div className="flex flex-col gap-3 justify-center">
            <span className="uppercase font-bold text-text2">
              web app store
            </span>
            <h1 className="text-[1.4rem] font-bold">DegustoVR</h1>
            <span className="">
              DegustoVR is online store fully compatible with stripe payments,
              you can create your own account add items to cart, place an order.
            </span>
            <div className="flex mt-5 gap-5 text-[2rem] text-text2">
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
            <BsGithub />
            <HiOutlineExternalLink />
          </div>
        </div>
        <div className="gradientBg rounded-3xl flex flex-[50%] items-center ">
          <Image
            width={700}
            height={700}
            className="w-[34rem] h-[23rem] object-cover  rounded-3xl p-4 mt-2"
            src={mac}
            alt="me"
          ></Image>
          <Image
            width={700}
            height={700}
            className="w-[27rem] h-[23rem] object-cover  rounded-3xl p-4"
            src={phone}
            alt="me"
          ></Image>
        </div>
      </div>
      <div className="flex gap-6 w-full flex-row-reverse  mt-10  ">
        <div className="gradientBg rounded-3xl flex flex-[30%] p-10 relative">
          <div className="flex flex-col gap-3 justify-center">
            <span className="uppercase font-bold text-text2">
              web app store
            </span>
            <h1 className="text-[1.4rem] font-bold">B-Designed</h1>
            <span className="">
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
            <BsGithub />
            <HiOutlineExternalLink />
          </div>
        </div>
        <div className="gradientBg rounded-3xl flex flex-[50%]  items-center ">
          <Image
            width={700}
            height={700}
            className="w-[34rem] h-[17rem] object-cover  rounded-3xl p-4"
            src={bdesignedMac}
            alt="me"
          ></Image>
          <Image
            width={700}
            height={700}
            className="w-[27rem] h-[24rem] object-cover rounded-3xl p-4"
            src={bdesignedPhone}
            alt="me"
          ></Image>
        </div>
      </div>
      <div className="flex gap-6 w-full   mt-10  ">
        <div className="gradientBg rounded-3xl flex flex-[30%] p-10 relative">
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
            <BsGithub />
            <HiOutlineExternalLink />
          </div>
        </div>
        <div className="gradientBg rounded-3xl flex flex-[50%] items-center ">
          <Image
            width={700}
            height={700}
            className="w-[34rem] h-[17rem] object-cover  rounded-3xl p-4"
            src={bumamac}
            alt="me"
          ></Image>
          <Image
            width={700}
            height={700}
            className="w-[27rem] h-[23rem] object-bottom rounded-3xl p-4"
            src={bumaphone}
            alt="me"
          ></Image>
        </div>
      </div>
      <div className="flex gap-6 w-full   mt-10 flex-row-reverse  ">
        <div className="gradientBg rounded-3xl flex flex-[30%]  p-10 relative">
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
            <BsGithub />
            <HiOutlineExternalLink />
          </div>
        </div>
        <div className="gradientBg rounded-3xl flex flex-[50%] items-center ">
          <Image
            width={700}
            height={700}
            className="w-[34rem] h-[18rem] object-cover  rounded-3xl p-4"
            src={cryptomac}
            alt="me"
          ></Image>
          <Image
            width={700}
            height={700}
            className="w-[27rem] h-[23rem] object-fit rounded-3xl p-4"
            src={cryptophone}
            alt="me"
          ></Image>
        </div>
      </div>
      <div className="flex gap-6 w-full   mt-10   ">
        <div className="gradientBg rounded-3xl flex flex-[30%]  p-10 relative">
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
            <BsGithub />
            <HiOutlineExternalLink />
          </div>
        </div>
        <div className="gradientBg rounded-3xl flex flex-[50%] items-center ">
          <Image
            width={700}
            height={700}
            className="w-[34rem] h-[18rem] object-cover  rounded-3xl p-4"
            src={wikbromac}
            alt="me"
          ></Image>
          <Image
            width={700}
            height={700}
            className="w-[27rem] h-[23rem] object-fit rounded-3xl p-4"
            src={wikbrophone}
            alt="me"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
