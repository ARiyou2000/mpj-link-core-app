"use client";

import { useEffect, useState } from "react";

const useStaticData = (fetcher: (signal: AbortSignal) => object[]) => {
  const [data, setData] = useState(null);
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
