import { NextRequest, NextResponse } from "next/server";
import ApiResponse from "@/app/api/apiResponse";
import { Protocols } from "@/classes/protocols";
import { setRegisterData } from "@/utils/queueHelper";
import { paramsType } from "@/app/api/devices/[api_devicePublicId]/registers/[api_deviceRegisterPublicId]/route";
import mqttPublish from "@/mqtt/publish";
import connectionConfig from "@/connection.config";
import getAuthorizationHeaders from "@/utils/getAuthorizationHeaders";

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
