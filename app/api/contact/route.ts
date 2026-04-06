import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      nombre,
      empresa,
      domicilio,
      telefono,
      ciudad,
      email,
      industria,
      mensaje,
    } = body;

    // Validación mínima del servidor
    if (!nombre || !email || !mensaje) {
      return NextResponse.json(
        { error: "Campos obligatorios faltantes" },
        { status: 400 }
      );
    }

    const query = `
      INSERT INTO contactos
      (nombre, empresa, domicilio, telefono, ciudad, email, industria, mensaje)
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8)
      RETURNING *;
    `;

    const values = [
      nombre,
      empresa,
      domicilio,
      telefono,
      ciudad,
      email,
      industria,
      mensaje,
    ];

    const result = await pool.query(query, values);

    return NextResponse.json(
      { message: "Contacto guardado", data: result.rows[0] },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error al insertar contacto:", error);

    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}