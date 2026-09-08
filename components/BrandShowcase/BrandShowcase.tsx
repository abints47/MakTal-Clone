'use client';

import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


/* ─── Brand statement with mixed typography ─── */
const statement = [
  { text: 'ENGINEERING', style: 'bold' as const },
  { text: 'DIGITAL', style: 'script' as const },
  { text: 'PRODUCTS', style: 'bold' as const },
  { text: 'THAT', style: 'bold' as const },
  { text: 'SCALE', style: 'script' as const },
  { text: 'WITHOUT', style: 'bold' as const },
  { text: 'COMPROMISE.', style: 'bold' as const },
  { text: 'BUILT', style: 'bold' as const },
  { text: 'FOR', style: 'bold' as const },
  { text: 'PERFORMANCE,', style: 'script' as const },
  { text: 'SECURITY,', style: 'bold' as const },
  { text: 'AND', style: 'bold' as const },
  { text: 'LONGEVITY.', style: 'script' as const },
];


function AnimatedWords() {
  const containerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

  
    gsap.fromTo(
      el,
      { transformOrigin: '0% 50%', rotate: 3 },
      {
        ease: 'none',
        rotate: 0,
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'center center',
          scrub: true,
        },
      },
    );

    const wordElements = el.querySelectorAll<HTMLElement>('.philosophy-word');
    const scriptWords = el.querySelectorAll<HTMLElement>('.philosophy-word.script-word');

    gsap.fromTo(
      wordElements,
      { opacity: 0.1, willChange: 'opacity'},
      {
        ease: 'none',
        opacity: 1,
        stagger: 0.06,
        scrollTrigger: {
          trigger: el,
          start: 'top bottom-=20%',
          end: 'center center',
          scrub: true,
        },
      },
    );

    gsap.fromTo(
      wordElements,
      { filter: 'blur(4px)' },
      {
        ease: 'none',
        filter: 'blur(0px)',
        stagger: 0.06,
        scrollTrigger: {
          trigger: el,
          start: 'top bottom-=20%',
          end: 'center center',
          scrub: true,
        },
      },
    );

    gsap.fromTo(
      scriptWords,
      { y: 18, willChange: 'transform' },
      {
        ease: 'none',
        y: 0,
        stagger: 0.08,
        scrollTrigger: {
          trigger: el,
          start: 'top bottom-=15%',
          end: 'center center',
          scrub: true,
        },
      },
    );

    gsap.fromTo(
      scriptWords,
      { scale: 0.92, willChange: 'transform' },
      {
        ease: 'none',
        scale: 1,
        stagger: 0.08,
        scrollTrigger: {
          trigger: el,
          start: 'top bottom-=15%',
          end: 'center center',
          scrub: true,
        },
      },
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <h2
      ref={containerRef}
      className="text-[clamp(1.4rem,3.5vw,2.6rem)] sm:text-[clamp(1.6rem,3.5vw,3rem)] md:text-[clamp(1.8rem,3.5vw,3.4rem)] lg:text-[clamp(2rem,3.5vw,3.8rem)] leading-[1.7] font-semibold font-sans tracking-tight max-w-5xl mx-auto text-center my-0"
    >
      {statement.map((word, i) => {
        const isScript = word.style === 'script';

        return (
          <span
            key={i}
            className={`inline-block philosophy-word ${
              isScript
                ? 'italic script-word'
                : 'text-slate-800 font-bold'
            }`}
            style={{
              marginRight: '0.3em',
              fontFamily: isScript
                ? 'var(--font-playfair), Georgia, serif'
                : 'inherit',
              fontWeight: isScript ? 400 : undefined,
              letterSpacing: isScript ? '0.02em' : undefined,
            }}
          >
            {word.text}
          </span>
        );
      })}
    </h2>
  );
}

export default function BrandShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const cardOpacity = useTransform(scrollYProgress, [0, 0.15], [0.8, 1]);

  return (
    <section ref={sectionRef} className="relative w-full bg-white rounded-[4.5rem] overflow-hidden">
      <motion.div
        style={{ opacity: cardOpacity }}
        className="relative overflow-hidden"
      >

        <div className="relative bg-white pt-10 sm:pt-14 pb-16 sm:pb-24 lg:pb-28">
          <div className="relative max-w-8xl mx-auto px-5 sm:px-6 lg:px-8">
            <AnimatedWords />
          </div>
        </div>
      </motion.div>
    </section>
  );
}