"use client";

import { motion } from "framer-motion";
import { draw, IconsPropsT } from "@/components/icons";
import { cn } from "@/lib/utils";

const SettingDashedAlt = ({ className, ...props }: IconsPropsT) => {
  return (
    <>
      <motion.svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#F4F4F4"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={"hidden"}
        animate={"visible"}
        whileTap={"hidden"}
        className={cn("focus:outline-0", className)}
        {...props}>
        <motion.path
          variants={draw}
          d="M13.0799 21L14.8799 21C16.9999 21 16.9999 21 18.3499 19L21.5299 13.5C22.0099 12.67 22.0099 11.32 21.5299 10.5L18.3499 5C16.9999 3 16.9999 3 14.8899 3L9.10986 3C6.99986 3 6.99986 3 5.64986 5L2.46986 10.5C1.98986 11.32 1.98986 12.67 2.46986 13.5L5.64986 19C6.99986 21 6.99986 21 9.10986 21"
        />
        <motion.path
          variants={draw}
          d="M12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 11.59 14.92 11.19 14.76 10.83"
          strokeMiterlimit="10"
        />
      </motion.svg>
    </>
  );
};

export default SettingDashedAlt;
