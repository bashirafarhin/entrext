import React from "react";
import { motion, MotionValue } from "framer-motion"; // Import MotionValue from framer-motion

interface ScrollSectionProps {
  item: {
    title: string;
    desc: string;
  };
  transforms: {
    y: MotionValue<string>;
    opacity: MotionValue<number>;
  };
}

const ScrollSection = ({ item, transforms }: ScrollSectionProps) => {
  return (
    <motion.div
      className="absolute border border-gray-500 w-[80%] rounded-lg p-6 text-center"
      style={{
        y: transforms.y,
        opacity: transforms.opacity,
        zIndex: 1, // Ensures correct layering
        pointerEvents: "none",
      }}
    >
      <div className="text-md font-semibold mb-2">{item.title}</div>
      <div className="text-gray-400">{item.desc}</div>
    </motion.div>
  );
};

export default ScrollSection;
