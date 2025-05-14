import React from 'react';
import { motion } from "framer-motion";
import Marquee from './Marquee';

const arr: string[] = [
  "Founder’s",
  "niche consumers",
  "B2B Org.",
  "Students",
  "Communities",
  "Product Companies",
  "Individuals",
];

const HeroSection = () => {
  return (

    <div className="w-[70vw] mt-20 mx-auto flex flex-col px-4">
      <div className="w-full flex flex-col gap-6">
        <motion.h2
          className="text-[3vw] font-bold leading-tight"
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, type: "tween", delay: 0.3 }}
        >
          <span className="block">Building  Micro & Macro Tech</span>
          <span className="block ">Products For the Future !</span>
        </motion.h2>

        <motion.p
          className="text-gray-500 text-lg font-medium leading-relaxed "
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, type: "tween", delay: 0.6 }}
        >
          A product studio that turns everyday problems into smart, useful apps and tools.<br/>
          Built by real people who own what they create.<br/>
          Here We believe thoughts are the next possibilities
          <br className="hidden sm:block" />
        </motion.p>
      </div>

      {/* Infinite Scrolling Section */}
      <motion.div
        className="w-full mt-15"
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.5, type: "tween", delay: 0.9 }}
      >
        {/* <InfiniteLoop /> */}
        <Marquee items={arr}/>
      </motion.div>

    </div>
  );
};

export default HeroSection;
