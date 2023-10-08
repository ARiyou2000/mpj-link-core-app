"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";
import useGlobalDir from "@/hooks/useGlobalDir";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => {
  const dir = useGlobalDir();

  return (
    <TabsPrimitive.List
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center gap-2.5 rounded-card border border-white bg-transparent p-1 text-slate-500 dark:bg-slate-800 dark:text-slate-400",
        className,
      )}
      dir={dir}
      {...props}
    />
  );
});
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex-1 inline-flex items-center justify-center whitespace-nowrap rounded-card px-2.5 py-1.5 text-base text-white font-normal border-none ring-offset-white transition-all duration-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-[#383838] data-[state=active]:text-white data-[state=active]:shadow-sm dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 dark:data-[state=active]:bg-slate-950 dark:data-[state=active]:text-slate-50",
      className,
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => {
  const dir = useGlobalDir();
  return (
    <TabsPrimitive.Content
      ref={ref}
      dir={dir}
      className={cn(
        "ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 transition-all duration-500 delay-500 data-[state=inactive]:opacity-0 data-[state=active]:opacity-100",
        className,
      )}
      {...props}
    />
  );
});
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
