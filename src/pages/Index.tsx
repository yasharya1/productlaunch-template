import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import FaqSection from "@/components/FaqSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <FaqSection />
    </div>
  );
};

export default Index;