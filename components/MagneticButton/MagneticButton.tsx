'use client';

import React, { useRef, useEffect, useCallback } from 'react';
import { gsap } from 'gsap';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  /** How far the wrapper travels toward the cursor (ratio). Default 0.35 */
  strength?: number;
  /** How far the inner content travels for depth. Default 0.18 */
  innerStrength?: number;
}

/**
 * Magnetic button effect using GSAP quickTo for silky-smooth tracking:
 *  - quickTo pre-caches the setter so each mousemove costs almost nothing
 *  - expo.out gives a smooth deceleration as the element follows the cursor
 *  - elastic.out on leave creates the satisfying spring-back snap
 */
export default function MagneticButton({
  children,
  className = '',
  strength = 0.35,
  innerStrength = 0.18,
}: MagneticButtonProps) {
  const wrapRef  = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  // quickTo setters — created once, reused on every mousemove (zero overhead)
  const qx  = useRef<ReturnType<typeof gsap.quickTo> | null>(null);
  const qy  = useRef<ReturnType<typeof gsap.quickTo> | null>(null);
  const qix = useRef<ReturnType<typeof gsap.quickTo> | null>(null);
  const qiy = useRef<ReturnType<typeof gsap.quickTo> | null>(null);
  const qs  = useRef<ReturnType<typeof gsap.quickTo> | null>(null);

  useEffect(() => {
    if (!wrapRef.current || !innerRef.current) return;

    // Outer wrapper — follows cursor smoothly
    qx.current  = gsap.quickTo(wrapRef.current,  'x', { duration: 0.65, ease: 'expo.out' });
    qy.current  = gsap.quickTo(wrapRef.current,  'y', { duration: 0.65, ease: 'expo.out' });
    qs.current  = gsap.quickTo(wrapRef.current,  'scale', { duration: 0.4, ease: 'expo.out' });

    // Inner content — moves slightly less (layered depth)
    qix.current = gsap.quickTo(innerRef.current, 'x', { duration: 0.75, ease: 'expo.out' });
    qiy.current = gsap.quickTo(innerRef.current, 'y', { duration: 0.75, ease: 'expo.out' });
  }, []);

  const getOffset = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = wrapRef.current!.getBoundingClientRect();
    return {
      dx: e.clientX - (rect.left + rect.width  / 2),
      dy: e.clientY - (rect.top  + rect.height / 2),
    };
  };

  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const { dx, dy } = getOffset(e);
    qx.current?.(dx * strength);
    qy.current?.(dy * strength);
    qix.current?.(dx * innerStrength);
    qiy.current?.(dy * innerStrength);
  }, [strength, innerStrength]);

  const onEnter = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    qs.current?.(1.1);
    onMove(e);
  }, [onMove]);

  const onLeave = useCallback(() => {
    // Spring back — elastic gives the satisfying magnetic snap
    gsap.to(wrapRef.current,  { x: 0, y: 0, scale: 1, duration: 0.9, ease: 'elastic.out(1, 0.35)' });
    gsap.to(innerRef.current, { x: 0, y: 0,            duration: 0.9, ease: 'elastic.out(1, 0.35)' });
  }, []);

  return (
    <div
      ref={wrapRef}
      className={`inline-block will-change-transform cursor-pointer ${className}`}
      onMouseMove={onMove}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <div ref={innerRef} className="will-change-transform">
        {children}
      </div>
    </div>
  );
}
