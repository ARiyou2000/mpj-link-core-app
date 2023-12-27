import { NextRequest, NextResponse } from "next/server";
import ApiResponse from "@/app/api/apiResponse";
import { Protocols } from "@/classes/devices/protocols";
import { paramsType } from "@/app/api/devices/[api_devicePublicId]/registers/[api_deviceRegisterPublicId]/route";
import mqttPublish from "@/mqtt/publish";
import connectionConfig from "@/connection.config";
import getAuthorizationHeaders from "@/utils/getAuthorizationHeaders";
import { setRegisterData } from "@/utils/queueHelper";
// import fetchUrl from "@/utils/fetchUrl";
// import DeviceInfo, {
//   ServerSideDeviceInfoT,
// } from "@/classes/devices/deviceInfo";

export const PUT = async (
  request: NextRequest,
  { params: { api_devicePublicId, api_deviceRegisterPublicId } }: paramsType,
) => {
  const body = await request.json();
  // const signal = request.signal;

  const { value, hasFeedback, protocol, indicator } = body;
  const options = { headers: getAuthorizationHeaders(request.headers) };
  // if (signal) {
  //   options.signal = signal;
  // }

  let result;
  if (protocol === Protocols.modbus) {
    result = await setRegisterData(api_deviceRegisterPublicId, value, {
      ...options,
      hasFeedback,
    });
  } else if (protocol === Protocols.zigbee) {
    result = await mqttPublish({
      topic: `${connectionConfig.mqtt.mainTopic}/${api_devicePublicId}/set`,
      message: JSON.stringify({ [indicator]: value }),
    });
  } else {
    return NextResponse.error();
  }

  return NextResponse.json(new ApiResponse(true, result || {}));
};

// export const GET = async (
//   request: NextRequest,
//   { params: { api_devicePublicId, api_deviceRegisterPublicId } }: paramsType,
// ) => {
//   const body = await request.json();
//   const signal = request.signal;
//
//   const { value, hasFeedback, protocol, indicator } = body;
//   const options = { signal, headers: getAuthorizationHeaders(request.headers) };
//
//   const device = (await fetchUrl(
//     `${process.env.NEXT_SELF_ABSOLUTE_URL}/api/devices/${api_devicePublicId}`,
//     options,
//   )) as ServerSideDeviceInfoT;
//
//   const deviceInfo = new DeviceInfo(
//     device.publicId,
//     device.name,
//     device.description,
//     device.type,
//   );
//
//   if (deviceInfo.protocol === Protocols.modbus) {
//     const deviceRegistersValue = await getRegisterData(
//       api_deviceRegisterPublicId,
//       options,
//     );
//
//     return NextResponse.json(new ApiResponse(true, deviceRegistersValue.value));
//   } else if (deviceInfo.protocol === Protocols.zigbee) {
//     await mqttPublish({
//       topic: `${connectionConfig.mqtt.mainTopic}/${api_devicePublicId}/get`,
//       message: JSON.stringify({ [indicator]: "" }),
//     });
//
//     return NextResponse.json({});
//   } else {
//     return NextResponse.error();
//   }
// };
