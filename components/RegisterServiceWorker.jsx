"use client";
import { useEffect } from "react";
import window from "@/utils/window";

const RegisterServiceWorker = () => {
  useEffect(() => {
    console.log("rendered");
    if ("serviceWorker" in navigator) {
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
          console.log("Service Worker registration failed: ", err);
        },
      );
      // });
    } else {
      console.log("There were no service worker object present in navigator");
      console.log("Navigator: ", navigator);
    }
  }, []);

  return <></>;
};

export default RegisterServiceWorker;
