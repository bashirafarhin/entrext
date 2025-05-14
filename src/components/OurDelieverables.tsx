'use client';
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const OurDelieverables = () => {
  const box1Ref = useRef<HTMLDivElement>(null);
  const box2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (box1Ref.current && box2Ref.current) {
      gsap.to(box1Ref.current, {
        y: -300,
        scrollTrigger: {
          trigger: box1Ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      gsap.to(box2Ref.current, {
        y: -150,
        scrollTrigger: {
          trigger: box2Ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }
  }, []);

  return (
    <div className="w-[80vw] flex justify-between mx-auto my-10 backdrop-blur">
      <div
        ref={box1Ref}
        className="w-[40%] text-white text-xl font-semibold bg-transparent p-2 shadow-[0_0_10px_rgba(255,85,19,0.7),0_0_20px_rgba(255,85,19,0.5)] rounded-md"
      >
        <div><h1>AI Deliverables for now</h1></div>
        <div>AI automation Agents</div>
        <div>AI Voice Agents</div>
        <div>AI MICRO SAAS</div>
      </div>

      <div
        ref={box2Ref}
        className="w-[40%] p-6 text-white text-xl font-semibold bg-transparent p-2 shadow-[0_0_10px_rgba(255,85,19,0.7),0_0_20px_rgba(255,85,19,0.5)] rounded-md"
      >
        <div><h1>Coming soon</h1></div>
        <div>AI marketplaces</div>
        <div>AI saas</div>
        <div>AI + Web3 Integration</div>
      </div>
    </div>
  );
};

export default OurDelieverables;
