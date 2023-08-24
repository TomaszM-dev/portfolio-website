"use client";
import React from "react";
import Link from "@/node_modules/next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col gap-5 w-full p-4 items-center mt-14">
      <h1 className="text-[1.6rem] font-[700]">TomaszM</h1>
      <div className="flex gap-10 text-[1.1rem] my-3">
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
