"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";

const passLengthCheckedInitState = ["empty", "empty", "empty", "empty"];
const statusTextInitState = "لطفا رمز ورود خود را وارد کنید";

const PassCodeInput = ({
  onSubmit = () => null,
  text = statusTextInitState,
  disabled = false,
  status: validationStatus = "initial",
  className,
  ...props
}) => {
  const inputElRef = useRef(null);
  useEffect(() => {
    inputElRef.current.focus();
  }, []);
  const [passLengthChecked, setPassLengthChecked] = useState(
    passLengthCheckedInitState,
  );
  const [pass, setPass] = useState("");
  const [status, setStatus] = useState(validationStatus);

  useEffect(() => {
    inputElRef.current.focus();
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
          "flex flex-col gap-8 items-center aria-disabled:cursor-not-allowed",
          className,
        )}
        dir={"ltr"}
        {...props}>
        <div
          className={
            "flex flex-row flex-nowrap py-9 px-[4.6rem] gap-12 items-center justify-center rounded-card bg-opacity-10 bg-white"
          }
          onClick={() => {
            inputElRef.current.focus();
          }}>
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

        <h4 className={"text-lg text-center will-change-contents"}>{text}</h4>

        <Input
          type={"number"}
          disabled={disabled}
          // min={0}
          max={9999}
          maxLength={4}
          className={
            "opacity-0 disabled:opacity-0 p-0 m-0 w-0 h-0 border-2 text-red"
          }
          autoFocus
          value={pass}
          onChange={(event) => {
            setStatus("normal");
            const newVal = event.target.value.trim();
            // const newDigit = newVal.charAt(-1);
            // console.log("newDigit", newDigit);
            const newValInt = parseInt(newVal);
            if (
              (newValInt >= 0 && newValInt <= 9999 && newVal.length <= 4) ||
              newVal === ""
            ) {
              setPass(!!newVal ? newValInt.toString() || newVal : "");
            }
          }}
          ref={inputElRef}
        />
      </div>
    </>
  );
};

export default PassCodeInput;
