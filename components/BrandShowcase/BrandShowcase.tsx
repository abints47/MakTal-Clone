'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'motion/react';

/* ─── Authentic brand statement (non-marketing fluff) ─── */
const statement = [
  { text: 'ENGINEERING', color: 'text-slate-900' },
  { text: 'DIGITAL', color: 'text-cyan-500' },
  { text: 'PRODUCTS', color: 'text-slate-900' },
  { text: 'THAT', color: 'text-slate-900' },
  { text: 'SCALE', color: 'text-cyan-500' },
  { text: 'WITHOUT', color: 'text-slate-900' },
  { text: 'COMPROMISE.', color: 'text-slate-900' },
  { text: 'BUILT', color: 'text-cyan-500' },
  { text: 'FOR', color: 'text-cyan-500' },
  { text: 'PERFORMANCE,', color: 'text-cyan-500' },
  { text: 'SECURITY,', color: 'text-cyan-500' },
  { text: 'AND', color: 'text-slate-900' },
  { text: 'LONGEVITY.', color: 'text-slate-900' },
];

/* ─── Single animated word ─── */
function AnimatedWord({
  text,
  color,
  index,
  scrollYProgress,
}: {
  text: string;
  color: string;
  index: number;
  scrollYProgress: MotionValue<number>;
}) {
  const wordStart = 0.32 + index * 0.015;
  const wordEnd = 0.52 + index * 0.015;

  const wordScale = useTransform(
    scrollYProgress,
    [wordStart, wordEnd, wordEnd + 0.05],
    [0.92, 1.02, 1],
  );
  const wordOpacity = useTransform(scrollYProgress, [wordStart, wordEnd], [0.15, 1]);
  const wordY = useTransform(scrollYProgress, [wordStart, wordEnd], [12, 0]);

  return (
    <motion.span
      className={`inline-block font-bold ${color}`}
      style={{ scale: wordScale, opacity: wordOpacity, y: wordY, marginRight: '0.3em' }}
    >
      {text}
    </motion.span>
  );
}

/* ─── Word-by-word text container ─── */
function AnimatedWords({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) {
  return (
    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight leading-[1.2] max-w-5xl mx-auto text-center">
      {statement.map((word, i) => (
        <AnimatedWord
          key={i}
          text={word.text}
          color={word.color}
          index={i}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </h2>
  );
}

export default function BrandShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  /* ── Clean, subtle scaling for the image showcase ── */
  const logoScale = useTransform(scrollYProgress, [0.05, 0.25, 0.45, 0.65], [0.85, 0.95, 1.02, 1]);
  const logoOpacity = useTransform(scrollYProgress, [0.05, 0.2], [0, 1]);
  const logoBlur = useTransform(scrollYProgress, [0.05, 0.2], [10, 0]);
  const logoFilter = useTransform(logoBlur, (v) => `blur(${v}px)`);

  const cardOpacity = useTransform(scrollYProgress, [0, 0.15], [0.8, 1]);

  return (
    <section ref={sectionRef} className="relative w-full bg-white">
      <motion.div
        style={{ opacity: cardOpacity }}
        className="relative overflow-hidden"
      >
        {/* Top visual asset area with no borders */}
        <div className="relative pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-10">
          <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
            <motion.div
              style={{ scale: logoScale, opacity: logoOpacity }}
              className="mb-6 sm:mb-8"
            >
              <div className="inline-flex flex-col items-center">
                <motion.div
                  style={{ filter: logoFilter }}
                  className="w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 overflow-hidden"
                >
                  <img
                    src="/images/brand-logo.jpg"
                    alt="MakTal Technologies"
                    className="w-full h-full object-cover border-0 outline-none ring-0"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom statement section */}
        <div className="relative bg-white pt-10 sm:pt-14 pb-20 sm:pb-28 lg:pt-16 lg:pb-36">
          <div className="relative max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <span className="text-xs font-semibold tracking-widest text-slate-400 uppercase">
                Core Philosophy
              </span>
            </div>
            <AnimatedWords scrollYProgress={scrollYProgress} />
          </div>
        </div>
      </motion.div>
    </section>
  );
}