

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { FaFacebookF, FaWhatsapp, FaInstagram } from "react-icons/fa";
import "./globals.css";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agencia Digital",
  description:
    "Publicidad Digital, SEO y Automatización con planes mensuales estratégicos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const phoneNumber = "12109012025"; // ⚠️ Cambia por tu número real
  const whatsappMessage = encodeURIComponent(
    "Hola, quiero más información sobre sus servicios."
  );

  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        {/* ✅ HEADER */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <h1 className="text-xl font-bold">Agencia Digital</h1>
          </div>
        </header>

        {/* ✅ CONTENIDO */}
        <main className="flex-grow">
          {children}
        </main>

        {/* ✅ FOOTER */}
        <footer className="bg-black text-white py-12">
          <div className="max-w-6xl mx-auto px-6">

            <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">

              {/* Columna 1 */}
              <div>
                <h3 className="font-semibold mb-4">Agencia Digital</h3>
                <p className="text-gray-400 text-sm">
                  Estrategias digitales enfocadas en crecimiento,
                  automatización y resultados medibles.
                </p>
              </div>

              {/* Columna 2 */}
              <div>
                <h3 className="font-semibold mb-4">Enlaces</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>
                    <Link href="/" className="hover:text-white transition">
                      Inicio
                    </Link>
                  </li>
                  <li>
                    <Link href="/servicios" className="hover:text-white transition">
                      Servicios
                    </Link>
                  </li>
                </ul>
              </div>

   {/* ✅ Columna 3 - Redes Sociales con Logos */}
<div>
  <h3 className="font-semibold mb-4">Síguenos</h3>

  <div className="flex justify-center md:justify-start gap-6">

    {/* Facebook */}
    <a
      href="https://www.facebook.com/311DM"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white text-black p-3 rounded-full hover:bg-gray-300 transition"
      aria-label="Facebook"
    >
      <FaFacebookF size={18} />
    </a>

    {/* Instagram */}
    <a
      href="https://www.instagram.com/311dm.sat/"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-pink-500 text-white p-3 rounded-full hover:bg-pink-600 transition"
      aria-label="Instagram"
    >
      <FaInstagram size={18} />
    </a>

    {/* WhatsApp */}
    <a
      href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition"
      aria-label="WhatsApp"
    >
      <FaWhatsapp size={18} />
    </a>

  </div>
</div>

            </div>

            {/* Línea inferior */}
            <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
              © {new Date().getFullYear()} Agencia Digital.
              Todos los derechos reservados.
            </div>
          </div>
        </footer>

        {/* ✅ BOTÓN FLOTANTE WHATSAPP */}
        <a
          href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-110"
          aria-label="Chat en WhatsApp"
        >
          <FaWhatsapp size={28} />
        </a>

      </body>
    </html>
  );
}