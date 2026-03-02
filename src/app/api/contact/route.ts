import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { query } from "@/lib/db";

/**
 * POST /api/contact
 * Recibe datos del formulario de contacto,
 * los valida, guarda en base de datos y envía notificación por email.
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { nombre, email, telefono, mensaje } = body as {
      nombre: string;
      email: string;
      telefono: string;
      mensaje: string;
    };

    // ✅ Validación de campos obligatorios
    if (!nombre || !email || !telefono || !mensaje) {
      return NextResponse.json(
        { error: "Todos los campos son obligatorios." },
        { status: 400 }
      );
    }

    // ✅ Validación de formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Email inválido." },
        { status: 400 }
      );
    }

    // ✅ Validación de teléfono (7 a 15 caracteres, números + espacio +)
    const phoneRegex = /^[0-9+ ]{7,15}$/;
    if (!phoneRegex.test(telefono)) {
      return NextResponse.json(
        { error: "Teléfono inválido." },
        { status: 400 }
      );
    }

    // ✅ Inserción segura en base de datos (protección SQL Injection)
    const result = await query(
      `INSERT INTO leads (nombre, email, telefono, mensaje)
       VALUES ($1, $2, $3, $4)
       RETURNING id`,
      [nombre, email, telefono, mensaje]
    );

    const leadId = result.rows[0].id;

    // ✅ Validación de variables de entorno críticas
    if (
      !process.env.SMTP_HOST ||
      !process.env.SMTP_PORT ||
      !process.env.SMTP_USER ||
      !process.env.SMTP_PASS ||
      !process.env.CONTACT_RECEIVER
    ) {
      console.error("Faltan variables de entorno SMTP.");
      return NextResponse.json(
        { error: "Configuración del servidor incompleta." },
        { status: 500 }
      );
    }

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

    // ✅ Envío de correo
    await transporter.sendMail({
      from: `"Formulario Web" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER,
      subject: `Nuevo Lead #${leadId}`,
      html: `
        <h2>Nuevo Lead</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
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
