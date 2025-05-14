// import Link from "next/link";
// import { motion } from "motion/react";
// import React from "react";

// const Button = ({ text, className = "" ) => {
//   return (
//       <button className={`button-shadow rounded-md px-2 py-1 ${className}`}>
//         {text}
//       </button>
//   );
// };

// export default Button;
'use client';
import React from "react";
import { motion } from "framer-motion"; // ✅ Correct import

const Button = ({ text, className = "" }) => { // ✅ Fixed destructuring
  return (
    <motion.button // Optional: motion enhancement
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`button-shadow rounded-md px-4 py-2 ${className}`}
    >
      {text}
    </motion.button>
  );
};

export default Button;
