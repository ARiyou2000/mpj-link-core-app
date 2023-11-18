"use client";

import { motion } from "framer-motion";
import { GradiantIconsPropsT } from "@/components/icons/colored";
import { draw } from "@/components/icons";

const DuctSplitGradiantDeviceIcon = ({
  className = "",
  strokeColor = "white",
  ...props
}: GradiantIconsPropsT) => {
  return (
    <>
      <motion.svg
        width="91"
        height="52"
        viewBox="0 0 91 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={"hidden"}
        animate={"visible"}
        className={className}
        {...props}>
        <motion.rect
          variants={draw}
          x="4.75"
          y="10.75"
          width="80.5"
          height="31.5"
          rx="14.25"
          stroke={
            strokeColor === "gradiant"
              ? "url(#url(#paint0_linear_101_12657))"
              : strokeColor
          }
          strokeWidth="1.5"
        />
        <motion.line
          variants={draw}
          custom={{ delay: 0.6 }}
          x1="14.75"
          y1="34.25"
          x2="65.25"
          y2="34.25"
          stroke={
            strokeColor === "gradiant"
              ? "url(#paint1_linear_101_12657)"
              : strokeColor
          }
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <motion.line
          variants={draw}
          custom={{ delay: 0.7 }}
          x1="68.75"
          y1="34.25"
          x2="75.25"
          y2="34.25"
          stroke={
            strokeColor === "gradiant"
              ? "url(#paint2_linear_101_12657)"
              : strokeColor
          }
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <motion.line
          variants={draw}
          custom={{ delay: 0.8 }}
          x1="14.75"
          y1="27.25"
          x2="75.25"
          y2="27.25"
          stroke={
            strokeColor === "gradiant"
              ? "url(#paint3_linear_101_12657)"
              : strokeColor
          }
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <motion.path
          variants={draw}
          custom={{ delay: 0.9 }}
          d="M57 20H63"
          stroke={
            strokeColor === "gradiant"
              ? "url(#paint4_linear_101_12657)"
              : strokeColor
          }
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <motion.path
          variants={draw}
          custom={{ delay: 0.6 }}
          d="M70 20H76"
          stroke={
            strokeColor === "gradiant"
              ? "url(#paint5_linear_101_12657)"
              : strokeColor
          }
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_101_12657"
            x1="95.494"
            y1="7.41418"
            x2="73.9424"
            y2="82.8238"
            gradientUnits="userSpaceOnUse">
            <stop offset="0.0186187" stopColor="#FB9393" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_101_12657"
            x1="72.0206"
            y1="34.9216"
            x2="71.9868"
            y2="37.393"
            gradientUnits="userSpaceOnUse">
            <stop offset="0.0186187" stopColor="#FB9393" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_101_12657"
            x1="76.9262"
            y1="34.9216"
            x2="76.7085"
            y2="37.3741"
            gradientUnits="userSpaceOnUse">
            <stop offset="0.0186187" stopColor="#FB9393" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_101_12657"
            x1="83.1784"
            y1="27.9216"
            x2="83.1501"
            y2="30.3931"
            gradientUnits="userSpaceOnUse">
            <stop offset="0.0186187" stopColor="#FB9393" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_101_12657"
            x1="63.6947"
            y1="19.9216"
            x2="63.4062"
            y2="22.3593"
            gradientUnits="userSpaceOnUse">
            <stop offset="0.0186187" stopColor="#FB9393" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient
            id="paint5_linear_101_12657"
            x1="76.6947"
            y1="19.9216"
            x2="76.4062"
            y2="22.3593"
            gradientUnits="userSpaceOnUse">
            <stop offset="0.0186187" stopColor="#FB9393" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
        </defs>
      </motion.svg>
    </>
  );
};

export default DuctSplitGradiantDeviceIcon;
