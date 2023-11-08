import ResponseModel from "@/classes/responseModel";
import {
  DuctSplit,
  Hood,
  Music,
  Relay,
  Shaders,
  Switches,
  Thermometer,
} from "@/components/icons/colored";
import LoadingSpinner from "@/components/loading/LoadingSpinner";
import { Protocols } from "@/classes/protocols";

export type ServerSideDeviceInfoT = {
  publicId: string;
  name: string;
  description: string;
  type: number;
};

export enum DevicesType {
  invalid,
  modbus_switch_1p,
  modbus_switch_2p,
  modbus_switch_3p,
  modbus_switch_4p,
  modbus_switch_6p,
  modbus_relay,
  modbus_thermostat,
  modbus_music_player,
  modbus_duct_split,
  ir_split,
  touch_panel_s8,
  touch_panel_10inch,
  ir_hood,
  modbus_curtains,
  zigbee_switch_3p,
  reserved_16,
  reserved_17,
  reserved_18,
  reserved_19,
  reserved_20,
  reserved_21,
  reserved_22,
  reserved_23,
  reserved_24,
  reserved_25,
  reserved_26,
  reserved_27,
  reserved_28,
  reserved_29,
  reserved_30,
}

export enum deviceCategories {
  uncategorized,
  switch,
  relay,
  thermostat,
  music_player,
  split,
  hood,
  curtains,
}

/**
 * Represent a Device Info class containing pure device information.
 * Omit information about device registers, etc.
 * Fetch data on /devices
 **/
class DeviceInfo extends ResponseModel {
  // @ts-ignore
  #type: DevicesType;
  // @ts-ignore
  #category: deviceCategories;
  // @ts-ignore
  #icon: any;

  constructor(
    publicId: string,
    name: string,
    description: string,
    type: DevicesType,
  ) {
    super(publicId, name, description);
    this.#type = type;

    switch (type) {
      case DevicesType.modbus_switch_1p:
      case DevicesType.modbus_switch_2p:
      case DevicesType.modbus_switch_3p:
      case DevicesType.modbus_switch_4p:
      case DevicesType.modbus_switch_6p:
      case DevicesType.zigbee_switch_3p:
        this.#category = deviceCategories.switch;
        this.#icon = Switches;
        break;
      case DevicesType.modbus_relay:
        this.#category = deviceCategories.relay;
        this.#icon = Relay;
        break;
      case DevicesType.modbus_thermostat:
        this.#category = deviceCategories.thermostat;
        this.#icon = Thermometer;
        break;
      case DevicesType.modbus_music_player:
        this.#category = deviceCategories.music_player;
        this.#icon = Music;
        break;
      case DevicesType.modbus_duct_split:
      case DevicesType.ir_split:
        this.#category = deviceCategories.split;
        this.#icon = DuctSplit;
        break;
      case DevicesType.ir_hood:
        this.#category = deviceCategories.hood;
        this.#icon = Hood;
        break;
      case DevicesType.modbus_curtains:
        this.#category = deviceCategories.curtains;
        this.#icon = Shaders;
        break;
      default:
        console.error("uncategorized device with type number of: ", type);
        this.#category = deviceCategories.uncategorized;
        this.#icon = LoadingSpinner;
    }
  }

  get type(): DevicesType {
    return this.#type;
  }

  get category(): deviceCategories {
    return this.#category;
  }

  get icon(): any {
    return this.#icon;
  }
}

export default DeviceInfo;
