"use client";

import { motion } from "framer-motion";
import { GradiantIconsPropsT } from "@/components/icons/colored";
import { draw } from "@/components/icons";

const CurtainsGradiantDeviceIcon = ({
  className = "",
  strokeColor = "white",
  ...props
}: GradiantIconsPropsT) => {
  return (
    <motion.svg
      width="64"
      height="66"
      viewBox="0 0 64 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={"hidden"}
      animate={"visible"}
      className={className}
      {...props}>
      <motion.path
        variants={draw}
        d="M62.5 46L58 46L53.5 46"
        stroke={
          strokeColor === "gradiant"
            ? "url(#paint0_linear_825_22453)"
            : strokeColor
        }
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <motion.path
        variants={draw}
        d="M1.5 46L6 46L10.5 46"
        stroke={
          strokeColor === "gradiant"
            ? "url(#paint1_linear_825_22453)"
            : strokeColor
        }
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <motion.path
        variants={draw}
        d="M7 35.2969C9.48848 31.0781 11.2926 25.6562 11.5 20.5"
        stroke={
          strokeColor === "gradiant"
            ? "url(#paint2_linear_825_22453)"
            : strokeColor
        }
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <motion.path
        variants={draw}
        d="M57.5 35.2969C55.0115 31.0781 53.2074 25.6562 53 20.5"
        stroke={
          strokeColor === "gradiant"
            ? "url(#paint3_linear_825_22453)"
            : strokeColor
        }
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <motion.path
        variants={draw}
        d="M63.0486 15V60.5C63.0486 63.2614 60.81 65.5 58.0486 65.5H52.2365C49.6 65.5 47.4289 63.4517 47.5491 60.8179C47.7032 57.4439 48.2351 52.8466 49.8406 49.1135C51.0295 46.349 51.1027 42.6836 49.0888 40.4475C46.7038 37.7991 43.8786 34.2425 42.5489 31C40.0125 24.8152 40.4994 15 40.4994 15"
        stroke={
          strokeColor === "gradiant"
            ? "url(#paint4_linear_825_22453)"
            : strokeColor
        }
        strokeLinecap="round"
      />
      <motion.path
        variants={draw}
        d="M1.01294 15V60.5C1.01294 63.2614 3.25152 65.5 6.01294 65.5H11.825C14.4615 65.5 16.6327 63.4517 16.5124 60.8179C16.3438 57.127 15.7231 51.9722 13.7396 48.0862C12.6451 45.9419 12.5661 43.0472 14.2061 41.2847C16.7199 38.5832 20.037 34.5982 21.5126 31C24.0491 24.8152 23.5621 15 23.5621 15"
        stroke={
          strokeColor === "gradiant"
            ? "url(#paint5_linear_825_22453)"
            : strokeColor
        }
        strokeLinecap="round"
      />
      <motion.path
        variants={draw}
        d="M32 7.50007C23.2614 16.2387 16.8136 20.7773 5.98368 20.115C3.08227 19.9375 1 17.3834 1 14.4766V7.18347C1 3.88693 3.65956 1.20779 6.95601 1.18362L32 1"
        stroke={
          strokeColor === "gradiant"
            ? "url(#paint6_linear_825_22453)"
            : strokeColor
        }
        strokeLinecap="round"
      />
      <motion.path
        variants={draw}
        d="M32 7.5C40.7386 16.2386 47.1864 20.7773 58.0163 20.1149C60.9177 19.9375 63 17.3834 63 14.4765V7C63 3.68629 60.3137 1 57 1H32"
        stroke={
          strokeColor === "gradiant"
            ? "url(#paint7_linear_825_22453)"
            : strokeColor
        }
        strokeLinecap="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_825_22453"
          x1="63.542"
          y1="45.9216"
          x2="63.3482"
          y2="48.3781"
          gradientUnits="userSpaceOnUse">
          <stop offset="0.0186187" stopColor="#FB9393" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_825_22453"
          x1="0.457972"
          y1="45.9216"
          x2="0.651805"
          y2="48.3781"
          gradientUnits="userSpaceOnUse">
          <stop offset="0.0186187" stopColor="#FB9393" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_825_22453"
          x1="12.021"
          y1="19.3405"
          x2="-1.21452"
          y2="25.0085"
          gradientUnits="userSpaceOnUse">
          <stop offset="0.0186187" stopColor="#FB9393" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_825_22453"
          x1="52.479"
          y1="19.3405"
          x2="65.7145"
          y2="25.0085"
          gradientUnits="userSpaceOnUse">
          <stop offset="0.0186187" stopColor="#FB9393" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_825_22453"
          x1="65.6637"
          y1="11.0429"
          x2="9.37514"
          y2="46.4938"
          gradientUnits="userSpaceOnUse">
          <stop offset="0.0186187" stopColor="#FB9393" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_825_22453"
          x1="-1.60216"
          y1="11.0429"
          x2="54.6864"
          y2="46.4938"
          gradientUnits="userSpaceOnUse">
          <stop offset="0.0186187" stopColor="#FB9393" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_825_22453"
          x1="35.5892"
          y1="-0.502795"
          x2="18.1316"
          y2="39.2325"
          gradientUnits="userSpaceOnUse">
          <stop offset="0.0186187" stopColor="#FB9393" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_825_22453"
          x1="28.4108"
          y1="-0.502789"
          x2="45.8682"
          y2="39.2324"
          gradientUnits="userSpaceOnUse">
          <stop offset="0.0186187" stopColor="#FB9393" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
};

export default CurtainsGradiantDeviceIcon;
