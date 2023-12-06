const useDebounceCaller = (debounceTimnig: number) => {
  const now = performance.now();

  if (performance.now() - now > debounceTimnig) {
    callbackFn();
  }

  return [resetFn, callbackFn];
};
