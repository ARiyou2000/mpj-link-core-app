import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import PassCodeInput from "@/components/PassCodeInput";
import { ScrollArea } from "@/components/ui/scroll-area";

const PasswordManagementPageWrapper = ({
  className = "",
  children,
  header,
  passcodeText,
  passcodeStatus,
  onPasscodeSubmit,
  ...otherProps
}: {
  children: ReactNode;
  className?: string;
  header: string;
  passcodeText: string;
  passcodeStatus: string;
  onPasscodeSubmit: (passcode: string) => void;
}) => {
  return (
    <>
      <ScrollArea className={"flex-1 h-full"}>
        <div
          className={cn(
            "h-full w-full px-1 pt-8 pb-2 flex flex-col justify-between",
            className,
          )}>
          <h3 className={"text-white text-lg"}>{header}</h3>
          {children}

          <PassCodeInput
            text={passcodeText}
            status={passcodeStatus}
            onSubmit={onPasscodeSubmit}
          />
        </div>
      </ScrollArea>
    </>
  );
};

export default PasswordManagementPageWrapper;
