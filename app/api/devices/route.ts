import { NextRequest, NextResponse } from "next/server";
import fetchUrl from "@/utils/fetchUrl";
import { coreAddress } from "@/utils/getCoreAddress";
import { ServerSideDeviceInfoT } from "@/classes/devices/deviceInfo";

export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;
  const zonePublicId = searchParams.get("zpid");
  try {
    const result = (await fetchUrl(
      `${coreAddress}/${zonePublicId ? `zone/${zonePublicId}` : "device"}`,
    )) as ServerSideDeviceInfoT[];
    return NextResponse.json({ result });
  } catch (e) {
    return NextResponse.json(e, { status: e.status || 500 });
  }
};
