import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 py-20">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
        Your Product Tagline
        <span className="text-emerald-500"> Here</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-8">
        Describe your product's main benefit in one or two lines. Make it compelling and clear.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600">
          Get Started
        </Button>
        <Button size="lg" variant="outline">
          Learn More
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;