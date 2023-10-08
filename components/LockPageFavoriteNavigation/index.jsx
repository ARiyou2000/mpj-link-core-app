import { Heart } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const iconsClassName = "h-6 w-6";
const LockPageFavoriteNavigation = ({ className, ...props }) => {
  return (
    <>
      <div
        className={cn(
          "bg-[#383838] max-h-[4.4rem] px-6 py-2 rounded-t-xl overflow-hidden",
          className,
        )}
        {...props}>
        <Link href={"/fa/favorite"}>
          <Heart className={iconsClassName} />
        </Link>
      </div>
    </>
  );
};

export default LockPageFavoriteNavigation;
