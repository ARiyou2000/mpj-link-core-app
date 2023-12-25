import { DevicesType } from "@/classes/devices/deviceInfo";

export type DevicePageParamsT = {
  params: { deviceType: string; devicePublicId: string };
  searchParams: { zpid?: string };
};

export const metadata = {
  title: "Device page - MPJ Link App",
  description: "Show current status of device",
};

const DevicesLayout = ({
  // children,
  ductSplitDevicePage,
  irSplitDevicePage,
  irHoodDevicePage,
  musicPlayerDevicePage,
  relayDevicePage,
  switchDevicePage,
  thermostatDevicePage,
  curtainsDevicePage,
  notFoundDevicePage,
  params,
}) => {
  const getDevicePage = () => {
    switch (Number(params.deviceType)) {
      case DevicesType.modbus_switch_1p:
      case DevicesType.modbus_switch_2p:
      case DevicesType.modbus_switch_3p:
      case DevicesType.modbus_switch_4p:
      case DevicesType.modbus_switch_6p:
      case DevicesType.zigbee_switch_3p:
        return switchDevicePage;
      case DevicesType.modbus_relay:
      case DevicesType.zigbee_relay:
        return relayDevicePage;
      case DevicesType.modbus_thermostat:
        return thermostatDevicePage;
      case DevicesType.modbus_music_player:
        return musicPlayerDevicePage;
      case DevicesType.modbus_duct_split:
        return ductSplitDevicePage;
      case DevicesType.ir_split:
        return irSplitDevicePage;
      case DevicesType.ir_hood:
        return irHoodDevicePage;
      case DevicesType.modbus_curtains:
      case DevicesType.zigbee_curtains:
        return curtainsDevicePage;
      case DevicesType.invalid:
      default:
        return notFoundDevicePage;
    }
  };

  return (
    <div className={"h-full px-1 flex flex-col gap-5"}>{getDevicePage()}</div>
  );
};

export default DevicesLayout;
