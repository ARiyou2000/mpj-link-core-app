import { Heart } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const iconsClassName = "h-6 w-6";
const LockPageFavoriteNavigation = ({ className, ...props }) => {
  return (
    <>
      <Link
        href={"/favorite"}
        className={cn(
          "bg-[#383838] px-6 py-2 rounded-t-xl overflow-hidden",
          "landscape:fixed right-11 bottom-7 landscape:p-2.5 landscape:rounded-full",
          className,
        )}
        {...props}>
        <Heart className={iconsClassName} />
      </Link>
    </>
  );
};

export default LockPageFavoriteNavigation;
