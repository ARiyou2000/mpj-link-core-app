import { NextRequest, NextResponse } from "next/server";
import fetchUrl from "@/utils/fetchUrl";
import { ServerSideZoneT } from "@/classes/Zone";
import ApiResponse from "@/app/api/apiResponse";
import getAuthorizationHeaders from "@/utils/getAuthorizationHeaders";

type paramsType = { params: { api_zonePublicId: string } };

export const GET = async (
  request: NextRequest,
  { params: { api_zonePublicId } }: paramsType,
) => {
  try {
    const list = (await fetchUrl(
      `${process.env.NEXT_SELF_ABSOLUTE_URL}/api/zones`,
      {
        headers: getAuthorizationHeaders(request.headers),
      },
    )) as ServerSideZoneT[];
    const result = list?.find((item) => {
      return item.publicId === api_zonePublicId;
    });
    return NextResponse.json(new ApiResponse(true, result));
  } catch (e) {
    return NextResponse.json(e, { status: e.status || 500 });
  }
};
