import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

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
            `${process.env.NEXT_SELF_ABSOLUTE_URL}/api/login`,
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
