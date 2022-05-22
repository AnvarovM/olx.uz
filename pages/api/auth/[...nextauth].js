import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export default NextAuth({
  providers: [
    Google({
      clientId:
        "586746427427-ou73m0pue28tcd53cv5fdf836vc6bs6g.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
});
