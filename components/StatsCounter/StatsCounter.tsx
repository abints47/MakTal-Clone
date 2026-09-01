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

function StatItem({ value, suffix, label, desc }: { value: number; suffix: string; label: string; desc: string; index: number; isLast: boolean }) {
  const { ref, isVisible } = useInView(0.3);
  const count = useCountUp(value, isVisible);

  return (
    <div
      ref={ref}
      className="group relative flex flex-col justify-between p-8 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#00AEEF]/40 transition-all duration-500 hover:bg-white hover:-translate-y-2 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-[#00AEEF]/10"
    >
      {/* Absolute glow effect on hover */}
      <div className="absolute inset-0 rounded-2xl bg-linear-to-b from-[#00AEEF]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div>
        <div className="flex items-baseline gap-1 mb-4">
          <span className="text-5xl sm:text-6xl font-black text-slate-900 tracking-tight tabular-nums leading-none transition-transform duration-300 group-hover:scale-105 inline-block origin-left">
            {count}
          </span>
          <span className="text-2xl sm:text-3xl font-bold text-[#00AEEF] leading-none transition-transform duration-300 group-hover:scale-110 inline-block">
            {suffix}
          </span>
        </div>

        <h3 className="text-base font-semibold text-slate-800 tracking-tight mb-2 transition-colors duration-300 group-hover:text-[#00AEEF]">
          {label}
        </h3>
      </div>

      <p className="text-slate-500 text-xs sm:text-sm leading-relaxed border-t border-slate-200 pt-4 mt-2 transition-colors duration-300 group-hover:text-slate-700">
        {desc}
      </p>
    </div>
  );
}

export default function StatsCounter() {
  return (
    <section className="relative w-full py-24 sm:py-32 bg-white overflow-hidden">
      {/* Background radial gradient glows with slow pulse animation */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00AEEF]/5 blur-[140px] pointer-events-none rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] bg-indigo-500/5 blur-[120px] pointer-events-none rounded-full animate-pulse" style={{ animationDuration: '4s' }} />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Results That{' '}
              <span className="bg-linear-to-r from-[#00AEEF] via-indigo-500 to-indigo-600 bg-clip-text text-transparent italic inline-block animate-pulse">
                Speak
              </span>{' '}
              For Themselves
            </h2>
          </div>
        </ScrollReveal>

        {/* Stats Grid Cards */}
        <ScrollReveal delay={100}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
        </ScrollReveal>
      </div>
    </section>
  );
}