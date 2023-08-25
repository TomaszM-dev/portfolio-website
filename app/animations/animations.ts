import { easeInOut } from "framer-motion";

export const leftAnimationVariant = {
  offscreen: {
    opacity: 0,
    x: -60,
    z: 10,
  },
  onscreen: {
    opacity: 1,
    x: 0,
    z: 0,

    transition: {
      duration: 0.7,
      ease: easeInOut,
    },
  },
};
export const rightAnimationVariant = {
  offscreen: {
    opacity: 0,
    x: 60,
    z: 10,
  },
  onscreen: {
    opacity: 1,
    x: 0,
    z: 0,

    transition: {
      duration: 0.7,
      ease: easeInOut,
    },
  },
};
export const upAnimationVariant = {
  offscreen: {
    opacity: 0,
    y: 60,
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
export const downAnimationVariant = {
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
export const scaleAnimationVariant = {
  offscreen: {
    opacity: 0,
    scale: 0.7,
    z: 10,
  },
  onscreen: {
    opacity: 1,

    z: 0,
    scale: 1,

    transition: {
      duration: 0.7,
      ease: easeInOut,
    },
  },
};
