interface StepCardProps {
  step: string;
  title: string;
  description: string;
}

export default function StepCard({ step, title, description }: StepCardProps) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur">
      <span className="text-cyan-400 font-semibold">{step}</span>
      <h3 className="text-xl font-semibold text-white mt-2">{title}</h3>
      <p className="mt-4 text-gray-400">{description}</p>
    </div>
  );
}