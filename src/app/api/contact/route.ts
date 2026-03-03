import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { query } from "@/lib/db";
import { rateLimit } from "@/lib/rate-limit";

/**
 * POST /api/contact
 * Procesa formulario de contacto:
 * - Rate limit
 * - Verificación reCAPTCHA
 * - Validaciones
 * - Guardado en BD
 * - Envío de correo
 */

export async function POST(req: NextRequest) {
  try {
    // ✅ Obtener IP real en Vercel
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
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

    const {
      nombre,
      email,
      telefono,
      mensaje,
      recaptchaToken,
    } = body;

    // ✅ Validar token
    if (!recaptchaToken) {
      return NextResponse.json(
        { error: "Token de reCAPTCHA faltante." },
        { status: 400 }
      );
    }

    // ✅ Verificación reCAPTCHA
    const recaptchaResponse = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          secret: process.env.RECAPTCHA_SECRET_KEY || "",
          response: recaptchaToken,
        }),
      }
    );

    const recaptchaData = await recaptchaResponse.json();

    if (!recaptchaData.success) {
      console.error("reCAPTCHA error:", recaptchaData);
      return NextResponse.json(
        { error: "Verificación reCAPTCHA fallida." },
        { status: 403 }
      );
    }

    // ✅ Sanitización básica
    const cleanNombre = nombre?.trim();
    const cleanEmail = email?.trim().toLowerCase();
    const cleanTelefono = telefono?.trim();
    const cleanMensaje = mensaje?.trim();

    if (!cleanNombre || !cleanEmail || !cleanTelefono || !cleanMensaje) {
      return NextResponse.json(
        { error: "Todos los campos son obligatorios." },
        { status: 400 }
      );
    }

    // ✅ Validación email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail)) {
      return NextResponse.json(
        { error: "Email inválido." },
        { status: 400 }
      );
    }

    // ✅ Validación teléfono
    const phoneRegex = /^[0-9+ ]{7,15}$/;
    if (!phoneRegex.test(cleanTelefono)) {
      return NextResponse.json(
        { error: "Teléfono inválido." },
        { status: 400 }
      );
    }

    // ✅ Insert seguro en BD
    const result = await query(
      `INSERT INTO leads (nombre, email, telefono, mensaje)
       VALUES ($1, $2, $3, $4)
       RETURNING id`,
      [cleanNombre, cleanEmail, cleanTelefono, cleanMensaje]
    );

    // ✅ Validación flexible del resultado
    const leadId =
      result?.rows?.[0]?.id ||
      result?.[0]?.id ||
      null;

    if (!leadId) {
      console.error("Error al insertar en BD:", result);
      return NextResponse.json(
        { error: "Error al guardar los datos." },
        { status: 500 }
      );
    }

    // ✅ Validar variables SMTP
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

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    await transporter.verify();

    // ✅ Escape básico para evitar inyección HTML
    const escapeHtml = (text: string) =>
      text.replace(/</g, "&lt;").replace(/>/g, "&gt;");

    await transporter.sendMail({
      from: `"Formulario Web" <${SMTP_USER}>`,
      to: CONTACT_RECEIVER,
      subject: `Nuevo Lead #${leadId}`,
      html: `
        <h2>Nuevo Lead</h2>
        <p><strong>Nombre:</strong> ${escapeHtml(cleanNombre)}</p>
        <p><strong>Email:</strong> ${escapeHtml(cleanEmail)}</p>
        <p><strong>Teléfono:</strong> ${escapeHtml(cleanTelefono)}</p>
        <p><strong>Mensaje:</strong><br/>${escapeHtml(cleanMensaje)}</p>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error: any) {
    console.error("Error en API /api/contact:", error);
    return NextResponse.json(
      { error: "Error interno del servidor." },
      { status: 500 }
    );
  }
}
