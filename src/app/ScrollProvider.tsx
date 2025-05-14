'use client';

import { useRef, useEffect } from 'react';
import 'locomotive-scroll/dist/locomotive-scroll.css';

export default function ScrollProvider({ children }: { children: React.ReactNode }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    let scrollInstance: any;

    // Run only on client
    const startScrolling = async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;

      scrollInstance = new LocomotiveScroll({
        el: scrollRef.current!,
        smooth: true,
        lerp: 0.07,
      });
    };

    startScrolling();

    return () => {
      if (scrollInstance) scrollInstance.destroy();
    };
  }, []);

  return (
    <div data-scroll-container ref={scrollRef}>
      {children}
    </div>
  );
}
