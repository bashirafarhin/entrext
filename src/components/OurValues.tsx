"use client";
import React from "react";

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

  return (
    <div
      className="w-[50vw] mx-auto"
    >
      <div className="text-center heading">Our Values</div>

      <div className="flex align-center justify-center border-2 border-pink-500">
        <div
          className="border border-gray-500 rounded-lg text-center p-4"
          data-scroll-speed="3"
        >
          <div className="text-md font-semibold mb-2">{items[0].title}</div>
          <div className="text-gray-400">{items[0].desc}</div>
        </div>
      </div>
    </div>
  );
};

export default OurValues;
