"use client";

import { cn } from "@/lib/utils";
import { useCallback } from "react";
import window from "@/utils/window";
import { useRouter } from "next/navigation";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const ConfirmationAlert = ({ children }) => {
  const router = useRouter();
  const reset = useCallback(() => {
    router.push("/");
    window.localStorage.clear();
  }, []);

  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger>{children}</AlertDialogTrigger>
        <AlertDialogContent className={"rounded-card bg-white/40 text-white"}>
          <AlertDialogHeader>
            <AlertDialogTitle>
              آیا از بازگشت به تنظیمات کارخانه مطمئن هستید؟
            </AlertDialogTitle>
            {/*<AlertDialogDescription>*/}
            {/*  This action cannot be undone. This will permanently delete your*/}
            {/*  account and remove your data from our servers.*/}
            {/*</AlertDialogDescription>*/}
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={reset}>تایید</AlertDialogAction>
            <AlertDialogCancel>لغو</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

const FactoryReset = ({ children, className, ...props }) => {
  return (
    <>
      <ConfirmationAlert>
        <div className={cn("", className)} {...props}>
          {children}
        </div>
      </ConfirmationAlert>
    </>
  );
};

export default FactoryReset;
