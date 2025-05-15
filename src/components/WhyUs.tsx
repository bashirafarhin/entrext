"use client";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const prod = [
  "Solves Real Problems",
  "Delivers Real Value",
  "Highly Adaptable",
  "Loved by Users",
];

export const WhyUs = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = container.querySelectorAll(".prod-item");

    items.forEach((el, index) => {
      const fromX = index % 2 === 0 ? "-100%" : "100%";

      gsap.fromTo(
        el,
        { x: fromX, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%", // 10% into viewport
            end: "top 30%",   // adjust as needed
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="w-[70vw] mx-auto my-20 text-center">
      <div className="text-[2vw] mb-10">Why Entrext?</div>
      <div className="overflow-hidden">
        {prod.map((title, index) => (
          <div
            key={index}
            className="prod-item my-6 text-2xl md:text-4xl font-bold"
          >
            {title}
          </div>
        ))}
      </div>
    </div>
  );
};
