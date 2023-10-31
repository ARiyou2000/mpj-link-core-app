"use client";

import window from "@/utils/window";

const getCoreIP = (): string => {
  // return window.location.href;
  const { hostname } = window.location;
  const ipString =
    process.env.NEXT_PUBLIC_ABSOLUTE_URL ||
    hostname.match(/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/);
  return `http://${ipString}:3456/mlcore/v3`;
};

export default getCoreIP;
