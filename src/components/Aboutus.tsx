"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React, { useState, useEffect } from "react";

const messages = ["AI", "Community","People"];

const WeAre = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-[40vw]  mx-auto my-30 flex justify-between font-semibold text-3xl">
      <div className=" ">Powered by</div>
      <div className=""><ArrowRight size={40}/></div>
      <div className=" w-[50%] overflow-hidden relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="absolute w-full whitespace-nowrap"
          >
            {messages[index]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default WeAre;

