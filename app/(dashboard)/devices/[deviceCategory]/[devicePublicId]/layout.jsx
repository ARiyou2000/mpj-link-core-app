import { Toaster } from "@/components/ui/toaster"; // export const metadata = {

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
  irHoodDevicePage,
  musicPlayerDevicePage,
  relayDevicePage,
  switchDevicePage,
  thermostatDevicePage,
  zigbeeSwitchDevicePage,
  notFoundDevicePage,
  className,
  params,
  ...props
}) => {
  const getDevicePage = () => {
    switch (params.deviceCategory) {
      case "modbus_switch":
        return switchDevicePage;
      case "modbus_relay":
        return relayDevicePage;
      case "modbus_thermostat":
        return thermostatDevicePage;
      case "modbus_music_player":
        return musicPlayerDevicePage;
      case "modbus_duct_split":
        return ductSplitDevicePage;
      case "ir_split":
        return irSplitDevicePage;
      case "ir_hood":
        return irHoodDevicePage;
      case "zigbee_switch":
        return zigbeeSwitchDevicePage;
      default:
        return notFoundDevicePage;
    }
  };

  return (
    <div className={"h-full px-4 flex flex-col gap-5"} {...props}>
      {getDevicePage()}
      <Toaster />
    </div>
  );
};

export default DevicesLayout;
