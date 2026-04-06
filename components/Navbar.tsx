"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/components/context/LanguageContext";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, toggleLang } = useLanguage();
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { en: "Services", es: "Servicios", href: "/services" },
    { en: "About", es: "Acerca", href: "/about" },
    { en: "Plans", es: "Planes", href: "/plans" },
    { en: "Contact", es: "Contacto", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* ✅ LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo21.png"
            alt="311DM Logo"
            width={180}
            height={60}
            className="w-32 md:w-40 lg:w-48 h-auto transition duration-300 hover:scale-105"
            priority
          />
        </Link>

        {/* ✅ DESKTOP MENU */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={index}
                href={link.href}
                className={`relative transition duration-300 ${
                  isActive
                    ? "text-primary"
                    : "text-white hover:text-primary"
                }`}
              >
                {lang === "en" ? link.en : link.es}

                {/* Línea animada activa */}
                {isActive && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 -bottom-1 w-full h-[2px] bg-primary"
                  />
                )}
              </Link>
            );
          })}

          {/* ✅ LANGUAGE SWITCH */}
          <button
            onClick={toggleLang}
            className="ml-4 px-3 py-1 border border-primary rounded-lg text-primary hover:bg-primary hover:text-black transition"
          >
            {lang === "en" ? "ES" : "EN"}
          </button>
        </div>

        {/* ✅ MOBILE BUTTON */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* ✅ MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-background border-t border-white/10 px-6 py-6 space-y-6"
          >
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="block text-lg text-white hover:text-primary transition"
                onClick={() => setIsOpen(false)}
              >
                {lang === "en" ? link.en : link.es}
              </Link>
            ))}

            <button
              onClick={() => {
                toggleLang();
                setIsOpen(false);
              }}
              className="mt-4 px-4 py-2 border border-primary rounded-lg text-primary hover:bg-primary hover:text-black transition"
            >
              {lang === "en" ? "Cambiar a Español" : "Switch to English"}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}