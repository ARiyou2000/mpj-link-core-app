"use client";

import { motion } from "framer-motion";
import { draw, IconsPropsT } from "@/components/icons";
import { cn } from "@/lib/utils";

const HomeDashed = ({ className, ...props }: IconsPropsT) => {
  return (
    <>
      <motion.svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#F4F4F4"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={"hidden"}
        animate={"visible"}
        whileTap={"hidden"}
        className={cn("focus:outline-0", className)}
        {...props}>
        <motion.path
          variants={draw}
          d="M22 10.5002C22 9.29016 21.19 7.74016 20.2 7.05016L14.02 2.72016C12.62 1.74016 10.37 1.79016 9.02 2.84016L3.63 7.04016C2.73 7.74016 2 9.23016 2 10.3602V17.7702C2 20.0902 3.89 21.9902 6.21 21.9902H17.79C20.11 21.9902 22 20.0902 22 17.7802V14.6802"
        />
        <motion.path variants={draw} d="M12 17.9902V14.9902" />
      </motion.svg>
    </>
  );
};

export default HomeDashed;
