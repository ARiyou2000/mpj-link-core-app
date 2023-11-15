"use client";

import UnlockSlider from "@/components/UnlockSlider";
import { loginWithCode } from "@/utils/login";
import { MPJLink } from "@/components/icons";
import PassCodeInput, {
  PasscodeTextType,
  PasscodeValidationStatusT,
} from "@/components/PassCodeInput";
import { useReducer, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import LockPageFavoriteNavigation from "@/components/LockPageFavoriteNavigation";
import { useRouter } from "next/navigation";
import { autoLogin } from "@/utils/login";
import window from "@/utils/window";
import useResizableContainer from "@/hooks/useResizableContainer";

enum LoginStatus {
  "initial",
  "normal",
  "loading",
  "error",
  "network_error",
  "success",
}

const statusTextInitState = "لطفا رمز ورود خود را وارد کنید";

interface Action {
  type: LoginStatus;
}

interface PasscodeDataT {
  text: PasscodeTextType;
  status: PasscodeValidationStatusT;
}

const passcodeDataReducer = (prevState: any, action: Action): PasscodeDataT => {
  const { type } = action;

  switch (type) {
    case LoginStatus.initial:
    case LoginStatus.normal:
      return { text: statusTextInitState, status: "normal" };
    case LoginStatus.error:
      return {
        text: "لطفا رمز ورود خود را مجددا وارد کنید",
        status: "error",
      };
    case LoginStatus.network_error:
      return {
        text: "اتصال با کور برقرار نیست!",
        status: "error",
      };
    case LoginStatus.loading:
      return { text: "لطفا منتظر بمانید...", status: "loading" };
    case LoginStatus.success:
      return { text: "خوش آمدید", status: "success" };
    default:
      return { text: statusTextInitState, status: "initial" };
    // return prevState
  }
};

export default function Home() {
  const router = useRouter();
  const [isSliderUnlocked, setIsSliderUnlocked] = useState(false);

  // Passcode status & text control
  const initData: PasscodeDataT = {
    text: statusTextInitState,
    status: "initial",
  };
  const [passCodeData, dispatcher] = useReducer(passcodeDataReducer, initData);

  const onSubmitPasscode = async (passcode: string) => {
    dispatcher({ type: LoginStatus.loading });
    try {
      await loginWithCode(passcode);
      dispatcher({ type: LoginStatus.success });
      router.push("/home");
    } catch (e: { code: number }) {
      console.error(e);
      if (e.code === 555) {
        dispatcher({ type: LoginStatus.network_error });
      } else {
        dispatcher({ type: LoginStatus.error });
      }
    }
  };
  const [containerRef, size, styleObject] = useResizableContainer();

  return (
    <div
      className={
        "h-full flex flex-col items-center justify-between transition-all duration-200"
      }
      style={styleObject}
      ref={containerRef}>
      <MPJLink
        className={`w-[10.75rem] h-[3.75rem] mt-28 flex-none transition-all duration-300 ${
          isSliderUnlocked
            ? "landscape:w-[7.16rem] landscape:h-[2.5rem] mt-8"
            : "landscape:w-[16.125rem] landscape:h-[5.625rem]"
        }`}
        onClick={() => {
          setIsSliderUnlocked(false);
        }}
      />

      <div
        className={`${
          isSliderUnlocked && "hidden"
        } flex-1 h-0 w-full flex flex-col justify-end items-center gap-16 p-4 overflow-auto`}>
        <ScrollArea className={`h-full w-full`}>
          {/*<NotificationsList list={[]} />*/}
        </ScrollArea>

        {/*<div className={`${!isSliderUnlocked && "hidden"}`} />*/}

        {/*{!isSliderUnlocked && (*/}
        <UnlockSlider
          className={`flex-none ${isSliderUnlocked ? "hidden" : ""}`}
          onUnlock={async () => {
            try {
              await autoLogin();
              router.push("/home");
            } catch (e) {
              console.error(e);
              // Remove pass from local storage if there is an error (usually on auto login)
              window.localStorage.removeItem(window.btoa("MPJUserP"));
              // Only show PassCodeInput if auto login fails.
              setIsSliderUnlocked(true);
            }
          }}
        />
        {/*)}*/}
      </div>

      {isSliderUnlocked && (
        <PassCodeInput
          disabled={passCodeData.status === "loading"}
          text={passCodeData.text}
          status={passCodeData.status}
          onSubmit={onSubmitPasscode}
        />
      )}

      <LockPageFavoriteNavigation
        className={`${isSliderUnlocked && "hidden"}`}
      />
    </div>
  );
}
