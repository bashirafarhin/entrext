"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

interface TextAnimationProps {
  text: string;
  initialColor?: string; // optional
  className?: string;
}

const TextAnimation = ({ text, initialColor = "gray", className = "" }: TextAnimationProps) => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;

    const split = new SplitType(container.current, { types: "words" });

    // Set initial color
    split.words?.forEach((word) => {
      word.classList.add("text-inactive");
      word.style.color = initialColor === "gray" ? "rgb(107 114 128)" : initialColor;
    });

    // Animate to white color on scroll
    gsap.to(split.words, {
      color: "#ffffff", // Animate to white
      stagger: 0.1,
      scrollTrigger: {
        trigger: container.current,
        start: "top 50%",
        end: "bottom 60%",
        scrub: true,
      },
      onUpdate: () => {
        split.words?.forEach((word) => {
          word.classList.remove("text-inactive");
          word.classList.add("text-animated");
        });
      },
    });

    // Cleanup scroll triggers
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [initialColor]);

  return (
    <div ref={container} className={`text-animation-container ${className}`}>
      {text}
    </div>
  );
};

export default TextAnimation;
