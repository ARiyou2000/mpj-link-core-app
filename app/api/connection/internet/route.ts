import { NextRequest, NextResponse } from "next/server";
import AuthorizedFetch from "@/utils/authorizedFetch";
import ApiResponse from "@/app/api/apiResponse";

export const GET = async (request: NextRequest) => {
  const result = await AuthorizedFetch("check/internet");
  return NextResponse.json(new ApiResponse(true, result));
};
