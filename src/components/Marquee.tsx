'use client';
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface MarqueeProps {
  items: string[];
  className?: string;
  itemClassName?: string;
  direction?: 'left' | 'right';
}

const Marquee: React.FC<MarqueeProps> = ({
  items,
  className = "",
  itemClassName = "",
  direction = 'left',
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.scrollWidth);
    }
  }, [items]);

  const translateX = direction === 'left' ? -width : width;

  return (
    <div className={`flex overflow-hidden ${className} blur-ends`}>
      {[...Array(2)].map((_, i) => (
        <motion.div
          key={i}
          ref={i === 0 ? containerRef : null}
          initial={{ x: 0 }}
          animate={{ x: translateX }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0"
        >
          {items.map((item, index) => (
            <div
              className={`p-6 flex items-center justify-center ${itemClassName}`}
              key={index + i * items.length}
            >
              {item}
            </div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export default Marquee;
