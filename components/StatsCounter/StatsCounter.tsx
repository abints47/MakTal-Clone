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

function StatCard({ value, suffix, label, desc, index }: { value: number; suffix: string; label: string; desc: string; index: number }) {
  const { ref, isVisible } = useInView(0.3);
  const count = useCountUp(value, isVisible);

  return (
    <div 
      ref={ref} 
      className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl border border-black/[0.08] bg-[#f8f9fb] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_30px_-6px_rgba(0,0,0,0.06)] hover:border-black/[0.15] transition-all duration-300 overflow-hidden"
    >
      {/* Top subtle corner gradient accent on hover */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/5 to-cyan-500/0 rounded-bl-full pointer-events-none transition-opacity duration-300 group-hover:opacity-100 opacity-0" />

      <div>
        <div className="flex items-baseline gap-1 mb-4">
          <span className="text-4xl sm:text-5xl font-extrabold text-black tracking-tight tabular-nums">
            {count}
          </span>
          <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">
            {suffix}
          </span>
        </div>
        <h3 className="text-base font-semibold text-black mb-1.5 tracking-tight">
          {label}
        </h3>
      </div>
      
      <p className="text-black/40 text-xs sm:text-sm leading-relaxed border-t border-black/[0.06] pt-4 mt-4">
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
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/10 bg-[#f8f9fb] text-black/60 text-xs font-mono tracking-[0.22em] uppercase mb-6 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4461F2]" />
              Performance Metrics
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight">
              Results That{' '}
              <span className="italic text-black/40">Speak</span>{' '}
              For Themselves
            </h2>
          </div>
        </ScrollReveal>

        {/* Stat Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {stats.map((stat, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <StatCard
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                desc={stat.desc}
                index={i}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}