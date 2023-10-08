import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";

// export const metadata = {
//   title: "Device page - MPJ Link App",
//   description: "Check app connection to the core",
// };

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const { deviceCategory } = params;

  return {
    title: `${deviceCategory} page - MPJ Link App`,
    description: `show current status of ${deviceCategory}`,
  };
}

const DevicesLayout = ({
  ductSplitDevicePage,
  irSplitDevicePage,
  musicPlayerDevicePage,
  relayDevicePage,
  switchDevicePage,
  thermostatDevicePage,
  className,
  params,
  ...props
}) => {
  const getDevicePage = () => {
    switch (params.deviceCategory) {
      case "switch":
        return switchDevicePage;
      case "relay":
        return relayDevicePage;
      case "thermostat":
        return thermostatDevicePage;
      case "musicPlayer":
        return musicPlayerDevicePage;
      case "ductSplit":
        return ductSplitDevicePage;
      case "irSplit":
        return irSplitDevicePage;
    }
  };

  return (
    <div
      className={cn("h-full px-4 flex flex-col gap-5", className)}
      {...props}>
      {getDevicePage()}
      <Toaster />
    </div>
  );
};

export default DevicesLayout;
