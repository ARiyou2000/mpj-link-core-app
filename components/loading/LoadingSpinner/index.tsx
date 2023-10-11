import styles from "./LoadingSpinner.module.css";
import { cn } from "@/lib/utils";

const LoadingSpinner = ({ className = "" }) => {
  return (
    <>
      <span
        className={cn(
          // "relative inline-block rounded-full before:rounded-full after:rounded-full before:border-4 box-border before:box-border after:box-border " +
          //   "before:content-[''] before:absolute after:absolute before:inset-0 after:inset-0 before:m-auto after:m-auto before:origin-center after:origin-center " +
          //   "w-16 h-16 border-t-milkwhite border-r-milkwhite border-b-transparent border-l-transparent animate-rotate duration-2000 " +
          //   "before:w-8 before:h-8 before:border-t-milkwhite before:border-r-milkwhite before:border-b-transparent before:border-l-transparent before:animate-rotate before:duration-3000 " +
          //   "after:w-[3rem] after:h-[3rem] after:border-t-transparent after:border-r-transparent after:border-b-milkwhite after:border-l-milkwhite after:animate-rotateBack after:duration-1000",
          styles.loader,
          "mx-auto cursor-wait",
          className,
        )}
      />
    </>
  );
};

export default LoadingSpinner;
