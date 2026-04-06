"use client";

import Navbar from "@/components/Navbar";
import { useLanguage } from "@/components/context/LanguageContext";
import { translations } from "@/lib/translations";
import Hero from "@/components/Hero";
import ROICalculator from "@/components/ROICalculator";

export default function HomePage() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <>
      <Navbar />
      <Hero />

      {/* ✅ ROI FUNCIONAL */}
      <ROICalculator />

      {/* ================= HOW WE WORK ================= */}
      <section className="bg-background text-white py-28 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-bold">
            {t.howWeWork.title}
          </h2>

          <div className="grid md:grid-cols-3 gap-12 mt-16">

            <div>
              <h3 className="text-xl font-semibold text-indigo-400 mb-4">
                01. {t.howWeWork.step1Title}
              </h3>
              <p className="text-gray-300">
                {t.howWeWork.step1Desc}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-purple-400 mb-4">
                02. {t.howWeWork.step2Title}
              </h3>
              <p className="text-gray-300">
                {t.howWeWork.step2Desc}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-indigo-300 mb-4">
                03. {t.howWeWork.step3Title}
              </h3>
              <p className="text-gray-300">
                {t.howWeWork.step3Desc}
              </p>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}