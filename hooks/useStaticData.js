"use client";

import { useEffect, useState } from "react";

const useStaticData = (fetcher = async () => null) => {
  const [data, setData] = useState([]);
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
