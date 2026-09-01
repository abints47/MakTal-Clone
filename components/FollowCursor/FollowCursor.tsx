'use client';

import React, { useEffect } from 'react';

interface FollowCursorProps {
  zIndex?: number;
}

/**
 * Returns the perceived luminance of an RGB triplet (0–255 each).
 * Uses the WCAG relative luminance formula.
 */
function getLuminance(r: number, g: number, b: number): number {
  const [rs, gs, bs] = [r, g, b].map((c) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

/**
 * Walks up the DOM from `el` to find the first ancestor (or self) whose
 * computed background-color is not `rgba(0, 0, 0, 0)` / transparent,
 * and returns its RGB values.
 */
function getEffectiveBg(el: Element): { r: number; g: number; b: number } {
  let current: Element | null = el;
  while (current && current !== document.documentElement) {
    const bg = getComputedStyle(current).backgroundColor;
    if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') {
      const match = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      if (match) {
        return { r: +match[1], g: +match[2], b: +match[3] };
      }
    }
    current = current.parentElement;
  }
  // Fallback: assume dark background (#050505)
  return { r: 5, g: 5, b: 5 };
}

const FollowCursor: React.FC<FollowCursorProps> = ({ zIndex }) => {
  useEffect(() => {
    let canvas: HTMLCanvasElement;
    let context: CanvasRenderingContext2D | null;
    let animationFrame: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let cursor = { x: width / 2, y: height / 2 };
    let dotColor = '#ffffffa6'; // start white (dark bg assumed)
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    );

    class Dot {
      position: { x: number; y: number };
      width: number;
      lag: number;

      constructor(x: number, y: number, width: number, lag: number) {
        this.position = { x, y };
        this.width = width;
        this.lag = lag;
      }

      moveTowards(
        x: number,
        y: number,
        ctx: CanvasRenderingContext2D,
        color: string
      ) {
        this.position.x += (x - this.position.x) / this.lag;
        this.position.y += (y - this.position.y) / this.lag;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(
          this.position.x,
          this.position.y,
          this.width,
          0,
          2 * Math.PI
        );
        ctx.fill();
        ctx.closePath();
      }
    }

    const dot = new Dot(width / 2, height / 2, 5, 10);

    const onMouseMove = (e: MouseEvent) => {
      cursor.x = e.clientX;
      cursor.y = e.clientY;

      // Detect background under cursor
      const el = document.elementFromPoint(e.clientX, e.clientY);
      if (el) {
        const bg = getEffectiveBg(el);
        const lum = getLuminance(bg.r, bg.g, bg.b);
        // Luminance > 0.5 → light bg → use dark dot; otherwise white dot
        dotColor = lum > 0.5 ? '#323232a6' : '#ffffffa6';
      }
    };

    const onWindowResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      if (canvas) {
        canvas.width = width;
        canvas.height = height;
      }
    };

    const updateDot = () => {
      if (context) {
        context.clearRect(0, 0, width, height);
        dot.moveTowards(cursor.x, cursor.y, context, dotColor);
      }
    };

    const loop = () => {
      updateDot();
      animationFrame = requestAnimationFrame(loop);
    };

    const init = () => {
      if (prefersReducedMotion.matches) return;

      canvas = document.createElement('canvas');
      context = canvas.getContext('2d');
      canvas.style.position = 'fixed';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.pointerEvents = 'none';
      canvas.width = width;
      canvas.height = height;
      canvas.style.zIndex = zIndex ? zIndex.toString() : '9997';
      document.body.appendChild(canvas);

      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('resize', onWindowResize);
      loop();
    };

    const destroy = () => {
      if (canvas) canvas.remove();
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onWindowResize);
    };

    prefersReducedMotion.onchange = () => {
      if (prefersReducedMotion.matches) {
        destroy();
      } else {
        init();
      }
    };

    init();

    return () => {
      destroy();
    };
  }, [zIndex]);

  return null;
};

export default FollowCursor;
