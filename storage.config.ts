export const storageConfig = {
  server: {
    user: {
      token: {
        decoded: "jwt-token",
        encoded: Buffer.from("jwt-token").toString("base64"),
      },
    },
  },
  client: {
    user: {
      token: {
        decoded: "jwt-token",
        encoded: Buffer.from("jwt-token").toString("base64"),
      },
      password: {
        decoded: "MPJUserP",
        encoded: Buffer.from("MPJUserP").toString("base64"),
      },
    },
  },
} as const;
