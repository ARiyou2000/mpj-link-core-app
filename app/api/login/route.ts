import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { storageConfig } from "@/storage.config";
import ApiResponse from "@/app/api/apiResponse";

export const POST = async (request: NextRequest) => {
  const body = await request.json();

  let authResponse;

  try {
    const base64data = Buffer.from(`user:${body?.passcode}`).toString("base64");

    const headers = new Headers();
    headers.set("Content-Type", "application/json");
    headers.set("Authorization", `Basic ${base64data}`);

    authResponse = await fetch(`${process.env.NEXT_CORE_ABSOLUTE_URL}/login`, {
      headers,
    });
  } catch (e) {
    console.error("Network error while fetching data:", e);
    return NextResponse.error();
  }

  try {
    if (authResponse.ok) {
      const authorizationHeader = authResponse.headers.get(
        "Authorization",
      ) as string;

      const result = await authResponse.json();

      const response = NextResponse.json(new ApiResponse(true, result), {
        headers: { Authorization: authorizationHeader },
      });
      // response.cookies.set({
      //   name: storageConfig.server.user.token.decoded,
      //   value: authorizationHeader,
      // });

      return response;
    } else {
      return NextResponse.json({}, { status: authResponse.status });
    }
  } catch (e) {
    console.error("Error parsing JSON data: ", e);
    return NextResponse.error();
  }
};
