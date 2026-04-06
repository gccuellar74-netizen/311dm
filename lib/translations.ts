export type Language = "en" | "es";

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
}

/* =========================
   TRANSLATIONS OBJECT
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
            "Ideal for businesses that want to build a solid digital foundation and start generating consistent leads.",
          features: [
            "Meta & Google Ads Setup",
            "Basic Funnel System",
            "Conversion Tracking",
            "Monthly Performance Report",
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
        averageTicket:
          "Average amount each customer spends per purchase.",
        conversionRate:
          "Percentage of visitors who become customers.",
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
        "We provide strategic digital marketing solutions tailored for B2B and industrial companies looking to scale in competitive markets.",
      items: {
        seo: {
          title: "SEO Optimization",
          description:
            "Improve your visibility in search engines and generate consistent, high-quality organic leads.",
        },
        ads: {
          title: "Paid Advertising",
          description:
            "Data-driven campaigns designed to maximize ROI across Google Ads and Meta platforms.",
        },
        conversion: {
          title: "Conversion Strategy",
          description:
            "Landing pages and funnels engineered to convert traffic into measurable business growth.",
        },
      },
    },

    contact: {
      title: "Ready to Scale Your Business?",
      subtitle:
        "Schedule a free strategic consultation and discover how we can help you grow.",
      button: "Send Message",
    },

    about: {
      title: "About Us",
      description1:
        "We are a digital marketing agency focused on helping local businesses scale with data-driven strategies.",
      description2:
        "Our approach combines strategic analysis, implementation, and continuous optimization.",
      description3:
        "We work with entrepreneurs and companies seeking sustainable digital growth.",
    },
  },

  es: {
    hero: {
      badge: "Agencia de Crecimiento Digital",
      title: "Escala tu negocio con",
      highlight: "Estrategias basadas en datos",
      description:
        "Generamos tráfico cualificado, optimizamos conversiones y posicionamos tu marca con estrategias digitales medibles.",
      primaryCTA: "Agendar Consultoría",
      secondaryCTA: "Ver Servicios",
    },

    howWeWork: {
      title: "Cómo Trabajamos",
      step1Title: "Análisis Estratégico",
      step1Desc:
        "Evaluamos tu mercado, competencia y oportunidades de crecimiento.",
      step2Title: "Implementación",
      step2Desc:
        "Lanzamos campañas optimizadas y embudos automatizados.",
      step3Title: "Optimización Continua",
      step3Desc:
        "Medimos, analizamos y escalamos lo que genera resultados reales.",
    },

    pricing: {
      title: "Planes de Crecimiento",
      subtitle:
        "Estrategias flexibles adaptadas a los objetivos de tu negocio.",
      plans: [
        {
          name: "Starter",
          description:
            "Ideal para negocios que desean construir una base digital sólida y comenzar a generar leads constantes.",
          features: [
            "Configuración Meta & Google Ads",
            "Sistema de Embudo Básico",
            "Tracking de Conversiones",
            "Reporte Mensual de Rendimiento",
          ],
          cta: "Comenzar Ahora",
        },
      ],
    },

    roi: {
      title: "Calculadora ROI",
      description:
        "Descubre cuánto podrías aumentar tus ingresos mejorando tu tasa de conversión.",
      inputs: {
        monthlyRevenue: "Ingresos Mensuales",
        averageTicket: "Ticket Promedio",
        conversionRate: "Tasa de Conversión (%)",
      },
      helpers: {
        monthlyRevenue:
          "Total de dinero que tu negocio factura en un mes.",
        averageTicket:
          "Monto promedio que paga cada cliente por compra.",
        conversionRate:
          "Porcentaje de visitantes que terminan comprando.",
      },
      button: "Calcular Crecimiento",
      errors: {
        required: "Todos los campos son obligatorios.",
        positive: "Los valores deben ser mayores a cero.",
      },
      result: {
        projectedRevenue: "Ingresos Mensuales Proyectados",
        growth: "crecimiento estimado",
      },
    },

    services: {
      title: "Nuestros Servicios",
      subtitle:
        "Ofrecemos soluciones estratégicas de marketing digital diseñadas para empresas B2B e industriales que buscan escalar en mercados competitivos.",
      items: {
        seo: {
          title: "Optimización SEO",
          description:
            "Mejora tu visibilidad en buscadores y genera leads orgánicos constantes y de alta calidad.",
        },
        ads: {
          title: "Publicidad Pagada",
          description:
            "Campañas basadas en datos diseñadas para maximizar el ROI en Google Ads y Meta.",
        },
        conversion: {
          title: "Estrategia de Conversión",
          description:
            "Landing pages y embudos optimizados para convertir tráfico en crecimiento medible.",
        },
      },
    },

    contact: {
      title: "¿Listo para Escalar tu Negocio?",
      subtitle:
        "Agenda una consultoría estratégica gratuita y descubre cómo podemos ayudarte a crecer.",
      button: "Enviar Mensaje",
    },

    about: {
      title: "Acerca de Nosotros",
      description1:
        "Somos una agencia de marketing digital enfocada en ayudar a negocios locales a escalar con estrategias basadas en datos.",
      description2:
        "Nuestro enfoque combina análisis estratégico, implementación y optimización continua.",
      description3:
        "Trabajamos con emprendedores y empresas que buscan crecimiento digital sostenible.",
    },
  },
};