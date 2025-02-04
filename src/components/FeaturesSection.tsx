import { CheckCircle } from "lucide-react";

const features = [
  {
    title: "Feature One",
    description: "Describe your first main feature here. Keep it short and sweet.",
    icon: "🚀",
  },
  {
    title: "Feature Two",
    description: "Describe your second main feature here. Focus on benefits.",
    icon: "⚡",
  },
  {
    title: "Feature Three",
    description: "Describe your third main feature here. Make it count.",
    icon: "🎯",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Why Choose Us
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-colors"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;