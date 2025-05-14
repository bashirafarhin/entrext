"use client";

import { motion, AnimatePresence } from "motion/react";
import { Plus } from "lucide-react";
import { useState } from "react";



const FaqSection = ({ faq }) => {
  return (
    <div className="w-[70vw] mx-auto h-full flex justify-center items-center gap-4 flex-col my-40">
      {/* top Text */}
      <span className="lg:text-4xl font-bold text-xl ">
        Frequently Asked Questions (FAQs)
      </span>
      {/* Questions Section */}
      <div className="flex justify-center items-center flex-col mx-auto h-auto overflow-hidden mt-8 border border-gray-800 rounded-2xl">
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
        className="w-full py-5 flex justify-between items-center text-left "
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
