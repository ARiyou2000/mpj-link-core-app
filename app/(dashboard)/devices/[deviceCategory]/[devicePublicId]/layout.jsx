import { Toaster } from "@/components/ui/toaster";
import { deviceTypeList } from "@/classes/devices/deviceInfo";

// export const metadata = {
//   title: "Device page - MPJ Link App",
//   description: "Check app connection to the core",
// };

export async function generateMetadata({ params, searchParams }, parent) {
  const { deviceCategory } = params;

  return {
    title: `${deviceCategory} page - MPJ Link App`,
    description: `show current status of ${deviceCategory}`,
  };
}

const DevicesLayout = ({
  // children,
  ductSplitDevicePage,
  irSplitDevicePage,
  irHoodDevicePage,
  musicPlayerDevicePage,
  relayDevicePage,
  switchDevicePage,
  thermostatDevicePage,
  zigbeeSwitchDevicePage,
  electricalShadersDevicePage,
  notFoundDevicePage,
  params,
}) => {
  const getDevicePage = () => {
    switch (params.deviceCategory) {
      case deviceTypeList.modbus_switch:
        return switchDevicePage;
      case deviceTypeList.modbus_relay:
        return relayDevicePage;
      case deviceTypeList.modbus_thermostat:
        return thermostatDevicePage;
      case deviceTypeList.modbus_music_player:
        return musicPlayerDevicePage;
      case deviceTypeList.modbus_duct_split:
        return ductSplitDevicePage;
      case deviceTypeList.ir_split:
        return irSplitDevicePage;
      case deviceTypeList.ir_hood:
        return irHoodDevicePage;
      case deviceTypeList.modbus_electrical_shaders:
        return electricalShadersDevicePage;
      case deviceTypeList.zigbee_switch:
        return zigbeeSwitchDevicePage;
      case "uncategorized":
      default:
        return notFoundDevicePage;
    }
  };

  return (
    <div className={"h-full px-4 flex flex-col gap-5"}>
      {getDevicePage()}
      <Toaster />
    </div>
  );
};

export default DevicesLayout;
