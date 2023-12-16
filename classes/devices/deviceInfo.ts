import ResponseModel from "@/classes/responseModel";
import {
  Curtains,
  DuctSplit,
  Hood,
  Music,
  Relay,
  Switches,
  Thermometer,
} from "@/components/icons/colored";
import LoadingSpinner from "@/components/loading/LoadingSpinner";
import { Protocols } from "@/classes/protocols";
import { FunctionComponent } from "react";

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
  zigbee_relay,
  zigbee_curtains,
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

export const deviceCategoryInfo = {
  [deviceCategories.switch]: { title: "کلید", icon: Switches },
  [deviceCategories.relay]: { title: "رله", icon: Relay },
  [deviceCategories.thermostat]: { title: "ترموستات", icon: Thermometer },
  [deviceCategories.music_player]: { title: "موزیک پلیر", icon: Music },
  [deviceCategories.split]: { title: "اسپلیت", icon: DuctSplit },
  [deviceCategories.hood]: { title: "هود", icon: Hood },
  [deviceCategories.curtains]: { title: "پرده برقی", icon: Curtains },
  [deviceCategories.uncategorized]: { title: "غیر مجاز", icon: LoadingSpinner },
};

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
  #icon: FunctionComponent;
  // @ts-ignore
  #hasDataFeedback: boolean = true;
  // @ts-ignore
  #protocol: Protocols;

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
        this.#protocol = Protocols.modbus;
        this.#category = deviceCategories.switch;
        this.#icon = deviceCategoryInfo[deviceCategories.switch].icon;
        break;
      case DevicesType.zigbee_switch_3p:
        this.#protocol = Protocols.zigbee;
        this.#category = deviceCategories.switch;
        this.#icon = deviceCategoryInfo[deviceCategories.switch].icon;
        break;
      case DevicesType.modbus_relay:
        this.#protocol = Protocols.modbus;
        this.#category = deviceCategories.relay;
        this.#icon = deviceCategoryInfo[deviceCategories.relay].icon;
        break;
      case DevicesType.zigbee_relay:
        this.#protocol = Protocols.zigbee;
        this.#category = deviceCategories.relay;
        this.#icon = deviceCategoryInfo[deviceCategories.relay].icon;
        break;
      case DevicesType.modbus_thermostat:
        this.#protocol = Protocols.modbus;
        this.#category = deviceCategories.thermostat;
        this.#icon = deviceCategoryInfo[deviceCategories.thermostat].icon;
        break;
      case DevicesType.modbus_music_player:
        this.#protocol = Protocols.modbus;
        this.#category = deviceCategories.music_player;
        this.#icon = deviceCategoryInfo[deviceCategories.music_player].icon;
        this.#hasDataFeedback = false;
        break;
      case DevicesType.modbus_duct_split:
        this.#protocol = Protocols.modbus;
        this.#category = deviceCategories.split;
        this.#icon = deviceCategoryInfo[deviceCategories.split].icon;
        break;
      case DevicesType.ir_split:
        this.#protocol = Protocols.modbus;
        this.#category = deviceCategories.split;
        this.#icon = deviceCategoryInfo[deviceCategories.split].icon;
        this.#hasDataFeedback = false;
        break;
      case DevicesType.ir_hood:
        this.#protocol = Protocols.modbus;
        this.#category = deviceCategories.hood;
        this.#icon = deviceCategoryInfo[deviceCategories.hood].icon;
        this.#hasDataFeedback = false;
        break;
      case DevicesType.modbus_curtains:
        this.#protocol = Protocols.modbus;
        this.#category = deviceCategories.curtains;
        this.#icon = deviceCategoryInfo[deviceCategories.curtains].icon;
        this.#hasDataFeedback = false;
        break;
      case DevicesType.zigbee_curtains:
        this.#protocol = Protocols.zigbee;
        this.#category = deviceCategories.curtains;
        this.#icon = deviceCategoryInfo[deviceCategories.curtains].icon;
        break;
      default:
        console.error("uncategorized device with type number of: ", type);
        this.#protocol = Protocols.modbus;
        this.#category = deviceCategories.uncategorized;
        this.#icon = deviceCategoryInfo[deviceCategories.uncategorized].icon;
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

  get protocol(): Protocols {
    return this.#protocol;
  }

  get hasDataFeedback(): boolean {
    return this.#hasDataFeedback;
  }
}

export default DeviceInfo;
