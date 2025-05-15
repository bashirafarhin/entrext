"use client";
import React from "react";
import Image from "next/image";

const items = [
  {
    title: "Solves Real Problems",
    icon: "🧠",
    desc: "Built to address actual pain points, not just trends.",
  },
  {
    title: "Delivers Real Value",
    icon: "💎",
    desc: "Every feature is designed to make life easier or better.",
  },
  {
    title: "Highly Adaptable",
    icon: "🔧",
    desc: "Flexible solutions that grow and evolve with your needs.",
  },
  {
    title: "Loved by Users",
    icon: "❤️",
    desc: "User-first design that sparks joy and loyalty.",
  },
];



const WhyUs = () => {
  return (
    <div data-scroll-section className="w-[70vw] mx-auto p-3 my-20">
      <div className="text-center heading">Why Entrext</div>
      
      <div className="flex items-center justify-center gap-6 my-10">
        {items.map((ele, ind) => {
          return (
            <div
              key={ind}
              className="h-[400px] relative overflow-hidden rounded-lg border border-gray-500"
              data-scroll
              data-scroll-speed="3"
            >
              {/* Background Image */}
              <Image
                src="/space.jpg"
                alt="space"
                fill
                className="object-cover z-0"
              />

              {/* Overlay Content */}
              <div className="relative z-10 flex flex-col justify-center p-6 text-white text-center">
                <div className="text-xl font-bold mb-2">{ele.title}</div>
                <div className="text-bold text-gray-500">{ele.desc}</div>
                <div className="flex-end text-[7vw]">{ele.icon}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhyUs;