"use client";
import React from "react";
import Link from "@/node_modules/next/link";
import { usePathname } from "next/navigation";
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";

const Footer = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col gap-5 w-full p-4 items-center mt-14">
      <h1 className="text-[1.6rem] font-[700]">TomaszM</h1>
      <div className="flex gap-10 text-[1.5rem]">
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
        <Link
          href="https://www.instagram.com/tommek.23/"
          target="_blank"
          className="hover:scale-125 hover:translate-y-[-2px] duration-500 transition-all p-4 rounded-full gradientBg cursor-pointer "
        >
          <BsInstagram />
        </Link>
      </div>
      <div className="flex gap-10 text-[1.1rem] my-3 max-md:flex-wrap max-md:justify-center">
        <Link
          href="/"
          className={` ${pathname === "/" ? "text-text1" : "text-text2"}`}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={` ${pathname === "/about" ? "text-text1" : "text-text2"}`}
        >
          About
        </Link>
        <Link
          href="/skills"
          className={` ${pathname === "/skills" ? "text-text1" : "text-text2"}`}
        >
          Skills
        </Link>
        <Link
          href="/portfolio"
          className={` ${
            pathname === "/portfolio" ? "text-text1" : "text-text2"
          }`}
        >
          Portfolio
        </Link>
        <Link
          className={` ${
            pathname === "/contact" ? "text-text1" : "text-text2"
          }`}
          href="/contact"
        >
          Contact
        </Link>
      </div>

      <span className="text-text2">
        @ All rights reserved by <span className="text-text1">TomaszM-dev</span>
      </span>
    </div>
  );
};

export default Footer;
