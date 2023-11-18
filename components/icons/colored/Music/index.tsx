"use client";

import { motion } from "framer-motion";
import { GradiantIconsPropsT } from "@/components/icons/colored";
import { draw } from "@/components/icons";

const MusicPlayerGradiantDeviceIcon = ({
  className = "",
  strokeColor = "white",
  ...props
}: GradiantIconsPropsT) => {
  return (
    <>
      <motion.svg
        width="70"
        height="70"
        viewBox="0 0 70 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={"hidden"}
        animate={"visible"}
        className={className}
        {...props}>
        <motion.path
          variants={draw}
          d="M18.3168 64.1668C23.3426 64.1668 27.4168 60.0926 27.4168 55.0668C27.4168 50.041 23.3426 45.9668 18.3168 45.9668C13.291 45.9668 9.2168 50.041 9.2168 55.0668C9.2168 60.0926 13.291 64.1668 18.3168 64.1668Z"
          stroke={
            strokeColor === "gradiant"
              ? "url(#paint0_linear_101_12668)"
              : strokeColor
          }
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <motion.path
          variants={draw}
          d="M60.7837 23.2165V13.4165C60.7837 5.83318 56.0295 4.78318 51.217 6.09568L33.017 11.054C29.692 11.9582 27.417 14.5832 27.417 18.3748V24.704V28.9623V55.0373"
          stroke={
            strokeColor === "gradiant"
              ? "url(#paint1_linear_101_12668)"
              : strokeColor
          }
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <motion.path
          variants={draw}
          d="M60.7832 49V35"
          stroke={
            strokeColor === "gradiant"
              ? "url(#paint2_linear_101_12668)"
              : strokeColor
          }
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <motion.path
          variants={draw}
          d="M51.683 58.0999C56.7088 58.0999 60.783 54.0257 60.783 48.9999C60.783 43.9741 56.7088 39.8999 51.683 39.8999C46.6572 39.8999 42.583 43.9741 42.583 48.9999C42.583 54.0257 46.6572 58.0999 51.683 58.0999Z"
          stroke={
            strokeColor === "gradiant"
              ? "url(#paint3_linear_101_12668)"
              : strokeColor
          }
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <motion.path
          variants={draw}
          d="M27.417 27.7665L60.7837 18.6665"
          stroke={
            strokeColor === "gradiant"
              ? "url(#paint4_linear_101_12668)"
              : strokeColor
          }
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_101_12668"
            x1="29.524"
            y1="44.5407"
            x2="8.28689"
            y2="74.4455"
            gradientUnits="userSpaceOnUse">
            <stop offset="0.0186187" stopColor="#FB9393" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_101_12668"
            x1="64.6469"
            y1="1.74313"
            x2="3.64499"
            y2="59.7374"
            gradientUnits="userSpaceOnUse">
            <stop offset="0.0186187" stopColor="#FB9393" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_101_12668"
            x1="61.899"
            y1="33.903"
            x2="58.4532"
            y2="34.2496"
            gradientUnits="userSpaceOnUse">
            <stop offset="0.0186187" stopColor="#FB9393" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_101_12668"
            x1="62.8902"
            y1="38.4738"
            x2="41.6531"
            y2="68.3786"
            gradientUnits="userSpaceOnUse">
            <stop offset="0.0186187" stopColor="#FB9393" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_101_12668"
            x1="64.6469"
            y1="17.9534"
            x2="60.4479"
            y2="39.6335"
            gradientUnits="userSpaceOnUse">
            <stop offset="0.0186187" stopColor="#FB9393" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
        </defs>
      </motion.svg>
    </>
  );
};

export default MusicPlayerGradiantDeviceIcon;
