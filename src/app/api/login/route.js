import { NextResponse } from "next/server";
import { query } from "@/lib/db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export async function POST(req) {
  try {
    const { email, password } = await req.json();

    const result = await query(
      "SELECT * FROM users WHERE email = $1",
      [email.trim()]
    );

    if (result.rows.length === 0) {
      return NextResponse.json(
        { error: "Credenciales inválidas" },
        { status: 401 }
      );
    }

    const user = result.rows[0];

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return NextResponse.json(
        { error: "Credenciales inválidas" },
        { status: 401 }
      );
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "2h" }
    );

    const response = NextResponse.json({ success: true });

    response.cookies.set("authToken", token, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      path: "/"
    });

    return response;

  } catch (error) {
    console.error("Error login:", error);

    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
