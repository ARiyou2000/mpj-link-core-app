"use client";

import window from "@/utils/window";

const getCoreIP = (): string => {
  // return window.location.href;
  const { hostname } = window.location;
  // const ipString = hostname.match(/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/);
  // const ipString = "localhost";
  const ipString = "192.168.1.137";
  return `http://${ipString}:3456/mlcore/v3`;
};

export default getCoreIP;
