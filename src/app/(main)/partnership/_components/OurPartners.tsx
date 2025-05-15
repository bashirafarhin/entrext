import React from "react";
import { Flame, Zap, Eye } from "lucide-react";

const items = [
  {
    icon: <Flame />, // Represents obsession/passion
    title: "Obsession",
    desc: "Deep passion for solving the problem and commitment to the mission. Relentless focus on improving the solution based on feedback.",
  },
  {
    icon: <Zap />, // Represents energy/drive
    title: "Drive",
    desc: "Consistent effort to make daily progress, improving by 1% every day. Fully accountable, with a proactive approach to overcoming challenges.",
  },
  {
    icon: <Eye />, // Represents vision
    title: "Visionary",
    desc: "Should be a fine thinker and executionist.",
  },
];

const OurPartners = () => {
  return (
    <div className="w-[70vw] mx-auto my-40 text-center">
      <div className="flex gap-5 mb-15">
        <div className="rounded-lg p-4 h-fit shadow">
          <div className="text-md font-semibold mb-2">{items[0].title}</div>
          <div className="text-gray-400">{items[0].desc}</div>
        </div>
        <div className="rounded-lg p-4 mt-30 h-fit shadow">
          <div className="text-md font-semibold mb-2">{items[1].title}</div>
          <div className="text-gray-400">{items[1].desc}</div>
        </div>
        <div className="rounded-lg p-4 mt-60 h-fit shadow">
          <div className="text-md font-semibold mb-2">{items[2].title}</div>
          <div className="text-gray-400">{items[2].desc}</div>
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
