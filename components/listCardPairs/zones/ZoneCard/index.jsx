"use client";

import { cn } from "@/lib/utils";
import useMarquee from "@/hooks/useMarquee";
import Link from "next/link";

const ZoneCard = ({ name, publicId, className, ...props }) => {
  const [titleRef, titleClassName] = useMarquee();
  return (
    <Link
      href={`/zones/${publicId}`}
      className={cn(
        `w-[6.5625rem] h-9 flex-none rounded-card border-1 border-milkwhite last:ml-4 first:mr-4 marquee-container`,
        className,
      )}
      {...props}>
      <h3
        className={`w-full h-full p-2 flex justify-center items-center text-white font-semibold text-sm text-center align-middle ${titleClassName}`}
        ref={titleRef}>
        {name}
      </h3>
    </Link>
  );
};

export default ZoneCard;
