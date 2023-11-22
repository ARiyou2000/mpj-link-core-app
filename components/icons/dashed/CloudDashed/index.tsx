"use client";

import { motion } from "framer-motion";
import { draw, IconsPropsT } from "@/components/icons";
import { cn } from "@/lib/utils";

const SettingDashedAlt = ({ className, ...props }: IconsPropsT) => {
  return (
    <>
      <motion.svg
        width="25"
        height="21"
        viewBox="0 0 25 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#F4F4F4"
        initial={"hidden"}
        animate={"visible"}
        whileTap={"hidden"}
        className={cn("focus:outline-0", className)}
        {...props}>
        <motion.path
          variants={draw}
          d="M10.0034 18L9.99621 15"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <motion.circle
          variants={draw}
          cx="10.0059"
          cy="19.5"
          r="1.125"
          strokeWidth="0.75"
        />
        <motion.path
          variants={draw}
          d="M12.5059 17.5L12.5 15.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <motion.path
          variants={draw}
          d="M12.5117 17.5L13.5 18.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <motion.circle
          variants={draw}
          cx="1.5"
          cy="1.5"
          r="1.125"
          transform="matrix(-1 0 0 1 15.7578 18)"
          strokeWidth="0.75"
        />
        <motion.path
          variants={draw}
          d="M7.75195 17.5001L7.75195 15.0713"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <motion.path
          variants={draw}
          d="M7.74609 17.5L6.75781 18.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <motion.circle
          variants={draw}
          cx="6"
          cy="19.5"
          r="1.125"
          strokeWidth="0.75"
        />
        <motion.path
          variants={draw}
          d="M8.50815 15.0489C8.50815 15.0489 6.50781 15.0489 4.50815 15.0489C2.28182 15.0489 0.879572 12.7715 1.00815 10.5489C1.12803 8.47672 2.44877 6.80837 4.50815 6.54892C4.69388 6.52552 4.93133 6.52455 5.12823 6.52989C5.30801 6.53476 5.45131 6.35693 5.4205 6.17974C5.29581 5.46262 5.24993 3.87503 7 3C9.11596 1.94202 10.6161 3.09308 11.2169 3.71028C11.3534 3.85052 11.6145 3.82139 11.7094 3.65019C12.2096 2.74733 13.6424 0.654536 16.0082 1.04892C19.0085 1.54908 19.5078 3.54885 19.5082 5.54892C19.5082 5.77928 19.5082 6.08582 19.5082 6.29851C19.5082 6.43677 19.6197 6.55029 19.7575 6.56105C20.6292 6.6291 23.5134 7.07869 24.0082 10.0489C24.5078 13.0488 22.1351 15.0489 19.5082 15.0489C16.0082 15.0489 11.5082 15.0489 11.5082 15.0489"
          strokeLinecap="round"
        />
      </motion.svg>
    </>
  );
};

export default SettingDashedAlt;
