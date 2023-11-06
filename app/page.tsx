"use client";

import UnlockSlider from "@/components/UnlockSlider";
import { loginWithCode } from "@/utils/login";
import { MPJLink } from "@/components/icons";
import PassCodeInput from "@/components/PassCodeInput";
import { ReactElement, useEffect, useRef, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import LockPageFavoriteNavigation from "@/components/LockPageFavoriteNavigation";
import { useRouter } from "next/navigation";
import { autoLogin } from "@/utils/login";
import window from "@/utils/window";
import useResizableContainer from "@/hooks/useResizableContainer";

type loginStatusType =
  | "initial"
  | "normal"
  | "loading"
  | "error"
  | "network_error"
  | "success";
const statusTextInitState = "لطفا رمز ورود خود را وارد کنید";

export default function Home() {
  const router = useRouter();
  const [isSliderUnlocked, setIsSliderUnlocked] = useState(false);

  // Passcode status & text control
  const [passCodeData, setPassCodeData] = useState<{
    text: ReactElement | string;
    status: loginStatusType;
  }>({ text: statusTextInitState, status: "initial" });

  const [loginStatus, setLoginStatus] = useState<loginStatusType>("initial");
  useEffect(() => {
    switch (loginStatus) {
      case "initial":
      case "normal":
        setPassCodeData({ text: statusTextInitState, status: loginStatus });
        break;
      case "error":
        setPassCodeData({
          text: "لطفا رمز ورود خود را مجددا وارد کنید",
          status: loginStatus,
        });
        break;
      case "network_error":
        setPassCodeData({
          text: "اتصال با کور برقرار نیست!",
          status: "error",
        });
        break;
      case "loading":
        setPassCodeData({ text: "لطفا منتظر بمانید...", status: loginStatus });
        break;
      case "success":
        break;
      default:
        setPassCodeData({ text: statusTextInitState, status: loginStatus });
    }
  }, [loginStatus]);

  const onSubmitPasscode = async (passcode: string) => {
    setLoginStatus("loading");
    try {
      await loginWithCode(passcode);
      setLoginStatus("success");
      router.push("/home");
    } catch (e: { code: number }) {
      console.error(e);
      if (e.code === 555) {
        setLoginStatus("network_error");
      } else {
        setLoginStatus("error");
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
        className={`h-[3.75rem] w-[10.75rem] mt-28 flex-none`}
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
            setIsSliderUnlocked(true);
            try {
              await autoLogin();
              router.push("/home");
            } catch (e) {
              console.error(e);
              // Remove pass from local storage if there is an error (usually on auto login)
              window.localStorage.removeItem(window.btoa("MPJUserP"));
            }
          }}
        />
        {/*)}*/}
      </div>

      {isSliderUnlocked && (
        <PassCodeInput
          disabled={passCodeData.status === "loading"}
          className={``}
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
