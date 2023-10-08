import { cn } from "@/lib/utils";
import { MPJLink } from "@/components/icons";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";

const ErrorPageBody = ({ code, title, description, className, ...props }) => {
  return (
    <>
      <ScrollArea className={"flex-1 h-full w-full"}>
        <div
          className={cn(
            "p-4 h-full w-full flex flex-col items-center justify-evenly gap-10",
            className,
          )}
          {...props}>
          <MPJLink className={"h-10 w-[7.373rem]"} />

          <h2
            className={
              "flex items-center justify-center rounded-full p-9 w-56 h-56 bg-[#D67174] text-white font-semibold text-8xl"
            }>
            {code}
          </h2>

          <div className={"flex flex-col items-center justify-center gap-5"}>
            {title && (
              <h1 className={"text-center text-2xl text-white"}>{title}</h1>
            )}
            {description && (
              <h1 className={"text-center text-md font-light text-milkwhite"}>
                {description}
              </h1>
            )}
          </div>

          <Link href={"/fa/"} className={"rounded-3xl py-3 px-5 bg-[#D67174]"}>
            صفحه اصلی
          </Link>
        </div>
      </ScrollArea>
    </>
  );
};

export default ErrorPageBody;
