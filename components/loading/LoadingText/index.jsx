import { cn } from "@/lib/utils";

const Loading = ({ className, ...props }) => {
  return (
    <>
      <h2
        className={cn(
          "text-center text-[1em] w-full text-white animate-pulse cursor-wait",
          className,
        )}
        {...props}>
        در حال بارگیری...
      </h2>
    </>
  );
};

export default Loading;
