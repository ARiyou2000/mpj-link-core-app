import { cn } from "@/lib/utils";

const GeneralHeader = ({ title, className, ...props }) => {
  return (
    <>
      <div
        className={cn("bg-black/50 rounded-2xl px-4 py-5", className)}
        {...props}>
        <h3 className={"text-xl text-milkwhite font-bold"}>{title}</h3>
      </div>
    </>
  );
};

export default GeneralHeader;
