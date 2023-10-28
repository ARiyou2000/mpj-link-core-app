import { NextRequest, NextResponse } from "next/server";
import mqttPublish from "@/mqtt/publish";
import connectionConfig from "@/connection.config";

type paramsType = { params: { zigbeeDevicePublicIdApi: string } };
export const POST = async (
  request: NextRequest,
  { params: { zigbeeDevicePublicIdApi } }: paramsType,
) => {
  const body = await request.json();
  console.log("Publish to MQTT: ", body);

  if (zigbeeDevicePublicIdApi && body) {
    mqttPublish({
      topic: `${connectionConfig.mqtt.mainTopic}/${zigbeeDevicePublicIdApi}/set`,
      message: JSON.stringify(body),
    });
  }

  return new NextResponse(JSON.stringify({}));
};

export const GET = async (
  request: NextRequest,
  { params: { zigbeeDevicePublicIdApi } }: paramsType,
) => {
  console.log("getRequestCalled");

  if (zigbeeDevicePublicIdApi) {
    mqttPublish({
      topic: `${connectionConfig.mqtt.mainTopic}/${zigbeeDevicePublicIdApi}/get`,
      message: JSON.stringify({ state: "" }),
    });
  }

  return new NextResponse(JSON.stringify({}));
};
