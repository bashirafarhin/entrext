"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

const StatCounter = ({
  target,
  label,
  shouldStart,
}: {
  target: number;
  label: string;
  shouldStart: boolean;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let start = 0;
    const end = target;
    const duration = 2000; // 2 seconds
    const increment = end / (duration / 30);
    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 30);
    return () => clearInterval(interval);
  }, [shouldStart, target]);

  return (
    <div className="text-center text-white">
      <div className="text-4xl font-bold flex items-center justify-center">
        {count < 10 ? `0${count}+` : `${count}+`}
        <span className="ml-1">↑</span>
      </div>
      <div className="text-sm mt-2">{label}</div>
    </div>
  );
};

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="w-[70vw] mx-auto text-center my-10">
      <div>
        <h2 className="text-3xl font-semibold">Founders trust Us</h2>
        <p className="text-sm my-4 text-gray-400">
          We make products of real value, with a great understanding 
        </p>
      </div>

      <div className="flex justify-center space-x-10">
        <StatCounter target={6} label="Products" shouldStart={isInView} />
        <StatCounter
          target={10000}
          label="Customers"
          shouldStart={isInView}
        />
        <StatCounter
          target={5}
          label="Partnership"
          shouldStart={isInView}
        />
      </div>

      <div className="flex justify-center mt-6 space-x-4">
        {/* Product Hunt Button */}
        <button className="text-white px-6 py-2 rounded-lg flex items-center button-shadow">
          <span className="mr-2 bg-white text-black font-bold rounded-full px-2">
            P
          </span>
          Find us on <strong className="ml-1">Product Hunt</strong>
          <span className="ml-2 bg-white text-black px-2 rounded-md">23</span>
        </button>

        <button className="text-white px-6 py-2 rounded-lg flex items-center button-shadow">
          <span className="mr-2 bg-white text-black font-bold rounded-full px-2">
            
          </span>
          Get it on <strong className="ml-1">App Store</strong>
        </button>
      </div>
    </div>
  );
}
