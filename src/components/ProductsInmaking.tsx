'use client';
import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Friendsin",
    desc: "Matches you with students who can help you study the subjects you're stuck on."
  },
  {
    title: "SecretSanta",
    desc: "Friends anonymously suggest and vote on the perfect present while pooling money."
  },
  {
    title: "Borrowd",
    desc: "A platform to rent out your unused stuff or borrow what you need."
  },
  {
    title: "Dare",
    desc: "A game where you and your friends complete monthly challenges to win a big trip at the end of the year."
  },
  {
    title: "Herth",
    desc: "A community where women sell their handmade goods and support each other globally."
  },
  {
    title: "Leaderbase",
    desc: "Startups hire experienced tech executives by the hour for guidance."
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.15
    }
  })
};

const ProductsInmaking = () => {
  return (
    <div className="w-[70vw] mx-auto text-center py-20">
      <div className="mb-10">
        <div className="text-[2.5vw] font-semibold">Products in Making</div>
        <div className="text-gray-500">more coming soon</div>
      </div>
      <div className="w-[80%] mx-auto grid grid-cols-2 grid-rows-3 gap-6">
        {projects.map((ele, ind) => (
          <motion.div
            key={ind}
            custom={ind}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="bg-[#101010] border border-gray-800 rounded-lg h-40 p-6 transition-all duration-300 hover:scale-[1.2]">
              <div className="text-white font-semibold mb-2">{ele.title}</div>
              <div className="text-gray-400 text-sm">{ele.desc}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProductsInmaking;
