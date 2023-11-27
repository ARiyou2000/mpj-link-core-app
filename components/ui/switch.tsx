"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { useState } from "react";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, loading, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer overflow-hidden inline-flex h-[1.625rem] w-[3.3125rem] shrink-0 cursor-pointer items-center rounded-full border border-milkwhite transition-colors " +
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background " +
        "disabled:cursor-not-allowed disabled:opacity-50 bg-transparent ",
      className,
    )}
    {...props}
    ref={ref}>
    <SwitchPrimitives.Thumb
      data-loading={loading}
      className={cn(
        "pointer-events-none block h-4 w-4 rounded-full bg-transparent ring-1 ring-milkwhite transition-all duration-500 " +
          "data-[state=checked]:bg-white data-[state=checked]:drop-shadow-active data-[state=checked]:ring-0 " +
          "data-[state=checked]:translate-x-8 rtl:data-[state=checked]:-translate-x-8 data-[state=unchecked]:translate-x-1 rtl:data-[state=unchecked]:-translate-x-1 " +
          "relative data-[loading=true]:after:absolute data-[loading=true]:after:m-auto data-[loading=true]:after:inset-[0.05rem] data-[loading=true]:after:rounded-full data-[loading=true]:after:border " +
          // "data-[loading=true]:[border-style:solid_solid_dotted_dotted] data-[loading=true]:animate-rotateBack data-[loading=true]:duration-2000 data-[loading=true]:origin-center " +
          "data-[loading=true]:after:[border-style:solid_solid_dotted_solid] data-[loading=true]:after:border-[#FF3D00] data-[loading=true]:after:animate-rotate data-[loading=true]:after:duration-1000 data-[loading=true]:after:origin-center ",
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export default function Switch2() {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <div
      className="w-[3.3125rem] bg-transparent border border-milkwhite flex items-center justify-start data-[state=true]:justify-end rounded-full p-1 cursor-pointer"
      data-state={isOn}
      onClick={toggleSwitch}>
      <motion.div
        data-state={isOn}
        className={
          "h-5 w-5 pointer-events-none block rounded-full bg-transparent ring-1 ring-milkwhite " +
          "data-[state=true]:bg-white data-[state=true]:drop-shadow-active data-[state=true]:ring-0 "
        }
        layout
        transition={spring}
      />
    </div>
  );
}

const spring = {
  type: "spring",
  stiffness: 300,
  damping: 20,
};

export { Switch };
