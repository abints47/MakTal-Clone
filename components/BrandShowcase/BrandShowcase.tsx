'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ─── Statement Presets ───
 * Each preset is a powerful, paragraph-length quote/manifesto
 * designed to dominate the screen with large editorial type.
 */
export const STATEMENT_PRESETS = {
  // Option 1: Visionary Craft & Brand Elevation (Active Default)
  creative: {
    words: [
      { text: 'We', style: 'bold' as const },
      { text: 'believe', style: 'bold' as const },
      { text: 'extraordinary', style: 'script' as const },
      { text: 'digital', style: 'script' as const },
      { text: 'products', style: 'bold' as const },
      { text: 'are', style: 'bold' as const },
      { text: 'never', style: 'bold' as const },
      { text: 'built', style: 'bold' as const },
      { text: 'by', style: 'bold' as const },
      { text: 'chance', style: 'bold' as const },
      { text: 'they', style: 'bold' as const },
      { text: 'are', style: 'bold' as const },
      { text: 'forged', style: 'script' as const },
      { text: 'at', style: 'bold' as const },
      { text: 'the', style: 'bold' as const },
      { text: 'intersection', style: 'bold' as const },
      { text: 'of', style: 'bold' as const },
      { text: 'fearless', style: 'bold' as const },
      { text: 'design,', style: 'script' as const },
      { text: 'robust', style: 'bold' as const },
      { text: 'engineering,', style: 'bold' as const },
      { text: 'and', style: 'bold' as const },
      { text: 'relentless', style: 'bold' as const },
      { text: 'ambition.', style: 'script' as const },
      { text: 'We', style: 'bold' as const },
      { text: 'don’t', style: 'bold' as const },
      { text: 'just', style: 'bold' as const },
      { text: 'build', style: 'bold' as const },
      { text: 'for', style: 'bold' as const },
      { text: 'the', style: 'bold' as const },
      { text: 'present;', style: 'bold' as const },
      { text: 'we', style: 'bold' as const },
      { text: 'craft', style: 'script' as const },
      { text: 'enduring', style: 'script' as const },
      { text: 'digital', style: 'bold' as const },
      { text: 'flagships', style: 'script' as const },
      { text: 'that', style: 'bold' as const },
      { text: 'command', style: 'bold' as const },
      { text: 'attention,', style: 'bold' as const },
      { text: 'elevate', style: 'bold' as const },
      { text: 'visionary', style: 'script' as const },
      { text: 'brands,', style: 'bold' as const },
      { text: 'and', style: 'bold' as const },
      { text: 'scale', style: 'script' as const },
      { text: 'without', style: 'bold' as const },
      { text: 'limits.', style: 'bold' as const },
    ],
    subtext:
      'From visionary architecture to global deployment, we partner with ambitious companies to engineer digital products that redefine their category.',
  },
  // Option 2: High-Engineering, Architecture & Reliability
  engineering: {
    words: [
      { text: 'Great', style: 'bold' as const },
      { text: 'technology', style: 'script' as const },
      { text: 'is', style: 'bold' as const },
      { text: 'invisible', style: 'script' as const },
      { text: 'until', style: 'bold' as const },
      { text: 'it', style: 'bold' as const },
      { text: 'transforms', style: 'script' as const },
      { text: 'everything.', style: 'bold' as const },
      { text: 'At', style: 'bold' as const },
      { text: 'the', style: 'bold' as const },
      { text: 'frontier', style: 'script' as const },
      { text: 'of', style: 'bold' as const },
      { text: 'architectural', style: 'script' as const },
      { text: 'precision', style: 'bold' as const },
      { text: 'and', style: 'bold' as const },
      { text: 'human', style: 'script' as const },
      { text: 'craft,', style: 'script' as const },
      { text: 'we', style: 'bold' as const },
      { text: 'build', style: 'bold' as const },
      { text: 'resilient,', style: 'bold' as const },
      { text: 'enterprise-grade', style: 'script' as const },
      { text: 'digital', style: 'bold' as const },
      { text: 'systems', style: 'bold' as const },
      { text: 'designed', style: 'bold' as const },
      { text: 'to', style: 'bold' as const },
      { text: 'eliminate', style: 'bold' as const },
      { text: 'friction,', style: 'bold' as const },
      { text: 'withstand', style: 'bold' as const },
      { text: 'exponential', style: 'script' as const },
      { text: 'scale,', style: 'script' as const },
      { text: 'and', style: 'bold' as const },
      { text: 'deliver', style: 'bold' as const },
      { text: 'enduring', style: 'script' as const },
      { text: 'performance', style: 'bold' as const },
      { text: 'that', style: 'bold' as const },
      { text: 'never', style: 'bold' as const },
      { text: 'becomes', style: 'bold' as const },
      { text: 'your', style: 'bold' as const },
      { text: 'bottleneck.', style: 'bold' as const },
    ],
    subtext:
      'Engineered with modern stacks, enterprise reliability, and sub-second execution — built to outlast every market cycle.',
  },
  // Option 3: Growth, Authority & Revenue Focus
  growth: {
    words: [
      { text: 'In', style: 'bold' as const },
      { text: 'a', style: 'bold' as const },
      { text: 'digital', style: 'script' as const },
      { text: 'world', style: 'bold' as const },
      { text: 'crowded', style: 'bold' as const },
      { text: 'with', style: 'bold' as const },
      { text: 'noise,', style: 'bold' as const },
      { text: 'true', style: 'bold' as const },
      { text: 'authority', style: 'script' as const },
      { text: 'is', style: 'bold' as const },
      { text: 'won', style: 'bold' as const },
      { text: 'through', style: 'bold' as const },
      { text: 'radical', style: 'bold' as const },
      { text: 'clarity', style: 'script' as const },
      { text: 'and', style: 'bold' as const },
      { text: 'undeniable', style: 'bold' as const },
      { text: 'craft.', style: 'script' as const },
      { text: 'We', style: 'bold' as const },
      { text: 'transform', style: 'bold' as const },
      { text: 'bold', style: 'bold' as const },
      { text: 'visions', style: 'bold' as const },
      { text: 'into', style: 'bold' as const },
      { text: 'high-converting', style: 'script' as const },
      { text: 'digital', style: 'bold' as const },
      { text: 'ecosystems', style: 'script' as const },
      { text: 'engineered', style: 'bold' as const },
      { text: 'for', style: 'bold' as const },
      { text: 'sustainable', style: 'script' as const },
      { text: 'revenue,', style: 'bold' as const },
      { text: 'deeper', style: 'bold' as const },
      { text: 'connection,', style: 'script' as const },
      { text: 'and', style: 'bold' as const },
      { text: 'compounding', style: 'bold' as const },
      { text: 'growth.', style: 'script' as const },
    ],
    subtext:
      'From technical SEO to high-velocity web applications, we build digital assets that turn traffic into measurable enterprise value.',
  },
  // Option 4: Creative Technology & Design Studio
  studio: {
    words: [
      { text: 'Where', style: 'bold' as const },
      { text: 'obsessive', style: 'script' as const },
      { text: 'artistry', style: 'script' as const },
      { text: 'meets', style: 'bold' as const },
      { text: 'mathematical', style: 'bold' as const },
      { text: 'precision,', style: 'script' as const },
      { text: 'the', style: 'bold' as const },
      { text: 'future', style: 'script' as const },
      { text: 'of', style: 'bold' as const },
      { text: 'digital', style: 'bold' as const },
      { text: 'is', style: 'bold' as const },
      { text: 'born.', style: 'bold' as const },
      { text: 'We', style: 'bold' as const },
      { text: 'sculpt', style: 'script' as const },
      { text: 'every', style: 'bold' as const },
      { text: 'pixel,', style: 'bold' as const },
      { text: 'micro-interaction,', style: 'script' as const },
      { text: 'and', style: 'bold' as const },
      { text: 'millisecond', style: 'bold' as const },
      { text: 'of', style: 'bold' as const },
      { text: 'speed', style: 'script' as const },
      { text: 'to', style: 'bold' as const },
      { text: 'architect', style: 'bold' as const },
      { text: 'bespoke', style: 'script' as const },
      { text: 'digital', style: 'bold' as const },
      { text: 'experiences', style: 'script' as const },
      { text: 'that', style: 'bold' as const },
      { text: 'captivate', style: 'script' as const },
      { text: 'culture', style: 'bold' as const },
      { text: 'and', style: 'bold' as const },
      { text: 'lead', style: 'bold' as const },
      { text: 'industries.', style: 'bold' as const },
    ],
    subtext:
      'We obsess over typography, fluid motion, and sub-second load times to deliver unforgettable digital presences.',
  },
  // Option 5: Punchy, Minimalist & Direct
  punchy: {
    words: [
      { text: 'We', style: 'bold' as const },
      { text: "don't", style: 'bold' as const },
      { text: 'believe', style: 'bold' as const },
      { text: 'in', style: 'bold' as const },
      { text: 'cookie-cutter', style: 'bold' as const },
      { text: 'templates', style: 'bold' as const },
      { text: 'or', style: 'bold' as const },
      { text: 'disposable', style: 'bold' as const },
      { text: 'software.', style: 'bold' as const },
      { text: 'We', style: 'bold' as const },
      { text: 'craft', style: 'script' as const },
      { text: 'bespoke', style: 'script' as const },
      { text: 'digital', style: 'script' as const },
      { text: 'flagships', style: 'script' as const },
      { text: 'that', style: 'bold' as const },
      { text: 'command', style: 'bold' as const },
      { text: 'attention,', style: 'bold' as const },
      { text: 'outperform', style: 'script' as const },
      { text: 'the', style: 'bold' as const },
      { text: 'competition,', style: 'bold' as const },
      { text: 'and', style: 'bold' as const },
      { text: 'scale', style: 'script' as const },
      { text: 'fearlessly', style: 'bold' as const },
      { text: 'into', style: 'bold' as const },
      { text: 'the', style: 'bold' as const },
      { text: 'future.', style: 'bold' as const },
    ],
    subtext:
      'Designed with clarity, built with precision, and delivered on time — every single time.',
  },
};

// Set the active preset here ('creative' | 'engineering' | 'growth' | 'studio' | 'punchy')
const CURRENT_PRESET = STATEMENT_PRESETS.creative;

export default function BrandShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const heading = headingRef.current;
    const badge = badgeRef.current;
    const subtext = subtextRef.current;
    if (!container || !heading) return;

    const words = heading.querySelectorAll<HTMLElement>('.philosophy-word');

    const ctx = gsap.context(() => {
      // 1. Badge subtle fade-in
      if (badge) {
        gsap.fromTo(
          badge,
          { opacity: 0, y: 12 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            scrollTrigger: {
              trigger: container,
              start: 'top 82%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // 2. GSAP word-by-word scroll-scrubbed illumination
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top 68%',
          end: 'bottom 42%',
          scrub: 0.7,
          invalidateOnRefresh: true,
        },
      });

      tl.to(words, {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        ease: 'power1.out',
      });

      // 3. Subtext fade-in at the bottom
      if (subtext) {
        gsap.fromTo(
          subtext,
          { opacity: 0, y: 14 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            scrollTrigger: {
              trigger: heading,
              start: 'bottom 78%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, container);

    return () => ctx.revert();
  }, []);

  const words = CURRENT_PRESET.words;
  const subtext = CURRENT_PRESET.subtext;

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-white pt-20 sm:pt-28 pb-24 sm:pb-36 lg:pb-44 overflow-hidden"
    >
      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
        {/* Pill Badge */}
        <div
          ref={badgeRef}
          className="flex justify-center mb-6 sm:mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[#00AEEF] text-sm  tracking-[0.22em] uppercase font-normal">
            Our Philosophy
          </span>
        </div>

        {/* GSAP Scroll-Revealed Headline in Refined Editorial Weight (Reduced Boldness, Zero Blur Glow) */}
        <h2
          ref={headingRef}
          className="text-[clamp(1.55rem,3.2vw,2.85rem)] leading-[1.48] sm:leading-[1.54] font-normal tracking-tight max-w-5xl sm:max-w-6xl mx-auto text-center my-0 text-slate-900"
        >
          {words.map((word, index) => {
            const isScript = word.style === 'script';
            return (
              <span
                key={`${word.text}-${index}`}
                className={`philosophy-word inline-block mr-[0.28em] will-change-[opacity,transform] select-none transition-colors duration-200 ${
                  isScript
                    ? 'italic font-normal text-[#00AEEF] text-[1.03em]'
                    : 'text-slate-800 font-normal sm:font-medium'
                }`}
                style={{
                  fontFamily: isScript ? 'var(--font-playfair), Georgia, serif' : 'inherit',
                  letterSpacing: isScript ? '0.01em' : '-0.02em',
                  opacity: 0.18, // Initial muted state, illuminated cleanly by GSAP ScrollTrigger
                  transform: 'translateY(6px)',
                }}
              >
                {word.text}
              </span>
            );
          })}
        </h2>
      </div>
    </section>
  );
}