interface MetricCardProps {
  value: string;
  label: string;
}

export default function MetricCard({ value, label }: MetricCardProps) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center backdrop-blur hover:border-cyan-400 transition">
      <h3 className="text-4xl md:text-5xl font-extrabold text-cyan-400">
        {value}
      </h3>
      <p className="mt-4 text-gray-400">{label}</p>
    </div>
  );
}