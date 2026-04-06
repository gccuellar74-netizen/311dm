"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/components/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function Footer() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <footer className="bg-gradient-to-b from-black to-gray-950 border-t border-white/10 text-white">

      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* TOP GRID */}
        <div className="grid gap-12 md:grid-cols-4">

          {/* BRAND */}
          <div>
            <h3 className="text-2xl font-extrabold mb-4 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
              311DM
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {t.footer?.description || "Digital growth strategies for modern businesses."}
            </p>

            {/* ✅ SOCIAL ICON IMAGES */}
            <div className="flex gap-4 items-center">

              <a
                href="https://www.facebook.com/311DM"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110"
              >
                <Image
                  src="/social/facebook.png"
                  alt="Facebook"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
              </a>

              <a
                href="https://www.instagram.com/311dm.sat/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110"
              >
                <Image
                  src="/social/instagram.png"
                  alt="Instagram"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110"
              >
                <Image
                  src="/social/linkedin.png"
                  alt="LinkedIn"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
              </a>

            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="font-semibold mb-4">
              {t.footer?.services || "Services"}
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="#roi" className="hover:text-indigo-400 transition">ROI Calculator</Link></li>
              <li><Link href="#services" className="hover:text-indigo-400 transition">Marketing Funnels</Link></li>
              <li><Link href="#services" className="hover:text-indigo-400 transition">Automation</Link></li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="font-semibold mb-4">
              {t.footer?.company || "Company"}
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="#about" className="hover:text-indigo-400 transition">About</Link></li>
              <li><Link href="#contact" className="hover:text-indigo-400 transition">Contact</Link></li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-semibold mb-4">
              {t.footer?.ctaTitle || "Ready to Scale?"}
            </h4>
            <p className="text-gray-400 text-sm mb-4">
              {t.footer?.ctaDesc || "Let’s build your next growth strategy."}
            </p>
            <Link
              href="#contact"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-xl font-semibold transition"
            >
              {t.footer?.ctaButton || "Book a Strategy Call"}
            </Link>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/10 mt-16 pt-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} 311DM. All rights reserved.
        </div>

      </div>
    </footer>
  );
}