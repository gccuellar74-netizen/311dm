"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/context/LanguageContext";
import { translations } from "@/lib/translations";

interface ROIInputs {
  monthlyRevenue: string;
  averageTicket: string;
  conversionRate: string;
}

export default function ROICalculator() {
  const { lang } = useLanguage();
  const t = translations[lang].roi;

  // ✅ Textos helpers dinámicos SIN tocar translations.ts
  const helpers = {
    monthlyRevenue:
      lang === "es"
        ? "Total de dinero que tu negocio factura en un mes."
        : "Total amount your business earns per month.",
    averageTicket:
      lang === "es"
        ? "Monto promedio que paga cada cliente por compra."
        : "Average amount each customer spends per purchase.",
    conversionRate:
      lang === "es"
        ? "Porcentaje de visitantes que terminan comprando."
        : "Percentage of visitors who become customers.",
  };

  const currencyFormatter = new Intl.NumberFormat(
    lang === "es" ? "es-MX" : "en-US",
    {
      style: "currency",
      currency: lang === "es" ? "MXN" : "USD",
      maximumFractionDigits: 0,
    }
  );

  const [inputs, setInputs] = useState<ROIInputs>({
    monthlyRevenue: "",
    averageTicket: "",
    conversionRate: "",
  });

  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<{
    projectedRevenue: number;
    growth: number;
  } | null>(null);

  const handleChange = (field: keyof ROIInputs, value: string) => {
    setInputs((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const revenue = parseFloat(inputs.monthlyRevenue);
    const ticket = parseFloat(inputs.averageTicket);
    const conversionPercent = parseFloat(inputs.conversionRate);

    if (
      inputs.monthlyRevenue.trim() === "" ||
      inputs.averageTicket.trim() === "" ||
      inputs.conversionRate.trim() === ""
    ) {
      setError(t.errors.required);
      setResult(null);
      return;
    }

    if (isNaN(revenue) || isNaN(ticket) || isNaN(conversionPercent)) {
      setError(t.errors.required);
      setResult(null);
      return;
    }

    if (revenue <= 0 || ticket <= 0 || conversionPercent <= 0) {
      setError(t.errors.positive);
      setResult(null);
      return;
    }

    setError(null);

    const conversion = conversionPercent / 100;
    const currentCustomers = revenue / ticket;
    const improvedConversion = conversion * 1.3;

    const projectedCustomers =
      currentCustomers * (improvedConversion / conversion);

    const projectedRevenue = projectedCustomers * ticket;

    setResult({
      projectedRevenue: Math.round(projectedRevenue),
      growth: Math.round(projectedRevenue - revenue),
    });
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-black to-gray-950">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">
          {t.title}
        </h2>

        <p className="text-gray-400 mb-12">
          {t.description}
        </p>

        <form onSubmit={handleSubmit}>
          <div className="grid gap-8 md:grid-cols-3 mb-8 text-left">

            {/* Ingresos */}
            <div>
              <input
                type="number"
                min="0"
                step="any"
                placeholder={t.inputs.monthlyRevenue}
                className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-indigo-500"
                value={inputs.monthlyRevenue}
                onChange={(e) =>
                  handleChange("monthlyRevenue", e.target.value)
                }
              />
              <p className="text-xs text-gray-400 mt-2">
                {helpers.monthlyRevenue}
              </p>
            </div>

            {/* Ticket */}
            <div>
              <input
                type="number"
                min="0"
                step="any"
                placeholder={t.inputs.averageTicket}
                className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-indigo-500"
                value={inputs.averageTicket}
                onChange={(e) =>
                  handleChange("averageTicket", e.target.value)
                }
              />
              <p className="text-xs text-gray-400 mt-2">
                {helpers.averageTicket}
              </p>
            </div>

            {/* Conversión */}
            <div>
              <input
                type="number"
                min="0"
                step="any"
                placeholder={t.inputs.conversionRate}
                className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-indigo-500"
                value={inputs.conversionRate}
                onChange={(e) =>
                  handleChange("conversionRate", e.target.value)
                }
              />
              <p className="text-xs text-gray-400 mt-2">
                {helpers.conversionRate}
              </p>
            </div>

          </div>

          <button
            type="submit"
            className="px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition font-semibold"
          >
            {t.button}
          </button>
        </form>

        {error && (
          <p className="mt-6 text-red-500">{error}</p>
        )}

        {result && (
          <motion.div
            key={result.projectedRevenue}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-12 p-8 rounded-2xl bg-white/5 border border-indigo-500/30"
          >
            <p className="text-gray-400">
              {t.result.projectedRevenue}
            </p>

            <h3 className="text-4xl font-extrabold text-indigo-500">
              {currencyFormatter.format(result.projectedRevenue)}
            </h3>

            <p className="mt-4 text-green-400">
              +{currencyFormatter.format(result.growth)} {t.result.growth}
            </p>
          </motion.div>
        )}

      </div>
    </section>
  );
}