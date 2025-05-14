import { useState } from "react";
import { Check } from "lucide-react";
// import { useToast } from "../hooks/use-toast";

const PricingSection = () => {
//   const { toast } = useToast();
  const [selected, setSelected] = useState<string | null>(null);

  const handlePlanSelect = (plan: string) => {
    setSelected(plan);
    // toast({
    //   title: "Plan Selected",
    //   description: `You've selected the ${plan} plan.`,
    //   duration: 2000,
    // });
  };

  const pricingPlans = [
    {
      title: "Starter",
      subtitle: "Begin Your Journey",
      price: "Free",
      features: [
        "Listing Management",
        "Transaction Security",
        "Basic Analytics"
      ],
      ctaText: "Get Early Access"
    },
    {
      title: "Growth",
      subtitle: "Expand Your Reach",
      price: "$7",
      priceDetail: "/ month",
      features: [
        "Listing Management",
        "Transaction Security",
        "Advanced Analytics",
        "Document Management",
        "Priority Customer Support"
      ],
      ctaText: "Get Early Access"
    }
  ];

  return (
    <section className="w-full max-w-7xl mx-auto p-4 md:p-6">
      <div className="grid md:grid-cols-2 gap-8">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className="bg-zinc-900 rounded-lg p-8 flex flex-col h-full w-full max-w-md"
          >
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">{plan.title}</h2>
              <p className="text-gray-400">{plan.subtitle}</p>
            </div>

            <div className="flex items-end mb-8">
              <div className="text-6xl font-bold text-white">{plan.price}</div>
              {plan.priceDetail && <div className="text-gray-400 ml-2 mb-1">{plan.priceDetail}</div>}
            </div>

            <button
              onClick={() => handlePlanSelect(plan.title)}
              className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-md transition-colors mb-8"
            >
              {plan.ctaText}
            </button>

            <div className="space-y-1">
              {plan.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 py-2">
                  <Check className="h-5 w-5 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-200">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
