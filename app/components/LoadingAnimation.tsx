"use client";
import React from "react";
import { motion } from "framer-motion";
import { easeInOut } from "framer-motion";
import svgIcon from "public/T2.svg";
import Image from "@/node_modules/next/image";

const LoadingAnimation = () => {
  const showAnimationVariant = {
    offscreen: {
      opacity: 0,
      y: 30,
    },
    onscreen: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.7,
        ease: easeInOut,
      },
    },
  };

  return (
    <motion.div
      initial={"offscreen"}
      whileInView={"onscreen"}
      transition={{ staggerChildren: 0.4 }}
      className="w-full h-screen flex-col flex items-center justify-center gap-3 text-[2.2rem] uppercase"
    >
      <motion.div variants={showAnimationVariant}>
        <svg
          className="fill-none stroke-text1 stroke-2"
          width="318"
          height="425"
          viewBox="0 0 318 425"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M159 420V48.5M159 420L114.5 387V94.5H89L48 122.5M159 420L205.5 387V94.5H226L269.5 123M159 48.5H48M159 48.5H269.5M48 48.5V122.5M48 48.5L4 4.5M48 122.5L4 92V4.5M269.5 123L313.5 94.5V4.5M269.5 123V48.5M313.5 4.5H4M313.5 4.5L269.5 48.5" />
        </svg>
      </motion.div>
      <div className="flex gap-3 mb-40">
        <motion.span variants={showAnimationVariant}>Welcome</motion.span>
        <motion.span variants={showAnimationVariant}>to</motion.span>
        <motion.span variants={showAnimationVariant}>my</motion.span>
        <motion.span variants={showAnimationVariant}>World</motion.span>
      </div>
    </motion.div>
  );
};

export default LoadingAnimation;
