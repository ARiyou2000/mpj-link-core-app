"use client";

import { useContext, useState } from "react";
import { SystemSettingPageToShowContext } from "../layout";
import { loginWithCode } from "@/utils/login";
import window from "@/utils/window";
import PasswordManagementPageWrapper from "../PasswordManagementPageWrapper";
import { storageConfig } from "@/storage.config";

const DeactivatePasswordPage = () => {
  const setSystemSettingPageToShow = useContext(SystemSettingPageToShowContext);

  const onSubmit = async (passcode) => {
    try {
      // check if passcode is valid
      await loginWithCode(passcode);
      // then save passcode to localstorage
      window.localStorage.setItem(
        storageConfig.client.user.password.encoded,
        passcode,
      );
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
      <PasswordManagementPageWrapper
        header={"غیر فعال سازی رمز عبور"}
        passcodeText={passcodeData.text}
        passcodeStatus={passcodeData.status}
        onPasscodeSubmit={passcodeData.onSubmit}
      />
    </>
  );
};

export default DeactivatePasswordPage;
