"use client";

import { motion } from "framer-motion";
import { GradiantIconsPropsT } from "@/components/icons/colored";
import { draw } from "@/components/icons";

const HoodGradiantDeviceIcon = ({
  className = "",
  strokeColor = "white",
  ...props
}: GradiantIconsPropsT) => {
  return (
    <>
      <motion.svg
        width="48"
        height="56"
        viewBox="0 0 48 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={"hidden"}
        animate={"visible"}
        className={className}
        {...props}>
        <mask id="path-1-inside-1_842_31320" fill="white">
          <rect x="11.52" width="25" height="23" rx="1" />
        </mask>
        <motion.rect
          x="11.52"
          width="25"
          height="23"
          strokeLinecap={"square"}
          variants={draw}
          rx="1"
          stroke={
            strokeColor === "gradiant"
              ? "url(#paint0_linear_842_31320)"
              : strokeColor
          }
          strokeWidth="4"
          mask="url(#path-1-inside-1_842_31320)"
        />
        <motion.path
          variants={draw}
          d="M1 36.5L12.7001 22.3624C12.89 22.1329 13.1725 22 13.4704 22H34.5295C34.8275 22 35.11 22.1329 35.2999 22.3624L47 36.5M1 36.5H47M1 36.5V41.5C1 42.0523 1.44772 42.5 2 42.5H25H46C46.5523 42.5 47 42.0523 47 41.5V36.5"
          stroke={
            strokeColor === "gradiant"
              ? "url(#paint1_linear_842_31320)"
              : strokeColor
          }
          strokeWidth="2"
          strokeLinecap="round"
        />
        <motion.circle
          cx="18.3999"
          cy="39.5996"
          r="0.5"
          variants={draw}
          fill="#D9D9D9"
          stroke={
            strokeColor === "gradiant"
              ? "url(#paint2_linear_842_31320)"
              : strokeColor
          }
        />

        <motion.circle
          cx="22.3999"
          cy="39.5996"
          r="0.5"
          variants={draw}
          fill="#D9D9D9"
          stroke={
            strokeColor === "gradiant"
              ? "url(#paint3_linear_842_31320)"
              : strokeColor
          }
        />
        <motion.circle
          cx="26.3999"
          cy="39.5996"
          r="0.5"
          variants={draw}
          fill="#D9D9D9"
          stroke={
            strokeColor === "gradiant"
              ? "url(#paint4_linear_842_31320)"
              : strokeColor
          }
        />
        <motion.circle
          cx="30.3999"
          cy="39.5996"
          r="0.5"
          variants={draw}
          fill="#D9D9D9"
          stroke={
            strokeColor === "gradiant"
              ? "url(#paint5_linear_842_31320)"
              : strokeColor
          }
        />
        <motion.path
          variants={draw}
          d="M14.4998 46C14.4998 46 12.7655 47.7113 12.9998 49C13.1744 49.9606 14.269 50.0514 14.4998 51C14.8513 52.4449 12.9998 54.5 12.9998 54.5"
          stroke={
            strokeColor === "gradiant"
              ? "url(#paint6_linear_842_31320)"
              : strokeColor
          }
          strokeWidth="2"
          strokeLinecap="round"
        />
        <motion.path
          variants={draw}
          d="M24.0657 46C24.0657 46 22.3314 47.7113 22.5657 49C22.7404 49.9606 23.835 50.0514 24.0657 51C24.4172 52.4449 22.5657 54.5 22.5657 54.5"
          stroke={
            strokeColor === "gradiant"
              ? "url(#paint7_linear_842_31320)"
              : strokeColor
          }
          strokeWidth="2"
          strokeLinecap="round"
        />
        <motion.path
          variants={draw}
          d="M33.6321 46C33.6321 46 31.8978 47.7113 32.1321 49C32.3068 49.9606 33.4014 50.0514 33.6321 51C33.9836 52.4449 32.1321 54.5 32.1321 54.5"
          stroke={
            strokeColor === "gradiant"
              ? "url(#paint8_linear_842_31320)"
              : strokeColor
          }
          strokeWidth="2"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_842_31320"
            x1="39.4145"
            y1="-1.80224"
            x2="13.383"
            y2="38.0413"
            gradientUnits="userSpaceOnUse">
            <stop offset="0.0186187" stopColor="#FB9393" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_842_31320"
            x1="52.3259"
            y1="20.3937"
            x2="37.7492"
            y2="66.452"
            gradientUnits="userSpaceOnUse">
            <stop offset="0.0186187" stopColor="#FB9393" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_842_31320"
            x1="19.6315"
            y1="38.4429"
            x2="17.2977"
            y2="41.7291"
            gradientUnits="userSpaceOnUse">
            <stop offset="0.0186187" stopColor="#FB9393" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_842_31320"
            x1="23.6315"
            y1="38.4429"
            x2="21.2977"
            y2="41.7291"
            gradientUnits="userSpaceOnUse">
            <stop offset="0.0186187" stopColor="#FB9393" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_842_31320"
            x1="27.6315"
            y1="38.4429"
            x2="25.2977"
            y2="41.7291"
            gradientUnits="userSpaceOnUse">
            <stop offset="0.0186187" stopColor="#FB9393" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient
            id="paint5_linear_842_31320"
            x1="31.6315"
            y1="38.4429"
            x2="29.2977"
            y2="41.7291"
            gradientUnits="userSpaceOnUse">
            <stop offset="0.0186187" stopColor="#FB9393" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient
            id="paint6_linear_842_31320"
            x1="14.7255"
            y1="45.334"
            x2="9.61813"
            y2="46.6591"
            gradientUnits="userSpaceOnUse">
            <stop offset="0.0186187" stopColor="#FB9393" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient
            id="paint7_linear_842_31320"
            x1="24.2914"
            y1="45.334"
            x2="19.184"
            y2="46.6591"
            gradientUnits="userSpaceOnUse">
            <stop offset="0.0186187" stopColor="#FB9393" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient
            id="paint8_linear_842_31320"
            x1="33.8578"
            y1="45.334"
            x2="28.7505"
            y2="46.6591"
            gradientUnits="userSpaceOnUse">
            <stop offset="0.0186187" stopColor="#FB9393" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
        </defs>
      </motion.svg>
    </>
  );
};

export default HoodGradiantDeviceIcon;
