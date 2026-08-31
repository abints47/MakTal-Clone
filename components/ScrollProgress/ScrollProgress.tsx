'use client';

import React, { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    updateScrollProgress();

    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[2px] z-[9999] pointer-events-none">
      <div
        className="h-full transition-[width] duration-150 ease-out"
        style={{
          width: `${scrollProgress}%`,
          background: 'linear-gradient(90deg, #00D4FF, #7C3AED)',
        }}
      />
      <div
        className="absolute top-0 h-[2px] w-20 blur-sm opacity-90 transition-[left] duration-150 ease-out"
        style={{
          left: `calc(${scrollProgress}% - 40px)`,
          background: 'linear-gradient(90deg, transparent, #00D4FF, transparent)',
        }}
      />
    </div>
  );
}
