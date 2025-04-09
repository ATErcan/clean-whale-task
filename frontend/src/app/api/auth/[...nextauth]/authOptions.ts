import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { AxiosResponse } from "axios";

import { ILoginResponse } from "@/lib/types/responses/user.type";
import axiosInstance from "@/lib/tools/axios";

export const authOptions: AuthOptions = {
  secret: process.env.AUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "email",
          type: "email",
          placeholder: "johndoe@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          const { data }: AxiosResponse<ILoginResponse> =
            await axiosInstance.post(
              "/auth/local",
              {
                email: credentials?.email,
                password: credentials?.password,
              },
              { headers: { "Content-Type": "application/json" } }
            );

          if (data.jwt?.token && data.user) {
            return {
              id: data.user._id,
              email: data.user.email,
              accessToken: data.jwt.token,
            };
          }
          return null;
        } catch (err: any) {
          throw new Error(err?.response?.data?.error || "Unknown login error");
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 60,
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.accessToken = user.accessToken;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.email = token.email;
      session.accessToken = token.accessToken;

      return session;
    }
  },
  pages: {
    signIn: "/login",
    newUser: "/signup"
  }
};
