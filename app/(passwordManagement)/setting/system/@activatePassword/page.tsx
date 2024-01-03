"use client";

import { useContext, useRef, useState } from "react";
import { SystemSettingPageToShowContext } from "../layout";

import updatePassword from "@/utils/updatePassword";
import window from "@/utils/window";
import PasswordManagementPageWrapper from "../PasswordManagementPageWrapper";
import { storageConfig } from "@/storage.config";
import MainLayoutHeader from "@/components/MainLayoutHeader";
import { toast } from "sonner";

const DeactivatePasswordPage = () => {
  const setSystemSettingPageToShow = useContext(SystemSettingPageToShowContext);

  const newPasswordHolder = useRef("");

  const onSubmitCallback = async (passcode: string) => {
    if (newPasswordHolder.current === passcode) {
      try {
        const oldPasscode = window.localStorage.getItem(
          storageConfig.client.user.password.encoded,
        );
        // send password to server
        await updatePassword(undefined, oldPasscode, passcode);
        // then remove passcode from localstorage
        window.localStorage.removeItem(
          storageConfig.client.user.password.encoded,
        );
        // Show message
        console.info("passcode activated");
        toast.success("رمز عبور فعال شد.");
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
      onSubmit: (passcode: string) => {
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
      <MainLayoutHeader
        onBackClicked={() => {
          setSystemSettingPageToShow?.("SystemSettingLandingPage");
        }}
      />
      <PasswordManagementPageWrapper
        header={"فعال سازی رمز عبور"}
        passcodeText={passcodeData.text}
        passcodeStatus={passcodeData.status}
        onPasscodeSubmit={passcodeData.onSubmit}
      />
    </>
  );
};

export default DeactivatePasswordPage;
