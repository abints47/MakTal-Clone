'use client';

import React, { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 500, suffix: '+', label: 'Projects Delivered' },
  { value: 150, suffix: '+', label: 'Happy Clients' },
  { value: 11, suffix: '+', label: 'Years Experience' },
  { value: 20, suffix: '+', label: 'Team Members' },
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

function StatItem({ value, suffix, label, index }: { value: number; suffix: string; label: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  const count = useCountUp(value, isVisible);
  return (
    <div ref={ref} className="text-center group">
      <div className="glass-card rounded-2xl p-6 sm:p-8 transition-all duration-500 group-hover:border-[#00AEEF]/20 group-hover:shadow-lg group-hover:shadow-[#00AEEF]/5">
        <span className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text tabular-nums">
          {count}{suffix}
        </span>
        <p className="mt-3 text-black/40 text-xs sm:text-sm tracking-wide font-medium">{label}</p>
      </div>
    </div>
  );
}

export default function StatsCounter() {
  return (
    <section className="w-full py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-5 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, i) => (
            <StatItem key={i} {...stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
