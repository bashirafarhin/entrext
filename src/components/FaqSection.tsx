"use client";

import { motion, AnimatePresence } from "motion/react";
import { Plus } from "lucide-react";
import { useState } from "react";

const faq = [
  {
    question: "1. What is the AI Product Partnership Model?",
    answer:
      "This is an equity-based program where we partner with:Non-tech founders with AI product ideas but no technical skills. Content creators who want to be the face of an AI product. Community users who are interested in using or testing our AI products. Instead of charging upfront fees, we take 30-40% equity for full product development or 20% equity if you're a content creator helping grow the produc",
  },
  {
    question: "2. What kind of AI products do you develop?",
    answer:
      "We focus on AI-driven tools that have market potential, including: AI-powered content creation tools, AI-driven automation platforms AI SaaS (Software as a Service) products,  AI marketing and analytics tools , AI chatbots and virtual assistants",
  },
  {
    question: "3. Who can apply for this partnership?",
    answer:
      "Non-tech founders who have a great AI product idea but no technical expertise. ✅ Content creators who want to promote and scale an AI product. ✅ Community members who want early access to cutting-edge AI products.",
  },
  {
    question:
      "4. What’s the difference between the Non-Tech Founder Plan and the Content Creator Plan ?",
    answer:
      "Non-Tech Founder Plan (30-40% Equity) → We build your entire AI product from scratch, handling development, design,and strategy. Content Creator Plan (20% Equity) → You become the face of an AI product, creating content to grow its user base.",
  },
  {
    question: "5. How can community users get involved ?",
    answer:
      "If you're not a founder or content creator but still interested in AI products, you can: 🔹 Test beta versions of our AI products before public launch. 🔹 Provide feedback on product features and improvements. 🔹 Join our community to stay updated on upcoming AI launches.",
  },
  {
    question: "6. Do I need to invest any money?",
    answer:
      "For Non-Tech Founders: No upfront cost, but if the product requires fixed expenses (APIs, cloud hosting, licenses), you need to cover those. For Content Creators & Community Users: No financial investment required.",
  },
  {
    question: "7. How long does it take to build an AI product ?",
    answer:
      "We typically launch an MVP (Minimum Viable Product) within 2-4 months, depending on the complexity.",
  },
  {
    question: "8. Can I bring my own team?",
    answer:
      "Yes! If you have developers, designers, or marketers, we can collaborate while still leading AI development.",
  },
  {
    question: "9. What happens if I raise funding?",
    answer:
      "If you're raising investment, you must inform us so we can align our strategy with your funding goals.",
  },
  {
    question: "10. What happens if my AI product doesn’t succeed?",
    answer:
      "We’re committed to long-term success. If the product doesn’t perform well, we’ll work on iterations, pivot strategies, or explore new opportunities for monetization.",
  },
];

const FaqSection = () => {
  return (
    <div className="w-full h-full flex justify-center items-center gap-4 flex-col mb-[10rem]">
      {/* top Text */}
      <span className="lg:text-7xl font-bold text-xl ">
        Frequently Asked Questions (FAQs)
      </span>
      {/* Questions Section */}
      <div className="flex justify-center items-center flex-col w-[80%] md:w-[50%] mx-auto h-auto overflow-hidden mt-8 border border-[#FF5513] p-4 rounded-4xl">
        {faq.map(({ answer, question }, index) => {
          return (
            <QuestionsAndAnswer
              question={question}
              answer={answer}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

interface FaqProps {
  question: string;
  answer: string;
}

const QuestionsAndAnswer = ({ answer, question }: FaqProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div className="w-[90%] " initial={false}>
      <motion.button
        className="w-full py-8 flex justify-between items-center text-left "
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-xl lg:text-2xl">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <Plus className="w-6 h-6" color="#FF5513" />
        </motion.div>
      </motion.button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-8 text-gray-400 lg:text-lg">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FaqSection;
