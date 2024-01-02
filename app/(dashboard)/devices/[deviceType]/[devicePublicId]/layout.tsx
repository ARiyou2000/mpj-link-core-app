import DeviceInfo, {
  DevicesType,
  ServerSideDeviceInfoT,
} from "@/classes/devices/deviceInfo";
import AuthorizedFetch from "@/utils/authorizedFetch";
import { FunctionComponent } from "react";

export type DevicePageParamsT = {
  params: { deviceType: string; devicePublicId: string };
  searchParams: { zpid?: string };

  ductSplitDevicePage: FunctionComponent;
  irSplitDevicePage: FunctionComponent;
  irHoodDevicePage: FunctionComponent;
  musicPlayerDevicePage: FunctionComponent;
  relayDevicePage: FunctionComponent;
  switchDevicePage: FunctionComponent;
  thermostatDevicePage: FunctionComponent;
  curtainsDevicePage: FunctionComponent;
  notFoundDevicePage: FunctionComponent;
};

export const metadata = {
  title: "Device page - MPJ Link App",
  description: "Show current status of device",
};

const DevicesLayout = async ({
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
  params: { deviceType, devicePublicId },
}: DevicePageParamsT) => {
  const { publicId, name, description, type } = (await AuthorizedFetch(
    `${process.env.NEXT_SELF_ABSOLUTE_URL}/api/devices/${devicePublicId}`,
  )) as ServerSideDeviceInfoT;

  const deviceInfo = new DeviceInfo(publicId, name, description, type);
  // await DeviceInfo.getData({ signal: new AbortSignal() });

  let deviceData;
  try {
    deviceData = await AuthorizedFetch(
      `${process.env.NEXT_SELF_ABSOLUTE_URL}/api/devices/${devicePublicId}/data`,
    );
  } catch (e) {
    console.error(e);
  }

  const getDevicePage = () => {
    switch (Number(deviceType)) {
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
