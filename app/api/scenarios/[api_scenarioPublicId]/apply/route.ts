import { NextRequest, NextResponse } from "next/server";
import { activateScenario } from "@/utils/queueHelper";
import { paramsType } from "@/app/api/scenarios/[api_scenarioPublicId]/route";
import ApiResponse from "@/app/api/apiResponse";
import getAuthorizationHeaders from "@/utils/getAuthorizationHeaders";

export const GET = async (
  request: NextRequest,
  { params: { api_scenarioPublicId } }: paramsType,
) => {
  const result = await activateScenario(api_scenarioPublicId, {
    headers: getAuthorizationHeaders(request.headers),
  });
  console.log("scenario activation result", result);
  return NextResponse.json(new ApiResponse(true, result));
};
