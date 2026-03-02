import { NextResponse } from "next/server";
import { query } from "@/lib/db";
import jwt from "jsonwebtoken";

export async function POST(request) {
  const refreshToken = request.cookies.get("refreshToken")?.value;

  if (!refreshToken) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  const result = await query(
    `SELECT * FROM refresh_tokens
     WHERE token = $1 AND expires_at > NOW()`,
    [refreshToken]
  );

  if (result.rows.length === 0) {
    return NextResponse.json({ error: "Refresh inválido" }, { status: 403 });
  }

  const userId = result.rows[0].user_id;

  const newAccessToken = jwt.sign(
    { id: userId },
    process.env.JWT_SECRET,
    { expiresIn: "15m" }
  );

  const response = NextResponse.json({ success: true });

  response.cookies.set("authToken", newAccessToken, {
    httpOnly: true,
    path: "/",
  });

  return response;
}