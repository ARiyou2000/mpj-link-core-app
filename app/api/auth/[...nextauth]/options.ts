import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { coreAdress } from "@/utils/getCoreAddress";
import { cookies } from "next/headers";

export const authOptions: AuthOptions = {
  pages: { signIn: "/" },
  providers: [
    CredentialsProvider({
      name: "Credectials",
      credentials: {
        // username: { label: "Username", type: "text", value: "user" },
        passcode: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const base64data = Buffer.from(
          `user:${credentials?.passcode}`,
        ).toString("base64");

        let authResponse;

        try {
          authResponse = await fetch(`${coreAdress}/login`, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Basic ${base64data}`,
            },
          });
          // await fetch("/api/login", {
          //   method: "POST",
          //   body: JSON.stringify({ passcode: credentials?.passcode  }),
          // });
        } catch (e) {
          console.error(e);
          throw new Error(JSON.stringify({ status: -113 }));
        }

        try {
          if (authResponse.ok) {
            const authorizationHeader = authResponse.headers.get(
              "Authorization",
            ) as string;
            console.log("authorizationHeader: ", authorizationHeader);
            cookies().set({ name: "jwt-token", value: authorizationHeader });

            const result = await authResponse.json();

            const user = {
              name: "admin",
              id: "adminPublicId",
              email: "admin@mpjlink.ir",
              image: "",
            };
            return user;
          } else {
            console.log("NOT OK");
            return null;
          }
        } catch (e) {
          console.error("Error parsing JSON data: ", e);
          return null;
        }
      },
    }),
  ],
} satisfies AuthOptions;
