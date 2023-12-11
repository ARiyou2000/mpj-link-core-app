import { NextRequest, NextResponse } from "next/server";
import { coreAddress } from "@/utils/getCoreAddress";
import { cookies } from "next/headers";
import { storageConfig } from "@/storage.config";

export const POST = async (request: NextRequest) => {
  const body = await request.json();

  let authResponse;

  try {
    const base64data = Buffer.from(`user:${body?.passcode}`).toString("base64");

    const headers = new Headers();
    headers.set("Content-Type", "application/json");
    headers.set("Authorization", `Basic ${base64data}`);

    authResponse = await fetch(`${coreAddress}/login`, {
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
      cookies().set({
        name: storageConfig.server.user.token.decoded,
        value: authorizationHeader,
      });

      const result = await authResponse.json();

      return NextResponse.json({ result });
    } else {
      return NextResponse.json({}, { status: authResponse.status });
    }
  } catch (e) {
    console.error("Error parsing JSON data: ", e);
    return NextResponse.error();
  }
};
