import {
  DevicesType,
  ServerSideDeviceInfoT,
} from "@/classes/devices/deviceInfo";
import { ServerSideRegisterInfoT } from "@/classes/registers/register";
import ModbusSwitch from "@/classes/devices/modbus/switch";
import ModbusRelay from "@/classes/devices/modbus/relay";
import ModbusThermostat from "@/classes/devices/modbus/thermostat";
import ModbusMusicPlayer from "@/classes/devices/modbus/musicPlayer";
import ModbusDuctSplit from "@/classes/devices/modbus/ductSplit";
import IrSplit from "@/classes/devices/modbus/irSplit";
import IrHood from "@/classes/devices/modbus/irHood";
import Curtains from "@/classes/devices/curtains";
import Device from "@/classes/devices/device";

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
      DeviceInstance = new ModbusSwitch(...props);
      break;
    case DevicesType.modbus_relay:
    case DevicesType.zigbee_relay:
      DeviceInstance = new ModbusRelay(...props);
      break;

    case DevicesType.modbus_thermostat:
      DeviceInstance = new ModbusThermostat(...props);
      break;
    case DevicesType.modbus_music_player:
      DeviceInstance = new ModbusMusicPlayer(...props);
      break;
    case DevicesType.modbus_duct_split:
      DeviceInstance = new ModbusDuctSplit(...props);
      break;
    case DevicesType.ir_split:
      DeviceInstance = new IrSplit(...props);
      break;
    case DevicesType.ir_hood:
      DeviceInstance = new IrHood(...props);
      break;
    case DevicesType.modbus_curtains:
    case DevicesType.zigbee_curtains:
      DeviceInstance = new Curtains(...props);
      break;
    case DevicesType.invalid:
    default:
      throw new Error("device type is not mapped with a class!");
  }
  return DeviceInstance;
};

export default getDeviceInstance;
