import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { LanguageProvider } from "@/components/context/LanguageContext";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "311DM | Digital Marketing Agency in San Antonio",
  description:
    "ROI-driven digital marketing agency in San Antonio, TX. We help B2B and industrial companies increase productivity and measurable growth.",
  keywords: [
    "Digital Marketing San Antonio",
    "B2B Marketing Texas",
    "Local SEO San Antonio",
    "AI Search Optimization",
    "Web Performance Agency",
  ],
  openGraph: {
    title: "311DM - High Performance Digital Marketing",
    description:
      "Scale your business in The Alamo City with measurable digital strategies.",
    url: "https://311dm.com",
    siteName: "311DM",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* ✅ Schema.org JSON-LD (Correctamente estructurado) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "311DM",
              image: "https://311dm.com/logo.png",
              "@id": "https://311dm.com",
              url: "https://311dm.com",
              telephone: "+1-210-000-0000",
              address: {
                "@type": "PostalAddress",
                addressLocality: "San Antonio",
                addressRegion: "TX",
                postalCode: "78205",
                addressCountry: "US",
              },
              areaServed: {
                "@type": "City",
                name: "San Antonio",
              },
              description:
                "ROI-focused B2B digital marketing agency serving The Alamo City and Cyber City USA.",
            }),
          }}
        />

        {/* ✅ Google Analytics (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KRLZHGW2MG"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KRLZHGW2MG');
          `}
        </Script>
      </head>

      <body className={`${inter.className} bg-background text-white`}>
        <LanguageProvider>
          {children}
          <Footer />
          <WhatsAppFloat />
        </LanguageProvider>
      </body>
    </html>
  );
}