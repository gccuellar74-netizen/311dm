import { query } from '@/lib/db';

// GET → devuelve todos los leads
export async function GET() {
  try {
    const result = await query(
      `SELECT id, nombre, email, mensaje, created_at
       FROM leads
       ORDER BY created_at DESC`
    );

    return Response.json({
      success: true,
      data: result.rows,
    });

  } catch (error) {
    console.error("Error al obtener leads:", error);
    return Response.json(
      { success: false, error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
// Validación básica contra datos vacíos o maliciosos
function validarInput(nombre, email, mensaje) {
  if (!nombre || !email || !mensaje) {
    return "Todos los campos son obligatorios.";
  }

  // Validación simple de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return "Email inválido.";
  }

  if (nombre.length > 150 || email.length > 150) {
    return "Datos demasiado largos.";
  }

  return null;
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { nombre, email, mensaje } = body;

    // Validación de datos
    const errorValidacion = validarInput(nombre, email, mensaje);
    if (errorValidacion) {
      return Response.json(
        { success: false, error: errorValidacion },
        { status: 400 }
      );
    }

    // Query parametrizada → evita SQL Injection
    const sql = `
      INSERT INTO leads (nombre, email, mensaje)
      VALUES ($1, $2, $3)
      RETURNING *;
    `;

    const result = await query(sql, [nombre, email, mensaje]);

    return Response.json({
      success: true,
      data: result.rows[0],
    });

  } catch (error) {
    console.error("Error al insertar lead:", error);
    return Response.json(
      { success: false, error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}