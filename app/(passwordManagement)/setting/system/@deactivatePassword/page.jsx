"use client";

import PassCodeInput from "@/components/PassCodeInput";
import { useContext, useState } from "react";
import { SystemSettingPageToShowContext } from "../layout";
import { loginWithCode } from "@/utils/login";
import window from "@/utils/window";

const DeactivatePasswordPage = () => {
  const setSystemSettingPageToShow = useContext(SystemSettingPageToShowContext);

  const onSubmit = async (passcode) => {
    try {
      // check if passcode is valid
      await loginWithCode(passcode);
      // then save passcode to localstorage
      window.localStorage.setItem(window.btoa("MPJUserP"), passcode);
      // Show message
      console.info("passcode deactivated");
      // Move to landing page
      setSystemSettingPageToShow("SystemSettingLandingPage");
    } catch (e) {
      console.error(e);
      setPasscodeData(passcodeStateObject.error);
    }
  };

  const passcodeStateObject = {
    normal: {
      text: "لطفا رمز ورود کنونی خود را وارد کنید",
      onSubmit: onSubmit,
      status: "normal",
    },
    error: {
      text: "لطفا رمز ورود کنونی خود را مجددا وارد کنید",
      onSubmit: onSubmit,
      status: "error",
    },
  };

  const [passcodeData, setPasscodeData] = useState(passcodeStateObject.normal);

  return (
    <>
      <div className={"h-full px-4 pt-8 pb-16 flex flex-col justify-between"}>
        <h3 className={"text-white text-lg"}>غیر فعال سازی رمز عبور</h3>
        <PassCodeInput
          text={passcodeData.text}
          status={passcodeData.status}
          onSubmit={passcodeData.onSubmit}
        />
      </div>
    </>
  );
};

export default DeactivatePasswordPage;
