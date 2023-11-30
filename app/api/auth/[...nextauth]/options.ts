import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { coreAdress } from "@/utils/getCoreAddress";

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
        try {
          const authResponse = await fetch(`${coreAdress}/login`, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Basic ${base64data}`,
            },
          });
          // await fetch("/api/login", {
          //   method: "POST",
          //   body: JSON.stringify({ passcode: credentials?.passcode  }),
          // });

          if (!authResponse.ok) {
            console.log("NOT OK");
            return null;
          }

          const result = await authResponse.json();

          const user = { name: "admin", publicId: "admin" };
          console.log(user);

          return user;
        } catch (e) {
          console.error(e);
          return null;
        }
      },
    }),
  ],
} satisfies AuthOptions;
