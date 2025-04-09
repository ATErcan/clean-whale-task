import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;
  const res = NextResponse.next();

  const token = await getToken({ req });
  const pathNames = pathname.split("/");

  if (
    (pathNames[1] === "login" && token) ||
    (pathNames[1] === "signup" && token)
  ) {
    const url = new URL(`/`, req.url);
    return NextResponse.redirect(url);
  }

  if (!["login", "signup"].includes(pathNames[1]) && !token) {
    const url = new URL(`/login`, req.url);
    return NextResponse.redirect(url);
  }

  return res;
}

export const config = {
  matcher: ["/login", "/signup", "/"],
};