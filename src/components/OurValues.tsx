// // import React, { useRef } from "react";
// // import { motion, useScroll, useTransform } from "framer-motion";
// // import TextAnimation from "./Animations/TextAnimation";

// // const items = [
// //   {
// //     title : "If you are working with Entrext",
// //     desc : "At entrext, there are no employees. Everyone who works here owns a piece of what they build. Instead of salaries, we share profits. We work like founders-together sharing a common mindset of long term thinking. If the product makes money, you make money."
// //   },
// //   {
// //     title : "If you are customer of an Entrext Product",
// //     desc : "At entrext, we don't overcomplicate things. Our products are made to make life easier, faster-and sometimes, more fun. You'll always feel three things when using anything we build: It's simple. It's useful. It's alive. We listen, we adapt, and we grow with you. Because great products aren't just built once they evolve with the people who use them. At the heart of everything we build is you."
// //   }
// // ];

// // const ScrollSections = () => {
// //   const ref = useRef(null);
// //   const { scrollYProgress } = useScroll({
// //     target: ref,
// //     offset: ["start start", "end start"],
// //   });

// //   const weMakeY = useTransform(scrollYProgress, [0.8, 1], ["0%", "-100%"]);
// //   const weMakeOpacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

// //   return (
// //     <div
// //   ref={ref}
// //   style={{ height: `${items.length * 100 + 100}vh` }} // +100vh for post-scroll buffer
// //   className="flex w-[70vw] mx-auto mb-100 relative mt-2"
// // >

// //       {/* Left Sticky Text */}
// //       <motion.div
// //         className="sticky top-0 text-[5vw] w-1/2 h-[100vh] flex items-center justify-center"
// //         style={{ y: weMakeY, opacity: weMakeOpacity }}
// //       >
// //         <TextAnimation text="Our Values" className=""/>
// //       </motion.div>

// //       {/* Right Animated Items */}
// //       <div className="w-1/2 h-[90vh] sticky top-0 relative overflow-hidden">
// //         {items.map((item, index) => {
// //           const sectionLength = 1 / items.length;
// //           const start = index * sectionLength;
// //           const mid = start + sectionLength / 2;
// //           const end = (index + 1) * sectionLength;

// //           const y = useTransform(scrollYProgress, [start, mid, end], ["100%", "70%", "-100%"]);
// //           const opacity = useTransform(scrollYProgress, [start, mid, end], [0, 1, 0]);

// //           return (
// //             <motion.div
// //               key={index}
// //               className="absolute border border-gray-500 w-[80%] rounded-lg p-6 text-center"
// //               style={{
// //                 y,
// //                 opacity,
// //                 zIndex: items.length - index,
// //                 pointerEvents: "none",
// //               }}
// //             >
// //               <div className="text-md font-semibold mb-2">{item.title}</div>
// //               <div className="text-gray-400">{item.desc}</div>
// //             </motion.div>
// //           );
// //         })}
// //       </div>
// //     </div>
// //   );
// // };

// // export default ScrollSections;
// "use client";

// import React, { useRef } from "react";
// import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
// import TextAnimation from "./Animations/TextAnimation";

// const items = [
//   {
//     title: "If you are working with Entrext",
//     desc: "At entrext, there are no employees. Everyone who works here owns a piece of what they build...",
//   },
//   {
//     title: "If you are customer of an Entrext Product",
//     desc: "At entrext, we don't overcomplicate things. Our products are made to make life easier...",
//   },
// ];

// const ScrollSections = () => {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end start"],
//   });

//   const weMakeY = useTransform(scrollYProgress, [0.8, 1], ["0%", "-100%"]);
//   const weMakeOpacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

//   // Precompute all transforms for items to avoid using hooks inside map
//   const transforms: {
//     y: MotionValue<string>;
//     opacity: MotionValue<number>;
//   }[] = items.map((_, index) => {
//     const sectionLength = 1 / items.length;
//     const start = index * sectionLength;
//     const mid = start + sectionLength / 2;
//     const end = (index + 1) * sectionLength;

//     return {
//       y: useTransform(scrollYProgress, [start, mid, end], ["100%", "70%", "-100%"]),
//       opacity: useTransform(scrollYProgress, [start, mid, end], [0, 1, 0]),
//     };
//   });

//   return (
//     <div
//       ref={ref}
//       style={{ height: `${items.length * 100 + 100}vh` }}
//       className="flex w-[70vw] mx-auto mb-100 relative mt-2"
//     >
//       {/* Left Sticky Text */}
//       <motion.div
//         className="sticky top-0 text-[5vw] w-1/2 h-[100vh] flex items-center justify-center"
//         style={{ y: weMakeY, opacity: weMakeOpacity }}
//       >
//         <TextAnimation text="Our Values" className="" />
//       </motion.div>

//       {/* Right Animated Items */}
//       <div className="w-1/2 h-[90vh] sticky top-0 relative overflow-hidden">
//         {items.map((item, index) => (
//           <motion.div
//             key={index}
//             className="absolute border border-gray-500 w-[80%] rounded-lg p-6 text-center"
//             style={{
//               y: transforms[index].y,
//               opacity: transforms[index].opacity,
//               zIndex: items.length - index,
//               pointerEvents: "none",
//             }}
//           >
//             <div className="text-md font-semibold mb-2">{item.title}</div>
//             <div className="text-gray-400">{item.desc}</div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ScrollSections;
"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import TextAnimation from "./Animations/TextAnimation";

const items = [
  {
    title: "If you are working with Entrext",
    desc: "At entrext, there are no employees. Everyone who works here owns a piece of what they build...",
  },
  {
    title: "If you are a customer of an Entrext Product",
    desc: "At entrext, we don't overcomplicate things. Our products are made to make life easier...",
  },
];

const ScrollSections = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const weMakeY = useTransform(scrollYProgress, [0.8, 1], ["0%", "-100%"]);
  const weMakeOpacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

  // Compute transforms directly inside the render function to ensure hooks are at the top level
  const transforms = items.map((_, index) => {
    const sectionLength = 1 / items.length;
    const start = index * sectionLength;
    const mid = start + sectionLength / 2;
    const end = (index + 1) * sectionLength;

    const y = useTransform(scrollYProgress, [start, mid, end], ["100%", "70%", "-100%"]);
    const opacity = useTransform(scrollYProgress, [start, mid, end], [0, 1, 0]);

    return { y, opacity };
  });

  return (
    <div
      ref={ref}
      style={{ height: `${items.length * 100 + 100}vh` }}
      className="flex w-[70vw] mx-auto mb-100 relative mt-2"
    >
      {/* Left Sticky Text */}
      <motion.div
        className="sticky top-0 text-[5vw] w-1/2 h-[100vh] flex items-center justify-center"
        style={{ y: weMakeY, opacity: weMakeOpacity }}
      >
        <TextAnimation text="Our Values" className="" />
      </motion.div>

      {/* Right Animated Items */}
      <div className="w-1/2 h-[90vh] sticky top-0 relative overflow-hidden">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="absolute border border-gray-500 w-[80%] rounded-lg p-6 text-center"
            style={{
              y: transforms[index].y,
              opacity: transforms[index].opacity,
              zIndex: items.length - index,
              pointerEvents: "none",
            }}
          >
            <div className="text-md font-semibold mb-2">{item.title}</div>
            <div className="text-gray-400">{item.desc}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ScrollSections;
