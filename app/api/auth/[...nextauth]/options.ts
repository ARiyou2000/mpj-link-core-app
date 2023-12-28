import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { cookies } from "next/headers";
import { storageConfig } from "@/storage.config";

export const dynamic = "force-dynamic";

export const authOptions: AuthOptions = {
  pages: {
    signIn: "/",
    // error: "/auth_error",
  },
  providers: [
    CredentialsProvider({
      name: "Credectials",
      credentials: {
        // username: { label: "Username", type: "text", value: "user" },
        passcode: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        let authResponse;

        try {
          authResponse = await fetch(
            `${process.env.NEXT_SELF_ABSOLUTE_URL}/api/auth/login`,
            {
              method: "POST",
              body: JSON.stringify({ passcode: credentials?.passcode }),
            },
          );
        } catch (e) {
          console.error("Error while getting auth data:", e);
          throw new Error(JSON.stringify({ status: -113 }));
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

            const user = {
              name: "admin",
              id: "adminPublicId",
              email: "admin@mpjlink.ir",
              image: "",
            };
            return user;
          } else {
            console.log(
              `Response on login is NOT OK\t-\t${authResponse.status}/${authResponse.statusText}`,
            );
            if (authResponse.status === 555) {
              throw new Error(JSON.stringify({ status: -113 }));
            }
            return null;
          }
        } catch (e) {
          console.error("Network error or Error parsing JSON data: ", e);
          throw e;
          // return null;
        }
      },
    }),
  ],
} satisfies AuthOptions;
