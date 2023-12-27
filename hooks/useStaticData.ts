"use client";

import { useEffect, useState } from "react";
import { ServerSideDeviceInfoT } from "@/classes/devices/deviceInfo";
import { ServerSideRegisterInfoT } from "@/classes/devices/register";

type useStaticDataReturnT = Promise<object[]>;
const useStaticData = (
  fetcher: ({ signal }: { signal: AbortSignal }) => useStaticDataReturnT,
) => {
  const [data, setData] = useState<
    ServerSideDeviceInfoT[] | ServerSideRegisterInfoT[] | null
  >(null);
  const [flag, setFlag] = useState(false);
  const forceUpdate = () => {
    setFlag((prevState) => !prevState);
  };

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const getData = async () => {
      const data = await fetcher({ signal });

      setData(data);
    };
    getData();

    return () => {
      controller.abort("Leaving Page");
    };
  }, [flag]);
  return [data, forceUpdate];
};

export default useStaticData;
