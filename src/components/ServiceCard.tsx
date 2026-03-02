interface ServiceCardProps {
  title: string;
  description: string;
}

export default function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur hover:border-cyan-400 transition">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-4 text-gray-400">{description}</p>
    </div>
  );
}