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
  footer: FooterTranslations;
}

/* =========================
   TRANSLATIONS EXPORT
========================= */

export const translations: Record<Language, TranslationsSchema> = {
  en: {
    hero: {
      badge: "Digital Growth Agency",
      title: "Scale Your Business With",
      highlight: "Data-Driven Strategies",
      description:
        "We generate qualified traffic, optimize conversions, and position your brand with measurable digital strategies.",
      primaryCTA: "Book a Strategy Call",
      secondaryCTA: "View Services",
    },

    howWeWork: {
      title: "How We Work",
      step1Title: "Strategic Analysis",
      step1Desc:
        "We evaluate your market, competitors, and growth opportunities.",
      step2Title: "Implementation",
      step2Desc:
        "We launch optimized campaigns and automated funnels.",
      step3Title: "Continuous Optimization",
      step3Desc:
        "We measure, analyze, and scale what generates real results.",
    },

    pricing: {
      title: "Growth Plans",
      subtitle: "Flexible strategies tailored to your business goals.",
      plans: [
        {
          name: "Starter",
          description:
            "Ideal for businesses that want to build a solid digital foundation.",
          features: [
            "Meta & Google Ads Setup",
            "Basic Funnel System",
            "Conversion Tracking",
            "Monthly Report",
          ],
          cta: "Start Building",
        },
      ],
    },

    roi: {
      title: "ROI Calculator",
      description:
        "Estimate how optimizing your conversion rate can increase your monthly revenue.",
      inputs: {
        monthlyRevenue: "Monthly Revenue",
        averageTicket: "Average Ticket",
        conversionRate: "Conversion Rate (%)",
      },
      helpers: {
        monthlyRevenue: "Total amount your business earns per month.",
        averageTicket: "Average amount each customer spends.",
        conversionRate: "Percentage of visitors who become customers.",
      },
      button: "Calculate Growth",
      errors: {
        required: "All fields are required.",
        positive: "Values must be greater than zero.",
      },
      result: {
        projectedRevenue: "Projected Monthly Revenue",
        growth: "estimated growth",
      },
    },

    services: {
      title: "Our Services",
      subtitle:
        "Strategic digital marketing solutions tailored for businesses.",
      items: {
        seo: {
          title: "SEO Optimization",
          description:
            "Improve visibility and generate organic leads.",
        },
        ads: {
          title: "Paid Advertising",
          description:
            "Data-driven campaigns to maximize ROI.",
        },
        conversion: {
          title: "Conversion Strategy",
          description:
            "Landing pages engineered to convert traffic.",
        },
      },
    },

    contact: {
      title: "Ready to Scale Your Business?",
      subtitle:
        "Schedule a free consultation and discover growth opportunities.",
      button: "Send Message",
    },

    about: {
      title: "About Us",
      description1:
        "We are a digital agency focused on helping businesses scale.",
      description2:
        "We combine strategy, implementation, and optimization.",
      description3:
        "Our mission is sustainable digital growth.",
    },

    footer: {
      description: "Digital growth strategies for modern businesses.",
      services: "Services",
      company: "Company",
      ctaTitle: "Ready to Scale?",
      ctaDesc: "Let’s build your next growth strategy.",
      ctaButton: "Book a Strategy Call",
    },
  },

  es: {
    hero: {
      badge: "Agencia de Crecimiento Digital",
      title: "Escala tu negocio con",
      highlight: "Estrategias basadas en datos",
      description:
        "Generamos tráfico cualificado y optimizamos conversiones.",
      primaryCTA: "Agendar Consultoría",
      secondaryCTA: "Ver Servicios",
    },

    howWeWork: {
      title: "Cómo Trabajamos",
      step1Title: "Análisis Estratégico",
      step1Desc:
        "Evaluamos tu mercado y oportunidades de crecimiento.",
      step2Title: "Implementación",
      step2Desc:
        "Lanzamos campañas optimizadas.",
      step3Title: "Optimización Continua",
      step3Desc:
        "Medimos y escalamos resultados.",
    },

    pricing: {
      title: "Planes de Crecimiento",
      subtitle:
        "Estrategias adaptadas a los objetivos de tu negocio.",
      plans: [
        {
          name: "Starter",
          description:
            "Ideal para negocios que desean comenzar a generar leads.",
          features: [
            "Configuración Meta & Google Ads",
            "Embudo Básico",
            "Tracking",
            "Reporte Mensual",
          ],
          cta: "Comenzar Ahora",
        },
      ],
    },

    roi: {
      title: "Calculadora ROI",
      description:
        "Descubre cuánto puedes aumentar tus ingresos.",
      inputs: {
        monthlyRevenue: "Ingresos Mensuales",
        averageTicket: "Ticket Promedio",
        conversionRate: "Tasa de Conversión (%)",
      },
      helpers: {
        monthlyRevenue: "Total facturado por mes.",
        averageTicket: "Monto promedio por cliente.",
        conversionRate: "Porcentaje que compra.",
      },
      button: "Calcular Crecimiento",
      errors: {
        required: "Todos los campos son obligatorios.",
        positive: "Los valores deben ser mayores a cero.",
      },
      result: {
        projectedRevenue: "Ingresos Proyectados",
        growth: "crecimiento estimado",
      },
    },

    services: {
      title: "Nuestros Servicios",
      subtitle:
        "Soluciones estratégicas de marketing digital.",
      items: {
        seo: {
          title: "Optimización SEO",
          description:
            "Mejora tu visibilidad en buscadores.",
        },
        ads: {
          title: "Publicidad Pagada",
          description:
            "Campañas para maximizar el ROI.",
        },
        conversion: {
          title: "Estrategia de Conversión",
          description:
            "Embudo optimizado para convertir.",
        },
      },
    },

    contact: {
      title: "¿Listo para Escalar?",
      subtitle:
        "Agenda una consultoría gratuita.",
      button: "Enviar Mensaje",
    },

    about: {
      title: "Acerca de Nosotros",
      description1:
        "Somos una agencia enfocada en crecimiento digital.",
      description2:
        "Combinamos estrategia e implementación.",
      description3:
        "Buscamos crecimiento sostenible.",
    },

    footer: {
      description: "Estrategias digitales para negocios modernos.",
      services: "Servicios",
      company: "Empresa",
      ctaTitle: "¿Listo para Escalar?",
      ctaDesc: "Construyamos tu estrategia de crecimiento.",
      ctaButton: "Agendar Consultoría",
    },
  },
};