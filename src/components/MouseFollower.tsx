import { MotionValue, motion, useSpring } from "motion/react";
import React from "react";

interface Props {
  y: MotionValue<number>;
  x: MotionValue<number>;
}

const MouseFollower = ({ x, y }: Props) => {
  const smoothX = useSpring(x, { stiffness: 100, damping: 20 });
  const smoothY = useSpring(y, { stiffness: 100, damping: 20 });
  return (
    <motion.div
      className=" w-4 h-4 rounded-full z-50 absolute hidden lg:block"
      style={{
        x: smoothX,
        y: smoothY,
        background: "#FF5513",
        boxShadow: "0 0 30px rgba(255, 85, 19, 0.9)",
      }}
    ></motion.div>
  );
};

export default MouseFollower;
