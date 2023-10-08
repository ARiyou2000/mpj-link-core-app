"use client";

import { createContext, useState } from "react";

export const SystemSettingPageToShowContext = createContext(null);

const SystemSettingLayout = ({
  systemSettingLanding,
  changePassword,
  activatePassword,
  deactivatePassword,
}) => {
  const [systemSettingPageToShow, setSystemSettingPageToShow] = useState(
    "SystemSettingLandingPage",
  );
  return (
    <>
      <SystemSettingPageToShowContext.Provider
        value={setSystemSettingPageToShow}>
        {systemSettingPageToShow === "SystemSettingLandingPage" &&
          systemSettingLanding}
        {systemSettingPageToShow === "ChangePasswordPage" && changePassword}
        {systemSettingPageToShow === "ActivatePasswordPage" && activatePassword}
        {systemSettingPageToShow === "DeactivatePasswordPage" &&
          deactivatePassword}
      </SystemSettingPageToShowContext.Provider>
    </>
  );
};

export default SystemSettingLayout;
