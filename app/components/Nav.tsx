"use client";
import React, { useState } from "react";
import Link from "@/node_modules/next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import hamburger from "public/hamburger.png";
import Image from "@/node_modules/next/image";
import { downAnimationVariant } from "../animations/animations";

const Nav = () => {
  const [activeBar, setActiveBar] = useState(false);
  const pathname = usePathname();

  const downAnimationVariant = {
    offscreen: {
      opacity: 0,
      y: -60,
      z: 10,
    },
    onscreen: {
      opacity: 1,
      y: 0,
      z: 0,

      transition: {
        duration: 0.7,
        ease: easeInOut,
      },
    },
  };

  return (
    <motion.div
      variants={downAnimationVariant}
      viewport={{
        once: true,
      }}
      whileInView={"onscreen"}
      initial={"offscreen"}
      className="flex items-center max-sm:fixed max-sm:w-full max-sm:bg-[#000] z-20 max-sm:px-10 max-sm:left-0 justify-between max-sm:py-6 py-10 px-4  "
    >
      <Link href="/" className="text-[1.5rem] font-[700]">
        TomaszM
      </Link>
      <div className="flex gap-10 text-[1.1rem] max-lg:hidden relative ">
        <Link
          href="/"
          className={` ${
            pathname === "/" ? "text-text1" : "text-text2"
          } relative `}
        >
          <div className="after:content-[''] after:h-[3px] after:w-0 after:bottom-[-4px] after:right-0  after:bg-text1 after:absolute hover:after:w-full hover:after:left-0 after:duration-500  hover:text-text1 transition-all duration-500">
            Home
          </div>
        </Link>
        <Link
          href="/about"
          className={` ${
            pathname === "/about" ? "text-text1" : "text-text2"
          } relative `}
        >
          <div className="after:content-[''] after:h-[3px] after:w-0 after:bottom-[-4px] after:right-0  after:bg-text1 after:absolute hover:after:w-full hover:after:left-0 after:duration-500 hover:text-text1 transition-all duration-500">
            About
          </div>
        </Link>
        <Link
          href="/skills"
          className={` ${
            pathname === "/skills" ? "text-text1" : "text-text2"
          } relative `}
        >
          <div className="after:content-[''] after:h-[3px] after:w-0 after:bottom-[-4px] after:right-0  after:bg-text1 after:absolute hover:after:w-full hover:after:left-0 after:duration-500 hover:text-text1 transition-all duration-500">
            Skills
          </div>
        </Link>
        <Link
          href="/portfolio"
          className={` ${
            pathname === "/portfolio" ? "text-text1" : "text-text2"
          } relative `}
        >
          <div className="after:content-[''] after:h-[3px] after:w-0 after:bottom-[-4px] after:right-0  after:bg-text1 after:absolute hover:after:w-full hover:after:left-0 after:duration-500 hover:text-text1 transition-all duration-500">
            Portfolio
          </div>
        </Link>
        <Link
          href="/contact"
          className={` ${
            pathname === "/contact" ? "text-text1" : "text-text2"
          } relative `}
        >
          <div className="after:content-[''] after:h-[3px] after:w-0 after:bottom-[-4px] after:right-0  after:bg-text1 after:absolute hover:after:w-full hover:after:left-0 after:duration-500 hover:text-text1 transition-all duration-500">
            Contact
          </div>
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
      <a
        href="/TMalochaCV.pdf"
        target="_blank"
        className="px-7 py-3 gradientBg rounded-xl"
      >
        Resume
      </a>
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
                className="   absolute  right-0 top-0 w-[20rem] h-screen  overflow-scroll flex flex-col items-center gap-5 bg-bg bg-opacity-[98] shadow-lg  shadow-text2  z-10 max-sm:w-[100%] "
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
                    href="/contact"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    </motion.div>
  );
};

export default Nav;
