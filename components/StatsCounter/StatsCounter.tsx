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

function AnimatedDivider({ delay }: { delay: number }) {
  const { ref, isVisible } = useInView(0.5);
  return (
    <div ref={ref} className="hidden md:flex items-center justify-center mx-6 lg:mx-8">
      <div
        className="w-px h-0 bg-black/[0.08]"
        style={{
          height: isVisible ? '4rem' : '0px',
          transition: `height 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        }}
      />
    </div>
  );
}

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, isVisible } = useInView(0.3);
  const count = useCountUp(value, isVisible);

  return (
    <div ref={ref} className="flex flex-col items-center text-center px-4 sm:px-8">
      <div className="flex items-baseline gap-0.5 mb-3">
        <span className="text-5xl sm:text-6xl md:text-7xl font-bold text-black tracking-tighter tabular-nums leading-none">
          {count}
        </span>
        <span className="text-4xl sm:text-5xl md:text-6xl font-bold gradient-text leading-none">{suffix}</span>
      </div>
      <div
        className="w-0 h-0.5 bg-[#00AEEF] rounded-full mb-4 opacity-60"
        style={{
          width: isVisible ? '2.5rem' : '0px',
          transition: 'width 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s',
        }}
      />
      <span className="text-black/45 text-xs sm:text-sm font-medium tracking-wide uppercase">{label}</span>
    </div>
  );
}

export default function StatsCounter() {
  return (
    <section className="relative w-full py-20 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[#f8f9fb] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-0">
          {stats.map((stat, i) => (
            <React.Fragment key={i}>
              <StatItem {...stat} />
              {i < stats.length - 1 && <AnimatedDivider delay={i * 150} />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
