import { Check } from "lucide-react";
import { motion } from "framer-motion";

export default function PartnershipPlans() {
  return (
    <motion.div
      className="w-[70vw] container mx-auto px-4 py-16 max-w-6xl mb-30"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="w-[70vw] container mx-auto px-4 py-16 max-w-6xl mb-30">
        <div className="text-center mb-12  mb-3">
          <h1 className="text-[2vw] font-semibold">Partnership Plans</h1>
          <p className="text-gray-400">
            Equity-based partnerships to build your AI product with zero upfront
            cost.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Non-Tech Founder Plan */}
          <div className=" rounded-xl p-8 border border-zinc-800 flex flex-col h-full">
            <div className="mb-6">
              <h3 className="text-orange-500 font-medium mb-2">
                Non-Tech Founder Plan
              </h3>
              <div className="flex items-end gap-2 mb-2">
                <h2 className="text-4xl font-bold">30-40%</h2>
                <span className="text-gray-400 mb-1">Equity</span>
              </div>
              <p className="text-gray-400">
                For non-tech founders who have a strong AI product idea but lack
                technical resources. We take 30-40% equity in exchange for full
                product development.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <h4 className="font-semibold text-lg">What You Get:</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="text-orange-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>
                    Full-service MVP development (AI, software, backend,
                    frontend)
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="text-orange-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <div>
                    <span>Dedicated Team:</span>
                    <ul className="ml-6 mt-2 space-y-1">
                      <li>• 1 Lead Engineer (Full-Stack)</li>
                      <li>• 1 UX/UI Designer</li>
                      <li>• 1 QA Specialist</li>
                    </ul>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="text-orange-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Market research & strategy alignment</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-orange-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>
                    Ongoing product optimization & scaling post-launch
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="text-orange-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>
                    Long-term partnership to ensure the products success
                  </span>
                </li>
              </ul>
            </div>

            <div className="space-y-4 mb-8">
              <h4 className="font-semibold text-lg flex items-center">
                <span className="text-orange-500 mr-2">💰</span> Equity Split:
              </h4>
              <ul className="space-y-2 ml-6">
                <li>
                  • 30-40% equity retained by us for development & ongoing
                  support
                </li>
                <li>
                  • If any fixed costs arise (e.g., API usage, cloud costs, or
                  external tools), you cover them
                </li>
                <li>
                  • If you are raising funds, we must be informed to align
                  strategies
                </li>
              </ul>
            </div>

            <div className="space-y-4 mt-auto">
              <h4 className="font-semibold text-lg flex items-center">
                <span className="text-orange-500 mr-2">🚀</span> Perfect For:
              </h4>
              <ul className="space-y-2 ml-6">
                <li>• Non-tech founders with a scalable AI product vision</li>
                <li>
                  • Those looking for a long-term partnership with expert AI
                  developers
                </li>
              </ul>
            </div>

            <button className="mt-8 bg-zinc-800 hover:bg-zinc-700 text-white py-3 px-6 rounded-lg font-medium transition-colors w-full">
              Book a call
            </button>
          </div>

          {/* Content Creator Plan */}
          <div className="rounded-xl p-8 border border-zinc-800 flex flex-col h-full">
            <div className="mb-6">
              <h3 className="text-orange-500 font-medium mb-2">
                Content Creator Plan
              </h3>
              <div className="flex items-end gap-2 mb-2">
                <h2 className="text-4xl font-bold">20%</h2>
                <span className="text-gray-400 mb-1">Equity</span>
              </div>
              <p className="text-gray-400">
                For content creators who want to be the face of an AI product,
                using their brand, audience, or marketing expertise to scale it.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <h4 className="font-semibold text-lg">What You Get:</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="text-orange-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>20% ownership in the AI product until exit</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-orange-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>A fully built AI product</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-orange-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Strategic positioning as the face of the brand</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-orange-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Marketing & launch support from our team</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-orange-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Long-term revenue potential from product growth</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4 mb-8">
              <h4 className="font-semibold text-lg flex items-center">
                <span className="text-orange-500 mr-2">🚀</span> Your Role:
              </h4>
              <ul className="space-y-2 ml-6">
                <li>• Promote and market the AI product to your audience</li>
                <li>
                  • Drive user adoption through content and community-building
                </li>
                <li>
                  • Partner with us in scaling the product for long-term success
                </li>
              </ul>
            </div>

            <div className="space-y-4 mb-8">
              <h4 className="font-semibold text-lg flex items-center">
                <span className="text-orange-500 mr-2">💰</span> Equity Split:
              </h4>
              <ul className="space-y-2 ml-6">
                <li>• 20% for content creators</li>
                <li>
                  • We manage product development, tech infrastructure, and
                  scaling
                </li>
              </ul>
            </div>

            <div className="space-y-4 mt-auto">
              <h4 className="font-semibold text-lg flex items-center">
                <span className="text-orange-500 mr-2">🌟</span> Perfect For:
              </h4>
              <ul className="space-y-2 ml-6">
                <li>
                  • Influencers, creators, and personal brands who want equity
                  in an AI product
                </li>
                <li>
                  • Anyone looking to co-own and promote an AI-driven startup
                </li>
              </ul>
            </div>

            <button className="mt-8 bg-orange-600 hover:bg-orange-700 text-white py-3 px-6 rounded-lg font-medium transition-colors w-full">
              Book a call
            </button>
          </div>
        </div>

        {/* Why Partner With Us */}
        <div className=" rounded-xl p-8 border border-zinc-800 mt-8">
          <h3 className="text-2xl font-bold mb-6">Why Partner With Us?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-2">
              <h4 className="font-semibold">Zero Upfront Cost</h4>
              <p className="text-gray-400">We build, you grow.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Expert Team</h4>
              <p className="text-gray-400">
                AI engineers, designers, and marketers.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Long-Term Partnership</h4>
              <p className="text-gray-400">You retain equity until exit.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Scalability Focused</h4>
              <p className="text-gray-400">
                We align with your vision for growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
