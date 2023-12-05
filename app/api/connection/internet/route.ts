import { NextRequest, NextResponse } from "next/server";
import AuthorizedFetch from "@/utils/authorizedFetch";

export const GET = async (request: NextRequest) => {
  const result = await AuthorizedFetch("check/internet");
  return NextResponse.json({ result, action: true }, { status: 200 });
};
