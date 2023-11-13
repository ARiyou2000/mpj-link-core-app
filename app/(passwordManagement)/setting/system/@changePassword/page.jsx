"use client";

import { useContext, useRef, useState } from "react";
import { SystemSettingPageToShowContext } from "../layout";
import window from "@/utils/window";
import updatePassword from "@/utils/updatePassword";
import { loginWithCode } from "@/utils/login";
import PasswordManagementPageWrapper from "../PasswordManagementPageWrapper";

const ChangePasswordPage = () => {
  const setSystemSettingPageToShow = useContext(SystemSettingPageToShowContext);

  const oldPassHolder = useRef(null);
  const checkOldPass = async (passcode) => {
    try {
      // check if passcode is valid
      await loginWithCode(passcode);
      // Save old password if validated
      oldPassHolder.current = passcode;
      // Move to landing next step
      setPasscodeData(passcodeStateObject.newPass);
    } catch (e) {
      console.error(e);
      setPasscodeData(passcodeStateObject.oldPassValidationError);
    }
  };

  const newPasswordHolder = useRef("");
  const onSubmitNewPass = async (passcode) => {
    if (newPasswordHolder.current === passcode) {
      try {
        const oldPasscode = oldPassHolder.current;
        // send password to server
        await updatePassword(undefined, oldPasscode, passcode);

        // Check whether using password or password less login:
        if (!!window.localStorage.getItem(window.btoa("MPJUserP"))) {
          // then save passcode to localstorage
          window.localStorage.setItem(window.btoa("MPJUserP"), passcode);
        }
        // Show message
        console.info("passcode changed");
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
    oldPass: {
      text: "لطفا رمز ورود فعلی خود را وارد کنید",
      onSubmit: checkOldPass,
      status: "normal",
    },
    oldPassValidationError: {
      text: "لطفا رمز ورود فعلی خود را مجددا وارد کنید",
      onSubmit: checkOldPass,
      status: "error",
    },
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
      onSubmit: onSubmitNewPass,
      status: "normal",
    },
    repeatPassMissMatch: {
      text: "رمزعبور تطابق ندارد! مجددا سعی کنید.",
      onSubmit: onSubmitNewPass,
      status: "error",
    },
  };

  const [passcodeData, setPasscodeData] = useState(passcodeStateObject.oldPass);

  return (
    <>
      <PasswordManagementPageWrapper
        header={"تغییر رمز عبور"}
        passcodeText={passcodeData.text}
        passcodeStatus={passcodeData.status}
        onPasscodeSubmit={passcodeData.onSubmit}
      />
    </>
  );
};

export default ChangePasswordPage;
