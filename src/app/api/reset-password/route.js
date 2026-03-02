import { NextResponse } from "next/server";
import { query } from "@/lib/db";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { token, newPassword } = await req.json();

    if (!token || !newPassword) {
      return NextResponse.json(
        { success: false, error: "Datos inválidos" },
        { status: 400 }
      );
    }

    const result = await query(
      `SELECT id FROM users 
       WHERE reset_token = $1 
       AND reset_token_expiry > NOW()`,
      [token]
    );

    if (result.rows.length === 0) {
      return NextResponse.json(
        { success: false, error: "Token inválido o expirado" },
        { status: 400 }
      );
    }

    const user = result.rows[0];

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await query(
      `UPDATE users 
       SET password = $1,
           reset_token = NULL,
           reset_token_expiry = NULL
       WHERE id = $2`,
      [hashedPassword, user.id]
    );

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("Error reset-password:", error.message);

    return NextResponse.json(
      { success: false, error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
