'use client';

import { useEffect, useRef } from 'react';

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId = 0;

    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      // Write straight to the DOM (no React state / re-render) so the bar
      // tracks the scroll position on the very next painted frame.
      if (barRef.current) {
        barRef.current.style.width = `${progress}%`;
      }
      if (glowRef.current) {
        glowRef.current.style.left = `calc(${progress}% - 40px)`;
      }
    };

    const requestUpdate = () => {
      if (rafId !== 0) return;
      rafId = requestAnimationFrame(() => {
        rafId = 0;
        update();
      });
    };

    update();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate, { passive: true });

    return () => {
      if (rafId !== 0) cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[2px] z-[9999] pointer-events-none">
      <div
        ref={barRef}
        className="h-full will-change-[width]"
        style={{ background: 'linear-gradient(90deg, #00AEEF, #00AEEF)' }}
      />
      <div
        ref={glowRef}
        className="absolute top-0 h-[2px] w-20 blur-sm opacity-90 will-change-[left]"
        style={{
          left: 'calc(0% - 40px)',
          background: 'linear-gradient(90deg, transparent, #00AEEF, transparent)',
        }}
      />
    </div>
  );
}
