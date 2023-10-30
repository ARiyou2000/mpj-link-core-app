"use client";

import UnlockSlider from "@/components/UnlockSlider";
import { loginWithCode } from "@/utils/login";
import { MPJLink } from "@/components/icons";
import PassCodeInput from "@/components/PassCodeInput";
import { useEffect, useRef, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import LockPageFavoriteNavigation from "@/components/LockPageFavoriteNavigation";
import { useRouter } from "next/navigation";
import { autoLogin } from "@/utils/login";
import window from "@/utils/window";

const statusTextInitState = "لطفا رمز ورود خود را وارد کنید";

export default function Home() {
  const router = useRouter();
  const [isSliderUnlocked, setIsSliderUnlocked] = useState(false);

  // Passcode status & text control
  const [text, setText] = useState(statusTextInitState);
  const [status, setStatus] = useState("initial");

  useEffect(() => {
    switch (status) {
      case "initial":
      case "normal":
        setText(statusTextInitState);
        break;
      case "error":
        setText("لطفا رمز ورود خود را مجددا وارد کنید");
        break;
      case "loading":
        setText("لطفا منتظر بمانید");
        break;
      case "success":
        break;
      default:
        setText(statusTextInitState);
    }
  }, [status]);

  const containerRef = useRef<HTMLDivElement>(null);

  const [size, setSize] = useState("100%");
  const handleWindowSizeChange = (event: Event) => {
    setSize(window.visualViewport.height);
  };
  useEffect(() => {
    window.visualViewport.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.visualViewport.removeEventListener(
        "resize",
        handleWindowSizeChange,
      );
    };
  }, []);

  const onSubmitPasscode = async (passcode: string) => {
    setStatus("loading");
    try {
      await loginWithCode(passcode);
      setStatus("success");
      router.push("/home");
    } catch (e) {
      setStatus("error");
    }
  };

  return (
    <div
      className={
        "flex flex-col items-center justify-between transition-all duration-300"
      }
      style={{
        height: size || "100%",
        maxHeight: size || "100%",
      }}
      ref={containerRef}>
      <MPJLink className={`h-[3.75rem] w-[10.75rem] mt-28 flex-none`} />

      <div
        className={`${
          isSliderUnlocked && "hidden"
        } flex-1 h-0 w-full flex flex-col justify-end items-center gap-16 p-4 overflow-auto`}>
        <ScrollArea className={`h-full w-full`}>
          {/*<NotificationsList list={[]} />*/}
        </ScrollArea>

        {/*<div className={`${!isSliderUnlocked && "hidden"}`} />*/}

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
      </div>

      {isSliderUnlocked && (
        <PassCodeInput
          disabled={status === "loading"}
          className={``}
          text={text}
          status={status}
          onSubmit={onSubmitPasscode}
        />
      )}

      <LockPageFavoriteNavigation
        className={`${isSliderUnlocked && "hidden"}`}
      />
    </div>
  );
}
