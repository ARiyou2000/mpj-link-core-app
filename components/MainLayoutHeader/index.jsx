"use client";

import { cn } from "@/lib/utils";
import { Lock, MPJLink } from "@/components/icons";
import ChevronRightDashed from "@/components/icons/dashed/ChevronRightDashed";
// import { Bell } from "@/components/icons/dashed";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";

const MainLayoutHeader = ({ children, className, onBackClicked, ...props }) => {
  const router = useRouter();
  return (
    <>
      <div
        className={cn(
          "flex flex-row items-center justify-between landscape:justify-start gap-4 px-8 py-2.5 landscape:pt-12",
          className,
        )}
        {...props}>
        <Button
          className={"p-0 m-0 bg-transparent"}
          onClick={onBackClicked || router.back}>
          <ChevronRightDashed className={"h-6 w-6"} />
        </Button>
        <Link href={"/home"}>
          <MPJLink className={"h-7 w-20 landscape:hidden"} />
        </Link>
        <Link href={"/"}>
          <Lock className={"h-5 w-5"} />
          {/*<Bell className={"h-6 w-6"} />*/}
        </Link>
      </div>
    </>
  );
};

export default MainLayoutHeader;
