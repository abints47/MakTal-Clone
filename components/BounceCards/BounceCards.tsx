'use client';

import { useEffect, useRef, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface BounceCardsProps {
  className?: string;
  images?: string[];
  containerWidth?: number;
  containerHeight?: number;
  animationDelay?: number;
  animationStagger?: number;
  easeType?: string;
  transformStyles?: string[];
  enableHover?: boolean;
  cardSize?: number;
  cardWidth?: number;
  cardHeight?: number;
}

function parseTransform(str: string): { rotation: number; x: number; y: number } {
  let rotation = 0;
  let x = 0;
  let y = 0;

  const rotMatch = str.match(/rotate\(([-0-9.]+)deg\)/);
  if (rotMatch) rotation = parseFloat(rotMatch[1]);

  const transMatch = str.match(/translate\(([-0-9.]+)px(?:,\s*([-0-9.]+)px)?\)/);
  if (transMatch) {
    x = parseFloat(transMatch[1]);
    if (transMatch[2]) y = parseFloat(transMatch[2]);
  }

  const transXMatch = str.match(/translateX\(([-0-9.]+)px\)/);
  if (transXMatch) x = parseFloat(transXMatch[1]);

  return { rotation, x, y };
}

export default function BounceCards({
  className = '',
  images = [],
  containerWidth = 860,
  containerHeight = 480,
  animationDelay = 0.2,
  animationStagger = 0.08,
  easeType = 'elastic.out(1, 0.75)',
  transformStyles = [
    'rotate(6deg) translate(-240px)',
    'rotate(2deg) translate(-120px)',
    'rotate(-5deg) translate(0px)',
    'rotate(4deg) translate(120px)',
    'rotate(-6deg) translate(240px)'
  ],
  enableHover = true,
  cardSize = 320,
  cardWidth,
  cardHeight,
}: BounceCardsProps) {
  const finalWidth = cardWidth || cardSize;
  const finalHeight = cardHeight || Math.round(cardSize * 1.35);

  const containerRef = useRef<HTMLDivElement>(null);
  const resetTimerRef = useRef<NodeJS.Timeout | null>(null);

  const parsedStyles = useMemo(() => {
    return transformStyles.map((style) => parseTransform(style));
  }, [transformStyles]);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      images.forEach((_, i) => {
        const base = parsedStyles[i] || { rotation: 0, x: 0, y: 0 };
        const el = containerRef.current?.querySelector(`.card-${i}`);
        if (!el) return;

        // Set initial GPU transform properties
        gsap.set(el, {
          x: base.x,
          y: base.y,
          rotation: base.rotation,
          scale: 0,
          opacity: 0,
          transformOrigin: 'center center',
          force3D: true,
        });

        // Entrance bounce animation
        gsap.to(el, {
          scale: 1,
          opacity: 1,
          duration: 1.1,
          delay: animationDelay + i * animationStagger,
          ease: easeType,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });
      });
    }, containerRef);

    return () => {
      ctx.revert();
      if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
    };
  }, [animationDelay, animationStagger, easeType, images, parsedStyles]);

  const pushSiblings = (hoveredIdx: number) => {
    if (!enableHover || !containerRef.current) return;
    if (resetTimerRef.current) {
      clearTimeout(resetTimerRef.current);
      resetTimerRef.current = null;
    }

    const pushDistance = Math.round(cardSize * 0.78);

    images.forEach((_, i) => {
      const el = containerRef.current?.querySelector(`.card-${i}`);
      if (!el) return;

      const base = parsedStyles[i] || { rotation: 0, x: 0, y: 0 };

      if (i === hoveredIdx) {
        // Smoothly straighten, elevate, and expand the active card
        gsap.to(el, {
          x: base.x,
          y: -14,
          rotation: 0,
          scale: 1.07,
          zIndex: 40,
          duration: 0.55,
          ease: 'power3.out',
          overwrite: 'auto',
        });
      } else {
        const offset = i < hoveredIdx ? -pushDistance : pushDistance;
        const distFromHovered = Math.abs(hoveredIdx - i);
        const waveDelay = (distFromHovered - 1) * 0.025;

        // Smooth wave dispersal for neighbor cards
        gsap.to(el, {
          x: base.x + offset,
          y: 0,
          rotation: base.rotation * 1.12,
          scale: 0.96,
          zIndex: Math.max(1, 15 - distFromHovered),
          duration: 0.55,
          delay: Math.max(0, waveDelay),
          ease: 'power3.out',
          overwrite: 'auto',
        });
      }
    });
  };

  const resetSiblings = () => {
    if (!enableHover || !containerRef.current) return;

    if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
    resetTimerRef.current = setTimeout(() => {
      images.forEach((_, i) => {
        const el = containerRef.current?.querySelector(`.card-${i}`);
        if (!el) return;

        const base = parsedStyles[i] || { rotation: 0, x: 0, y: 0 };

        gsap.to(el, {
          x: base.x,
          y: base.y,
          rotation: base.rotation,
          scale: 1,
          zIndex: 1,
          duration: 0.6,
          ease: 'power3.out',
          overwrite: 'auto',
        });
      });
    }, 45); // slight debounce eliminates jitter when cursor moves between cards
  };

  return (
    <div
      className={`relative flex items-center justify-center will-change-transform ${className}`}
      ref={containerRef}
      style={{
        width: containerWidth,
        height: containerHeight,
      }}
    >
      {images.map((src, idx) => (
        <div
          key={idx}
          className={`card card-${idx} absolute rounded-[28px] overflow-hidden cursor-pointer select-none border border-white/15 bg-slate-900 shadow-[0_20px_50px_rgba(0,0,0,0.65)] hover:border-[#00AEEF]/50 transition-all duration-500 hover:shadow-[0_24px_60px_rgba(0,174,239,0.25)]`}
          style={{
            width: `${finalWidth}px`,
            height: `${finalHeight}px`,
            zIndex: 1,
          }}
          onMouseEnter={() => pushSiblings(idx)}
          onMouseLeave={resetSiblings}
        >
          <img
            className="w-full h-full object-cover pointer-events-none transition-transform duration-700 ease-out hover:scale-105"
            src={src}
            alt={`card-${idx}`}
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}

