import { NextResponse } from "next/server";
import { query } from "@/lib/db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req) {
  try {
    const { currentPassword, newPassword } = await req.json();

    // ✅ Validación básica
    if (!currentPassword || !newPassword) {
      return NextResponse.json(
        { success: false, error: "Datos inválidos" },
        { status: 400 }
      );
    }

    // ✅ Obtener token desde cookies
    const token = req.cookies.get("token")?.value;

    if (!token) {
      return NextResponse.json(
        { success: false, error: "No autenticado" },
        { status: 401 }
      );
    }

    // ✅ Verificar JWT
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const userId = decoded.userId;

    // ✅ Obtener usuario actual
    const result = await query(
      "SELECT password FROM users WHERE id = $1",
      [userId]
    );

    if (result.rows.length === 0) {
      return NextResponse.json(
        { success: false, error: "Usuario no encontrado" },
        { status: 404 }
      );
    }

    const user = result.rows[0];

    // ✅ Verificar contraseña actual
    const validPassword = await bcrypt.compare(
      currentPassword,
      user.password
    );

    if (!validPassword) {
      return NextResponse.json(
        { success: false, error: "Contraseña actual incorrecta" },
        { status: 401 }
      );
    }

    // ✅ Hashear nueva contraseña
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // ✅ Actualizar en base de datos
    await query(
      "UPDATE users SET password = $1 WHERE id = $2",
      [hashedPassword, userId]
    );

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("Error al cambiar contraseña:", error.message);

    return NextResponse.json(
      { success: false, error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
