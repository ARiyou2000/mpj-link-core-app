"use client";

import window from "@/utils/window";

const useLocalStorage = (key) => {
  // returns value related to initial key.
  const item = window.localStorage.getItem(key);
  // return a function that will save given value to initial key
  const setItem = (value) => window.localStorage.setItem(key, value);
  return [item, setItem];
};

export default useLocalStorage;
