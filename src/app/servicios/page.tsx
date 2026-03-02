import Link from "next/link";
import Logo from "@/components/logo";

export const metadata = {
  title: "Servicios | Agencia Digital",
  description:
    "Publicidad Digital, SEO y Automatización con planes mensuales estratégicos y escalables.",
};

/* =========================
   ✅ DATOS (DEBEN EXISTIR)
========================= */

const servicios = [
  {
    titulo: "Publicidad Digital",
    descripcion:
      "Gestión estratégica de campañas pagadas enfocadas en generación de leads y ventas.",
    detalles: [
      "El Plan Esencial de 311DM es una estrategia básica diseñada para construir presencia digital y comenzar a generar los primeros clientes, integrando una gestión inicial de redes sociales para aumentar visibilidad y confianza, el uso de WhatsApp Business como canal directo de comunicación, un SEO inicial para que el negocio pueda ser encontrado en buscadores, la configuración técnica de campañas en Meta Ads y Google Ads para dejar lista la infraestructura publicitaria, y un reporte mensual que permita medir resultados y optimizar, siguiendo las recomendaciones de planificación, claridad estratégica y medición. El objetivo principal del plan es dar a la empresa una base sólida y organizada de marketing digital para comenzar a atraer tráfico, generar interacción y preparar el terreno para campañas más avanzadas.",
     
    ],
    explicacion:
      "Negocios que están comenzando, que aún no tienen una presencia digital sólida y que necesitan estructura, claridad y organización básica antes de escalar. Las estadísticas explican que muchos negocios fallan por falta de planificación y claridad inicial, y que primero se deben sentar bases antes de invertir en estrategias más complejas."
  },
  {
    titulo: "SEO (Search Engine Optimization) & Posicionamiento",
    descripcion:
      "Optimización integral para mejorar visibilidad orgánica.",
    detalles: [
      "Este Plan Profesional es una estrategia integral diseñada para generar leads de alta calidad y aumentar ventas cada mes, combinando campañas activas en Meta y Google Ads optimizadas semanalmente para maximizar resultados, una gestión profesional de redes sociales con contenido estratégico que fortalece autoridad y genera tráfico, un WhatsApp Business avanzado integrado con CRM (Customer Relationship Management) para mejorar la conversión, SEO técnico y de contenido para optimizar el posicionamiento en buscadores, un funnel simple que guía al usuario en su proceso de compra, email marketing básico para mantener el contacto y reactivar prospectos, y un reporte mensual enfocado en métricas clave como CPA (Coste por Adquisición), CTR (Click Through Rate o Índice de Clics) y conversiones para tomar decisiones basadas en datos, siguiendo las buenas prácticas de planificación estratégica, optimización continua y medición detallada.",
    ],
    explicacion:
      "Negocios que ya tienen algo de presencia digital, reciben tráfico moderado y quieren generar más leads y ventas de forma estable, aplicando nurturing y análisis más profundos. Los documentos destacan la importancia de revisar el negocio cada trimestre, tomar decisiones basadas en datos y mejorar de forma continua, lo cual encaja con este plan."
  },
  {
    titulo: "Automatización & Funnels",
    descripcion:
      "Diseño de embudos de venta automatizados.",
    detalles: [
      "El Plan Premium de 311DM es una solución de alto rendimiento diseñada para escalar ventas, automatizar procesos y dominar el mercado, integrando campañas avanzadas en Google, Meta y TikTok Ads con múltiples segmentaciones y optimización constante, una gestión premium de redes sociales en cuatro plataformas, un WhatsApp Business PRO completamente automatizado, flujos avanzados de nurturing, un funnel completo que abarca todo el customer journey y una optimización continua del contenido, anuncios y SEO para mantener el máximo rendimiento. Además, incluye una consultoría estratégica mensual para alinear metas, analizar resultados y definir acciones proactivas, siguiendo las recomendaciones de planificación estratégica, investigación profunda del cliente, automatización de procesos y acciones anticipadas.",
    ],
    explicacion:
      "Negocios que ya tienen algo de presencia digital, reciben tráfico moderado y quieren generar más leads y ventas de forma estable, aplicando nurturing y análisis más profundos. Los documentos destacan la importancia de revisar el negocio cada trimestre, tomar decisiones basadas en datos y mejorar de forma continua, lo cual encaja con este plan. Este nivel es adecuado para empresas que ya no son “principiantes”, pero aún necesitan estructura profesional y estrategias más avanzadas. Aquí ya se requiere un nurturing más sofisticado: segmentación, seguimiento, CRM y contenido estratégico. Para empresas que buscan escalar agresivamente, dominar su mercado y automatizar procesos complejos. Este plan es para negocios que ya tienen demanda, procesos y capacidad de crecimiento."
  },
];

const planes = [
  {
    nombre: "Esencial",
    precio: "$499.00 usd",
    descripcion: "Ideal para negocios que inician.",
    incluye: [
    "Gestión de redes sociales Aumentar la visibilidad, confianza y atraer tráfico de clientes potenciales, con creación de contenido claro y directo, basado en necesidades del cliente, tal como recomiendan los documentos para mantener enfoque y orden. 2 publicaciones por red a la semana (Facebook + Instagram) + 2 historias semanales.",
    "WhatsApp Business básico. Configuración del perfil, mensajes automáticos y respuestas rápidas para facilitar la comunicación y cerrar ventas más rápido, ya que los usuarios prefieren canales directos. Activación de WhatsApp Business, creación de saludo automático y 5 respuestas rápidas.", 
    "SEO inicial (Search Engine Optimization) Optimización de 5 páginas del sitio. Facilitar que los clientes encuentren tu negocio en buscadores. Ajuste de meta tags, títulos y estructura. Optimización única + revisión mensual. ",
    "Configuración de campañas Configuración completa de Meta Ads y Google Ads. Preparar las plataformas para futuras campañas de ventas. Instalación de pixel, eventos y verificación del dominio.",
    "Reporte mensual básico Informe con alcance, interacciones y crecimiento. Medición de avances y mejorar estrategias.",
    ],
  },
  {
    nombre: "Profesional",
    precio: "$899.00 usd",
    descripcion: "Para negocios en crecimiento.",
    incluye: [
    "Campañas de Meta + Google Ads. Gestión activa de 2 campañas con 4 conjuntos de anuncios para generar prospectos directos y ventas. Segmentación, creación de anuncios y optimización semanal, siguiendo la recomendación de actuar y ajustar según datos semanalmente",

    "Gestión profesional de redes sociales 12 publicaciones + 12 historias al mes, para aumentar autoridad y generar tráfico de alto interés. Calendario de contenido alineado a necesidades del cliente, para priorizar enfoque al usuario. 3 publicaciones por semana + 3 historias semanales.",
    "WhatsApp Business avanzado Automatización básica (mensaje de bienvenida, respuestas automáticas) + integración con CRM. Convertir más leads en clientes mediante atención más rápida. Configuración de etiquetas, mensajes automáticos y conexión con CRM.",
    "SEO técnico y de contenido. Optimización de velocidad, estructura y contenido en 10 páginas. Mejorar posicionamiento y atraer clientes mediante buscadores. Auditoría técnica + corrección de errores + ajuste de contenido, mensual.",
    "Funnel simple Diseño del flujo de captación y seguimiento. Aumentar conversiones guiando al usuario paso a paso. Mapa del funnel + conexión de CRM y WhatsApp.",
    "Email marketing básico envío de un correo semanal para mantener contacto y recuperar clientes potenciales. Segmentación básica",
    "Reporte de conversiones. Análisis de leads, CPA, CTR y conversiones para mejorar decisiones y optimizar inversión, siguiendo la importancia de metas medibles con un análisis detallado mensual.",

    ],
    destacado: true,
  },
  {
    nombre: "Premium",
    precio: "$1,399.00 usd",
    descripcion: "Escalamiento avanzado.",
    incluye: [
    "Full SEM (Google + Meta + TikTok Ads) 6 campañas mensuales con múltiples segmentaciones. Captación masiva de prospectos y ventas. Creación de anuncios, retargeting y optimización dos veces por semana, siguiendo prácticas de acción proactiva. ",
    "Redes sociales premium 16 publicaciones + 16 historias + 4 videos cortos. Facebook, Instagram, Google Business, TikTok. Aumentar autoridad, alcance y confianza. Producción estratégica basada en comportamiento del cliente. ",
    "WhatsApp Business PRO. Automatizaciones completas, scripts de ventas, segmentación avanzada, cerrar ventas más rápido y aumentar conversión. Configuración de etiquetas, respuestas inteligentes y embudos conectados. Ajustes semanales.",
    "Automatizaciones completas. Secuencias de seguimiento y nurturing. Convertir leads que aún no compran. Configuración de flujos automáticos según comportamiento. 3 secuencias creadas + optimización mensual.",
    "Funnel completo. Diseño de todo el customer journey. Aumentar ventas guiando paso a paso al usuario. Estructura de ads + CRM + WhatsApp + email.",
    "Optimización constante. Ajustes en anuncios, contenido y SEO. Mantener el rendimiento en el nivel más alto posible. Análisis semanal y ajustes inmediatos.",
    "Consultoría estratégica mensual. Definir metas, revisar resultados y planear próximos pasos. Análisis de KPIs alineado con los objetivos, siguiendo planificación estratégica",

    ],
  },
];

/* =========================
   ✅ COMPONENTE
========================= */

export default function ServiciosPage() {
  return (
    <>
      {/* ✅ HEADER CON LOGO */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Logo />
        </div>
      </header>

      {/* ✅ CONTENIDO PRINCIPAL */}
      <main className="bg-gray-50 min-h-screen">
        {/* HERO */}
        <section className="bg-black text-white py-20 text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Servicios Estratégicos de Crecimiento Digital
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-300">
            Diseñamos estrategias enfocadas en generación de clientes,
            posicionamiento orgánico y automatización de ventas.
          </p>
        </section>

        {/* SERVICIOS */}
        <section className="py-20 px-6 max-w-6xl mx-auto">
          <div className="space-y-16">
            {servicios.map((servicio, index) => (
              <div
                key={index}
                className="max-w-3xl mx-auto text-center"
              >
                <h2 className="text-3xl font-bold mb-4">
                  {servicio.titulo}
                </h2>

                <p className="text-gray-600 mb-6">
                  {servicio.descripcion}
                </p>

                <ul className="grid gap-4 mb-6 text-left">
                  {servicio.detalles.map((item, i) => (
                    <li key={i} className="bg-white p-6 rounded-lg shadow">
                      ✅ {item}
                    </li>
                  ))}
                </ul>

                <div className="bg-gray-100 p-6 rounded-xl border-l-4 border-black text-left">
                  <h4 className="font-semibold mb-2">
                    ¿Para quien es este servicio?
                  </h4>
                  <p className="text-gray-700">
                    {servicio.explicacion}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PLANES */}
        <section className="bg-white py-20 px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Planes Mensuales
            </h2>
            <p className="text-gray-600">
              Contratación mensual con alcance definido y renovable.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {planes.map((plan, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl shadow-lg border ${
                  plan.destacado
                    ? "border-black scale-105 bg-gray-50"
                    : "border-gray-200"
                }`}
              >
                <h3 className="text-2xl font-bold mb-2">
                  {plan.nombre}
                </h3>

                <p className="text-3xl font-extrabold mb-4">
                  {plan.precio} <span className="text-base">/ mes</span>
                </p>

                <p className="text-gray-600 mb-6">
                  {plan.descripcion}
                </p>

                <ul className="space-y-2 mb-6">
                  {plan.incluye.map((item, i) => (
                    <li key={i}>✅ {item}</li>
                  ))}
                </ul>

                <Link
                  href="/#contacto"
                  className="block text-center bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition"
                >
                  Contratar Plan
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}