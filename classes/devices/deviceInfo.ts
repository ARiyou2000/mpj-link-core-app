import ResponseModel from "@/classes/responseModel";
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
  // electrical_shaders,
}

class DeviceInfo extends ResponseModel {
  type: number = 0;
  category: string = "";
  icon: any = null;

  constructor(
    publicId: string,
    name: string,
    description: string,
    type: number,
  ) {
    super(publicId, name, description);
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
      default:
        this.category = "uncategorized";
        this.icon = LoadingSpinner;
    }
  }
}

export default DeviceInfo;
