"use client";

import PassCodeInput from "@/components/PassCodeInput";
import { useContext, useRef, useState } from "react";
import { SystemSettingPageToShowContext } from "../layout";

import updatePassword from "@/utils/updatePassword";
import window from "@/utils/window";

const DeactivatePasswordPage = () => {
  const setSystemSettingPageToShow = useContext(SystemSettingPageToShowContext);

  const newPasswordHolder = useRef("");

  const onSubmitCallback = async (passcode) => {
    if (newPasswordHolder.current === passcode) {
      try {
        const oldPasscode = window.localStorage.getItem(
          window.btoa("MPJUserP"),
        );
        // send password to server
        await updatePassword(undefined, oldPasscode, passcode);
        // then remove passcode from localstorage
        window.localStorage.removeItem(window.btoa("MPJUserP"));
        // Show message
        console.info("passcode activated");
        // Move to landing page
        setSystemSettingPageToShow("SystemSettingLandingPage");
      } catch (e) {
        console.error(e);
      }
    } else {
      setPasscodeData(passcodeStateObject.repeatPassMissMatch);
    }
  };

  const passcodeStateObject = {
    newPass: {
      text: "لطفا رمز ورود جدید خود را وارد کنید",
      onSubmit: (passcode) => {
        newPasswordHolder.current = passcode;
        setPasscodeData(passcodeStateObject.repeatPass);
      },
      status: "normal",
    },
    repeatPass: {
      text: "لطفا رمز ورود جدید خود را تکرار کنید",
      onSubmit: onSubmitCallback,
      status: "normal",
    },
    repeatPassMissMatch: {
      text: "رمزعبور تطابق ندارد! مجددا سعی کنید.",
      onSubmit: onSubmitCallback,
      status: "error",
    },
  };

  const [passcodeData, setPasscodeData] = useState(passcodeStateObject.newPass);

  return (
    <>
      <div className={"h-full px-4 pt-8 pb-16 flex flex-col justify-between"}>
        <h3 className={"text-white text-lg"}>فعال سازی رمز عبور</h3>
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
