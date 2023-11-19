"use client";

import { motion } from "framer-motion";
import { draw } from "@/components/icons";

const MPJLink = ({ className = "", ...props }) => {
  return (
    <>
      <motion.svg
        width="173"
        height="64"
        viewBox="0 0 173 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={"hidden"}
        animate={"visible"}
        className={className}
        {...props}>
        <motion.path
          variants={draw}
          d="M147 6H167C167 6 167 28.4421 167 42.6737C167 53.1108 156 58 147 58"
          stroke="#F4F4F4"
          strokeWidth="12"
          strokeLinecap="square"
        />
        <motion.path
          variants={draw}
          d="M89 6.00003C89 6.00003 108.5 6.00047 121 6.00003C127.778 5.9998 132.5 12.2219 132.5 19C132.5 25.7782 127.778 32 121 32C110.637 32 98.8716 32 90.9985 32C86.0279 32 82 36.0295 82 41V58"
          stroke="#F4F4F4"
          strokeWidth="12"
          strokeLinecap="square"
        />
        <motion.path
          variants={draw}
          d="M73 6.10978C70 6.10981 71.5 6.10938 68 6.10978C55.7606 6.11118 54.2244 23.0045 42 23.6098C28.7887 24.264 26.1734 7.30492 13 6.10978C10.2775 5.86278 6 6.10978 6 6.10978V41.6094"
          stroke="#F4F4F4"
          strokeWidth="12"
          strokeLinecap="square"
        />
        <motion.path
          variants={draw}
          d="M3 54L3 63"
          stroke="#F0F1F5"
          strokeWidth="2.5"
        />

        <motion.path
          variants={draw}
          d="M3 54L3 63"
          stroke="url(#paint0_linear_842_31370)"
          strokeOpacity="0.6"
          strokeWidth="2.5"
          style={{ mixBlendMode: "soft-light" }}
        />
        <motion.path
          variants={draw}
          d="M8.5 62H2"
          stroke="#F0F1F5"
          strokeWidth="2"
        />

        <motion.path
          variants={draw}
          d="M8.5 62H2"
          stroke="url(#paint1_linear_842_31370)"
          strokeOpacity="0.6"
          strokeWidth="2"
          style={{ mixBlendMode: "soft-light" }}
        />
        <motion.path
          variants={draw}
          d="M24.5 54L24.5 63"
          stroke="#F0F1F5"
          strokeWidth="2.5"
        />

        <motion.path
          variants={draw}
          d="M24.5 54L24.5 63"
          stroke="url(#paint2_linear_842_31370)"
          strokeOpacity="0.6"
          strokeWidth="2.5"
          style={{ mixBlendMode: "soft-light" }}
        />
        <motion.path
          variants={draw}
          d="M40.5 62V55.0027C40.5 55.0018 40.5012 55.0013 40.5018 55.0021L46.4824 61.9795C46.4884 61.9865 46.5 61.9823 46.5 61.973V55"
          stroke="#F0F1F5"
          strokeWidth="2"
          strokeLinecap="square"
        />
        <motion.path
          variants={draw}
          d="M40.5 62V55.0027C40.5 55.0018 40.5012 55.0013 40.5018 55.0021L46.4824 61.9795C46.4884 61.9865 46.5 61.9823 46.5 61.973V55"
          stroke="url(#paint3_linear_842_31370)"
          strokeOpacity="0.6"
          strokeWidth="2"
          strokeLinecap="square"
          style={{ mixBlendMode: "soft-light" }}
        />
        <motion.path
          variants={draw}
          d="M62.5 54C62.5 54 62.5 56.7426 62.5 58.5M62.5 63C62.5 63 62.5 60.2574 62.5 58.5M62.5 58.5C66.5 58.5 66.5 54 66.5 54M62.5 58.5C64.0621 60.0377 66.5 60.1875 66.5 63"
          stroke="#F0F1F5"
          strokeWidth="2"
        />
        <motion.path
          variants={draw}
          d="M62.5 54C62.5 54 62.5 56.7426 62.5 58.5M62.5 63C62.5 63 62.5 60.2574 62.5 58.5M62.5 58.5C66.5 58.5 66.5 54 66.5 54M62.5 58.5C64.0621 60.0377 66.5 60.1875 66.5 63"
          stroke="url(#paint4_linear_842_31370)"
          strokeOpacity="0.6"
          strokeWidth="2"
          style={{ mixBlendMode: "soft-light" }}
        />
        <defs>
          <linearGradient
            id="paint0_linear_842_31370"
            x1="3"
            y1="63"
            x2="3"
            y2="63"
            gradientUnits="userSpaceOnUse">
            <stop />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_842_31370"
            x1="2"
            y1="61"
            x2="2.30058"
            y2="62.9538"
            gradientUnits="userSpaceOnUse">
            <stop />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_842_31370"
            x1="23.5"
            y1="63"
            x2="25.4756"
            y2="62.7805"
            gradientUnits="userSpaceOnUse">
            <stop />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_842_31370"
            x1="46.5"
            y1="62"
            x2="39.5824"
            y2="56.0706"
            gradientUnits="userSpaceOnUse">
            <stop />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_842_31370"
            x1="62.5"
            y1="63"
            x2="69.1804"
            y2="60.0309"
            gradientUnits="userSpaceOnUse">
            <stop />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </motion.svg>
    </>
  );
};

export default MPJLink;
