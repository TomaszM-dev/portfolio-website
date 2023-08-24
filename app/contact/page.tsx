"use client";
import React from "react";
import Link from "@/node_modules/next/link";
import Image from "@/node_modules/next/image";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_z9t8klm",
        "template_z4xlitc",
        form.current,
        "zE7tbk7fYOIPB1uI5"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="w-full  my-20 flex flex-col gap-6  ">
      <div className="flex gap-6  w-full mx-auto max-md:flex-col  ">
        <div className="flex flex-col gap-4 ">
          <div className="gradientBg rounded-3xl flex max-sm:pl-28  flex-col flex-[35%] p-10 gap-12  ">
            <div className="flex    gap-5">
              <div className="p-4 gradientBg rounded-lg  text-[2rem]">
                <AiOutlineMail />
              </div>
              <div className="flex flex-col ">
                <span className="uppercase text-text2 font-[600] mb-1">
                  Mail Me
                </span>
                <p>tomekmalocha@gmail.com</p>
              </div>
            </div>
            <div className="flex   gap-5">
              <div className="p-4 gradientBg rounded-lg  text-[2rem]">
                <AiOutlinePhone />
              </div>
              <div className="flex flex-col ">
                <span className="uppercase text-text2 font-[600] mb-1">
                  Contact me
                </span>
                <p>+48 512-740-494</p>
              </div>
            </div>
            <div className="flex   gap-5">
              <div className="p-4 gradientBg rounded-lg  text-[2rem] text-text1">
                <CiLocationOn />
              </div>
              <div className="flex flex-col ">
                <span className="uppercase text-text2 font-[600] mb-1">
                  Location
                </span>
                <p>Cracow, Poland</p>
              </div>
            </div>
          </div>
          <div className="gradientBg rounded-3xl flex  flex-col flex-[35%] p-10 gap-12">
            <div className="flex flex-col items-center ">
              <span className="uppercase text-text2 text-[1.2rem] font-[600] mb-1 text-center ">
                Social Info
              </span>
              <div className="flex mt-7 text-[2.5rem] gap-10 text-text1">
                <BsGithub />
                <BsLinkedin />
                <BsInstagram />
              </div>
            </div>
          </div>
        </div>
        <div className="gradientBg rounded-3xl flex  flex-col flex-[65%] p-10">
          <h1 className="text-[2rem] font-[600] mb-10">
            Lets's work together.
          </h1>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex-1 flex flex-col gap-5 font-[600] text-secondarytext max-lg:w-[100%]"
          >
            <input
              className="bg-bg2 rounded-md py-5 px-4  "
              type="text"
              placeholder="Name"
              required
              name="user_name"
            />
            <input
              className="bg-bg2 rounded-md py-5 px-4 "
              type="email"
              required
              placeholder="Email"
              name="user_email"
            />
            <textarea
              className="bg-bg2 rounded-md py-5 px-4 "
              placeholder="Message"
              required
              name="message"
            ></textarea>
            <button
              type="submit"
              value="Send"
              className="w-[30%] px-7  py-4 gradientBg rounded-lg max-lg:w-full"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
