"use client";
import Button from "@/components/common/Button";
import React from "react";
import { motion } from "motion/react";
// import MouseFollower from "@/components/MouseFollower";
import InfiniteLoop from "@/components/InfiniteLoop";
import FaqSection from "@/components/FaqSection";
import WhyUsSection from "@/components/WhyUsSections";
// import TechStack from "@/components/TechStack";
import PartnershipPlans from "@/components/PatnerShipPlans";
import AiSection from "@/components/AiSection";

const second = [
  {
    title: "Partnerships with the people",
    para: "We build one feature products that turn into full fledged applications once it validates the market and serves the community!",
  },
  {
    title: "Partnership with non tech founders",
    para: "If you believe you have an idea, and you come from a non tech background and you got no one, pitch us who knows, maybe we make the product with you and work on an partnerhsip model.",
  },
  {
    title: "Partnership with Content Creator Marketors",
    para: "IF you believe you are great at creating content, and wants to act as a partner with one of the product that can resonate with you or have an idea for the product reach out to us!",
  },
];

const thrid = [
  {
    count: 5,
    title: "Products",
  },
  {
    count: 10000,
    title: "customers",
  },
  {
    count: 5,
    title: "Partnerships",
  },
];

const fourth = [
  {
    title: "Products that solve problems on a real note!",
    description:
      "We build solutions that address real-world challenges, making a tangible impact.",
  },
  {
    title: "Products that provide real value!",
    description:
      "Our products are designed with usability in mind, ensuring maximum value for users.",
  },
  {
    title: "Products that provide great adaptability to the users!",
    description:
      "We prioritize flexibility, making our products easy to integrate and adapt to different needs.",
  },
  {
    title: "Products that solve what the market outs!",
    description:
      "We analyze market needs and craft solutions that fill industry gaps effectively.",
  },
];

const eight = [
  {
    title: "Obsession",
    para: "Deep passion for solving the problem and commitment to the mission. Relentless focus on improving the solution based on feedback.",
  },
  {
    title: "Drive",
    para: "Consistent effort to make daily progress, improving by 1% every day. Fully accountable, with a proactive approach to overcoming challenges.",
  },
  {
    title: "Visionary",
    para: "Should be a fine thinker and executionist.",
  },
];

const HomeScreen = () => {
  // const x = useMotionValue(0);
  // const y = useMotionValue(0);

  // useEffect(() => {
  //   const handleMouseMove = (event: MouseEvent) => {
  //     console.log("Mosue X and Y :", event.clientX, event.clientY);

  //     x.set(event.clientX - 5);
  //     y.set(event.clientY - 15);
  //   };

  //   document.addEventListener("mousemove", handleMouseMove);

  //   return () => {
  //     document.removeEventListener("mousemove", handleMouseMove);
  //   };
  // }, [x, y]);

  return (
    <>
      {/* <MouseFollower x={x} y={y} /> */}
      <div className="relative w-full h-full overflow-hidden">
        {/* MouseFollower should cover the entire page */}
        {/* Hero Section */}
        <div className="h-screen w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 relative overflow-hidden">
          <div className="w-full max-w-7xl flex flex-col items-center text-center md:text-left md:items-start  gap-6 md:gap-8 lg:gap-10">
            <motion.h2
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.5, type: "tween", delay: 0.3 }}
            >
              <span className="block">Building Micro AI - Tech</span>
              <span className="block">Products For the Future !</span>
            </motion.h2>

            <motion.p
              className="text-gray-500 text-sm sm:text-lg md:text-xl font-medium leading-relaxed max-w-3xl"
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.5, type: "tween", delay: 0.6 }}
            >
              Here We believe thoughts are the next possibilities
              <br className="hidden sm:block" />
              Serving one community at a time, Learn more !
            </motion.p>

            <motion.div
              className="flex justify-center md:justify-start"
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.5, type: "tween", delay: 0.6 }}
            >
              <Button text="Schedule a Meet, Learn More!" />
            </motion.div>
          </div>

          {/* Infinite Scrolling Section */}
          <div className="w-full mt-8 sm:mt-10 md:mt-12 lg:mt-16">
            <InfiniteLoop />
          </div>

          {/* Background Gradient Effect */}
          <div
            className="absolute top-0 left-1/3 w-full h-[60vh] sm:h-[25vh] -z-10"
            style={{
              background:
                "radial-gradient(circle at top, rgba(255, 85, 19, 0.6) 10%, rgba(0, 0, 0, 0.9) 80%)",
              filter: "blur(40px)",
            }}
          ></div>
        </div>

        {/* Second Section */}
        <motion.div
          className="min-h-screen w-full flex flex-col items-center justify-center gap-10 p-4 md:gap-16"
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 200, opacity: 0 }}
          transition={{ duration: 0.5, type: "tween", delay: 0.4 }}
          viewport={{ once: true }}
        >
          {/* Header */}
          <div className="text-center px-4">
            <h3 className="text-xl sm:text-2xl md:text-5xl lg:text-6xl font-semibold text-white">
              What is Entrext?
            </h3>
            <p className="text-gray-400 mt-2 text-sm sm:text-lg md:text-xl max-w-2xl mx-auto">
              We’re a Tech Studio. We Build Tech products for Niche Specific
              communities.We believe products are made twice: First When we feel
              it, second when everyone sees it !
            </p>
          </div>

          {/* Features Grid */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 w-full max-w-7xl lg:w-[90%] lg:max-w-7xl px-4"
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.5, type: "tween", delay: 0.7 }}
            viewport={{ once: true }}
          >
            {second.map((feature, index) => (
              <div
                key={index}
                className="p-6 sm:p-10 border border-[#0D0D0D] rounded-2xl text-white flex flex-col gap-4 h-auto min-h-[30vh] lg:h-[45vh] justify-center items-start hover:bg-gradient-to-t from-[#ff561370] to-[#161616a6] cursor-pointer bg-[#101010]"
              >
                <h3 className="text-lg sm:text-2xl font-semibold">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-lg">
                  {feature.para}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
        {/* Third Section */}
        <motion.div
          className="min-h-screen w-full flex flex-col items-center justify-center gap-10 p-4 md:gap-16"
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 200, opacity: 0 }}
          transition={{ duration: 0.5, type: "tween", delay: 0.4 }}
          viewport={{ once: true }}
        >
          {/* Header */}
          <div className="text-center px-4">
            <h3 className="text-xl sm:text-2xl md:text-5xl lg:text-6xl font-semibold ">
              Products in Making
            </h3>
            <p className="text-gray-400 mt-2 text-sm sm:text-lg md:text-xl max-w-2xl mx-auto">
              We make products of real value, with a great understanding
            </p>
          </div>

          {/* Features Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 w-full max-w-4xl px-4"
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.5, type: "tween", delay: 0.7 }}
            viewport={{ once: true }}
          >
            {thrid.map((feature, index) => (
              <span
                key={index}
                className="flex justify-between items-center flex-col text-center"
              >
                <h3 className="text-2xl sm:text-4xl md:text-6xl text-[#FF5513]">
                  {feature.count}
                </h3>
                <h2 className="text-lg sm:text-2xl md:text-3xl text-gray-400 w-full mt-4 ">
                  {feature.title}
                </h2>
              </span>
            ))}
          </motion.div>
          <motion.span
            className="text-xl sm:text-2xl md:text-4xl text-gray-300"
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.5, type: "tween", delay: 0.7 }}
            viewport={{ once: true }}
          >
            Find us on Product hunt
          </motion.span>
        </motion.div>
        {/* fourth section */}
        <motion.div
          className="min-h-screen w-full flex flex-col items-center justify-center gap-10 p-4 md:gap-16"
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 200, opacity: 0 }}
          transition={{ duration: 0.5, type: "tween", delay: 0.4 }}
          viewport={{ once: true }}
        >
          {/* Header */}
          <div className="text-center px-4">
            <h3 className="text-xl sm:text-2xl md:text-5xl lg:text-7xl font-semibold text-white">
              Why Entrext ?
            </h3>
            <p className="text-gray-400 mt-2 text-sm sm:text-lg md:text-xl max-w-2xl mx-auto">
              We really don’t see a reason you shouldn’t choose us <br /> but
              still
            </p>
          </div>

          {/* Features Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 w-full max-w-7xl px-4"
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.5, type: "tween", delay: 0.7 }}
            viewport={{ once: true }}
          >
            {fourth.map((feature, index) => (
              <div
                key={index}
                className="p-5 sm:px-10 border border-[#0D0D0D] rounded-2xl text-white flex flex-col gap-4 h-auto sm:h-[30vh] justify-center items-start hover:bg-gradient-to-t from-[#ff561370] to-[#161616a6] cursor-pointer bg-[#101010]"
              >
                <h3 className="text-lg sm:text-2xl font-semibold">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-lg">
                  {feature.description}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
        {/* eight section */}
        <motion.div
          className="min-h-screen w-full flex flex-col items-center justify-center gap-10 p-4 md:gap-16"
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 200, opacity: 0 }}
          transition={{ duration: 0.5, type: "tween", delay: 0.4 }}
          viewport={{ once: true }}
        >
          {/* Header */}
          <div className="text-center px-4">
            <h3 className="text-xl sm:text-2xl md:text-5xl lg:text-6xl font-semibold text-white">
              What we usually look in <br />
              these 5 founders
            </h3>
          </div>

          {/* Features Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 w-full max-w-7xl px-4"
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.5, type: "tween", delay: 0.7 }}
            viewport={{ once: true }}
          >
            {eight.map((feature, index) => (
              <div
                key={index}
                className="p-6 sm:p-10 border border-[#0D0D0D] rounded-2xl text-white flex flex-col gap-4 h-auto sm:h-[30vh] justify-center items-start hover:bg-gradient-to-t from-[#ff561370] to-[#161616a6] cursor-pointer bg-[#101010]"
              >
                <h3 className="text-lg sm:text-2xl font-semibold">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-lg">
                  {feature.para}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
        <AiSection />
        {/* tech stack */}
        {/* <TechStack /> */}
        {/* how it works */}
        <WhyUsSection />
        {/* patnership plans  */}
        <PartnershipPlans />
        {/* FAQ section */}
        <FaqSection />
      </div>
    </>
  );
};

export default HomeScreen;
