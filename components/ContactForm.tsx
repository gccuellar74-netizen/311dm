"use client";

import { useState } from "react";
import { useLanguage } from "@/components/context/LanguageContext";

type FormData = {
  nombre: string;
  empresa: string;
  telefono: string;
  ciudad: string;
  email: string;
  industria: string;
  mensaje: string;
};

export default function ContactForm() {
  const { lang } = useLanguage();

  const isEN = lang === "en";

  const [form, setForm] = useState<FormData>({
    nombre: "",
    empresa: "",
    telefono: "",
    ciudad: "",
    email: "",
    industria: "",
    mensaje: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const newErrors: Partial<FormData> = {};

    if (!form.nombre.trim())
      newErrors.nombre = isEN
        ? "Full name is required."
        : "El nombre es obligatorio.";

    if (!form.email.trim()) {
      newErrors.email = isEN
        ? "Email is required."
        : "El email es obligatorio.";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = isEN
        ? "Invalid email format."
        : "El email no es válido.";
    }

    if (!form.mensaje.trim())
      newErrors.mensaje = isEN
        ? "Message is required."
        : "El mensaje es obligatorio.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(false);

    if (!validate()) return;

    try {
      setLoading(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) throw new Error("Server error");

      setSuccess(true);
      setForm({
        nombre: "",
        empresa: "",
        telefono: "",
        ciudad: "",
        email: "",
        industria: "",
        mensaje: "",
      });
    } catch (error) {
      alert(
        isEN
          ? "An error occurred while sending the form."
          : "Ocurrió un error al enviar el formulario."
      );
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = (field: keyof FormData) =>
    `w-full p-3 rounded-xl bg-white/5 border ${
      errors[field] ? "border-red-500" : "border-white/10"
    } focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition`;

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 space-y-6 backdrop-blur-sm"
      noValidate
    >
      {/* Nombre */}
      <div>
        <label className="block mb-2 text-sm text-gray-300">
          {isEN ? "Full Name *" : "Nombre Completo *"}
        </label>
        <input
          type="text"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
          className={inputStyle("nombre")}
        />
        {errors.nombre && (
          <p className="text-red-500 text-sm mt-1">{errors.nombre}</p>
        )}
      </div>

      {/* Empresa */}
      <div>
        <label className="block mb-2 text-sm text-gray-300">
          {isEN ? "Company" : "Empresa"}
        </label>
        <input
          type="text"
          name="empresa"
          value={form.empresa}
          onChange={handleChange}
          className={inputStyle("empresa")}
        />
      </div>

      {/* Email */}
      <div>
        <label className="block mb-2 text-sm text-gray-300">
          Email *
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className={inputStyle("email")}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}
      </div>

      {/* Teléfono */}
      <div>
        <label className="block mb-2 text-sm text-gray-300">
          {isEN ? "Phone" : "Teléfono"}
        </label>
        <input
          type="text"
          name="telefono"
          value={form.telefono}
          onChange={handleChange}
          className={inputStyle("telefono")}
        />
      </div>

      {/* Ciudad */}
      <div>
        <label className="block mb-2 text-sm text-gray-300">
          {isEN ? "City" : "Ciudad"}
        </label>
        <input
          type="text"
          name="ciudad"
          value={form.ciudad}
          onChange={handleChange}
          className={inputStyle("ciudad")}
        />
      </div>

      {/* Industria */}
      <div>
        <label className="block mb-2 text-sm text-gray-300">
          {isEN ? "Industry" : "Industria"}
        </label>
        <input
          type="text"
          name="industria"
          value={form.industria}
          onChange={handleChange}
          className={inputStyle("industria")}
        />
      </div>

      {/* Mensaje */}
      <div>
        <label className="block mb-2 text-sm text-gray-300">
          {isEN ? "Message *" : "Mensaje *"}
        </label>
        <textarea
          name="mensaje"
          rows={5}
          value={form.mensaje}
          onChange={handleChange}
          className={inputStyle("mensaje")}
        />
        {errors.mensaje && (
          <p className="text-red-500 text-sm mt-1">{errors.mensaje}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 rounded-xl bg-primary text-black font-semibold hover:opacity-90 transition disabled:opacity-50"
      >
        {loading
          ? isEN
            ? "Sending..."
            : "Enviando..."
          : isEN
          ? "Send Message"
          : "Enviar Mensaje"}
      </button>

      {success && (
        <p className="text-green-400 text-center">
          {isEN
            ? "✅ Message sent successfully."
            : "✅ Mensaje enviado correctamente."}
        </p>
      )}
    </form>
  );
}