import { NextRequest, NextResponse } from "next/server";
import mqttPublish from "@/mqtt/publish";

export const GET = async (request: NextRequest) => {
  try {
    await mqttPublish({
      topic: "zigbee2mqtt/bridge/request/permit_join",
      message: JSON.stringify({ value: true, time: 600 }),
    });

    return NextResponse.json(
      { message: "Paring success full for 10 min" },
      { status: 201 },
    );
  } catch (e) {
    return NextResponse.json({ message: "Failed to pair" }, { status: 666 });
  }
};
