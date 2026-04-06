"use client";

import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import { useLanguage } from "@/components/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function ContactPage() {
  const { lang } = useLanguage();
  const t = translations[lang].contact;

  return (
    <>
      <Navbar />

      <main className="bg-background text-white min-h-screen pt-32 px-6">

        {/* Header Section */}
        <section className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold">
            {t.title}
          </h1>

          <p className="mt-6 text-lg text-gray-300">
            {t.subtitle}
          </p>
        </section>

        {/* ✅ Formulario debajo del texto principal */}
        <section className="mt-16 max-w-4xl mx-auto">
          <ContactForm />
        </section>

      </main>
    </>
  );
}