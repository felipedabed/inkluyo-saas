import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // If accessing /blog without language prefix, redirect to /en/blog
  if (pathname === "/blog" || pathname.startsWith("/blog/")) {
    return NextResponse.redirect(new URL(`/en${pathname}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
