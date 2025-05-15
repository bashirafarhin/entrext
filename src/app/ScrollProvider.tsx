// "use client";

// import { useRef, useEffect } from "react";
// import "locomotive-scroll/dist/locomotive-scroll.css";

// export default function ScrollProvider({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const scrollRef = useRef(null);

//   useEffect(() => {
//     (async () => {
//       const LocomotiveScroll = (await import("locomotive-scroll")).default;
//       const locomotiveScroll = new LocomotiveScroll();
//     })();
//   }, []);

//   return (
//     <div data-scroll-container ref={scrollRef}>
//       {children}
//     </div>
//   );
// }
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
    let locoScroll: any;

    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      locoScroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
      });
    })();

    return () => {
      // Cleanup on unmount
      if (locoScroll) locoScroll.destroy();
    };
  }, []);

  return (
    <div data-scroll-container ref={scrollRef}>
      {children}
    </div>
  );
}
