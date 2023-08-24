"use client";
import React, { useState } from "react";
import Link from "@/node_modules/next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import hamburger from "public/hamburger.png";
import Image from "@/node_modules/next/image";

const Nav = () => {
  const [activeBar, setActiveBar] = useState(false);
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-between py-10 px-4 ">
      <h1 className="text-[1.5rem] font-[700]">TomaszM</h1>
      <div className="flex gap-10 text-[1.1rem] max-lg:hidden ">
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
      <div className="max-lg:flex hidden items-center flex-1 justify-end  ">
        <button onClick={() => setActiveBar(!activeBar)}>
          <Image
            src={hamburger}
            width={100}
            height={100}
            alt="hamburger"
            className=" w-10 h-10 mr-5  "
          ></Image>
        </button>
      </div>
      <button className="px-7 py-3 gradientBg rounded-xl">Resume</button>
      <>
        <AnimatePresence>
          {activeBar && (
            <motion.div
              animate={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              exit={{ opacity: 0, x: 100 }}
              className="fixed w-full  z-10   h-screen left-0 top-0  bg-main bg-opacity-[0.30]"
              onClick={() => setActiveBar(!activeBar)}
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="   absolute right-0 top-0 w-[20rem] h-screen  overflow-scroll flex flex-col items-center gap-5 bg-bg bg-opacity-[98] shadow-lg  shadow-text2  z-10 max-sm:w-[100%] "
              >
                <div
                  onClick={() => setActiveBar(!activeBar)}
                  className=" right-0 self-end text-[1.9rem] text-text1 cursor-pointer  p-10 "
                >
                  X
                </div>

                <div className="flex flex-col items-center gap-8 mt-20  ">
                  <Link
                    onClick={() => setActiveBar(!activeBar)}
                    className={`text-[1.7rem]  ${
                      pathname === "/" ? "text-text1" : "text-text2"
                    }`}
                    href="/"
                  >
                    Home
                  </Link>

                  <Link
                    onClick={() => setActiveBar(!activeBar)}
                    className={`text-[1.7rem]   ${
                      pathname === "/about" ? "text-text1" : "text-text2"
                    }`}
                    href="/about"
                  >
                    About
                  </Link>
                  <Link
                    onClick={() => setActiveBar(!activeBar)}
                    className={`text-[1.7rem]   ${
                      pathname === "/skills" ? "text-text1" : "text-text2"
                    }`}
                    href="/skills"
                  >
                    Skills
                  </Link>
                  <Link
                    onClick={() => setActiveBar(!activeBar)}
                    className={`text-[1.7rem]   ${
                      pathname === "/portfolio" ? "text-text1" : "text-text2"
                    }`}
                    href="/portfolio"
                  >
                    Portfolio
                  </Link>
                  <Link
                    onClick={() => setActiveBar(!activeBar)}
                    className={`text-[1.7rem]   ${
                      pathname === "/contact" ? "text-text1" : "text-text2"
                    }`}
                    href="/about"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    </div>
  );
};

export default Nav;
