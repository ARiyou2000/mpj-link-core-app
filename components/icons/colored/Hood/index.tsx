"use client";

import { motion } from "framer-motion";
import { GradiantIconsPropsT } from "@/components/icons/colored";

const HoodGradiantDeviceIcon = ({
  className = "",
  strokeColor = "white",
  ...props
}: GradiantIconsPropsT) => {
  return (
    <svg
      width="75"
      height="71"
      viewBox="0 0 75 71"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}>
      <g
        clipPath={
          strokeColor === "gradiant" ? "url(#clip0_418_17115)" : strokeColor
        }>
        <path
          d="M66.6581 45.2638L52.7184 27.8362V1.7069C52.7184 1.0431 52.1753 0.5 51.5115 0.5H22.546C21.8822 0.5 21.3391 1.0431 21.3391 1.7069V27.8362L7.39944 45.2638C6.39772 45.5534 5.64944 46.4707 5.64944 47.569V52.3965C5.64944 53.7241 6.73565 54.8103 8.06324 54.8103H65.9943C67.3219 54.8103 68.4081 53.7241 68.4081 52.3965V47.569C68.4081 46.4707 67.6598 45.5534 66.6581 45.2638ZM23.7529 2.91379H50.3046V27.0517H23.7529V2.91379ZM23.1253 29.4655H50.9322L63.4839 45.1552H10.5736L23.1253 29.4655ZM8.06324 52.3965V47.569H65.9943V52.3965H8.06324ZM30.9943 49.9828C30.9943 50.6466 30.4512 51.1897 29.7874 51.1897C29.1236 51.1897 28.5805 50.6466 28.5805 49.9828C28.5805 49.319 29.1236 48.7759 29.7874 48.7759C30.4512 48.7759 30.9943 49.319 30.9943 49.9828ZM35.8219 49.9828C35.8219 50.6466 35.2788 51.1897 34.615 51.1897C33.9512 51.1897 33.4081 50.6466 33.4081 49.9828C33.4081 49.319 33.9512 48.7759 34.615 48.7759C35.2788 48.7759 35.8219 49.319 35.8219 49.9828ZM40.6494 49.9828C40.6494 50.6466 40.1063 51.1897 39.4426 51.1897C38.7788 51.1897 38.2357 50.6466 38.2357 49.9828C38.2357 49.319 38.7788 48.7759 39.4426 48.7759C40.1063 48.7759 40.6494 49.319 40.6494 49.9828ZM45.477 49.9828C45.477 50.6466 44.9339 51.1897 44.2701 51.1897C43.6063 51.1897 43.0632 50.6466 43.0632 49.9828C43.0632 49.319 43.6063 48.7759 44.2701 48.7759C44.9339 48.7759 45.477 49.319 45.477 49.9828ZM38.3684 64.3086C39.4063 65.8776 39.4063 67.8931 38.3684 69.4621L38.0305 69.969C37.8012 70.319 37.415 70.5 37.0288 70.5C36.7994 70.5 36.5701 70.4397 36.365 70.2948C35.8098 69.9207 35.665 69.1724 36.027 68.6172L36.365 68.1103C36.8598 67.3621 36.8598 66.3965 36.365 65.6362L35.6891 64.6224C34.6512 63.0534 34.6512 61.0379 35.6891 59.469L36.027 58.9621C36.4012 58.4069 37.1495 58.2621 37.7046 58.6241C38.2598 58.9983 38.4046 59.7465 38.0426 60.3017L37.7046 60.8086C37.2098 61.5569 37.2098 62.5224 37.7046 63.2828L38.3805 64.2965L38.3684 64.3086ZM26.2994 64.3086C27.3374 65.8776 27.3374 67.8931 26.2994 69.4621L25.9615 69.969C25.7322 70.319 25.346 70.5 24.9598 70.5C24.7305 70.5 24.5012 70.4397 24.296 70.2948C23.7408 69.9207 23.596 69.1724 23.9581 68.6172L24.296 68.1103C24.7908 67.3621 24.7908 66.3965 24.296 65.6362L23.6201 64.6224C22.5822 63.0534 22.5822 61.0379 23.6201 59.469L23.9581 58.9621C24.3322 58.4069 25.0805 58.2621 25.6357 58.6241C26.1908 58.9983 26.3357 59.7465 25.9736 60.3017L25.6357 60.8086C25.1408 61.5569 25.1408 62.5224 25.6357 63.2828L26.3115 64.2965L26.2994 64.3086ZM50.4374 64.3086C51.4753 65.8776 51.4753 67.8931 50.4374 69.4621L50.0995 69.969C49.8701 70.319 49.4839 70.5 49.0977 70.5C48.8684 70.5 48.6391 70.4397 48.4339 70.2948C47.8788 69.9207 47.7339 69.1724 48.096 68.6172L48.4339 68.1103C48.9288 67.3621 48.9288 66.3965 48.4339 65.6362L47.7581 64.6224C46.7201 63.0534 46.7201 61.0379 47.7581 59.469L48.096 58.9621C48.4701 58.4069 49.2184 58.2621 49.7736 58.6241C50.3288 58.9983 50.4736 59.7465 50.1115 60.3017L49.7736 60.8086C49.2788 61.5569 49.2788 62.5224 49.7736 63.2828L50.4494 64.2965L50.4374 64.3086Z"
          fill={
            strokeColor === "gradiant"
              ? "url(#paint0_linear_418_17115)"
              : strokeColor
          }
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_418_17115"
          x1="75.6743"
          y1="-4.98508"
          x2="-8.54053"
          y2="101.334"
          gradientUnits="userSpaceOnUse">
          <stop offset="0.0186187" stopColor="#FB9393" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
        <clipPath id="clip0_418_17115">
          <rect
            width="73.7011"
            height="70"
            fill="white"
            transform="translate(0.649445 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default HoodGradiantDeviceIcon;