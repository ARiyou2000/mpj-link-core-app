import {
  DevicesType,
  ServerSideDeviceInfoT,
} from "@/classes/devices/deviceInfo";
import { ServerSideRegisterInfoT } from "@/classes/devices/register";
import Device from "@/classes/devices/device";
import SwitchDevice from "@/classes/devices/Switch/switchDevice";
import RelayDevice from "@/classes/devices/Relay/relayDevice";
import ThermostatDevice from "@/classes/devices/Thermostat/thermostatDevice";
import MusicPlayerDevice from "@/classes/devices/MusicPlayer/musicPlayerDevice";
import DuctSplitDevice from "@/classes/devices/DuctSplit/ductSplitDevice";
import IrSplitDevice from "@/classes/devices/IrSplit/irSplitDevice";
import IrHoodDevice from "@/classes/devices/IrHood/irHoodDevice";
import CurtainsDevice from "@/classes/devices/Curtains/curtainsDevice";

const getDeviceInstance = (
  info: ServerSideDeviceInfoT,
  registersList: ServerSideRegisterInfoT[],
) => {
  const props = [
    info?.publicId,
    info?.name,
    info?.description,
    info?.type,
    registersList,
  ] as const;

  let DeviceInstance: Device;
  switch (Number(info?.type)) {
    case DevicesType.modbus_switch_1p:
    case DevicesType.modbus_switch_2p:
    case DevicesType.modbus_switch_3p:
    case DevicesType.modbus_switch_4p:
    case DevicesType.modbus_switch_6p:
    case DevicesType.zigbee_switch_3p:
      DeviceInstance = new SwitchDevice(...props);
      break;
    case DevicesType.modbus_relay:
    case DevicesType.zigbee_relay:
      DeviceInstance = new RelayDevice(...props);
      break;

    case DevicesType.modbus_thermostat:
      DeviceInstance = new ThermostatDevice(...props);
      break;
    case DevicesType.modbus_music_player:
      DeviceInstance = new MusicPlayerDevice(...props);
      break;
    case DevicesType.modbus_duct_split:
      DeviceInstance = new DuctSplitDevice(...props);
      break;
    case DevicesType.ir_split:
      DeviceInstance = new IrSplitDevice(...props);
      break;
    case DevicesType.ir_hood:
      DeviceInstance = new IrHoodDevice(...props);
      break;
    case DevicesType.modbus_curtains:
    case DevicesType.zigbee_curtains:
      DeviceInstance = new CurtainsDevice(...props);
      break;
    case DevicesType.invalid:
    default:
      throw new Error("device type is not mapped with a class!");
  }
  return DeviceInstance;
};

export default getDeviceInstance;
