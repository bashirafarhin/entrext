"use client";

import { useRef, useEffect } from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";

export default function ScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const scrollRef = useRef(null);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
      console.log(locomotiveScroll)
    })();
  }, []);

  return (
    <div data-scroll-container ref={scrollRef}>
      {children}
    </div>
  );
}
