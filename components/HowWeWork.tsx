"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function HowWeWork() {
  const { lang } = useLanguage();
  const t = translations[lang].howWeWork;

  const steps = [
    {
      number: "01",
      title: t.step1Title,
      description: t.step1Desc,
    },
    {
      number: "02",
      title: t.step2Title,
      description: t.step2Desc,
    },
    {
      number: "03",
      title: t.step3Title,
      description: t.step3Desc,
    },
  ];

  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-black to-indigo-950">

      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center tracking-tight mb-16"
        >
          {t.title}
        </motion.h2>

        {/* Steps Grid */}
        <div className="grid gap-10 md:grid-cols-3">

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-indigo-500/40 transition-all duration-300"
            >
              {/* Step Number */}
              <div className="text-4xl font-extrabold text-indigo-500 mb-4">
                {step.number}
              </div>

              {/* Step Title */}
              <h3 className="text-xl font-semibold mb-4 group-hover:text-indigo-400 transition-colors duration-300">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-gray-300 leading-relaxed text-base">
                {step.description}
              </p>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}