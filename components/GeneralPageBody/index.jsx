import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import GeneralHeader from "../GeneralHeader";

const GeneralPageBody = ({ title, children, className, ...props }) => {
  return (
    <>
      <div
        className={cn("h-full px-4 pt-4 flex flex-col gap-6", className)}
        {...props}>
        <GeneralHeader title={title} />

        <ScrollArea className={"flex-1 w-full"}>{children}</ScrollArea>
      </div>
    </>
  );
};

export default GeneralPageBody;
