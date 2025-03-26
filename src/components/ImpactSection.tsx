import { motion } from "motion/react";

const features = [
  { count: "08", title: "MVP Completed" },
  { count: "25", title: "Total Happy Clients" },
  { count: "05", title: "Startups Funded" },
];

export default function ImpactSection() {
  return (
    <motion.div
      className="min-h-screen w-full flex flex-col items-center justify-center gap-10 p-4 md:gap-16 bg-black text-white"
      whileInView={{ y: 0, opacity: 1 }}
      initial={{ y: 200, opacity: 0 }}
      transition={{ duration: 0.5, type: "tween", delay: 0.4 }}
      viewport={{ once: true }}
    >
      {/* Header */}
      <div className="text-center px-4">
        <h3 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold">
          Founders trusts us
        </h3>
        <p className="text-gray-400 mt-2 text-sm sm:text-lg md:text-xl max-w-2xl mx-auto">
          We deliver results through a structured process. Here how we have made
          an impact:
        </p>
      </div>

      {/* Features Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-12 w-full max-w-4xl px-4"
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.5, type: "tween", delay: 0.7 }}
        viewport={{ once: true }}
      >
        {features.map((feature, index) => (
          <span key={index} className="flex flex-col items-center text-center">
            <h3 className="text-4xl sm:text-5xl md:text-6xl text-white font-bold flex items-center gap-1">
              {feature.count}
              <span className="text-[#FF5513]">↑</span>
            </h3>
            <h2 className="text-lg sm:text-xl md:text-2xl text-gray-400 mt-2">
              {feature.title}
            </h2>
          </span>
        ))}
      </motion.div>

      {/* Product Hunt Badge */}
      <motion.div
        className="flex flex-col items-center gap-2 mt-6"
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.5, type: "tween", delay: 0.7 }}
        viewport={{ once: true }}
      >
        <span className="text-xl sm:text-2xl md:text-4xl text-gray-300">
          Find us on
        </span>
        <div className="bg-gray-800 px-6 py-2 rounded-lg flex items-center gap-2">
          <span className="bg-white text-black px-2 py-1 rounded font-bold">
            P
          </span>
          <span className="text-lg sm:text-xl">Product Hunt</span>
          <span className="text-[#FF5513] text-lg sm:text-xl">23↑</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
