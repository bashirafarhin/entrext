// "use client";

// import React, { useRef, useMemo } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import TextAnimation from "./Animations/TextAnimation";
// import ScrollSection from "./ScrollSection"; // Import the new ScrollSection component

// const items = [
//   {
//     title: "If you are working with Entrext",
//     desc: "At entrext, there are no employees. Everyone who works here owns a piece of what they build...",
//   },
//   {
//     title: "If you are a customer of an Entrext Product",
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

//   // Precompute transforms for all sections
//   const transforms = useMemo(() => {
//     return items.map((_, index) => {
//       const sectionLength = 1 / items.length;
//       const start = index * sectionLength;
//       const mid = start + sectionLength / 2;
//       const end = (index + 1) * sectionLength;

//       const y = useTransform(scrollYProgress, [start, mid, end], ["100%", "70%", "-100%"]);
//       const opacity = useTransform(scrollYProgress, [start, mid, end], [0, 1, 0]);

//       return { y, opacity };
//     });
//   }, [scrollYProgress]);

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
//           <ScrollSection
//             key={index}
//             item={item}
//             transforms={transforms[index]} // Pass transforms to each section
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ScrollSections;
"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import TextAnimation from "./Animations/TextAnimation";
import ScrollSection from "./ScrollSection"; // Import the new ScrollSection component

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

  // Precompute transforms for all sections directly
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
          <ScrollSection
            key={index}
            item={item}
            transforms={transforms[index]} // Pass transforms to each section
          />
        ))}
      </div>
    </div>
  );
};

export default ScrollSections;
