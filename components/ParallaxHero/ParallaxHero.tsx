'use client';

import React, { useRef, useEffect, ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


interface ParallaxHeroProps {
  children: ReactNode;
}

export function ParallaxHero({ children }: ParallaxHeroProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  /* Video scrolls slower than content → parallax */
  const videoY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 0.4]);

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen overflow-hidden flex flex-col justify-center bg-[#0a0a0a]">
      {/* Video Background with parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          style={{ y: videoY, scale: videoScale }}
          className="w-full h-full origin-center"
        >
          <video autoPlay loop muted playsInline poster="/images/it.jpg" className="w-full h-full object-cover" style={{ filter: 'saturate(0.85) contrast(1.1) brightness(0.5)' }}>
            <source src="https://assets.mixkit.co/videos/46635/46635-720.mp4" type="video/mp4" />
          </video>
        </motion.div>
        {/* Dark-to-light gradient: left side darker, right side brighter */}
        <div className="absolute inset-0 bg-linear-to-r from-[#0a0a0a]/80 via-[#0a0a0a]/30 to-transparent" />
        <motion.div style={{ opacity: overlayOpacity }} className="absolute inset-0 bg-[#0a0a0a]/40" />
      </div>

      {children}
    </section>
  );
}

/* ═══════════════════════════════════════════
   Parallax Orbs — GSAP ScrollTrigger
   Each orb drifts at a different speed as you scroll
   ═══════════════════════════════════════════ */
interface OrbConfig {
  top: string;
  left?: string;
  right?: string;
  size: string;
  blur: string;
  opacity: string;
  speed: number; // pixels of parallax per scroll unit
}

const orbs: OrbConfig[] = [
  { top: '12%', left: '8%', size: 'w-[350px] h-[350px]', blur: 'blur-[120px]', opacity: 'bg-[#00AEEF]/[0.22]', speed: 80 },
  { top: '45%', right: '6%', size: 'w-[380px] h-[380px]', blur: 'blur-[130px]', opacity: 'bg-[#00AEEF]/[0.20]', speed: -60 },
  { top: '100%', left: '15%', size: 'w-[320px] h-[320px]', blur: 'blur-[110px]', opacity: 'bg-[#00AEEF]/[0.18]', speed: 100 },
  { top: '130%', right: '10%', size: 'w-[360px] h-[360px]', blur: 'blur-[120px]', opacity: 'bg-[#00AEEF]/[0.16]', speed: -90 },
  { top: '180%', left: '5%', size: 'w-[340px] h-[340px]', blur: 'blur-[115px]', opacity: 'bg-[#00AEEF]/[0.14]', speed: 120 },
  { top: '230%', right: '8%', size: 'w-[300px] h-[300px]', blur: 'blur-[100px]', opacity: 'bg-[#00AEEF]/[0.12]', speed: -70 },
];

export function ParallaxOrbs() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const orbEls = containerRef.current.querySelectorAll<HTMLElement>('.parallax-orb');

    orbEls.forEach((el) => {
      const speed = parseFloat(el.dataset.speed || '50');

      gsap.fromTo(
        el,
        { y: 0 },
        {
          y: speed,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.5,
          },
        },
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {orbs.map((orb, i) => (
        <div
          key={i}
          data-speed={orb.speed}
          className={`parallax-orb absolute rounded-full ${orb.size} ${orb.blur} ${orb.opacity}`}
          style={{ top: orb.top, left: orb.left, right: orb.right }}
        />
      ))}
    </div>
  );
}
