"use client";

import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const toggleEventsStyleClassName =
  "hover:bg-slate-50/80 hover:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 dark:ring-offset-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-400 dark:focus-visible:ring-slate-300 dark:data-[state=on]:bg-slate-800 dark:data-[state=on]:text-slate-50";
const toggleEventsStyleClassName__outline =
  "hover:bg-slate-50/80 hover:text-slate-900 dark:border-slate-800 dark:hover:bg-slate-800 dark:hover:text-slate-50";

const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-full text-sm font-medium ring-offset-white transition-colors disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-slate-100 data-[state=on]:text-slate-900",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-slate-200 bg-transparent",
      },
      size: {
        default: "h-10 w-10 p-2",
        sm: "h-9 w-9 p-2.5",
        lg: "h-11 w-11 p-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const PowerToggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />
));

PowerToggle.displayName = TogglePrimitive.Root.displayName;

export { PowerToggle, toggleVariants };
