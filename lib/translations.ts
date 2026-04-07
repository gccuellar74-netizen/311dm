export type Language = "en" | "es";

/* =========================
   FOOTER
========================= */
interface FooterTranslations {
  description: string;
  services: string;
  company: string;
  ctaTitle: string;
  ctaDesc: string;
  ctaButton: string;
}

/* =========================
   HERO
========================= */
interface HeroTranslations {
  badge: string;
  title: string;
  highlight: string;
  description: string;
  primaryCTA: string;
  secondaryCTA: string;
}

/* =========================
   HOW WE WORK
========================= */
interface HowWeWorkTranslations {
  title: string;
  step1Title: string;
  step1Desc: string;
  step2Title: string;
  step2Desc: string;
  step3Title: string;
  step3Desc: string;
}

/* =========================
   PRICING
========================= */
interface PricingPlan {
  name: string;
  description: string;
  features: string[];
  cta: string;
}

interface PricingTranslations {
  title: string;
  subtitle: string;
  plans: PricingPlan[];
}

/* =========================
   ROI
========================= */
interface ROITranslations {
  title: string;
  description: string;
  inputs: {
    monthlyRevenue: string;
    averageTicket: string;
    conversionRate: string;
  };
  helpers: {
    monthlyRevenue: string;
    averageTicket: string;
    conversionRate: string;
  };
  button: string;
  errors: {
    required: string;
    positive: string;
  };
  result: {
    projectedRevenue: string;
    growth: string;
  };
}

/* =========================
   SERVICES
========================= */
interface ServicesTranslations {
  title: string;
  subtitle: string;
  items: {
    seo: { title: string; description: string };
    ads: { title: string; description: string };
    conversion: { title: string; description: string };
  };
}

/* =========================
   CONTACT
========================= */
interface ContactTranslations {
  title: string;
  subtitle: string;
  button: string;
}

/* =========================
   ABOUT
========================= */
interface AboutTranslations {
  title: string;
  description1: string;
  description2: string;
  description3: string;
}

/* =========================
   ROOT SCHEMA
========================= */
interface TranslationsSchema {
  hero: HeroTranslations;
  howWeWork: HowWeWorkTranslations;
  pricing: PricingTranslations;
  roi: ROITranslations;
  services: ServicesTranslations;
  contact: ContactTranslations;
  about: AboutTranslations;
  footer: FooterTranslations; // ✅ AGREGADO
}