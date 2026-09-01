'use client';

import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ═══════════════════════════════════════════
   GSAP Popup / Upscale on hover
   ═══════════════════════════════════════════ */

function LogoHover({ src, alt }: { src: string; alt: string }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const img = imgRef.current;
    if (!wrapper || !img) return;

    const onEnter = () => {
      gsap.to(img, {
        scale: 1.08,
        duration: 0.5,
        ease: 'elastic.out(1, 0.4)',
      });
    };

    const onLeave = () => {
      gsap.to(img, {
        scale: 1,
        duration: 0.4,
        ease: 'power2.out',
      });
    };

    wrapper.addEventListener('mouseenter', onEnter);
    wrapper.addEventListener('mouseleave', onLeave);

    return () => {
      wrapper.removeEventListener('mouseenter', onEnter);
      wrapper.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="w-56 h-56 sm:w-72 sm:h-72 lg:w-120 lg:h-100 overflow-hidden cursor-pointer"
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className="w-full h-full object-cover border-0 outline-none ring-0 will-change-transform"
        draggable={false}
      />
    </div>
  );
}

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

    /* ── Container rotation: starts tilted, straightens on scroll ── */
    gsap.fromTo(
      el,
      { transformOrigin: '0% 50%', rotate: 3 },
      {
        ease: 'none',
        rotate: 0,
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom bottom',
          scrub: true,
        },
      },
    );

    /* ── Word elements ── */
    const wordElements = el.querySelectorAll<HTMLElement>('.philosophy-word');
    const scriptWords = el.querySelectorAll<HTMLElement>('.philosophy-word.script-word');
    const boldWords = el.querySelectorAll<HTMLElement>('.philosophy-word:not(.script-word)');

    /* ── Opacity: fades in from low to full ── */
    gsap.fromTo(
      wordElements,
      { opacity: 0.1, willChange: 'opacity' },
      {
        ease: 'none',
        opacity: 1,
        stagger: 0.06,
        scrollTrigger: {
          trigger: el,
          start: 'top bottom-=20%',
          end: 'bottom bottom',
          scrub: true,
        },
      },
    );

    /* ── Blur: starts blurred, becomes sharp ── */
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
          end: 'bottom bottom',
          scrub: true,
        },
      },
    );

    /* ── Script words: subtle Y translate reveal (drops in from below) ── */
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
          end: 'bottom bottom',
          scrub: true,
        },
      },
    );

    /* ── Script words: subtle scale-up on scroll (0.92 → 1) ── */
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
          end: 'bottom bottom',
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
      className="text-[clamp(1.4rem,3.5vw,2.6rem)] sm:text-[clamp(1.6rem,3.5vw,3rem)] md:text-[clamp(1.8rem,3.5vw,3.4rem)] lg:text-[clamp(2rem,3.5vw,3.8rem)] leading-[1.7] font-semibold font-sans tracking-tight max-w-5xl mx-auto text-center my-5"
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

  /* ── Clean, subtle scaling for the image showcase ── */
  const logoScale = useTransform(scrollYProgress, [0.05, 0.25, 0.45, 0.65], [0.85, 0.95, 1.02, 1]);
  const logoOpacity = useTransform(scrollYProgress, [0.05, 0.2], [0, 1]);
  const logoBlur = useTransform(scrollYProgress, [0.05, 0.2], [10, 0]);
  const logoFilter = useTransform(logoBlur, (v: number) => `blur(${v}px)`);

  const cardOpacity = useTransform(scrollYProgress, [0, 0.15], [0.8, 1]);

  return (
    <section ref={sectionRef} className="relative w-full bg-white rounded-[4.5rem] overflow-hidden">
      <motion.div
        style={{ opacity: cardOpacity }}
        className="relative overflow-hidden"
      >
        {/* Top visual asset area with no borders */}
        <div className="relative pt-10 sm:pt-10 lg:pt- pb-10 sm:pb-0">
          <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
            <motion.div
              style={{ scale: logoScale, opacity: logoOpacity }}
              className="mb-2 sm:mb-4"
            >
              <div className="inline-flex flex-col items-center">
                <motion.div style={{ filter: logoFilter }}>
                  <LogoHover src="/images/brand-logo.jpg" alt="MakTal Technologies" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom statement section */}
        <div className="relative bg-white pt-2 sm:pt-6 pb-20 sm:pb-28 lg:pt-1 lg:pb-36">
          <div className="relative max-w-8xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 text-[#00AEEF] text-xs font-mono tracking-[0.22em] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00AEEF]" />
                Core Philosophy
              </span>
            </div>
            <AnimatedWords />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
