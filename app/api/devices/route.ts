import { NextRequest, NextResponse } from "next/server";
import fetchUrl from "@/utils/fetchUrl";
import { ServerSideDeviceInfoT } from "@/classes/devices/deviceInfo";
import ApiResponse from "@/app/api/apiResponse";
import getAuthorizationHeaders from "@/utils/getAuthorizationHeaders";

export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;
  const zonePublicId = searchParams.get("zpid");

  try {
    const url = new URL(
      zonePublicId ? `zone/${zonePublicId}` : "device",
      `${process.env.NEXT_CORE_ABSOLUTE_URL}/`,
    );

    const result = (await fetchUrl(url, {
      headers: getAuthorizationHeaders(request.headers),
    })) as ServerSideDeviceInfoT[];
    return NextResponse.json(new ApiResponse(true, result));
  } catch (e) {
    return NextResponse.json(e, { status: e.status || 500 });
  }
};
