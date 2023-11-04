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
  modbus_electrical_shaders,
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

export const deviceTypeList = {
  modbus_switch: "modbus_switch",
  modbus_relay: "modbus_relay",
  modbus_thermostat: "modbus_thermostat",
  modbus_music_player: "modbus_music_player",
  modbus_duct_split: "modbus_duct_split",
  ir_split: "ir_split",
  ir_hood: "ir_hood",
  modbus_electrical_shaders: "modbus_electrical_shaders",
  zigbee_switch: "zigbee_switch",
};

class DeviceInfo extends ResponseModel {
  // @ts-ignore
  #protocol: Protocols;
  // @ts-ignore
  #type: DevicesType;
  // @ts-ignore
  #category: string;
  // @ts-ignore
  #icon: any;

  constructor(
    protocol: Protocols,
    publicId: string,
    name: string,
    description: string,
    type: DevicesType,
  ) {
    super(publicId, name, description);
    this.#protocol = protocol;
    this.#type = type;

    switch (type) {
      case DevicesType.modbus_switch_1p:
      case DevicesType.modbus_switch_2p:
      case DevicesType.modbus_switch_3p:
      case DevicesType.modbus_switch_4p:
      case DevicesType.modbus_switch_6p:
        this.#category = deviceTypeList.modbus_switch;
        this.#icon = Switches;
        break;
      case DevicesType.modbus_relay:
        this.#category = deviceTypeList.modbus_relay;
        this.#icon = Relay;
        break;
      case DevicesType.modbus_thermostat:
        this.#category = deviceTypeList.modbus_thermostat;
        this.#icon = Thermometer;
        break;
      case DevicesType.modbus_music_player:
        this.#category = deviceTypeList.modbus_music_player;
        this.#icon = Music;
        break;
      case DevicesType.modbus_duct_split:
        this.#category = deviceTypeList.modbus_duct_split;
        this.#icon = DuctSplit;
        break;
      case DevicesType.ir_split:
        this.#category = deviceTypeList.ir_split;
        this.#icon = DuctSplit;
        break;
      case DevicesType.ir_hood:
        this.#category = deviceTypeList.ir_hood;
        this.#icon = Hood;
        break;
      case DevicesType.modbus_electrical_shaders:
        this.#category = deviceTypeList.modbus_electrical_shaders;
        this.#icon = Shaders;
        break;
      // case DevicesType.zigbee_switch_1p:
      // case DevicesType.zigbee_switch_2p:
      case DevicesType.zigbee_switch_3p:
        // case DevicesType.zigbee_switch_4p:
        // case DevicesType.zigbee_switch_6p:
        this.#category = deviceTypeList.zigbee_switch;
        this.#icon = Switches;
        break;
      default:
        console.error("uncategorized device with type number of: ", type);
        this.#category = "uncategorized";
        this.#icon = LoadingSpinner;
    }
  }

  get protocol(): Protocols {
    return this.#protocol;
  }

  get type(): DevicesType {
    return this.#type;
  }

  get category(): string {
    return this.#category;
  }

  get icon(): any {
    return this.#icon;
  }
}

export default DeviceInfo;
