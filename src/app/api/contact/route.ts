import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { query } from "@/lib/db";

export async function POST(req) {
  try {
    const body = await req.json();
   const { nombre, email, telefono, mensaje } = body;

if (!nombre || !email || !telefono || !mensaje) {
  return NextResponse.json(
    { error: "Todos los campos son obligatorios." },
    { status: 400 }
  );
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
  return NextResponse.json(
    { error: "Email inválido." },
    { status: 400 }
  );
}

const phoneRegex = /^[0-9+ ]{7,15}$/;
if (!phoneRegex.test(telefono)) {
  return NextResponse.json(
    { error: "Teléfono inválido." },
    { status: 400 }
  );
}

const result = await query(
  `INSERT INTO leads (nombre, email, telefono, mensaje)
   VALUES ($1, $2, $3, $4)
   RETURNING id`,
  [nombre, email, telefono, mensaje]
);

    const leadId = result.rows[0].id;

    // ✅ Configuración SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Formulario Web" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER,
      subject: `Nuevo Lead #${leadId}`,
      html: `
        <h2>Nuevo Lead</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong><br/>${mensaje}</p>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (error) {

    console.error("Error en contacto:", error);

    return NextResponse.json(
      { error: "Error interno del servidor." },
      { status: 500 }
    );
  }
}