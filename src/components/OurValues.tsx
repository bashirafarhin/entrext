// // import React from 'react'
// // const items = [
// //   {
// //     title: "If you are working with Entrext",
// //     desc: "At entrext, there are no employees. Everyone who works here owns a piece of what they build. Instead of salaries, we share profits. We work like founders-together sharing a common mindset of long term thinking. If the product makes money, you make money.",
// //   },
// //   {
// //     title: "If you are a customer of an Entrext Product",
// //     desc: "At entrext, we don't overcomplicate things. Our products are made to make life easier, faster-and sometimes, just more fun. You'll always feel three things when using anything we build: It's simple. It's useful. It's alive. We listen, we adapt, and we grow with you. Because great products aren't just built once they evolve with the people who use them. At the heart of everything we build is you.",   },
// // ];

// // const OurValues = () => {
// //   return (
// //     <div className='w-[50vw] h-[120vh] mx-auto flex justify-between'>
// //       <div className='flex items-center justify-center text-[3vw]'>Our Value</div>
// //       <div className='w-[60%] flex flex-col justify-end gap-3'>
// //         {/* 1st div */}
// //         <div className='border border-gray-500 rounded-lg text-center p-4'>
// //           <div className="text-md font-semibold mb-2">{items[0].title}</div>
// //           <div className="text-gray-400">{items[0].desc}</div>
// //         </div>

// //         {/* 2nd div */}
// //         <div className='border border-gray-500 rounded-lg text-center p-4'>
// //           <div className="text-md font-semibold mb-2">{items[1].title}</div>
// //           <div className="text-gray-400">{items[1].desc}</div>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// // export default OurValues
// import React from "react";
// import { motion } from "framer-motion";

// const items = [
//   {
//     title: "If you are working with Entrext",
//     desc: "At entrext, there are no employees. Everyone who works here owns a piece of what they build. Instead of salaries, we share profits. We work like founders—together sharing a common mindset of long-term thinking. If the product makes money, you make money.",
//   },
//   {
//     title: "If you are a customer of an Entrext Product",
//     desc: "At entrext, we don't overcomplicate things. Our products are made to make life easier, faster—and sometimes, just more fun. You'll always feel three things when using anything we build: It's simple. It's useful. It's alive. We listen, we adapt, and we grow with you. Because great products aren't just built once—they evolve with the people who use them. At the heart of everything we build is you.",
//   },
// ];

// const OurValues = () => {
//   return (
//     <div className="w-[50vw] h-[120vh] mx-auto flex justify-between">
//       <div className="flex items-center justify-center text-[3vw]">Our Value</div>
//       <div className="w-[60%] flex flex-col justify-end gap-3">
//         {/* 1st animated div — faster */}
//         <motion.div
//           className="border border-gray-500 rounded-lg text-center p-4"
//           animate={{ y: [0, -10, 0] }}
//           transition={{ duration: 2, repeat: Infinity }}
//         >
//           <div className="text-md font-semibold mb-2">{items[0].title}</div>
//           <div className="text-gray-400">{items[0].desc}</div>
//         </motion.div>

//         {/* 2nd animated div — slower */}
//         <motion.div
//           className="border border-gray-500 rounded-lg text-center p-4"
//           animate={{ y: [0, -10, 0] }}
//           transition={{ duration: 4, repeat: Infinity }}
//         >
//           <div className="text-md font-semibold mb-2">{items[1].title}</div>
//           <div className="text-gray-400">{items[1].desc}</div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default OurValues;
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const items = [
  {
    title: "If you are working with Entrext",
    desc: "At entrext, there are no employees. Everyone who works here owns a piece of what they build. Instead of salaries, we share profits. We work like founders—together sharing a common mindset of long-term thinking. If the product makes money, you make money.",
  },
  {
    title: "If you are a customer of an Entrext Product",
    desc: "At entrext, we don't overcomplicate things. Our products are made to make life easier, faster—and sometimes, just more fun. You'll always feel three things when using anything we build: It's simple. It's useful. It's alive. We listen, we adapt, and we grow with you. Because great products aren't just built once—they evolve with the people who use them. At the heart of everything we build is you.",
  },
];

const OurValues = () => {
  const containerRef = useRef(null);

  // Track scroll within the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Map scroll progress to different speeds
  const yFast = useTransform(scrollYProgress, [0, 1], [0, -300]); // 1st div (faster)
  const ySlow = useTransform(scrollYProgress, [0, 1], [0, -100]); // 2nd div (slower)

  return (
    <div ref={containerRef} className="w-[50vw] h-[120vh] mx-auto flex justify-between relative overflow-hidden">
      <div className="flex items-center justify-center text-[3vw]">Our Value</div>
      <div className="w-[60%] flex flex-col justify-end gap-3">
        {/* 1st parallax div — faster */}
        <motion.div
          style={{ y: yFast }}
          className="border border-gray-500 rounded-lg text-center p-4"
        >
          <div className="text-md font-semibold mb-2">{items[0].title}</div>
          <div className="text-gray-400">{items[0].desc}</div>
        </motion.div>

        {/* 2nd parallax div — slower */}
        <motion.div
          style={{ y: ySlow }}
          className="border border-gray-500 rounded-lg text-center p-4"
        >
          <div className="text-md font-semibold mb-2">{items[1].title}</div>
          <div className="text-gray-400">{items[1].desc}</div>
        </motion.div>
      </div>
    </div>
  );
};

export default OurValues;
