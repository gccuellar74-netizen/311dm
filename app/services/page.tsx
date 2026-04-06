"use client";

import Navbar from "@/components/Navbar";
import { useLanguage } from "@/components/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function ServicesPage() {
  const { lang } = useLanguage();
  const t = translations[lang].services;

  return (
    <>
      <Navbar />

      <main className="bg-background text-white min-h-screen pt-32 px-6">

        {/* Header Section */}
        <section className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold">
            {t.title.split(" ")[0]}{" "}
            <span className="text-purple-400">
              {t.title.split(" ").slice(1).join(" ")}
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </section>

        {/* Services Grid */}
        <section className="mt-20 max-w-6xl mx-auto grid gap-10 md:grid-cols-3">

          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary transition">
            <h3 className="text-2xl font-bold mb-4 text-indigo-400">
              {t.items.seo.title}
            </h3>
            <p className="text-gray-300">
              {t.items.seo.description}
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary transition">
            <h3 className="text-2xl font-bold mb-4 text-purple-400">
              {t.items.ads.title}
            </h3>
            <p className="text-gray-300">
              {t.items.ads.description}
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary transition">
            <h3 className="text-2xl font-bold mb-4 text-indigo-300">
              {t.items.conversion.title}
            </h3>
            <p className="text-gray-300">
              {t.items.conversion.description}
            </p>
          </div>

        </section>

      </main>
    </>
  );
}