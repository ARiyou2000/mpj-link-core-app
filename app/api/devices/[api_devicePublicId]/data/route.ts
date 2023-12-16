import { NextRequest, NextResponse } from "next/server";
import { getDeviceData } from "@/utils/queueHelper";
import ApiResponse from "@/app/api/apiResponse";
import { paramsType } from "@/app/api/devices/[api_devicePublicId]/route";
import getAuthorizationHeaders from "@/utils/getAuthorizationHeaders";
import fetchUrl from "@/utils/fetchUrl";
import DeviceInfo, {
  ServerSideDeviceInfoT,
} from "@/classes/devices/deviceInfo";
import { Protocols } from "@/classes/protocols";
import mqttPublish from "@/mqtt/publish";
import connectionConfig from "@/connection.config";

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

  if (deviceInfo.protocol === Protocols.modbus) {
    const deviceRegistersValue = await getDeviceData(
      api_devicePublicId,
      options,
    );

    return NextResponse.json(new ApiResponse(true, deviceRegistersValue.value));
  } else if (deviceInfo.protocol === Protocols.zigbee) {
    await mqttPublish({
      topic: `${connectionConfig.mqtt.mainTopic}/${api_devicePublicId}/get`,
      message: JSON.stringify({ state: "" }),
    });

    return NextResponse.json({});
  } else {
    return NextResponse.error();
  }
};
