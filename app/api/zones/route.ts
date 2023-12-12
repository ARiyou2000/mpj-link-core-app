import { NextRequest, NextResponse } from "next/server";
import fetchUrl from "@/utils/fetchUrl";
import { ServerSideZoneT } from "@/classes/zone";
import ApiResponse from "@/app/api/apiResponse";
import getAuthorizationHeaders from "@/utils/getAuthorizationHeaders";

export const GET = async (request: NextRequest) => {
  try {
    const result = (await fetchUrl(
      `${process.env.NEXT_CORE_ABSOLUTE_URL}/zone`,
      { headers: getAuthorizationHeaders(request.headers) },
    )) as ServerSideZoneT[];

    return NextResponse.json(new ApiResponse(true, result));
  } catch (e) {
    return NextResponse.json(e, { status: e.status || 500 });
  }
};
