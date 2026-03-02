import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export function proxy(request) {
  const token = request.cookies.get("authToken")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET);
    return NextResponse.next();
  } catch  (error) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
} // ✅ ESTA LLAVE ES OBLIGATORIA

export const config = {
  matcher: ["/dashboard/:path*"],
};