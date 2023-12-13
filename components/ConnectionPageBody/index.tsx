"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import Connection from "@/components/Connection";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import useIsFirstRender from "@/hooks/useIsFirstRender";
import clientSideAuthorizedFetch from "@/utils/clientSideAuthorizedFetch";

enum ConnectionStatus {
  trying,
  success,
  failed,
}

type StatusTextT = {
  trying: string;
  success: string;
  failed: string;
};
type PropsT = {
  title: string;
  target: "internet" | "core";
  statusText: StatusTextT;
  className?: string;
};

const ConnectionCheckPageBody = ({
  title,
  target,
  statusText,
  className,
  ...props
}: PropsT) => {
  const {
    trying: tryingText = "درحال اتصال",
    success: connectedText = "دستگاه متصل است",
    failed: errorText = "تلاش مجدد",
  } = statusText;

  const isFirstRender = useIsFirstRender();
  const router = useRouter();
  const [status, setStatus] = useState<ConnectionStatus>(
    ConnectionStatus.trying,
  );
  const controller = new AbortController();

  const tryConnecting = async () => {
    setStatus(ConnectionStatus.trying);
    try {
      const result = await clientSideAuthorizedFetch(
        `/api/connection/${target}`,
        {
          //   signal: controller.signal,
        },
      );
      setStatus(ConnectionStatus.success);
    } catch (e) {
      setStatus(ConnectionStatus.failed);
      console.error(e);
    }
  };

  const handleBack = () => {
    controller.abort("User Cancellation");
    router.push("/home");
  };

  useEffect(() => {
    if (!isFirstRender) {
      tryConnecting();
    }
    return () => {
      controller.abort("Leaving page");
    };
  }, [isFirstRender]);

  return (
    <>
      <div className={"h-full flex flex-col px-4 pt-14 landscape:pt-2"}>
        <h3 className={"text-lg p-4 landscape:py-0"}>{title}</h3>
        <ScrollArea className={"h-full"}>
          <div
            className={cn(
              "h-full flex flex-col items-center justify-center p-12 landscape:p-0",
              className,
            )}
            {...props}>
            {status === ConnectionStatus.trying && (
              <Connection.trying
                onButtonClicked={handleBack}
                title={tryingText}
              />
            )}
            {status === ConnectionStatus.success && (
              <Connection.connected
                onButtonClicked={handleBack}
                title={connectedText}
              />
            )}
            {status === ConnectionStatus.failed && (
              <Connection.error
                onButtonClicked={tryConnecting}
                title={errorText}
              />
            )}
          </div>
        </ScrollArea>
      </div>
    </>
  );
};

export default ConnectionCheckPageBody;
