import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { openDB } from "../../../lib/db";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const db = await openDB();
        const user = await db.get(
          "SELECT * FROM users WHERE email = ? AND password = ?",
          credentials.email,
          credentials.password
        );

        if (user) {
          return { id: user.id, name: user.first_name + " " + user.last_name, email: user.email };
        } else {
          return null;
        }
      }
    })
  ],
  session: {
    strategy: "jwt"
  },
  pages: {
    signIn: "/login"
  }
});