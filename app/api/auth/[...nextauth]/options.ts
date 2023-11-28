import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { coreAdress } from "@/utils/getCoreAddress";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credectials",
      credentials: {
        // username: { label: "Username", type: "text", value: "user" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const base64data = Buffer.from(
          `user:${credentials?.password}`,
        ).toString("base64");
        try {
          console.log(base64data);

          const authResponse = await fetch(`${coreAdress}/login`, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Basic ${base64data}`,
            },
          });

          if (!authResponse.ok) {
            console.log("NOT OK");
            return null;
          }
          // await loginWithCode(credentials?.password as string);
          // const user = await authResponse.json();
          const user = { name: "jimsa", publicId: "kalsj-oweru-fjklg" };
          console.log(user);

          return user;
        } catch (e) {
          return null;
        }
      },
    }),
  ],
  // pages: { signIn: "/" },
} satisfies AuthOptions;

/*
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  // callbacks: {
  //   jwt: (params) => {},
  // },
  providers: [
    CredentialsProvider({
      name: "Credectials",
      credentials: {
        // username: { label: "Username", type: "text", value: "user" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const authResponse = await fetch("/api/login", {
            method: "POST",
            body: JSON.stringify({ passcode: credentials?.password }),
          });

          // await loginWithCode(credentials?.password as string);
          // const user = await authResponse.json();
          const user = { name: "jimsa", publicId: "kalsj-oweru-fjklg" };
          console.log(user);

          return user;
        } catch (e) {
          return null;
        }
      },
    }),
  ],
  // pages: { signIn: "/" },
} satisfies AuthOptions;

*/
