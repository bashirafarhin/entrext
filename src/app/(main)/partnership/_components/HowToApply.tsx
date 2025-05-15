// "use client";
// import { motion, useScroll, useTransform } from "motion/react";
// import { useRef } from "react";

// const Steps = [
//   {
//     title: "Step 1: Application Submission",
//     para: "Submit an application detailing your AI product idea (if applicable), your audience, niche, or marketing potential (for content creators), and how you see your role in the project's growth. Key Questions: What problem does this AI product solve? Who is the target market? Are you looking to contribute as a founder (product idea) or as a content creator?",
//   },
//   {
//     title: "Step 2: Discovery Call",
//     para: "We conduct an in-depth call to evaluate the partnership. For Product Owners: Understanding your vision, commitment, and market fit. For Content Creators: Assessing your audience reach, branding potential, and content expertise. Focus Areas: Your role in shaping the product and its marketing, and alignment between our technical expertise and your strategic input.",
//   },
//   {
//     title: "Step 3: Evaluation & Selection",
//     para: "Our team assesses the opportunity based on: Product Ideas: Scalability, feasibility, and alignment with our expertise. Content Creators: Audience size, engagement, and ability to drive user adoption. Acceptance Criteria: We select a limited number of partners per year based on strategic alignment and potential impact.",
//   },
//   {
//     title: "Step 4: Partnership Agreement",
//     para: "Once selected, we formalize the partnership with an equity-based agreement. For Product Owners: We own 30-40% of the product, and you retain the majority stake while we build and launch it. For Content Creators: You receive 20% equity, contributing through brand positioning, marketing, and audience growth. Equity is held until exit, meaning you benefit from long-term product growth and a future sale or acquisition.",
//   },
//   {
//     title: "Step 5: Development Process Begins",
//     para: "We assemble a team of AI engineers, designers, and project managers to bring the product to life. For Product Owners: Active involvement in feature development, user testing, and feedback. For Content Creators: Creating content, building an audience, and positioning the product in the market. Ongoing Communication: Weekly or bi-weekly check-ins for alignment and updates.",
//   },
//   {
//     title: "Step 6: MVP Launch & Market Testing",
//     para: "Once the MVP is ready: Launch Support: Early user acquisition, testing, and refinement. Marketing & Growth: Leveraging content creators' platforms for visibility. Focus Areas: Collecting user feedback and optimizing the product, and content-driven marketing strategies for scaling.",
//   },
//   {
//     title: "Step 7: Long-Term Partnership & Exit",
//     para: "We continue working together post-launch for: Iterative Improvements: Adapting based on market trends and user needs. Scaling & Growth Strategies: Expanding the product reach and revenue streams. Exit Planning: When a viable acquisition opportunity arises, we secure an exit that benefits all partners.",
//   },
// ];

// const HowToApply = () => {
//   const divRef = useRef(null);

//   return (
//     <>
//       <div
//         className="relative w-[70vw] mx-auto flex justify-center items-center flex-col mb-40"
//         ref={divRef}
//       >
//         {/* top text */}
//         <div
//           className="text-4xl font-bold text-center px-4 mb-8"
//         >
//           How it Works
//         </div>

//         {/* Introduction text */}
//         <div
//           className="text-sm md:text-lg text-gray-400 text-center max-w-3xl mb-4"
//         >
//           Partnership Model <br/>
//           AI Product Development Model (For Non-Tech Founders & Content Creators)<br/>
//           This partnership model is designed for:<br/>
//           Non-Tech Founders:<br/> If you have an AI product idea but lack the technical expertise to build it.<br/>
//           Content Creators:<br/> If you want to be the face of an AI product and help market, promote, and grow it.<br/>
//         </div>

//         <div className="text-gray-400 text-center mb-16">
//           We provide the technical and operational infrastructure while you contribute your vision, audience, or expertise.<br/>
//           You receive ownership in the product until we exit.<br/>
//         </div>

//         {/* reason section */}
//         {Steps.map(({ para, title }, index) => {
//           return (
//             <ReasonSection
//               text={para}
//               title={title}
//               index={index}
//               key={index}
//             />
//           );
//         })}
//       </div>
//     </>
//   );
// };

// interface props {
//   index: number;
//   text: string;
//   title: string;
// }

// const ReasonSection = ({ index, text, title }: props) => {
//   const divRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: divRef,
//     offset: ["start 0.7", "center"],
//   });

//   const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

//   const lineOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
//   const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

//   return (
//     <>
//       <motion.div
//         className={`w-full flex items-start justify-start flex-row-reverse px-8 gap-4 md:p-0 ${
//           index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
//         } md:gap-8 ${index == 0 ? "mt-[30vh]" : "mt-0"} mb-4`}
//         ref={divRef}
//         key={index}
//       >
//         {/* text */}
//         <motion.div
//           className="w-full h-full md:w-1/2 mt-[-2rem] md:mt-[-4rem] "
//           style={{ opacity }}
//         >
//           <div
//             className={` w-full min-h-full rounded-xl flex justify-center items-center p-4 lg:p-8 transition-all duration-300 flex-col gap-4 ${
//               index % 2 === 0 ? "md:items-end" : "md:items-start"
//             }`}
//           >
//             <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white w-full md:w-auto text-left">
//               {title}
//             </h2>
//             <p
//               className={`w-full text-left md:block text-sm sm:text-base md:text-base lg:text-lg xl:text-lg md:w-[80%] text-gray-400 ${
//                 index % 2 === 0 ? "md:text-right" : "md:text-left"
//               }`}
//             >
//               {text}
//             </p>
//           </div>
//         </motion.div>
//         {/* line */}
//         <div className="flex justify-center items-center flex-col gap-4">
//           <motion.div
//             style={{ opacity }}
//             className="w-5 h-5 rounded-full bg-white"
//           ></motion.div>
//           <motion.div
//             // className={`bg-[#FF5513] h-[85vh] w-0.5 origin-top pb-3 ${
//             //   index == Steps.length - 1 ? "hidden" : ""
//             // }`}
//              className={`bg-[#FF5513] h-[85vh] w-0.5 origin-top pb-3 ${index == Steps.length - 1 ? "hidden" : ""} shadow-[0_0_100px_5px_#FF5513]`}
//             style={{
//               scaleY: lineScaleY,
//               opacity: lineOpacity,
//             }}
//           />
//         </div>

//         {/* text section */}
//         <div className="hidden md:block md:w-1/2" />
//       </motion.div>
//     </>
//   );
// };

// export default HowToApply;
"use client";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

const Steps = [
  {
    title: "Step 1: Application Submission",
    para: "Submit an application detailing your AI product idea (if applicable), your audience, niche, or marketing potential (for content creators), and how you see your role in the project's growth. Key Questions: What problem does this AI product solve? Who is the target market? Are you looking to contribute as a founder (product idea) or as a content creator?",
  },
  {
    title: "Step 2: Discovery Call",
    para: "We conduct an in-depth call to evaluate the partnership. For Product Owners: Understanding your vision, commitment, and market fit. For Content Creators: Assessing your audience reach, branding potential, and content expertise. Focus Areas: Your role in shaping the product and its marketing, and alignment between our technical expertise and your strategic input.",
  },
  {
    title: "Step 3: Evaluation & Selection",
    para: "Our team assesses the opportunity based on: Product Ideas: Scalability, feasibility, and alignment with our expertise. Content Creators: Audience size, engagement, and ability to drive user adoption. Acceptance Criteria: We select a limited number of partners per year based on strategic alignment and potential impact.",
  },
  {
    title: "Step 4: Partnership Agreement",
    para: "Once selected, we formalize the partnership with an equity-based agreement. For Product Owners: We own 30-40% of the product, and you retain the majority stake while we build and launch it. For Content Creators: You receive 20% equity, contributing through brand positioning, marketing, and audience growth. Equity is held until exit, meaning you benefit from long-term product growth and a future sale or acquisition.",
  },
  {
    title: "Step 5: Development Process Begins",
    para: "We assemble a team of AI engineers, designers, and project managers to bring the product to life. For Product Owners: Active involvement in feature development, user testing, and feedback. For Content Creators: Creating content, building an audience, and positioning the product in the market. Ongoing Communication: Weekly or bi-weekly check-ins for alignment and updates.",
  },
  {
    title: "Step 6: MVP Launch & Market Testing",
    para: "Once the MVP is ready: Launch Support: Early user acquisition, testing, and refinement. Marketing & Growth: Leveraging content creators' platforms for visibility. Focus Areas: Collecting user feedback and optimizing the product, and content-driven marketing strategies for scaling.",
  },
  {
    title: "Step 7: Long-Term Partnership & Exit",
    para: "We continue working together post-launch for: Iterative Improvements: Adapting based on market trends and user needs. Scaling & Growth Strategies: Expanding the product reach and revenue streams. Exit Planning: When a viable acquisition opportunity arises, we secure an exit that benefits all partners.",
  },
];

const HowToApply = () => {
  const divRef = useRef(null);
  const isInView = useInView(divRef, { once: true });

  return (
    <>
      <motion.div
        ref={divRef}
        className="relative w-[70vw] mx-auto flex justify-center items-center flex-col mb-40"
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* top text */}
        <div className="text-4xl font-bold text-center px-4 mb-8">
          How it Works
        </div>

        {/* Introduction text */}
        <div className="text-sm md:text-lg text-gray-400 text-center max-w-3xl mb-4">
          Partnership Model <br />
          AI Product Development Model (For Non-Tech Founders & Content Creators)<br />
          This partnership model is designed for:<br />
          Non-Tech Founders:<br /> If you have an AI product idea but lack the technical expertise to build it.<br />
          Content Creators:<br /> If you want to be the face of an AI product and help market, promote, and grow it.<br />
        </div>

        <div className="text-gray-400 text-center mb-16">
          We provide the technical and operational infrastructure while you contribute your vision, audience, or expertise.<br />
          You receive ownership in the product until we exit.<br />
        </div>

        {/* reason section */}
        {Steps.map(({ para, title }, index) => {
          return (
            <ReasonSection
              text={para}
              title={title}
              index={index}
              key={index}
            />
          );
        })}
      </motion.div>
    </>
  );
};

interface props {
  index: number;
  text: string;
  title: string;
}

const ReasonSection = ({ index, text, title }: props) => {
  const divRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: divRef,
    offset: ["start 0.7", "center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const lineOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <>
      <motion.div
        className={`w-full flex items-start justify-start flex-row-reverse px-8 gap-4 md:p-0 ${
          index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
        } md:gap-8 ${index == 0 ? "mt-[30vh]" : "mt-0"} mb-4`}
        ref={divRef}
        key={index}
      >
        {/* text */}
        <motion.div
          className="w-full h-full md:w-1/2 mt-[-2rem] md:mt-[-4rem]"
          style={{ opacity }}
        >
          <div
            className={` w-full min-h-full rounded-xl flex justify-center items-center p-4 lg:p-8 transition-all duration-300 flex-col gap-4 ${
              index % 2 === 0 ? "md:items-end" : "md:items-start"
            }`}
          >
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white w-full md:w-auto text-left">
              {title}
            </h2>
            <p
              className={`w-full text-left md:block text-sm sm:text-base md:text-base lg:text-lg xl:text-lg md:w-[80%] text-gray-400 ${
                index % 2 === 0 ? "md:text-right" : "md:text-left"
              }`}
            >
              {text}
            </p>
          </div>
        </motion.div>

        {/* line */}
        <div className="flex justify-center items-center flex-col gap-4">
          <motion.div
            style={{ opacity }}
            className="w-5 h-5 rounded-full bg-white"
          ></motion.div>
          <motion.div
            className={`bg-[#FF5513] h-[85vh] w-0.5 origin-top pb-3 ${
              index == Steps.length - 1 ? "hidden" : ""
            } shadow-[0_0_100px_5px_#FF5513]`}
            style={{
              scaleY: lineScaleY,
              opacity: lineOpacity,
            }}
          />
        </div>

        {/* spacing */}
        <div className="hidden md:block md:w-1/2" />
      </motion.div>
    </>
  );
};

export default HowToApply;
