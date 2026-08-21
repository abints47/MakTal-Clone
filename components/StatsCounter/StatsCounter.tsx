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
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, target, duration]);

  return count;
}

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const count = useCountUp(value, isVisible);

  return (
    <div ref={ref} className="text-center">
      <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#cbfb45] tabular-nums">
        {count}
        {suffix}
      </span>
      <p className="mt-2 text-slate-400 text-xs sm:text-sm tracking-wide">
        {label}
      </p>
    </div>
  );
}

export default function StatsCounter() {
  return (
    <section className="w-full py-14 sm:py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <StatItem key={i} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
