"use client";

import { cn } from "@/lib/utils";
import { ReactElement, useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";

const passLengthCheckedInitState = ["empty", "empty", "empty", "empty"];
const statusTextInitState = "لطفا رمز ورود خود را وارد کنید";

export type PasscodeValidationStatusT =
  | "initial"
  | "normal"
  | "success"
  | "error"
  | "loading";

export type PasscodeTextType = ReactElement | string;

export type PassCodeInputPropsT = {
  text: PasscodeTextType;
  disabled: boolean;
  status: PasscodeValidationStatusT;
  className?: string;
  onSubmit: (passCode: string) => Promise<unknown>;
};
const PassCodeInput = ({
  onSubmit,
  text = statusTextInitState,
  disabled = false,
  status: validationStatus = "initial",
  className = "",
  ...props
}: PassCodeInputPropsT) => {
  const [passLengthChecked, setPassLengthChecked] = useState(
    passLengthCheckedInitState,
  );
  const [pass, setPass] = useState("");
  const [status, setStatus] = useState(validationStatus);

  const inputElRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputElRef?.current?.focus();
  }, []);
  useEffect(() => {
    inputElRef?.current?.focus();
    setStatus(validationStatus);
  }, [validationStatus]);

  useEffect(() => {
    const passcodeLength = pass?.toString().trim().length;

    if (passcodeLength >= 0) {
      setPassLengthChecked((prevState) => {
        const tempArr = [...prevState];
        for (let i = 0; i < passcodeLength; i++) {
          tempArr[i] = "fill";
        }
        for (let i = passcodeLength; i < 4; i++) {
          tempArr[i] = "empty";
        }
        return tempArr;
      });
    }
    if (passcodeLength === 4) {
      onSubmit(pass);
      // setTimeout(() => {
      setPass("");
      // }, 500);

      // setPassLengthChecked(passLengthCheckedInitState);
      setStatus(validationStatus);
    }
  }, [pass]);

  return (
    <>
      <div
        aria-disabled={disabled}
        className={cn(
          "w-full flex flex-col landscape:flex-row gap-8 pb-8 items-center justify-center aria-disabled:cursor-not-allowed",
          className,
        )}
        {...props}>
        <div
          className={
            // "peer " +
            "flex-none flex flex-row flex-nowrap py-9 landscape:py-6 px-[4.6rem] landscape:px-7 gap-12 landscape:gap-14 items-center justify-center rounded-card bg-opacity-10 bg-white"
          }
          onClick={() => {
            inputElRef?.current?.focus();
          }}
          // data-status={status}
          dir={"ltr"}>
          {Array(4)
            .fill(null)
            .map((_, index) => {
              return (
                <div
                  key={`inputCounter_${index}`}
                  data-state={passLengthChecked[index]}
                  data-status={status}
                  className={
                    "pointer-events-none block h-4 w-4 rounded-full bg-transparent ring-1 ring-milkwhite transition-all " +
                    "data-[state=fill]:ring-0 data-[state=fill]:bg-gradient-to-tr from-white from-[-6.7%] to-[#FB9393] to-[135.15%] " +
                    "data-[status=error]:ring-red data-[status=error]:animate-pulse data-[status=error]:duration-1500 " +
                    "data-[status=loading]:animate-pulse data-[status=loading]:duration-1500 " +
                    "dark:bg-transparent"
                  }
                />
              );
            })}
        </div>

        <h4
          className={
            "peer-data-[status=error]:text-red text-center landscape:text-start"
          }>
          {text}
        </h4>
      </div>

      <Input
        type={"number"}
        disabled={disabled}
        // min={0}
        max={9999}
        maxLength={4}
        className={
          "opacity-0 bg-transparent disabled:opacity-0 p-0 m-0 w-0 h-0 fixed top-0 left-0 ring-offset-transparent border-transparent border-none"
        }
        autoFocus
        value={pass}
        onChange={(event) => {
          setStatus("normal");
          const newVal = event.target.value.trim();
          const newValInt = parseInt(newVal);
          if (
            (newValInt >= 0 && newValInt <= 9999 && newVal.length <= 4) ||
            newVal === "" ||
            newVal === "00" ||
            newVal === "000" ||
            newVal === "0000"
          ) {
            // if new value has a falsy value (is Nan) replace with ""
            setPass(newVal || "");
          }
        }}
        ref={inputElRef}
      />
    </>
  );
};

export default PassCodeInput;
