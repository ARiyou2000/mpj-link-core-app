"use client";

import { motion } from "framer-motion";
import { GradiantIconsPropsT } from "@/components/icons/colored";

export const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: ({
    delay = 0.1,
    rotateDuration = 1,
    rotateDegree = 360,
  }: {
    delay?: number;
    rotateDuration?: number;
    rotateDegree?: number;
  } = {}) => {
    console.log("--------------------Draw-----------------------");
    // const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      rotate: rotateDegree,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
        rotate: {
          delay,
          ease: "linear",
          duration: rotateDuration,
          repeat: Infinity,
        },
      },
    };
  },
};

const LoadingGradiantIcon = ({
  className = "",
  strokeColor = "white",
  ...props
}: GradiantIconsPropsT) => {
  return (
    <>
      <motion.svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={"hidden"}
        animate={"visible"}
        className={className}
        {...props}>
        <g clipPath="url(#clip0_866_23776)">
          <motion.path
            variants={draw}
            custom={{
              rotateDuration: 1.5,
              rotateDegree: 360,
              delay: 0.8,
            }}
            d="M4 99.5C4 152.243 46.7568 195 99.5 195C152.243 195 195 152.243 195 99.5C195 46.7568 152.243 4 99.5 4"
            stroke={
              strokeColor === "gradiant"
                ? "url(#paint0_linear_866_23776)"
                : strokeColor
            }
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <motion.path
            variants={draw}
            custom={{
              rotateDuration: 1.1,
              rotateDegree: -360,
            }}
            d="M156 99.5C156 68.296 130.704 43 99.5 43C68.296 43 43 68.296 43 99.5C43 130.704 68.296 156 99.5 156"
            stroke={
              strokeColor === "gradiant"
                ? "url(#paint1_linear_866_23776)"
                : strokeColor
            }
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_866_23776"
            x1="217.114"
            y1="-10.9664"
            x2="-18.169"
            y2="597.987"
            gradientUnits="userSpaceOnUse">
            <stop offset="0.112192" stopColor="#D04848" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_866_23776"
            x1="169.083"
            y1="34.1455"
            x2="29.8843"
            y2="394.416"
            gradientUnits="userSpaceOnUse">
            <stop offset="0.112192" stopColor="#D04848" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <clipPath id="clip0_866_23776">
            <rect width="200" height="200" fill="white" />
          </clipPath>
        </defs>
      </motion.svg>
    </>
  );
};

export default LoadingGradiantIcon;
