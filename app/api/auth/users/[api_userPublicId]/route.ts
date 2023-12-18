import { NextRequest, NextResponse } from "next/server";
import fetchUrl from "@/utils/fetchUrl";
import ApiResponse from "@/app/api/apiResponse";
import getAuthorizationHeaders from "@/utils/getAuthorizationHeaders";

export type paramsType = { params: { api_userPublicId: string } };

export const PUT = async (
  request: NextRequest,
  { params: { api_userPublicId } }: paramsType,
) => {
  const body = await request.json();

  const result = await fetchUrl(
    `${process.env.NEXT_CORE_ABSOLUTE_URL}/users/${api_userPublicId}`,
    {
      method: "PUT",
      body,
      headers: getAuthorizationHeaders(request.headers),
    },
  );

  return NextResponse.json(new ApiResponse(true, result));
};
