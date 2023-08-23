import React from "react";
import Image from "@/node_modules/next/image";
import Link from "@/node_modules/next/link";
import about from "public/about.png";
import me from "public/me2.png";
import { IoMdLogIn } from "react-icons/io";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const About = () => {
  return (
    <div className="w-full  my-10 flex flex-col gap-6 ">
      <div className="flex gap-6 w-full  ">
        <div className="gradientBg rounded-3xl flex flex-[30%] ">
          <Image
            width={700}
            height={700}
            className="w-full h-full object-cover  rounded-3xl p-4"
            src={me}
            alt="me"
          ></Image>
        </div>
        <div className="flex-[70%] flex flex-col  ">
          <h1 className="text-center text-[4rem] uppercase text-text2 font-[600] ">
            Self summary
          </h1>
          <div className="gradientBg rounded-3xl flex flex-[70%] p-10 flex-col gap-1">
            <h2 className="text-[2rem] mt-16">Tomasz Malocha.</h2>
            <p className="text-text2 text-[1.1rem]">
              I am a Cracow, Poland based web developer with a focus of creating
              beatifull full stack apps. I am big fan of making website look
              spectacular and in the same time functional
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-6 w-full  ">
        <div className="gradientBg rounded-3xl flex flex-[50%]  flex-col p-10">
          <h3 className="uppercase text-[1.2rem]">Education</h3>

          <div className="flex flex-col gap-2 mt-8">
            <p className="text-text2">2016-2020</p>
            <p>
              IT Technical School | Zespół Szkół w Rabce-Zdroju im. ks. prof.
              Józefa Tischnera
            </p>
          </div>
          <div className="flex flex-col gap-2 mt-8">
            <p className="text-text2">2019-06-22</p>
            <p>ECDL profile Certificate</p>
          </div>
          <div className="flex flex-col gap-2 mt-8">
            <p className="text-text2">2019-04-23</p>
            <p>Programming Web Apss certificate</p>
          </div>
        </div>
        <div className="gradientBg rounded-3xl flex flex-[50%]  flex-col p-10">
          <h3 className="uppercase text-[1.2rem]">Experience</h3>

          <div className="flex flex-col gap-2 mt-8">
            <p className="text-text2">2019-2020</p>
            <p>IT Technical School | Internship from school</p>
          </div>
          <div className="flex flex-col gap-2 mt-8">
            <p className="text-text2">2023</p>
            <p>Landing Page for company based in Norway (BUMA AS)</p>
          </div>
        </div>
      </div>
      <div className="flex gap-6 w-full">
        <div className="gradientBg flex-[25%] rounded-3xl w-full  flex flex-col items-center justify-between p-5 px-5 relative">
          <div className="flex gap-5 mt-8 text-[2.4rem]">
            <div className="p-4 rounded-full gradientBg">
              <BsGithub />
            </div>
            <div className="p-4 rounded-full gradientBg">
              <BsLinkedin />
            </div>
          </div>
          <div className="flex flex-col gap-1 self-start mt-6">
            <span className="uppercase text-text2 text-[0.9rem]">
              Stay with me
            </span>
            <span className="text-[1.2rem]">Profiles</span>
          </div>
          <div className="text-text2 text-[2.4rem] absolute bottom-6 right-6  ">
            <IoMdLogIn />
          </div>
        </div>
        <div className="gradientBg flex-[50%] rounded-3xl w-full  flex flex-col  p-5 px-5 relative">
          <h2 className="text-[2rem] mt-24 ">Let's</h2>
          <h2 className="text-[2rem] ">work together.</h2>
          <div className="text-text2 text-[2.4rem] absolute bottom-6 right-6  ">
            <IoMdLogIn />
          </div>
        </div>
        <Link
          href="/about"
          className="flex-[25%] gradientBg rounded-3xl w-full  flex flex-col items-center justify-between p-5 px-5 relative"
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
          <div className="text-text2 text-[2.4rem] absolute bottom-6 right-6  ">
            <IoMdLogIn />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default About;
