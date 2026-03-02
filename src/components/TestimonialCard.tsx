interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  testimonial: string;
}

export default function TestimonialCard({
  name,
  role,
  company,
  testimonial,
}: TestimonialCardProps) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur hover:border-cyan-400 transition">
      <p className="text-gray-300 italic">“{testimonial}”</p>

      <div className="mt-6">
        <p className="text-white font-semibold">{name}</p>
        <p className="text-gray-400 text-sm">
          {role} · {company}
        </p>
      </div>
    </div>
  );
}