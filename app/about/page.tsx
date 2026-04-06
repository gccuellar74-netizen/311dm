"use client";

import Navbar from "@/components/Navbar";
import { useLanguage } from "@/components/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function AboutPage() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <>
      <Navbar />

      <section className="relative bg-gradient-to-b from-background via-[#0f1120] to-black text-white min-h-screen pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">

          {/* TÍTULO */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white">
              {t.about.title}
            </h1>
            <div className="mt-4 w-24 h-1 mx-auto bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></div>
          </div>

          {/* CONTENIDO PRINCIPAL */}
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* TEXTO */}
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>{t.about.description1}</p>
              <p>{t.about.description2}</p>
              <p>{t.about.description3}</p>

              <button className="mt-6 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-indigo-500/30">
                {lang === "es" ? "Conocer Más" : "Learn More"}
              </button>
            </div>

            {/* TARJETAS VISUALES */}
            <div className="grid gap-6">

              <div className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 hover:border-indigo-500 transition-all duration-300">
                <h3 className="text-xl font-bold mb-2 text-indigo-400">
                  {lang === "es" ? "Estrategia" : "Strategy"}
                </h3>
                <p className="text-gray-400">
                  {lang === "es"
                    ? "Diseñamos planes personalizados basados en datos reales."
                    : "We design customized plans based on real data."}
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 hover:border-purple-500 transition-all duration-300">
                <h3 className="text-xl font-bold mb-2 text-purple-400">
                  {lang === "es" ? "Optimización" : "Optimization"}
                </h3>
                <p className="text-gray-400">
                  {lang === "es"
                    ? "Mejoramos continuamente el rendimiento para maximizar resultados."
                    : "We continuously optimize performance to maximize results."}
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 hover:border-indigo-400 transition-all duration-300">
                <h3 className="text-xl font-bold mb-2 text-indigo-300">
                  {lang === "es" ? "Resultados Medibles" : "Measurable Results"}
                </h3>
                <p className="text-gray-400">
                  {lang === "es"
                    ? "Cada acción está respaldada por métricas claras."
                    : "Every action is backed by clear metrics."}
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}