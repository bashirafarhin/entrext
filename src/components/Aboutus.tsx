"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const messages = ["AI", "Community", "People"];

const WeAre = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-[40vw] mx-auto my-40 flex items-center justify-between font-semibold text-3xl  whitespace-nowrap">
      <div>Powered by</div>
      <div className="mx-4">
        <Image src="/arrow.svg" width={50} height={50} alt="arrow" /> {/* ✅ Use absolute path */}
      </div>
      <div className="w-[50%] h-[40px] overflow-hidden relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }} // ⬅️ Shortened for snappier effect
            className="absolute w-full"
          >
            {messages[index]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default WeAre;
