import { NextRequest, NextResponse } from "next/server";
import { getDeviceData } from "@/utils/queueHelper";
import ApiResponse from "@/app/api/apiResponse";
import { paramsType } from "@/app/api/devices/[api_devicePublicId]/route";
import getAuthorizationHeaders from "@/utils/getAuthorizationHeaders";
import fetchUrl from "@/utils/fetchUrl";
import DeviceInfo, {
  ServerSideDeviceInfoT,
} from "@/classes/devices/deviceInfo";
import { Protocols } from "@/classes/devices/protocols";
import mqttPublish from "@/mqtt/publish";
import connectionConfig from "@/connection.config";
import mqttSubscribe from "@/mqtt/subscribe";
import mqttCategorizedMessage from "@/mqtt/mqttCategorizedMessage";

export const GET = async (
  request: NextRequest,
  { params: { api_devicePublicId } }: paramsType,
) => {
  const signal = request.signal;

  const options = { signal, headers: getAuthorizationHeaders(request.headers) };

  const device = (await fetchUrl(
    `${process.env.NEXT_SELF_ABSOLUTE_URL}/api/devices/${api_devicePublicId}`,
    options,
  )) as ServerSideDeviceInfoT;

  const deviceInfo = new DeviceInfo(
    device.publicId,
    device.name,
    device.description,
    device.type,
  );

  try {
    if (deviceInfo.protocol === Protocols.modbus) {
      const deviceRegistersValue = await getDeviceData(
        api_devicePublicId,
        options,
      );

      return NextResponse.json(
        new ApiResponse(true, deviceRegistersValue.value),
      );
    } else if (deviceInfo.protocol === Protocols.zigbee) {
      let zigbeeData;
      await mqttSubscribe(({ topic, message }) => {
        mqttCategorizedMessage(topic, message, {
          onDataMassage: () => {
            if (topic.includes(api_devicePublicId)) {
              zigbeeData = message;
            }
          },
        });
      });

      await mqttPublish({
        topic: `${connectionConfig.mqtt.mainTopic}/${api_devicePublicId}/get`,
        message: JSON.stringify({ state: "" }),
      });

      return NextResponse.json(new ApiResponse(true, zigbeeData));
    } else {
      console.error("Invalid protocol in get device data route");
      return NextResponse.error();
    }
  } catch (e) {
    console.error(e);
    return NextResponse.error();
  }
};
