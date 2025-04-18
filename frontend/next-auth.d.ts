import "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as
   * a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      id: string;
      email: string;
    };
    accessToken: string;
    error?: string;
  }

  interface User {
    id: string;
    email: string;
    accessToken: string;
  }
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    id: string;
    email: string;
    accessToken: string;
    iat?: number;
    exp?: number;
    jti?: string;
  }
}
