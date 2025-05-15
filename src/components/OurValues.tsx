"use client";
import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll("[data-scroll-speed]");

    elements.forEach((el) => {
      const speed = parseFloat(el.getAttribute("data-scroll-speed") || "1");
      gsap.to(el, {
        y: `${-speed * 200}px`, // speed multiplier increased for stronger motion
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-[50vw] h-[100vh] mx-auto flex justify-between relative"
    >
      <div className="flex items-center justify-center text-[3vw]">Our Value</div>

      <div className="w-[60%] flex flex-col justify-end">
        <div
          className="border border-gray-500 rounded-lg text-center p-4"
          data-scroll-speed="3"
        >
          <div className="text-md font-semibold mb-2">{items[0].title}</div>
          <div className="text-gray-400">{items[0].desc}</div>
        </div>

        <div
          className="border border-gray-500 rounded-lg text-center p-4"
          data-scroll-speed="1"
        >
          <div className="text-md font-semibold mb-2">{items[1].title}</div>
          <div className="text-gray-400">{items[1].desc}</div>
        </div>
      </div>
    </div>
  );
};

export default OurValues;
