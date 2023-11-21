"use client";

import { motion } from "framer-motion";
import { GradiantIconsPropsT } from "@/components/icons/colored";
import { draw } from "@/components/icons";

const SwitchGradiantDeviceIcon = ({
  className = "",
  strokeColor = "white",
  ...props
}: GradiantIconsPropsT) => {
  return (
    <>
      <motion.svg
        width="52"
        height="50"
        viewBox="0 0 52 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        strokeLinecap={"square"}
        initial={"hidden"}
        animate={"visible"}
        className={className}
        {...props}>
        <motion.path
          d="M30 22.5H11.75C5.81294 22.5 1 17.6871 1 11.75V11.75C1 5.81294 5.81294 1 11.75 1H40.25C46.1871 1 51 5.81294 51 11.75V11.75C51 17.6871 46.1871 22.5 40.25 22.5H36.5"
          variants={draw}
          stroke={
            strokeColor === "gradiant"
              ? "url(#paint0_linear_842_31269)"
              : strokeColor
          }
          strokeWidth="1.5"
          stroke-linecap="round"
        />
        <motion.path
          d="M22 27H40.25C46.1871 27 51 31.8129 51 37.75V37.75C51 43.6871 46.1871 48.5 40.25 48.5H11.75C5.81294 48.5 1 43.6871 1 37.75V37.75C1 31.8129 5.81294 27 11.75 27H15.5"
          variants={draw}
          stroke={
            strokeColor === "gradiant"
              ? "url(#paint1_linear_842_31269)"
              : strokeColor
          }
          strokeWidth="1.5"
          stroke-linecap="round"
        />
        <motion.circle
          cx="12.5"
          cy="11.5"
          r="6.75"
          variants={draw}
          stroke={
            strokeColor === "gradiant"
              ? "url(#paint2_linear_842_31269)"
              : strokeColor
          }
          strokeWidth="1.5"
        />
        <motion.circle
          cx="39.5"
          cy="37.5"
          r="6.75"
          variants={draw}
          stroke={
            strokeColor === "gradiant"
              ? "url(#paint3_linear_842_31269)"
              : strokeColor
          }
          strokeWidth="1.5"
        />
        <defs>
          <linearGradient
            id="paint0_linear_842_31269"
            x1="56.789"
            y1="-0.684702"
            x2="41.945"
            y2="47.9258"
            gradientUnits="userSpaceOnUse">
            <stop offset="0.0186187" stopColor="#FB9393" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_842_31269"
            x1="-4.78904"
            y1="50.1847"
            x2="10.055"
            y2="1.57416"
            gradientUnits="userSpaceOnUse">
            <stop offset="0.0186187" stopColor="#FB9393" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_842_31269"
            x1="21.7367"
            y1="2.82463"
            x2="4.23359"
            y2="27.4715"
            gradientUnits="userSpaceOnUse">
            <stop offset="0.0186187" stopColor="#FB9393" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_842_31269"
            x1="48.7367"
            y1="28.8246"
            x2="31.2336"
            y2="53.4715"
            gradientUnits="userSpaceOnUse">
            <stop offset="0.0186187" stopColor="#FB9393" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
        </defs>
      </motion.svg>
    </>
  );
};

export default SwitchGradiantDeviceIcon;
