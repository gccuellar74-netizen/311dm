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
      name: "Starter Momentum",
      description:
        "For new businesses or those with minimal presence. Start strong and grow with clarity.",
      features: [
        "Initial profile optimization (Facebook, Instagram, Google Business)",
        "Brand tone definition and base visual style",
        "8 monthly contents (2 per week): educational, awareness & FAQs",
        "1 ad created per month (Ad spend not included)",
        "Basic metrics setup",
        "Quick monthly review",
        "Goal: Brand awareness + first leads"
      ],
      cta: "Start Strong",
    },
    {
      name: "Growth Engine",
      description:
        "For businesses seeking consistent sales. Turn traffic into customers.",
      features: [
        "Basic automation: auto-messages & simple follow-up",
        "Advanced local SEO (Google Business + local keywords)",
        "Basic CRM implementation",
        "12 monthly contents (3 per week): educational, social proof & objections",
        "2 ads per month (Ad spend not included)",
        "Campaign review every 14 days",
        "Local collaborations if applicable",
        "Goal: Consistent lead generation"
      ],
      cta: "Accelerate Growth",
    },
    {
      name: "Authority Accelerator",
      description:
        "For businesses ready to dominate their category in San Antonio.",
      features: [
        "Strategic authority content production",
        "16 monthly contents (4 per week): leadership, value & differentiation",
        "Full lead capture system: landing page, simple funnel & remarketing",
        "3 ads per month (Ad spend not included)",
        "Advanced monthly report (Lead Quality, CAC, ROAS)",
        "Strategic topic planning based on FAQs & insights",
        "Goal: Local authority + sustainable sales"
      ],
      cta: "Dominate Your Market",
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
            "We improve your visibility in search engines through strategic keyword research, on-page optimization, technical improvements, and local SEO positioning. Our approach ensures your business appears when potential customers actively search for your services, generating consistent organic traffic and high-intent leads over time.",
        },
        ads: {
          title: "Paid Advertising",
          description:
            "We design and manage data-driven advertising campaigns across Meta and Google platforms to attract qualified prospects. From audience segmentation and creative strategy to conversion tracking and performance optimization, we focus on maximizing ROI and scaling what delivers measurable results.",
        },
        conversion: {
          title: "Conversion Strategy",
          description:
            "We build high-converting landing pages and optimized sales funnels engineered to turn visitors into leads and customers. Through behavioral analysis, persuasive copywriting, and performance testing, we eliminate friction and increase your conversion rate systematically.",
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
      name: "Starter Momentum",
      description:
        "Para negocios nuevos o con presencia mínima. Comienza fuerte y crece con claridad.",
      features: [
        "Optimización inicial de perfiles (Facebook, Instagram, Google Business)",
        "Definición de tono de comunicación y estilo visual base",
        "8 contenidos mensuales (2 por semana): educativos, awareness y FAQs",
        "1 anuncio mensual creado (sin presupuesto de Ads)",
        "Configuración de métricas básicas",
        "Revisión mensual rápida",
        "Objetivo: reconocimiento + primeros leads"
      ],
      cta: "Comenzar Fuerte",
    },
    {
      name: "Growth Engine",
      description:
        "Para negocios que buscan ventas constantes. Convierte el tráfico en clientes.",
      features: [
        "Automatización básica: mensajes automáticos y follow-up simple",
        "SEO local avanzado (Google Business + palabras clave locales)",
        "CRM básico implementado",
        "12 contenidos mensuales (3 por semana): educativos, prueba social y objeciones",
        "2 anuncios mensuales (sin presupuesto de Ads)",
        "Revisión de campañas cada 14 días",
        "Colaboraciones locales si aplica",
        "Objetivo: generación de leads constante"
      ],
      cta: "Acelerar Crecimiento",
    },
    {
      name: "Authority Accelerator",
      description:
        "Para negocios que quieren dominar su categoría en San Antonio.",
      features: [
        "Producción de contenido estratégico de autoridad",
        "16 contenidos mensuales (4 por semana): liderazgo, valor y diferenciación",
        "Sistema completo de captación: landing, funnel simple y remarketing",
        "3 anuncios mensuales (sin presupuesto de Ads)",
        "Reporte mensual avanzado (Lead Quality, CAC, ROAS)",
        "Agenda estratégica basada en FAQs e insights del cliente",
        "Objetivo: liderazgo local + ventas sostenidas"
      ],
      cta: "Dominar el Mercado",
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
        "Mejoramos tu visibilidad en buscadores mediante investigación estratégica de palabras clave, optimización técnica, estructura de contenido y posicionamiento local. Nuestro enfoque permite que tu negocio aparezca cuando los clientes potenciales buscan activamente tus servicios, generando tráfico orgánico constante y leads de alta intención.",
      items: {
        seo: {
          title: "Optimización SEO",
          description:
            "Mejoramos tu visibilidad en buscadores mediante investigación estratégica de palabras clave, optimización técnica, estructura de contenido y posicionamiento local. Nuestro enfoque permite que tu negocio aparezca cuando los clientes potenciales buscan activamente tus servicios, generando tráfico orgánico constante y leads de alta intención.",
        },
        ads: {
          title: "Publicidad Pagada",
          description:
            "Diseñamos y gestionamos campañas publicitarias basadas en datos en plataformas como Meta y Google para atraer prospectos calificados. Desde la segmentación estratégica y creatividad hasta el seguimiento de conversiones y optimización continua, nos enfocamos en maximizar el retorno de inversión y escalar lo que realmente funciona.",
        },
        conversion: {
          title: "Estrategia de Conversión",
          description:
            "Creamos landing pages y embudos optimizados diseñados para convertir visitantes en leads y clientes. Mediante análisis de comportamiento, copy persuasivo y pruebas constantes, reducimos fricción y aumentamos tu tasa de conversión de manera sistemática.",
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