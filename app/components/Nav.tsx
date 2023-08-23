"use client";
import React from "react";
import Link from "@/node_modules/next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-between py-10 px-4">
      <h1 className="text-[1.5rem] font-[700]">TomaszM</h1>
      <div className="flex gap-10 text-[1.1rem]">
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
          href="/services"
          className={` ${pathname === "/about" ? "text-text1" : "text-text2"}`}
        >
          Services
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
      <button className="px-7 py-3 gradientBg rounded-xl">Resume</button>
    </div>
  );
};

export default Nav;
