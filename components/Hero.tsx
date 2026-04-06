"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/context/LanguageContext";
import { translations } from "@/lib/translations";
import Link from "next/link";




export default function Hero() {
  const { lang } = useLanguage();
  const t = translations[lang].hero;

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden isolate">

      {/* VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/video/hero-poster.png"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>

      {/* OVERLAY CONTROLADO */}
      <div className="absolute inset-0 bg-black/40" />

      {/* CONTENIDO */}
      <div className="relative z-10 max-w-5xl mx-auto text-center px-6 py-24 text-white">

        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-6 px-4 py-2 text-sm md:text-base font-medium tracking-wide uppercase rounded-full bg-indigo-500/10 text-indigo-200 border border-indigo-400/30 backdrop-blur-md"
        >
          {t.badge}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight drop-shadow-lg"
        >
          <span className="block">{t.title}</span>
          <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-500 bg-clip-text text-transparent">
            {t.highlight}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-8 text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
        >
          {t.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >

          <Link
            href="/contact"
            className="px-8 py-4 text-lg font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 shadow-xl hover:shadow-indigo-500/40 text-white"
          >
            {t.primaryCTA}
          </Link>

          <Link
            href="/services"
            className="px-8 py-4 text-lg font-semibold rounded-xl border border-white/20 hover:bg-white/10 transition-all duration-300 backdrop-blur-md"
          >
            {t.secondaryCTA}
          </Link>

        </motion.div>

      </div>
    </section>
  );
}