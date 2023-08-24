import me from "public/me2.png";
import about from "public/about.png";
import work from "public/work.png";
import cv from "public/cv.png";
import Image from "@/node_modules/next/image";
import { IoMdLogIn } from "react-icons/io";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiTypescript,
  SiPrisma,
  SiPostgresql,
  SiTailwindcss,
  SiFigma,
  SiStripe,
} from "react-icons/si";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import Link from "@/node_modules/next/link";

export default function Home() {
  return (
    <div className="w-full  my-10 flex flex-col gap-6 ">
      <div className="flex gap-6">
        <Link
          href="/about"
          className="text-white flex-[50%] relative gradientBg rounded-3xl px-10 py-2  flex items-center gap-8 group-hover hover:text-text1"
        >
          <Image
            width={500}
            height={500}
            className="w-[16rem] h-[16rem] object-cover rounded-tl-3xl rounded-br-3xl"
            src={me}
            alt="me"
          ></Image>
          <div className="flex flex-col ">
            <h2 className="uppercase text-text2 ">A web developer</h2>
            <span className="text-[2rem] my-2 leading-[2.1rem]">
              Tomasz Malocha.
            </span>
            <span className="text-text2">
              I am Web Developer based in Poland, Cracow
            </span>
            <div className="hover:text-text1 transition-all text-text2 text-[2.4rem] absolute bottom-6 right-6  ">
              <IoMdLogIn />
            </div>
          </div>
        </Link>
        <div className="flex-[50%]  flex flex-col  gap-5 items-center">
          <div className="w-full h-16 gradientBg rounded-3xl px-4 flex items-center justify-center">
            <span className=" text-center justify-center uppercase text-[0.8rem]">
              <span className="text-text2">I am available for </span> Freelance
              work
              <span className="text-text2"> I am available for </span>Remote
              work
            </span>
          </div>
          <div className="flex w-full h-full gap-5">
            <Link
              href="/about"
              className="gradientBg rounded-3xl w-full  flex flex-col items-center justify-between p-5 px-5 relative"
            >
              <Image
                width={500}
                height={500}
                className="p-2 h-40 mt-4"
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
            <Link
              href="/portfolio"
              className="gradientBg rounded-3xl w-full  flex flex-col items-center justify-between p-5 px-5 relative"
            >
              <Image
                width={500}
                height={500}
                className="w-40 h-40"
                src={work}
                alt="me"
              ></Image>
              <div className="flex flex-col gap-1 self-start mb-1">
                <span className="uppercase text-text2 text-[0.9rem]">
                  My work
                </span>
                <span className="text-[1.2rem]">Portfolio</span>
              </div>
              <div className="text-text2 text-[2.4rem] absolute bottom-6 right-6  ">
                <IoMdLogIn />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex gap-6">
        <div className="gradientBg flex-[25%] rounded-3xl w-full  flex flex-col items-center justify-between p-5 px-5 relative">
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
          <div className="text-text2 text-[2.4rem] absolute bottom-6 right-6  ">
            <IoMdLogIn />
          </div>
        </div>
        <Link
          href="/skills"
          className="gradientBg flex-[50%] rounded-3xl w-full  flex flex-col items-center gap-10 p-5 px-5 relative"
        >
          <div className="flex gap-8 mt-16 text-[2.4rem] rounded-lg ">
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
          <div className="text-text2 text-[2.4rem] absolute bottom-6 right-6  ">
            <IoMdLogIn />
          </div>
        </Link>
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
      </div>
      <div className="flex gap-6">
        <div className="gradientBg flex-[50%] rounded-3xl w-full  flex  items-center  gap-6 p-5 px-5 relative">
          <div className="flex flex-col items-center gradientBg px-10 py-5 rounded-3xl ">
            <span className="text-[2rem] mb-3">03</span>
            <span className="text-text2 uppercase font-bold">studing</span>
            <span className="text-text2 uppercase font-bold">experience</span>
          </div>
          <div className="flex flex-col items-center gradientBg px-10 py-5 rounded-3xl ">
            <span className="text-[2rem] mb-3">02</span>
            <span className="text-text2 uppercase font-bold">Client</span>
            <span className="text-text2 uppercase font-bold">worldwide</span>
          </div>
          <div className="flex flex-col items-center gradientBg px-10 py-5 rounded-3xl ">
            <span className="text-[2rem] mb-3">+11</span>
            <span className="text-text2 uppercase font-bold">Total</span>
            <span className="text-text2 uppercase font-bold">projects</span>
          </div>
        </div>
        <div className="gradientBg flex-[50%] rounded-3xl w-full  flex flex-col  justify-between p-5 px-5 relative">
          <h2 className="text-[2rem] mt-10 ">Let's</h2>
          <h2 className="text-[2rem] ">work together.</h2>
          <div className="text-text2 text-[2.4rem] absolute bottom-6 right-6  ">
            <IoMdLogIn />
          </div>
        </div>
      </div>
    </div>
  );
}
