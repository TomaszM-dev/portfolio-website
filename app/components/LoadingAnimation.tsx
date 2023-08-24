"use client";
import React from "react";
import { motion } from "framer-motion";
import { easeInOut } from "framer-motion";

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
      className="w-full h-screen  flex items-center justify-center gap-3 text-[2.2rem] uppercase"
    >
      <motion.span variants={showAnimationVariant}>Welcome</motion.span>
      <motion.span variants={showAnimationVariant}>to</motion.span>
      <motion.span variants={showAnimationVariant}>my</motion.span>
      <motion.span variants={showAnimationVariant}>World</motion.span>
    </motion.div>
  );
};

export default LoadingAnimation;
