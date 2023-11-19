"use client";

import { motion } from "framer-motion";
import { GradiantIconsPropsT } from "@/components/icons/colored";
import { draw } from "@/components/icons";

const ThermostatGradiantDeviceIcon = ({
  className = "",
  strokeColor = "white",
  ...props
}: GradiantIconsPropsT) => {
  return (
    <>
      <motion.svg
        width="56"
        height="59"
        viewBox="0 0 56 59"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={"hidden"}
        animate={"visible"}
        className={className}
        {...props}>
        <motion.path
          variants={draw}
          d="M23.307 44.8362C22.1796 45.8321 21.382 47.1475 21.02 48.6076C20.658 50.0677 20.7489 51.6034 21.2806 53.0106C21.8123 54.4178 22.7596 55.6299 23.9967 56.4859C25.2337 57.3419 26.7019 57.8011 28.2062 57.8027C29.7105 57.8043 31.1797 57.3481 32.4185 56.4948C33.6574 55.6414 34.6072 54.4313 35.1419 53.0252C35.6765 51.6191 35.7706 50.0836 35.4118 48.6227C35.0529 47.1619 34.258 45.8448 33.1326 44.8465M33.1552 44.2145V20.7439C33.1552 18.015 30.943 15.8027 28.2141 15.8027C25.4851 15.8027 23.2729 18.015 23.2729 20.7439V44.2145"
          stroke={
            strokeColor === "gradiant"
              ? "url(#paint0_linear_842_31283)"
              : strokeColor
          }
          stroke-width="1.17028"
          stroke-linecap="round"
        />
        <motion.path
          variants={draw}
          d="M28.208 50.9502H28.2295"
          stroke={
            strokeColor === "gradiant"
              ? "url(#paint1_linear_842_31283)"
              : strokeColor
          }
          stroke-width="3.90093"
          stroke-linecap="round"
        />
        <motion.path
          variants={draw}
          d="M28.2739 51.1713V32.3818"
          stroke={
            strokeColor === "gradiant"
              ? "url(#paint2_linear_842_31283)"
              : strokeColor
          }
          stroke-width="1.17028"
          stroke-linecap="round"
        />
        <motion.path
          variants={draw}
          d="M28.2725 29.8027V24.8027"
          stroke={
            strokeColor === "gradiant"
              ? "url(#paint3_linear_842_31283)"
              : strokeColor
          }
          stroke-width="1.17028"
          stroke-linecap="round"
        />
        <motion.path
          variants={draw}
          d="M14.7358 51.8038C9.47778 48.8739 5.33785 44.2856 2.96219 38.755C0.58654 33.2245 0.108868 27.063 1.60374 21.2324C3.09862 15.4018 6.48191 10.2302 11.2255 6.52494C15.9691 2.81966 21.806 0.789212 27.825 0.750561C33.8441 0.711909 39.7066 2.66723 44.4973 6.31128C49.2881 9.95534 52.7375 15.083 54.3072 20.894C55.8768 26.7049 55.4783 32.872 53.1739 38.4326C50.8694 43.9932 46.7888 48.6343 41.5689 51.6315"
          stroke={
            strokeColor === "gradiant"
              ? "url(#paint4_linear_842_31283)"
              : strokeColor
          }
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_842_31283"
            x1="37.3421"
            y1="12.5117"
            x2="-4.03337"
            y2="33.0749"
            gradientUnits="userSpaceOnUse">
            <stop offset="0.0186187" stopColor="#FB9393" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_842_31283"
            x1="28.2319"
            y1="50.8718"
            x2="28.1573"
            y2="50.8741"
            gradientUnits="userSpaceOnUse">
            <stop offset="0.0186187" stopColor="#FB9393" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_842_31283"
            x1="29.3897"
            y1="30.9095"
            x2="25.9285"
            y2="31.1689"
            gradientUnits="userSpaceOnUse">
            <stop offset="0.0186187" stopColor="#FB9393" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_842_31283"
            x1="29.3882"
            y1="24.4109"
            x2="26.1634"
            y2="25.3192"
            gradientUnits="userSpaceOnUse">
            <stop offset="0.0186187" stopColor="#FB9393" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_842_31283"
            x1="-4.38806"
            y1="-6.48372"
            x2="87.6269"
            y2="58.8613"
            gradientUnits="userSpaceOnUse">
            <stop offset="0.0186187" stopColor="#FB9393" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
        </defs>
      </motion.svg>
    </>
  );
};

export default ThermostatGradiantDeviceIcon;
