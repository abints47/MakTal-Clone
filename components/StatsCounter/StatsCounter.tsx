'use client';

import React, { useEffect, useRef, useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';

const stats = [
  { value: 40, suffix: '+', label: 'Projects Delivered', desc: 'Enterprise apps & web platforms shipped globally.' },
  { value: 50, suffix: '+', label: 'Active Clients', desc: 'Long-term partnerships across 12 countries.' },
  { value: 11, suffix: 'yrs', label: 'Industry Expertise', desc: 'Continuous innovation since 2015.' },
  { value: 99, suffix: '%', label: 'Client Retention', desc: 'Driven by rigorous quality and transparent communication.' },
];

function useCountUp(target: number, isVisible: boolean, duration = 2000) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isVisible) return;
    let startTime: number | null = null;
    let animationFrame: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) animationFrame = requestAnimationFrame(animate);
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, target, duration]);
  return count;
}

function useInView(threshold = 0.3) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, isVisible };
}

function StatItem({ value, suffix, label, desc, index, isLast }: { value: number; suffix: string; label: string; desc: string; index: number; isLast: boolean }) {
  const { ref, isVisible } = useInView(0.3);
  const count = useCountUp(value, isVisible);

  return (
    <div
      ref={ref}
      className={`group relative flex-1 min-w-0 px-6 sm:px-8 lg:px-10 py-8 text-center ${!isLast ? 'lg:border-r border-black/[0.08]' : ''}`}
    >
      {/* Top accent line on hover */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#00AEEF] rounded-full group-hover:w-12 transition-all duration-500" />

      <div className="flex items-baseline justify-center gap-0.5 mb-3">
        <span className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-black tracking-tight tabular-nums leading-none">
          {count}
        </span>
        <span className="text-2xl sm:text-3xl font-bold text-[#00AEEF] leading-none">
          {suffix}
        </span>
      </div>

      <h3 className="text-sm sm:text-base font-semibold text-black tracking-tight mb-2">
        {label}
      </h3>

      <p className="text-black/35 text-xs sm:text-sm leading-relaxed max-w-[200px] mx-auto">
        {desc}
      </p>
    </div>
  );
}

export default function StatsCounter() {
  return (
    <section className="relative w-full py-16 sm:py-20 overflow-hidden">
      {/* Ambient background glow elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-indigo-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-14 sm:mb-18">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 text-[#00AEEF] text-xs font-mono tracking-[0.22em] uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00AEEF]" />
              Performance Metrics
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight">
              Results That{' '}
              <span className="italic text-[#00AEEF]">Speak</span>{' '}
              For Themselves
            </h2>
          </div>
        </ScrollReveal>

        {/* Horizontal Stats Strip */}
        <ScrollReveal delay={100}>
          <div className="relative bg-[#f8f9fb] rounded-2xl border border-black/[0.06] overflow-hidden">
            {/* Subtle top border accent */}
            <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#00AEEF]/20 to-transparent" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-black/[0.06]">
              {stats.map((stat, i) => (
                <StatItem
                  key={i}
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  desc={stat.desc}
                  index={i}
                  isLast={i === stats.length - 1}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
