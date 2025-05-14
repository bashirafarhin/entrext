import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Card from "./Card";

const cards = [
  {
    title: "Partnership with Non-Tech Founders",
    description:
      "If you believe you have an idea, and you come from a non-tech background and you got no one, pitch us. Who knows, maybe we make the product with you and work on a partnership model. Mail us.",
  },
  {
    title: "Partnership with Content Creator Marketers",
    description:
      "If you believe you are great at creating content and want to act as a partner with one of the products that resonate with you, or have an idea for a product — reach out to us! Mail us.",
  },
  {
    title: "Partnership as a Leader / Co-Founder",
    description:
      "If you believe you are great at either distribution & sales, branding, or tech, reach out to us. Let's connect! We are always looking for builders who can be the next leaders!",
  },
];

const PartnershipSection = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // starts when container enters from bottom, ends when leaves at top
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const x3 = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div
      ref={ref}
      className="w-[80vw] p-4 flex gap-15 overflow-hidden mx-auto my-10 "
    >
      <motion.div style={{ x: x1 }} className="w-1/3">
        <Card title={cards[0].title} description={cards[0].description} />
      </motion.div>
      <motion.div style={{ x: x2 }} className="w-1/3">
        <Card title={cards[1].title} description={cards[1].description} />
      </motion.div>
      <motion.div style={{ x: x3 }} className="w-1/3">
        <Card title={cards[2].title} description={cards[2].description} />
      </motion.div>
    </div>
  );
};

export default PartnershipSection;
