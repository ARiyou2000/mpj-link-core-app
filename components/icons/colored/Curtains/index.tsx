"use client";

import { motion } from "framer-motion";
import { GradiantIconsPropsT } from "@/components/icons/colored";

const CurtainsGradiantDeviceIcon = ({
  className = "",
  strokeColor = "white",
  ...props
}: GradiantIconsPropsT) => {
  return (
    <svg
      width="177"
      height="200"
      viewBox="0 0 177 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}>
      <path
        d="M7 131L30 131"
        stroke={
          strokeColor === "gradiant"
            ? "url(#paint0_linear_670_22060)"
            : strokeColor
        }
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M66.3803 51V65C66.3803 91.6485 53.0773 116.149 32.6366 128.547C30.0677 130.106 29.1194 133.473 30.6779 136.042C39.3293 150.302 44.2605 163.243 44.2605 181.25V182.5C44.2605 185.261 42.0219 187.5 39.2605 187.5H10.5508C7.78935 187.5 5.55078 185.261 5.55078 182.5V51"
        stroke={
          strokeColor === "gradiant"
            ? "url(#paint1_linear_670_22060)"
            : strokeColor
        }
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M171 131L147 131"
        stroke={
          strokeColor === "gradiant"
            ? "url(#paint2_linear_670_22060)"
            : strokeColor
        }
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M112.12 51C112.12 50.1716 111.448 49.5 110.62 49.5C109.791 49.5 109.12 50.1716 109.12 51V65C109.12 92.1212 122.654 117.134 143.586 129.83C145.498 130.99 146.138 133.454 145.04 135.264C136.287 149.691 131.24 162.899 131.24 181.25V182.5C131.24 186.09 134.15 189 137.74 189H166.449C170.039 189 172.949 186.09 172.949 182.5V159.5C172.949 158.672 172.278 158 171.449 158C170.621 158 169.949 158.672 169.949 159.5V182.5C169.949 184.433 168.382 186 166.449 186H137.74C135.807 186 134.24 184.433 134.24 182.5V181.25C134.24 163.586 139.055 150.913 147.605 136.82C149.624 133.491 148.367 129.221 145.141 127.265C125.192 115.164 112.12 91.1758 112.12 65V51ZM169.949 148.5C169.949 149.328 170.621 150 171.449 150C172.278 150 172.949 149.328 172.949 148.5V51C172.949 50.1716 172.278 49.5 171.449 49.5C170.621 49.5 169.949 50.1716 169.949 51V148.5Z"
        fill={
          strokeColor === "gradiant"
            ? "url(#paint3_linear_670_22060)"
            : strokeColor
        }
      />
      <path
        d="M22.1406 100C28.7766 88.75 32.6475 75.625 33.2005 61.875"
        stroke={
          strokeColor === "gradiant"
            ? "url(#paint4_linear_670_22060)"
            : strokeColor
        }
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M154.859 100C148.224 88.75 144.353 75.625 143.8 61.875"
        stroke={
          strokeColor === "gradiant"
            ? "url(#paint5_linear_670_22060)"
            : strokeColor
        }
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.5503 14C8.6173 14 7.05029 15.567 7.05029 17.5V56.6291C7.05029 58.2839 8.18707 59.6627 9.72398 59.928C13.8647 60.6429 18.0032 61 22.1402 61C46.9796 61 69.1586 50.1477 82.8401 33.8171C85.7367 30.3596 91.2624 30.3596 94.1591 33.8171C107.841 50.1477 130.02 61 154.859 61C158.996 61 163.134 60.6429 167.275 59.928C168.812 59.6627 169.949 58.2839 169.949 56.6291V17.5C169.949 15.567 168.382 14 166.449 14H50.5581H28.0542H10.5503ZM4.05029 17.5C4.05029 13.9101 6.96045 11 10.5503 11H28.0542H50.5581H166.449C170.039 11 172.949 13.9101 172.949 17.5V56.6291C172.949 59.6476 170.854 62.3545 167.786 62.8843C163.479 63.6278 159.17 64 154.859 64C129.161 64 106.129 52.7764 91.8595 35.7437C90.1619 33.7174 86.8373 33.7174 85.1397 35.7437C70.87 52.7764 47.8384 64 22.1402 64C17.8296 64 13.5204 63.6278 9.21357 62.8843C6.14525 62.3545 4.05029 59.6476 4.05029 56.6291V17.5Z"
        fill={
          strokeColor === "gradiant"
            ? "url(#paint6_linear_670_22060)"
            : strokeColor
        }
      />
      <defs>
        <linearGradient
          id="paint0_linear_670_22060"
          x1="32.663"
          y1="130.922"
          x2="32.5867"
          y2="133.391"
          gradientUnits="userSpaceOnUse">
          <stop offset="0.0186187" stopColor="#FB9393" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_670_22060"
          x1="73.4232"
          y1="40.3041"
          x2="-78.4835"
          y2="135.629"
          gradientUnits="userSpaceOnUse">
          <stop offset="0.0186187" stopColor="#FB9393" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_670_22060"
          x1="173.779"
          y1="130.922"
          x2="173.706"
          y2="133.391"
          gradientUnits="userSpaceOnUse">
          <stop offset="0.0186187" stopColor="#FB9393" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_670_22060"
          x1="180.34"
          y1="38.569"
          x2="23.3461"
          y2="139.721"
          gradientUnits="userSpaceOnUse">
          <stop offset="0.0186187" stopColor="#FB9393" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_670_22060"
          x1="34.4811"
          y1="58.8876"
          x2="1.49073"
          y2="72.364"
          gradientUnits="userSpaceOnUse">
          <stop offset="0.0186187" stopColor="#FB9393" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_670_22060"
          x1="156.14"
          y1="58.8876"
          x2="123.15"
          y2="72.364"
          gradientUnits="userSpaceOnUse">
          <stop offset="0.0186187" stopColor="#FB9393" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_670_22060"
          x1="192.504"
          y1="6.84701"
          x2="164.691"
          y2="131.654"
          gradientUnits="userSpaceOnUse">
          <stop offset="0.0186187" stopColor="#FB9393" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default CurtainsGradiantDeviceIcon;
