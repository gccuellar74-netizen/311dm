import Link from "next/link";
import Logo from "@/components/logo"; // ✅ Importamos el Logo
import ServiceCard from "@/components/ServiceCard";
import StepCard from "@/components/StepCard";
import MetricCard from "@/components/MetricCard";
import TestimonialCard from "@/components/TestimonialCard";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white">

      {/* ✅ LOGO SUPERIOR */}
      <div className="max-w-7xl mx-auto px-6 pt-8">
        <Logo />
      </div>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        
        <div>
          <span className="inline-block mb-4 px-4 py-1 text-sm bg-white/10 rounded-full backdrop-blur">
            Agencia de Marketing Digital
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Escalamos tu negocio con{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">
              estrategias digitales
            </span>{" "}
            que convierten
          </h1>

          <p className="mt-6 text-lg text-gray-300 max-w-xl">
            Generamos tráfico cualificado, optimizamos conversiones y
            posicionamos tu marca con campañas enfocadas en resultados reales.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="#contacto"
              className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-lg transition"
            >
              Agendar Consultoría
            </Link>

            <Link
              href="/servicios"
              className="px-8 py-3 border border-white/30 hover:border-white rounded-lg transition"
            >
              Ver Servicios
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full"></div>
          <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur">
            <p className="text-gray-400 text-sm mb-2">Resultados recientes</p>
            <h3 className="text-3xl font-bold text-white">+320% ROI</h3>
            <p className="mt-4 text-gray-400">
              Campaña optimizada con estrategia multicanal y automatización.
            </p>
          </div>
        </div>
      </section>

  {/* SERVICIOS */}
  <section className="bg-slate-950 text-white py-24">
    <div className="max-w-7xl mx-auto px-6">
      
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Nuestros Servicios
      </h2>

      <p className="text-gray-400 text-center mt-4 max-w-2xl mx-auto">
        Estrategias digitales diseñadas para aumentar visibilidad,
        generar leads y escalar tu negocio.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mt-16">
        <ServiceCard
          title="Publicidad Digital"
          description="Campañas en Meta Ads, Google Ads y TikTok Ads enfocadas en ROI."
        />
        <ServiceCard
          title="SEO & Posicionamiento"
          description="Optimización técnica para que tu negocio aparezca primero."
        />
        <ServiceCard
          title="Automatización & Funnels"
          description="Embudo de ventas que convierte tráfico en clientes."
        />
      </div>

    </div>
  </section>

{/* Stepcard */}

<section className="bg-black text-white py-24">

<div className="max-w-7xl mx-auto px-6">


<h2 className="text-3xl md:text-4xl font-bold text-center">
  Cómo Trabajamos
</h2>

<p className="text-gray-400 text-center mt-4 max-w-2xl mx-auto">
  Nuestro proceso está diseñado para maximizar resultados y minimizar riesgos.
</p>

<div className="grid md:grid-cols-3 gap-8 mt-16">
  <StepCard
    step="01"
    title="Análisis Estratégico"
    description="Evaluamos tu mercado, competencia y oportunidades de crecimiento."
  />
  <StepCard
    step="02"
    title="Implementación"
    description="Lanzamos campañas optimizadas y embudos automatizados."
  />
  <StepCard
    step="03"
    title="Optimización Continua"
    description="Medimos, analizamos y escalamos lo que genera resultados."
  />
</div>

</div>

</section>

{/* METRICAS */}

<section className="bg-slate-950 text-white py-24">

<div className="max-w-7xl mx-auto px-6">


<h2 className="text-3xl md:text-4xl font-bold text-center">
  Resultados Reales
</h2>

<p className="text-gray-400 text-center mt-4 max-w-2xl mx-auto">
  Medimos cada acción y optimizamos constantemente para generar impacto real en tu negocio.
</p>

<div className="grid md:grid-cols-4 gap-8 mt-16">
  <MetricCard
    value="+320%"
    label="Retorno de Inversión Promedio"
  />
  <MetricCard
    value="-45%"
    label="Reducción en Costo por Lead"
  />
  <MetricCard
    value="+210%"
    label="Incremento en Conversión"
  />
  <MetricCard
    value="+500K"
    label="Usuarios Impactados"
  />
</div>

</div>

</section>

{/* TESTIMONIAL */}

<section className="bg-black text-white py-24">

<div className="max-w-7xl mx-auto px-6">


<h2 className="text-3xl md:text-4xl font-bold text-center">
  Lo Que Dicen Nuestros Clientes
</h2>

<p className="text-gray-400 text-center mt-4 max-w-2xl mx-auto">
  Empresas que confiaron en nuestra estrategia y hoy escalan con resultados medibles.
</p>

<div className="grid md:grid-cols-3 gap-8 mt-16">
  <TestimonialCard
    name="Carlos M."
    role="CEO"
    company="Empresa1"
    testimonial="En solo 4 meses multiplicamos nuestras ventas por 3. La estrategia fue clara, medible y altamente efectiva."
  />
  <TestimonialCard
    name="María López"
    role="Directora de Marketing"
    company="Empresa2"
    testimonial="Redujimos el costo por adquisición casi a la mitad. El equipo entendió perfectamente nuestro mercado."
  />
  <TestimonialCard
    name="Andrés Molina"
    role="Fundador"
    company="Empresa3"
    testimonial="La automatización y los funnels implementados transformaron completamente nuestro proceso de ventas."
  />
</div>

</div>

</section>

{/* CONTACTO */}

<section id="contacto" className="bg-slate-950 text-white py-24">

<div className="max-w-3xl mx-auto px-6 text-center">

<h2 className="text-3xl md:text-4xl font-bold">
  ¿Listo para Escalar tu Negocio?
</h2>

<p className="text-gray-400 mt-4 mb-12">
  Agenda una consultoría estratégica gratuita y descubre cómo podemos ayudarte a crecer.
</p>

<ContactForm />

</div>

</section>

</main>

);

}