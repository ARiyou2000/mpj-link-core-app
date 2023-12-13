import { NextRequest, NextResponse } from "next/server";
import ApiResponse from "@/app/api/apiResponse";
import fetchUrl from "@/utils/fetchUrl";
import getAuthorizationHeaders from "@/utils/getAuthorizationHeaders";
import { ServerSideZoneT } from "@/classes/zone";

export const GET = async (request: NextRequest) => {
  try {
    const result = (await fetchUrl(
      `${process.env.NEXT_CORE_ABSOLUTE_URL}/check`,
      { headers: getAuthorizationHeaders(request.headers) },
    )) as ServerSideZoneT[];

    return NextResponse.json(new ApiResponse(true, result));
  } catch (e) {
    return NextResponse.json(e, { status: e.status || 500 });
  }
};
