"use client";

import { useState } from "react";
import Script from "next/script";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // ✅ Sanitización básica contra XSS simple
  const sanitize = (value: string) =>
    value.replace(/</g, "&lt;").replace(/>/g, "&gt;");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: sanitize(e.target.value),
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.nombre ||
      !formData.email ||
      !formData.telefono ||
      !formData.mensaje
    ) {
      setStatus("Todos los campos son obligatorios.");
      return;
    }

    const phoneRegex = /^[0-9+ ]{7,15}$/;

    if (!phoneRegex.test(formData.telefono)) {
      setStatus("Ingrese un número de teléfono válido.");
      return;
    }

    // ✅ Verificar que reCAPTCHA esté cargado
    if (!(window as any).grecaptcha) {
      setStatus("Error cargando reCAPTCHA.");
      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      // ✅ Generar token reCAPTCHA v3
      const token = await (window as any).grecaptcha.execute(
        process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
        { action: "submit" }
      );

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken: token,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("Mensaje enviado correctamente.");
        setFormData({
          nombre: "",
          email: "",
          telefono: "",
          mensaje: "",
        });
      } else {
        setStatus(data.error || "Error al enviar.");
      }
    } catch (error) {
      setStatus("Error de conexión.");
    }

    setLoading(false);
  };

  return (
    <>
      {/* ✅ Script reCAPTCHA */}
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
        strategy="afterInteractive"
      />

      <form
        onSubmit={handleSubmit}
        className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur"
      >
        <div className="space-y-6">

          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={formData.nombre}
            onChange={handleChange}
            minLength={2}
            maxLength={50}
            required
            className="w-full p-3 rounded-lg bg-black border border-white/10 text-white"
          />

          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-black border border-white/10 text-white"
          />

          <input
            type="tel"
            name="telefono"
            placeholder="Teléfono"
            value={formData.telefono}
            onChange={handleChange}
            required
            pattern="[0-9+ ]{7,15}"
            minLength={7}
            maxLength={15}
            className="w-full p-3 rounded-lg bg-black border border-white/10 text-white"
          />

          <textarea
            name="mensaje"
            placeholder="Cuéntanos sobre tu proyecto"
            value={formData.mensaje}
            onChange={handleChange}
            rows={4}
            minLength={10}
            required
            className="w-full p-3 rounded-lg bg-black border border-white/10 text-white"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold py-3 rounded-lg transition"
          >
            {loading ? "Enviando..." : "Enviar Mensaje"}
          </button>

          {status && (
            <p className="text-sm text-center text-gray-300">{status}</p>
          )}
        </div>
      </form>
    </>
  );
}