import { NextRequest, NextResponse } from "next/server";
import fetchUrl from "@/utils/fetchUrl";
import { ServerSideDeviceInfoT } from "@/classes/devices/deviceInfo";
import ApiResponse from "@/app/api/apiResponse";
import getAuthorizationHeaders from "@/utils/getAuthorizationHeaders";

type paramsType = { params: { api_devicePublicId: string } };

export const GET = async (
  request: NextRequest,
  { params: { api_devicePublicId } }: paramsType,
) => {
  const searchParams = request.nextUrl.searchParams;
  const zonePublicId = searchParams.get("zpid");

  try {
    const url = new URL(
      zonePublicId ? `zone/${zonePublicId}` : "device",
      `${process.env.NEXT_CORE_ABSOLUTE_URL}/`,
    );

    // Using parent route as reference
    // const url = new URL(`${process.env.NEXT_SELF_ABSOLUTE_URL}/api/devices`);
    // url.searchParams.set("zpid",zonePublicId)

    const list = (await fetchUrl(url, {
      headers: getAuthorizationHeaders(request.headers),
    })) as ServerSideDeviceInfoT[];
    const result = list?.find((item) => {
      return item.publicId === api_devicePublicId;
    });
    return NextResponse.json(new ApiResponse(true, result));
  } catch (e) {
    return NextResponse.json(e, { status: e.status || 500 });
  }
};
