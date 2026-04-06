"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function PricingPlans() {
  const { lang } = useLanguage();
  const t = translations[lang].pricing;

  return (
    <section className="relative py-24 px-6 bg-black">

      <div className="max-w-6xl mx-auto text-center">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6"
        >
          {t.title}
        </motion.h2>

        {/* Subtitle */}
        <p className="text-gray-400 max-w-2xl mx-auto mb-16">
          {t.subtitle}
        </p>

        {/* Plans */}
        <div className="grid gap-8 md:grid-cols-3">
          {t.plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/40 transition-all duration-300 backdrop-blur-md"
            >
              <h3 className="text-2xl font-semibold mb-4">
                {plan.name}
              </h3>



              <p className="text-gray-300 mb-6">
                {plan.description}
              </p>

              <ul className="space-y-3 mb-8 text-sm text-gray-400">
                {plan.features.map((feature, i) => (
                  <li key={i}>• {feature}</li>
                ))}
              </ul>

              <button className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 font-semibold">
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}