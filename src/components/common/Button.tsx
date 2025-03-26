import Link from "next/link";
import { motion } from "motion/react";
import React from "react";

interface Props {
  text: string;
}

const Button = ({ text }: Props) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="relative"
    >
      <Link
        href={"/"}
        className="px-4 sm:px-5 py-3 sm:py-3.5 text-lg sm:text-xl rounded-lg font-bold text-center text-white shadow-md bg-gradient-to-r from-orange-500 to-red-500 relative overflow-hidden"
      >
        <span className="relative z-10">{text}</span>
      </Link>
    </motion.div>
  );
};

export default Button;
