'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import { Boxes, Brain, Mic, Store, Gamepad2, Bot, Globe } from 'lucide-react';
import TextAnimation from './Animations/TextAnimation';

export const items = [
  { label: 'Micro SaaS', icon: Boxes },
  { label: 'AI-powered tools', icon: Brain },
  { label: 'Voice Assistants', icon: Mic },
  { label: 'Marketplaces', icon: Store },
  { label: 'Games', icon: Gamepad2 },
  { label: 'Macro SaaS', icon: Bot },
  { label: 'Social platforms', icon: Globe },
];

export default function WhatWeMake() {
  return (
    <section className="w-[70vw] mx-auto my-25 text-center">
      <div className="text-center mb-8 heading">
        <TextAnimation text="What we make?"/>
      </div>

      <div className="my-10">
        {items.slice(0, 6).map((item, i) => {
          const Icon = item.icon;
          return (
            <AnimatedCard key={i}>
              <Icon size={100} color="#FF5513" />
              <h2 className="text-xl font-semibold text-center">
                {item.label}
              </h2>
            </AnimatedCard>
          );
        })}
      </div>
    </section>
  );
}

// Motion-enabled card with fade-up on enter
function AnimatedCard({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="pb-18 flex flex-col justify-center items-center transition-all duration-300 hover:scale-[1.2]"
    >
      {children}
    </motion.div>
  );
}

