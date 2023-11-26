"use client";
import { useEffect } from "react";
import window from "@/utils/window";

const RegisterServiceWorker = () => {
  useEffect(() => {
    if ("serviceWorker" in window?.navigator) {
      // console.log("there is a service worker in navigator", navigator);
      // window.addEventListener("load", function () {
      window?.navigator?.serviceWorker?.register("/service_worker.js").then(
        function (registration) {
          console.log(
            "Service Worker registration successful with scope: ",
            registration.scope,
          );
        },
        function (err) {
          console.error("Service Worker registration failed: ", err);
        },
      );
      // });
    } else {
      console.group();
      console.error("There were no service worker object present in navigator");
      console.log("Navigator: ", window?.navigator);
      console.groupEnd();
    }
  }, []);

  return <></>;
};

export default RegisterServiceWorker;
