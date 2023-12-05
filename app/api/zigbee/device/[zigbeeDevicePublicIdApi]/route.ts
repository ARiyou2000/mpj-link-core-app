import { NextRequest, NextResponse } from "next/server";
import mqttPublish from "@/mqtt/publish";
import connectionConfig from "@/connection.config";

type paramsType = { params: { zigbeeDevicePublicIdApi: string } };
export const POST = async (
  request: NextRequest,
  { params: { zigbeeDevicePublicIdApi } }: paramsType,
) => {
  const body = await request.json();

  if (zigbeeDevicePublicIdApi && body) {
    await mqttPublish({
      topic: `${connectionConfig.mqtt.mainTopic}/${zigbeeDevicePublicIdApi}/set`,
      message: JSON.stringify(body),
    });
  }

  return NextResponse.json({});
};

export const GET = async (
  request: NextRequest,
  { params: { zigbeeDevicePublicIdApi } }: paramsType,
) => {
  if (zigbeeDevicePublicIdApi) {
    await mqttPublish({
      topic: `${connectionConfig.mqtt.mainTopic}/${zigbeeDevicePublicIdApi}/get`,
      message: JSON.stringify({ state: "" }),
    });
  }

  return NextResponse.json({});
};
