import { animate, useMotionValue, motion } from "motion/react";
import React, { useEffect, useRef } from "react";
import useMeasure from "react-use-measure";

const data: string[] = [
  "Founder’s",
  "Marketer’s",
  "B2B Organisations",
  "Students",
  "Venture Studios",
  "Product Companies",
  "Visionaries",
];

const InfiniteLoop = () => {
  const [ref, { width }] = useMeasure();
  const translationX = useMotionValue(0);
  const animationRef = useRef<any>(null);

  useEffect(() => {
    if (width === 0 || animationRef.current) return;

    const loopDuration = 20; // Smooth and slow looping
    const finalPosition = -width / 2;

    animationRef.current = animate(translationX, [0, finalPosition], {
      ease: "linear",
      duration: loopDuration,
      repeat: Infinity,
      repeatType: "loop",
    });

    return () => animationRef.current?.stop();
  }, [width, translationX]);

  return (
    <motion.div
      className="w-full max-w-7xl mx-auto h-[8rem] sm:h-[10rem] overflow-hidden flex flex-col gap-4 "
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: 100, opacity: 0 }}
      transition={{ duration: 0.5, type: "tween", delay: 0.7 }}
    >
      <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center md:text-left">
        To Whom We Sell To
      </h3>
      <div className="relative w-full overflow-hidden">
        <motion.div
          ref={ref}
          style={{ x: translationX }}
          className="flex gap-6 items-center whitespace-nowrap"
        >
          {[...data, ...data].map((text, index) => (
            <span
              key={index}
              className="flex justify-center items-center px-6 py-3 text-center font-black text-lg sm:text-xl md:text-2xl"
            >
              {text}
            </span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default InfiniteLoop;
