javascript
import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json(
    { success: true, message: "Logout exitoso" },
    { status: 200 }
  );

  // 🔐 Eliminamos la cookie sobreescribiéndola
  response.cookies.set("authToken", "", {
    httpOnly: true,
    expires: new Date(0), // Fecha pasada = invalida cookie
    path: "/",
  });

  return response;
}
