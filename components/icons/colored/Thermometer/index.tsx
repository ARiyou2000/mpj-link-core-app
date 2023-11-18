"use client";

import { motion } from "framer-motion";
import { GradiantIconsPropsT } from "@/components/icons/colored";

const ThermostatGradiantDeviceIcon = ({
  className = "",
  strokeColor = "white",
  ...props
}: GradiantIconsPropsT) => {
  return (
    <>
      <svg
        width="79"
        height="79"
        viewBox="0 0 79 79"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <path
          d="M34.5048 55.0334C33.3774 56.0294 32.5797 57.3448 32.2178 58.8049C31.8558 60.265 31.9467 61.8007 32.4784 63.2079C33.0101 64.6151 33.9574 65.8272 35.1944 66.6832C36.4315 67.5391 37.8997 67.9984 39.404 68C40.9083 68.0016 42.3775 67.5454 43.6163 66.692C44.8551 65.8387 45.805 64.6285 46.3396 63.2225C46.8743 61.8164 46.9684 60.2809 46.6095 58.82C46.2506 57.3591 45.4557 56.0421 44.3304 55.0438M44.353 54.4118V30.9412C44.353 28.2122 42.1407 26 39.4118 26C36.6829 26 34.4706 28.2122 34.4706 30.9412V54.4118"
          stroke={
            strokeColor === "gradiant"
              ? "url(#paint0_linear_101_12670)"
              : strokeColor
          }
          strokeWidth="1.17028"
          strokeLinecap="round"
        />
        <path
          d="M39.4053 61.1475H39.4267"
          stroke={
            strokeColor === "gradiant"
              ? "url(#paint1_linear_101_12670)"
              : strokeColor
          }
          strokeWidth="3.90093"
          strokeLinecap="round"
        />
        <path
          d="M39.4717 61.3686V42.5791"
          stroke={
            strokeColor === "gradiant"
              ? "url(#paint2_linear_101_12670)"
              : strokeColor
          }
          strokeWidth="1.17028"
          strokeLinecap="round"
        />
        <path
          d="M39.4707 40V35"
          stroke={
            strokeColor === "gradiant"
              ? "url(#paint3_linear_101_12670)"
              : strokeColor
          }
          strokeWidth="1.17028"
          strokeLinecap="round"
        />
        <path
          d="M22.8568 61.0048C18.2517 57.554 14.8572 52.7338 13.1599 47.2352C11.4626 41.7365 11.5496 35.8417 13.4084 30.3956C15.2673 24.9494 18.8026 20.2316 23.5076 16.9182C28.2126 13.6047 33.8458 11.8659 39.5998 11.9508C45.3538 12.0358 50.9332 13.9401 55.5384 17.391C60.1436 20.8418 63.5381 25.662 65.2354 31.1606C66.9327 36.6592 66.8457 42.554 64.9868 48.0002C63.1279 53.4463 59.5927 58.1642 54.8876 61.4776"
          stroke={
            strokeColor === "gradiant"
              ? "url(#paint4_linear_101_12670)"
              : strokeColor
          }
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_101_12670"
            x1="48.5398"
            y1="22.709"
            x2="7.16439"
            y2="43.2722"
            gradientUnits="userSpaceOnUse">
            <stop offset="0.0186187" stopColor="#FB9393" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_101_12670"
            x1="39.4292"
            y1="61.0691"
            x2="39.3546"
            y2="61.0714"
            gradientUnits="userSpaceOnUse">
            <stop offset="0.0186187" stopColor="#FB9393" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_101_12670"
            x1="40.5875"
            y1="41.1068"
            x2="37.1263"
            y2="41.3662"
            gradientUnits="userSpaceOnUse">
            <stop offset="0.0186187" stopColor="#FB9393" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_101_12670"
            x1="40.5865"
            y1="34.6082"
            x2="37.3616"
            y2="35.5164"
            gradientUnits="userSpaceOnUse">
            <stop offset="0.0186187" stopColor="#FB9393" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_101_12670"
            x1="33.9575"
            y1="-7.81973"
            x2="68.4079"
            y2="99.6507"
            gradientUnits="userSpaceOnUse">
            <stop offset="0.0186187" stopColor="#FB9393" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};

export default ThermostatGradiantDeviceIcon;
