"use client";

// animations
import { motion, AnimatePresence } from "framer-motion";
import {
  rightAnimationVariant,
  scaleAnimationVariant,
} from "./animations/animations";

// components
import HomeAbout from "./components/ui/home-about";
import HomeHero from "./components/ui/home-hero";
import HomePortfolio from "./components/ui/home-portfolio";
import HomeProfiles from "./components/ui/home-cv";
import HomeSkills from "./components/ui/home-skills";
import HomeContact from "./components/ui/home-contact";
import HomeFoot from "./components/ui/home-foot";

export default function Home() {
  return (
    <motion.div
      initial={"offscreen"}
      whileInView={"onscreen"}
      transition={{ staggerChildren: 0.3 }}
      className="w-full  my-10 flex flex-col gap-6 "
    >
      <motion.div className="flex gap-6  w-full max-lg:flex-wrap    ">
        <HomeHero />
        <motion.div
          variants={rightAnimationVariant}
          className="  flex flex-col  w-full gap-5 items-center"
        >
          <motion.div
            variants={rightAnimationVariant}
            className="  flex flex-col w-full  gap-5 items-center"
          >
            <div className="w-full h-16 gradientBg rounded-3xl max-sm:rounded-xl  max-sm:hidden px-4 flex items-center justify-center">
              <span className=" text-center justify-center uppercase text-[0.8rem]">
                <span className="text-text2">I am available for </span>{" "}
                Freelance work
                <span className="text-text2"> I am available for </span>Remote
                work
              </span>
            </div>
            <div className="flex w-full h-fit max-sm:flex-col gap-5 ">
              <HomeAbout />
              <HomePortfolio />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div className="flex gap-6 max-lg:flex-wrap max-md:flex-col">
        <HomeProfiles />
        <HomeSkills />

        <HomeContact />
      </motion.div>
      <motion.div
        variants={scaleAnimationVariant}
        className="flex gap-6 max-lg:flex-wrap"
      >
        <HomeFoot />
      </motion.div>
    </motion.div>
  );
}
