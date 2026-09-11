'use client';

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ProjectCardProps {
  title: string;
  desc: string;
  image: string;
  video: string;
  url: string;
  tags?: string[];
  index?: number;
}

export default function ProjectCard({
  title,
  image,
  video,
  url,
  tags = ['Web', 'Design', 'Development'],
  index = 0,
}: ProjectCardProps) {
  const cardRef    = useRef<HTMLDivElement>(null);
  const imgRef     = useRef<HTMLDivElement>(null);
  const videoRef   = useRef<HTMLVideoElement>(null);
  const [hovered, setHovered] = useState(false);

  /* ── GSAP clip-path wipe-in from bottom ── */
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const ctx = gsap.context(() => {
      gsap.set(card, { clipPath: 'inset(100% 0% 0% 0% round 1.5rem)', opacity: 1 });

      gsap.to(card, {
        clipPath: 'inset(0% 0% 0% 0% round 1.5rem)',
        duration: 1.2,
        ease: 'expo.out',
        delay: index * 0.15,
        scrollTrigger: {
          trigger: card,
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
      });
    }, card);

    return () => ctx.revert();
  }, [index]);

  /* ── Inner image parallax: image moves up slightly as you scroll through ── */
  useEffect(() => {
    const img  = imgRef.current;
    const card = cardRef.current;
    if (!img || !card) return;

    const st = ScrollTrigger.create({
      trigger: card,
      start: 'top bottom',
      end: 'bottom top',
      onUpdate: (self) => {
        const offset = (self.progress - 0.5) * -60;
        gsap.set(img, { y: offset });
      },
    });

    return () => st.kill();
  }, []);

  /* ── Video on hover ── */
  const onEnter = () => {
    setHovered(true);
    videoRef.current?.play().catch(() => {});
  };
  const onLeave = () => {
    setHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const tagLine = tags.join(' • ').toUpperCase();

  return (
    <div ref={cardRef} className="w-full opacity-100">
      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="group block w-full"
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      >
        {/* ── Image frame ── */}
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900 border border-white/5">

          {/* Parallax wrapper — small bleed so parallax has room to shift */}
          <div
            ref={imgRef}
            className="absolute inset-0 will-change-transform"
            style={{ top: '-2%', bottom: '-2%', left: 0, right: 0 }}
          >
            <img
              src={image}
              alt={title}
              className={`w-full h-full object-cover object-[center_top] scale-[1.04] sm:scale-[0.99] transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
                ${hovered ? 'scale-[1.10] sm:scale-[1.13]' : ''}`}
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <video
              ref={videoRef}
              src={video}
              muted
              loop
              playsInline
              className={`absolute inset-0 w-full h-full object-cover object-[center_top] transition-opacity duration-500
                ${hovered ? 'opacity-100' : 'opacity-0'}`}
            />
          </div>


          {/* Hover: subtle dark scrim at bottom for legibility */}
          <div
            className={`absolute inset-0 bg-linera-to-t from-black/30 to-transparent
              transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
          />

          {/* Hover: arrow badge top-right */}
          <div
            className={`absolute top-4 right-4 w-10 h-10 rounded-full
              bg-white/90 backdrop-blur-sm flex items-center justify-center
              transition-all duration-500 ease-out
              ${hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              className="w-4 h-4 text-slate-900 -rotate-45"
            >
              <line x1="5" y1="19" x2="19" y2="5" />
              <polyline points="5 5 19 5 19 19" />
            </svg>
          </div>
        </div>

        {/* ── Meta row below image ── */}
        <div className="mt-5 px-1">
          {/* Tags */}
          <p className="text-white/40 text-[11px] font-medium tracking-[0.18em] mb-2 leading-none">
            {tagLine}
          </p>

          {/* Title */}
          <h3
            className={`text-2xl sm:text-3xl lg:text-[2rem] font-bold text-white
              leading-tight tracking-tight transition-colors duration-300
              ${hovered ? 'text-[#00AEEF]' : 'text-white'}`}
          >
            {title}
          </h3>
        </div>
      </Link>
    </div>
  );
}
