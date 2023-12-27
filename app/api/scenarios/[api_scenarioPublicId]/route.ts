import { NextRequest, NextResponse } from "next/server";
import fetchUrl from "@/utils/fetchUrl";
import { ServerSideScenarioT } from "@/classes/Scenario";
import ApiResponse from "@/app/api/apiResponse";
import getAuthorizationHeaders from "@/utils/getAuthorizationHeaders";

export type paramsType = { params: { api_scenarioPublicId: string } };

export const GET = async (
  request: NextRequest,
  { params: { api_scenarioPublicId } }: paramsType,
) => {
  try {
    const list = (await fetchUrl(
      `${process.env.NEXT_SELF_ABSOLUTE_URL}/api/scenarios`,
      // { headers: getAuthorizationHeaders(request.headers) },
    )) as ServerSideScenarioT[];
    const result = list?.find((item) => {
      return item.publicId === api_scenarioPublicId;
    });
    return NextResponse.json(new ApiResponse(true, result));
  } catch (e) {
    return NextResponse.json(e, { status: e.status || 500 });
  }
};

export const PUT = async (
  request: NextRequest,
  { params: { api_scenarioPublicId } }: paramsType,
) => {
  const body = await request.json();
  const { favorite } = body;
  const result = await fetchUrl(
    `${process.env.NEXT_CORE_ABSOLUTE_URL}/scenario/${api_scenarioPublicId}`,
    {
      method: "PUT",
      body: { favorite },
      headers: getAuthorizationHeaders(request.headers),
    },
  );

  return NextResponse.json(new ApiResponse(true, result));
};
