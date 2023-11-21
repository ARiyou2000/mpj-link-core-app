"use client";

import { motion } from "framer-motion";
import { GradiantIconsPropsT } from "@/components/icons/colored";
import { draw } from "@/components/icons";

const RelayGradiantDeviceIcon = ({
  className = "",
  strokeColor = "white",
  ...props
}: GradiantIconsPropsT) => {
  return (
    <>
      <motion.svg
        width="99"
        height="70"
        viewBox="0 0 99 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={"hidden"}
        animate={"visible"}
        strokeLinecap={"square"}
        className={className}
        {...props}>
        <motion.line
          x1="30"
          y1="35.9004"
          y2="35.9004"
          variants={draw}
          stroke={
            strokeColor === "gradiant"
              ? "url(#paint0_linear_837_31192)"
              : strokeColor
          }
          strokeWidth="3"
        />
        <motion.line
          x1="99"
          y1="35"
          x2="69"
          y2="35"
          variants={draw}
          stroke={
            strokeColor === "gradiant"
              ? "url(#paint1_linear_837_31192)"
              : strokeColor
          }
          strokeWidth="3"
        />
        <motion.line
          x1="57.0873"
          y1="50.7351"
          x2="38.1487"
          y2="37.6841"
          variants={draw}
          stroke={
            strokeColor === "gradiant"
              ? "url(#paint2_linear_837_31192)"
              : strokeColor
          }
          strokeLinecap={"butt"}
          strokeWidth="3"
        />
        <motion.circle
          cx="35.2002"
          cy="35.7998"
          r="4.5"
          variants={draw}
          stroke={
            strokeColor === "gradiant"
              ? "url(#paint3_linear_837_31192)"
              : strokeColor
          }
          strokeWidth="3"
        />
        <motion.circle
          cx="63.6001"
          cy="35"
          r="4.5"
          variants={draw}
          stroke={
            strokeColor === "gradiant"
              ? "url(#paint4_linear_837_31192)"
              : strokeColor
          }
          strokeWidth="3"
        />
        <motion.rect
          x="19"
          y="14"
          width="61"
          height="43"
          rx="20"
          variants={draw}
          stroke={
            strokeColor === "gradiant"
              ? "url(#paint5_linear_837_31192)"
              : strokeColor
          }
          strokeWidth="2"
        />
        <defs>
          <linearGradient
            id="paint0_linear_837_31192"
            x1="74"
            y1="33.5"
            x2="74.082"
            y2="37.4685"
            gradientUnits="userSpaceOnUse">
            <stop offset="0.0186187" stopColor="#FB9393" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_837_31192"
            x1="143"
            y1="32.5996"
            x2="143.082"
            y2="36.5681"
            gradientUnits="userSpaceOnUse">
            <stop offset="0.0186187" stopColor="#FB9393" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_837_31192"
            x1="15.5"
            y1="24.5"
            x2="17.4111"
            y2="21.6626"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#FB9393" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_837_31192"
            x1="42.5896"
            y1="28.8595"
            x2="28.5871"
            y2="48.577"
            gradientUnits="userSpaceOnUse">
            <stop offset="0.0186187" stopColor="#FB9393" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_837_31192"
            x1="70.9895"
            y1="28.0597"
            x2="56.987"
            y2="47.7772"
            gradientUnits="userSpaceOnUse">
            <stop offset="0.0186187" stopColor="#FB9393" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient
            id="paint5_linear_837_31192"
            x1="88.2942"
            y1="9.47388"
            x2="43.4188"
            y2="97.9411"
            gradientUnits="userSpaceOnUse">
            <stop offset="0.0186187" stopColor="#FB9393" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
        </defs>
      </motion.svg>
    </>
  );
};

export default RelayGradiantDeviceIcon;
