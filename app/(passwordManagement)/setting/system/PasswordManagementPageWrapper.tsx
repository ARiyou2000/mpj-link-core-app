import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import PassCodeInput from "@/components/PassCodeInput";

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
      <div
        className={cn(
          "h-full px-4 pt-8 pb-2 flex flex-col justify-between",
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
    </>
  );
};

export default PasswordManagementPageWrapper;
