import me from "public/user.png";
import Image from "@/node_modules/next/image";
import { IoMdLogIn } from "react-icons/io";

export default function Home() {
  return (
    <div className="w-full h-screen mt-20 flex flex-col gap-6 ">
      <div className="flex gap-6">
        <div className="flex-[50%] relative gradientBg rounded-3xl p-10 flex items-center gap-8">
          <Image
            width={500}
            height={500}
            className="w-[14rem] h-[14rem] object-cover rounded-tl-3xl rounded-br-3xl"
            src={me}
            alt="me"
          ></Image>
          <div className="flex flex-col    ">
            <h2 className="uppercase text-text2 ">A web developer</h2>
            <span className="text-[2rem] my-2 leading-[2.1rem]">
              Tomasz Malocha.
            </span>
            <span className="text-text2">
              I am Web Developer based in Poland, Cracow
            </span>
            <div className="text-text2 text-[2.4rem] absolute bottom-6 right-6  ">
              <IoMdLogIn />
            </div>
          </div>
        </div>
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
            <div className="gradientBg rounded-3xl w-full  flex flex-col items-center justify-between p-5 px-5 relative">
              <Image
                width={500}
                height={500}
                className="w-24 h-26"
                src={me}
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
            </div>
            <div className="gradientBg rounded-3xl w-full  flex flex-col items-center justify-between p-5 px-5 relative">
              <Image
                width={500}
                height={500}
                className="w-24 h-26"
                src={me}
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
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-6">
        <div className="gradientBg flex-[25%] rounded-3xl w-full  flex flex-col items-center justify-between p-5 px-5 relative">
          <Image
            width={500}
            height={500}
            className="w-24 h-26"
            src={me}
            alt="me"
          ></Image>
          <div className="flex flex-col gap-1 self-start mt-6">
            <span className="uppercase text-text2 text-[0.9rem]">My work</span>
            <span className="text-[1.2rem]">Portfolio</span>
          </div>
          <div className="text-text2 text-[2.4rem] absolute bottom-6 right-6  ">
            <IoMdLogIn />
          </div>
        </div>
        <div className="gradientBg flex-[50%] rounded-3xl w-full  flex flex-col items-center justify-between p-5 px-5 relative">
          <Image
            width={500}
            height={500}
            className="w-24 h-26"
            src={me}
            alt="me"
          ></Image>
          <div className="flex flex-col gap-1 self-start mt-6">
            <span className="uppercase text-text2 text-[0.9rem]">
              Specialization
            </span>
            <span className="text-[1.2rem]">My favorite tech stack</span>
          </div>
          <div className="text-text2 text-[2.4rem] absolute bottom-6 right-6  ">
            <IoMdLogIn />
          </div>
        </div>
        <div className="gradientBg flex-[25%] rounded-3xl w-full  flex flex-col items-center justify-between p-5 px-5 relative">
          <Image
            width={500}
            height={500}
            className="w-24 h-26"
            src={me}
            alt="me"
          ></Image>
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
    </div>
  );
}
