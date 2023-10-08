"use client";

import { cn } from "@/lib/utils";
import { ArrowLeft } from "@/components/icons/dashed";
import { Switch } from "@/components/ui/switch";
import window from "@/utils/window";
import { useContext, useEffect, useState } from "react";
import { SystemSettingPageToShowContext } from "../layout";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const settingItemsStyleClassName =
  "px-4 py-6 flex flex-row items-center gap-11 justify-between bg-white/5 rounded-xl text-milkwhite";

const SystemSettingLandingPage = ({ className }) => {
  const setSystemSettingPageToShow = useContext(SystemSettingPageToShowContext);

  const [isUsingAutoPasscode, setIsUsingAutoPasscode] = useState(false);
  useEffect(() => {
    const userPassInfoFromLocalStorage = window.localStorage.getItem(
      window.btoa("MPJUserP"),
    );
    setIsUsingAutoPasscode(!userPassInfoFromLocalStorage);
  }, []);

  return (
    <>
      <ScrollArea className={cn("h-full", className)}>
        <div className={"h-full flex flex-col gap-1.5 px-4 pt-32"}>
          <div className={settingItemsStyleClassName}>
            <div className={"flex flex-col gap-2.5 p-2.5"}>
              <h2 className={"text-base font-normal"}>فعالسازی رمز عبور</h2>
              <p className={"text-[0.625rem] font-light leading-5"}>
                با فعال بودن این مورد در هنگام ورود رمز عبور پرسیده می‌شود
              </p>
            </div>
            <Switch
              checked={isUsingAutoPasscode}
              onCheckedChange={() =>
                isUsingAutoPasscode
                  ? setSystemSettingPageToShow("DeactivatePasswordPage")
                  : setSystemSettingPageToShow("ActivatePasswordPage")
              }
            />
          </div>
          {isUsingAutoPasscode && (
            <Button
              disabled={!isUsingAutoPasscode}
              className={settingItemsStyleClassName}
              onClick={() => {
                setSystemSettingPageToShow("ChangePasswordPage");
              }}>
              <h2 className={"text-base font-normal"}>تغییر رمز عبور</h2>
              <ArrowLeft className={"w-6 h-6"} />
            </Button>
          )}
        </div>
      </ScrollArea>
    </>
  );
};

export default SystemSettingLandingPage;
