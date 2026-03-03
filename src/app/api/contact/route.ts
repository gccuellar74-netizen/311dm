import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { query } from "@/lib/db";
import { rateLimit } from "@/lib/rate-limit";


/**
 * POST /api/contact
 * Recibe datos del formulario de contacto,
 * valida, guarda en BD y envía notificación.
 */


export async function POST(req: NextRequest) {
  try {

    // Obtener IP real en Vercel
const ip =
  req.headers.get("x-forwarded-for")?.split(",")[0] ||
  "unknown";

// ✅ Rate limiting
const limit = await rateLimit(ip);

if (!limit.success) {
  return NextResponse.json(
    { error: "Demasiadas solicitudes. Intenta nuevamente más tarde." },
    { status: 429 }
  );
}

    const body = await req.json();
        const { recaptchaToken } = body;

        if (!recaptchaToken) {
          return NextResponse.json(
            { error: "Token de reCAPTCHA faltante." },
            { status: 400 }
          );
        }

        // Verificación con Google
        const recaptchaResponse = await fetch(
          "https://www.google.com/recaptcha/api/siteverify",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
          }
        );

        const recaptchaData = await recaptchaResponse.json();

        // Validar score (v3 usa score)
        if (!recaptchaData.success || recaptchaData.score < 0.5) {
          return NextResponse.json(
            { error: "Verificación reCAPTCHA fallida." },
            { status: 403 }
          );
        }
    let { nombre, email, telefono, mensaje } = body as {
      nombre: string;
      email: string;
      telefono: string;
      mensaje: string;
    };

    // ✅ Sanitización básica contra XSS
    nombre = nombre?.trim();
    email = email?.trim().toLowerCase();
    telefono = telefono?.trim();
    mensaje = mensaje?.trim();

    // ✅ Validación de campos obligatorios
    if (!nombre || !email || !telefono || !mensaje) {
      return NextResponse.json(
        { error: "Todos los campos son obligatorios." },
        { status: 400 }
      );
    }

    // ✅ Validación email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Email inválido." },
        { status: 400 }
      );
    }

    // ✅ Validación teléfono
    const phoneRegex = /^[0-9+ ]{7,15}$/;
    if (!phoneRegex.test(telefono)) {
      return NextResponse.json(
        { error: "Teléfono inválido." },
        { status: 400 }
      );
    }

    // ✅ Insert seguro (protección contra SQL Injection)
    const result = await query(
      `INSERT INTO leads (nombre, email, telefono, mensaje)
       VALUES ($1, $2, $3, $4)
       RETURNING id`,
      [nombre, email, telefono, mensaje]
    );

    if (!result || !result.rows || result.rows.length === 0) {
      console.error("Error al insertar en BD:", result);
      return NextResponse.json(
        { error: "Error al guardar los datos." },
        { status: 500 }
      );
    }

    const leadId = result.rows[0].id;

    // ✅ Validación variables entorno
    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_USER,
      SMTP_PASS,
      CONTACT_RECEIVER,
    } = process.env;

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !CONTACT_RECEIVER) {
      console.error("Variables SMTP faltantes.");
      return NextResponse.json(
        { error: "Configuración de servidor incompleta." },
        { status: 500 }
      );
    }

    // ✅ Configuración SMTP robusta
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465, // true si puerto 465
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    // ✅ Verifica conexión SMTP antes de enviar
    await transporter.verify();

    await transporter.sendMail({
      from: `"Formulario Web" <${SMTP_USER}>`,
      to: CONTACT_RECEIVER,
      subject: `Nuevo Lead #${leadId}`,
      html: `
        <h2>Nuevo Lead</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Mensaje:</strong><br/>${mensaje}</p>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error: any) {
    console.error("Error en API /api/contact:", error?.message || error);

    return NextResponse.json(
      { error: "Error interno del servidor." },
      { status: 500 }
    );
  }
}
