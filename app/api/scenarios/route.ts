import { NextRequest, NextResponse } from "next/server";
import fetchUrl from "@/utils/fetchUrl";
import { ServerSideScenarioT } from "@/classes/scenario";
import ApiResponse from "@/app/api/apiResponse";
// import getAuthorizationHeaders from "@/utils/getAuthorizationHeaders";

export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;
  const isFavoredScenario = searchParams.get("favored");

  const url = new URL(`${process.env.NEXT_CORE_ABSOLUTE_URL}/scenario`);
  if (isFavoredScenario) {
    url.searchParams.set("favorite", isFavoredScenario);
  }

  try {
    const result = (await fetchUrl(url, {
      // headers: getAuthorizationHeaders(request.headers),
    })) as ServerSideScenarioT[];

    return NextResponse.json(new ApiResponse(true, result));
  } catch (e) {
    return NextResponse.json(e, { status: e.status || 500 });
  }
};
