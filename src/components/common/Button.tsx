'use client';
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface ButtonProps {
  text: string;
  className?: string;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({ text, className = "", href }) => {
  const buttonContent = (
    <motion.button // Optional: motion enhancement
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`button-shadow rounded-md px-4 py-2 ${className}`}
    >
      {text}
    </motion.button>
  );

  if (href) {
    return (
      <Link href={href}>
        {buttonContent}
      </Link>
    );
  }

  return buttonContent;
};

export default Button;
