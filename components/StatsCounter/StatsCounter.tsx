'use client';

import React, { useEffect, useRef, useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';

const stats = [
  { value: 550, suffix: '+', label: 'Projects Delivered', desc: 'Enterprise apps & web platforms shipped globally.' },
  { value: 400, suffix: '+', label: 'Active Clients', desc: 'Long-term partnerships across 12 countries.' },
  { value: 11, suffix: 'yrs', label: 'Years of Experience', desc: 'Continuous innovation since 2015.' },
  { value: 100, suffix: '%', label: 'Project Completion', desc: 'Driven by rigorous quality and transparent communication.' },
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

function useInView(threshold = 0.2) {
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

function StatItem({ value, suffix, label, desc }: { value: number; suffix: string; label: string; desc: string }) {
  const { ref, isVisible } = useInView(0.2);
  const count = useCountUp(value, isVisible, 1500);

  return (
    <div
      ref={ref}
      className="flex flex-col py-12 md:py-16 border-t border-slate-200 group"
    >
      <div className="flex items-start gap-1 mb-8 overflow-hidden">
        <span 
          className="text-7xl sm:text-8xl lg:text-[10rem] font-light text-slate-900 tracking-tighter tabular-nums leading-none transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ transform: isVisible ? 'translateY(0)' : 'translateY(100%)' }}
        >
          {count}
        </span>
        <span 
          className="text-3xl sm:text-4xl lg:text-5xl font-light text-(--brand) leading-none mt-2 lg:mt-6 transition-transform duration-[1.2s] delay-100 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ transform: isVisible ? 'translateY(0)' : 'translateY(100%)' }}
        >
          {suffix}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 items-start">
        <h3 className="text-xl sm:text-2xl font-medium text-slate-900 tracking-tight">
          {label}
        </h3>
        <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-xs">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default function StatsCounter() {
  return (
    <section className="w-full py-24 sm:py-32 lg:py-40 bg-white">
      <div className="max-w-350 mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
          
          {/* Header Area */}
          <div className="w-full lg:w-5/12 lg:sticky lg:top-32 h-fit">
            <ScrollReveal>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-slate-900 tracking-tight leading-[1.05]">
                Results <br className="hidden lg:block" />
                that speak <br className="hidden lg:block" />
                for themselves
              </h2>
              <p className="mt-8 text-slate-500 text-lg sm:text-xl leading-relaxed max-w-md">
                Our track record is built on delivering high-impact digital solutions and fostering long-term partnerships with our clients globally.
              </p>
            </ScrollReveal>
          </div>

          {/* Stats List */}
          <div className="w-full lg:w-7/12">
            <div className="flex flex-col border-b border-slate-200">
              {stats.map((stat, i) => (
                <StatItem
                  key={i}
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  desc={stat.desc}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}