"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import Connection from "@/components/Connection";

import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import fetchUrl from "@/utils/fetchUrl";
import getCoreIP from "@/utils/getCoreIP";

const ConnectionCheckPageBody = ({
  target,
  statusText = {},
  className,
  ...props
}) => {
  const {
    connected: connectedText = "دستگاه متصل است",
    trying: tryingText = "درحال اتصال",
    error: errorText = "تلاش مجدد",
  } = statusText;

  const router = useRouter();
  const [status, setStatus] = useState("trying");
  const controller = new AbortController();

  const tryConnecting = async () => {
    setStatus("trying");
    let targetUrl = "";
    switch (target) {
      case "core":
        targetUrl = "";
        break;
      case "internet":
        targetUrl = "internet";
        break;
      default:
        targetUrl = "";
    }
    try {
      const result = await fetchUrl(
        `${getCoreIP()}/check${targetUrl ? "/" + targetUrl : ""}`,
        {
          signal: controller.signal,
        },
      );
      setStatus("connected");
    } catch (e) {
      setStatus("error");
      console.error(e);
    }
  };

  const handleBack = () => {
    controller.abort("User Cancellation");
    router.push("/home");
  };

  useEffect(() => {
    tryConnecting();
    return () => {
      controller.abort("Leaving page");
    };
  }, []);

  return (
    <>
      <ScrollArea className={"h-full"}>
        <div
          className={cn(
            "h-full flex flex-col items-center justify-center p-12",
            className,
          )}
          {...props}>
          {status === "trying" && (
            <Connection.trying
              onButtonClicked={handleBack}
              title={tryingText}
            />
          )}
          {status === "connected" && (
            <Connection.connected
              onButtonClicked={handleBack}
              title={connectedText}
            />
          )}
          {status === "error" && (
            <Connection.error
              onButtonClicked={tryConnecting}
              title={errorText}
            />
          )}
        </div>
      </ScrollArea>
    </>
  );
};

export default ConnectionCheckPageBody;