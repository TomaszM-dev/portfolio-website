import { easeInOut } from "framer-motion";

export const upAnimationVariant = {
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
