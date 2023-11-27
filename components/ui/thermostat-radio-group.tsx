"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

import { cn } from "@/lib/utils";

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("grid gap-2", className)}
      {...props}
      ref={ref}
    />
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, seasonType = "", children, ...props }, ref) => {
  const seasonTypeStyleClassName =
    seasonType === "hot"
      ? "data-[state=checked]:border-[#D67174] data-[state=checked]:text-[#D67174]"
      : "data-[state=checked]:border-[#75ACFF] data-[state=checked]:text-[#75ACFF]";

  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        `${seasonTypeStyleClassName} [&>svg]:stroke-current [&>svg]:fill-current transition-colors duration-1000 rounded-2xl flex-1 p-6 flex flex-row items-center justify-center gap-1 border-1.5 border-milkwhite text-white ring-offset-white focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`,
        className,
      )}
      {...props}>
      {children}
      {/*<RadioGroupPrimitive.Indicator className="flex items-center justify-center">*/}
      {/*  <Circle className="h-2.5 w-2.5 fill-current text-current" />*/}
      {/*</RadioGroupPrimitive.Indicator>*/}
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
