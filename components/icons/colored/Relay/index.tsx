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
        className={className}
        {...props}>
        <motion.path
          variants={draw}
          d="M41 35.7443C40.9768 34.3292 40.4405 32.9706 39.4908 31.9212C38.541 30.8718 37.2425 30.2031 35.8367 30.0393C34.4309 29.8754 33.0134 30.2278 31.8478 31.0307C30.6823 31.8336 29.8479 33.0324 29.5 34.4043H0V37.4043H29.6C29.9608 38.6101 30.7002 39.6676 31.7088 40.4204C32.7173 41.1732 33.9415 41.5813 35.2 41.5843C36.6003 41.5765 37.9504 41.0613 39 40.1344L56.12 52.2044L57.84 49.7544L40.69 37.6543C40.9003 37.0397 41.0051 36.3939 41 35.7443ZM35.16 38.5843C34.5983 38.5843 34.0492 38.4178 33.5822 38.1057C33.1151 37.7937 32.7511 37.3501 32.5362 36.8312C32.3212 36.3122 32.265 35.7412 32.3746 35.1903C32.4841 34.6394 32.7546 34.1333 33.1518 33.7362C33.549 33.339 34.055 33.0685 34.6059 32.9589C35.1568 32.8493 35.7279 32.9056 36.2468 33.1205C36.7658 33.3355 37.2093 33.6995 37.5214 34.1665C37.8334 34.6336 38 35.1827 38 35.7443C38 36.4941 37.7036 37.2135 37.1753 37.7455C36.647 38.2775 35.9297 38.5791 35.18 38.5843H35.16Z"
          fill={
            strokeColor === "gradiant"
              ? "url(#paint0_linear_420_18882)"
              : strokeColor
          }
        />
        <motion.path
          variants={draw}
          d="M98.8414 33.6501H69.3414C69.0138 32.2734 68.1966 31.0629 67.0422 30.2443C65.8878 29.4257 64.4751 29.0549 63.0675 29.2011C61.66 29.3473 60.3536 30.0005 59.3921 31.0389C58.4306 32.0772 57.8796 33.4299 57.8419 34.8445C57.8042 36.2592 58.2823 37.6393 59.1871 38.7274C60.0919 39.8155 61.3616 40.5374 62.7593 40.7584C64.1571 40.9794 65.5876 40.6845 66.7839 39.9286C67.9803 39.1726 68.8609 38.0074 69.2614 36.6501H98.8414V33.6501ZM63.6414 37.8301C63.0797 37.8301 62.5306 37.6635 62.0636 37.3515C61.5966 37.0394 61.2326 36.5959 61.0176 36.0769C60.8027 35.558 60.7464 34.987 60.856 34.4361C60.9656 33.8851 61.2361 33.3791 61.6332 32.9819C62.0304 32.5847 62.5365 32.3143 63.0874 32.2047C63.6383 32.0951 64.2093 32.1513 64.7282 32.3663C65.2472 32.5812 65.6907 32.9453 66.0028 33.4123C66.3149 33.8793 66.4814 34.4284 66.4814 34.9901C66.4788 35.7391 66.1815 36.4569 65.6538 36.9884C65.1261 37.5199 64.4104 37.8222 63.6614 37.8301H63.6414Z"
          fill={
            strokeColor === "gradiant"
              ? "url(#paint1_linear_420_18882)"
              : strokeColor
          }
        />
        <motion.rect
          variants={draw}
          x="19"
          y="14"
          width="61"
          height="43"
          rx="20"
          stroke={
            strokeColor === "gradiant"
              ? "url(#paint2_linear_420_18882)"
              : strokeColor
          }
          strokeWidth="2"
        />
        <defs>
          <linearGradient
            id="paint0_linear_420_18882"
            x1="64.5368"
            y1="28.2601"
            x2="50.6091"
            y2="79.3475"
            gradientUnits="userSpaceOnUse">
            <stop offset="0.0186187" stopColor="#FB9393" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_420_18882"
            x1="103.589"
            y1="28.2563"
            x2="97.9962"
            y2="55.948"
            gradientUnits="userSpaceOnUse">
            <stop offset="0.0186187" stopColor="#FB9393" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_420_18882"
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
