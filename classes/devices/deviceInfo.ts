// import ResponseModel from "@/classes/responseModel";

import {
  DuctSplit,
  Music,
  Relay,
  Switches,
  Thermometer,
} from "@/components/icons/colored";
import LoadingSpinner from "@/components/loading/LoadingSpinner";

export enum DevicesType {
  invalid,
  switch_1P,
  switch_2P,
  switch_3P,
  switch_4P,
  switch_6P,
  relay,
  thermostat,
  musicPlayer,
  ductSplit,
  irSplit,
  touchPanel_s8,
  touchPanel_10inch,
  kitchenHook,
  electrical_shaders,
  reserved1,
  reserved2,
  reserved3,
  reserved4,
  zigbee_switch_1,
  zigbee_switch_2,
  zigbee_switch_3,
}

class DeviceInfo {
  publicId: string = "";
  name: string = "";
  description: string = "";
  type: number = 0;
  category: string = "";
  icon: any = null;

  constructor(
    publicId: string,
    name: string,
    description: string,
    type: number,
  ) {
    this.publicId = publicId;
    this.name = name;
    this.description = description;
    this.type = type;
    switch (type) {
      case DevicesType.switch_1P:
      case DevicesType.switch_2P:
      case DevicesType.switch_3P:
      case DevicesType.switch_4P:
      case DevicesType.switch_6P:
        this.category = "switch";
        this.icon = Switches;
        break;
      case DevicesType.relay:
        this.category = "relay";
        this.icon = Relay;
        break;
      case DevicesType.thermostat:
        this.category = "thermostat";
        this.icon = Thermometer;
        break;
      case DevicesType.musicPlayer:
        this.category = "musicPlayer";
        this.icon = Music;
        break;
      case DevicesType.ductSplit:
        this.category = "ductSplit";
        this.icon = DuctSplit;
        break;
      case DevicesType.irSplit:
        this.category = "irSplit";
        this.icon = DuctSplit;
        break;
      case DevicesType.zigbee_switch_1:
      case DevicesType.zigbee_switch_2:
      case DevicesType.zigbee_switch_3:
        this.category = "zigbee_switch";
        this.icon = Switches;
        break;
      default:
        console.error("uncategorized device with type number of: ", type);
        this.category = "uncategorized";
        this.icon = LoadingSpinner;
    }
  }
}

export default DeviceInfo;
