import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const plans = [
  {
    name: "Starter",
    price: "9",
    description: "Perfect for trying out our service",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    excluded: ["Feature 4", "Feature 5"],
  },
  {
    name: "Pro",
    price: "29",
    description: "Best for professionals",
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
    excluded: ["Feature 5"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "99",
    description: "For large scale operations",
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5"],
    excluded: [],
  },
];

const PricingSection = () => {
  return (
    <section className="py-20 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Simple, Transparent Pricing
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <Card
            key={index}
            className={`relative ${
              plan.popular
                ? "border-emerald-500 shadow-lg shadow-emerald-500/20"
                : ""
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-4 py-1 rounded-full text-sm">
                Most Popular
              </div>
            )}
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-gray-500">/month</span>
              </div>
              <ul className="space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-emerald-500" />
                    <span>{feature}</span>
                  </li>
                ))}
                {plan.excluded.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-500">
                    <X className="h-5 w-5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                className={`w-full ${
                  plan.popular ? "bg-emerald-500 hover:bg-emerald-600" : ""
                }`}
              >
                Get Started
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;