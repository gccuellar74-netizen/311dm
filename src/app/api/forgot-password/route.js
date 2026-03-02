import { NextResponse } from "next/server";
import { query } from "@/lib/db";
import crypto from "crypto";

export async function POST(req) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { success: false, error: "Email requerido" },
        { status: 400 }
      );
    }

    const result = await query(
      "SELECT id FROM users WHERE email = $1",
      [email]
    );

    // ✅ Siempre devolver respuesta genérica (seguridad)
    if (result.rows.length === 0) {
      return NextResponse.json({ success: true });
    }

    const user = result.rows[0];

    const token = crypto.randomBytes(32).toString("hex");
    const expiry = new Date(Date.now() + 15 * 60 * 1000); // 15 min

    await query(
      "UPDATE users SET reset_token = $1, reset_token_expiry = $2 WHERE id = $3",
      [token, expiry, user.id]
    );

    console.log("Token de recuperación:", token);

    // Aquí iría envío de email real

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("Error forgot-password:", error.message);

    return NextResponse.json(
      { success: false, error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}