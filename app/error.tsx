"use client"; // Error components must be Client Components

import { useEffect } from "react";
import ErrorPageBody from "@/components/ErrorPageBody";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <ErrorPageBody
      code={401}
      title={"شما به این صفحه دسترسی ندارید"}
      description={"به خانه برگردید و مجددا تلاش کنید."}
    />
  );
}
