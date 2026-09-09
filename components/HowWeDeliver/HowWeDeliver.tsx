'use client';

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ServiceCardData {
  id: string;
  number: string;
  title: string;
  headline: string;
  paragraph: string;
  deliverables: string[];
  action: string;
  theme: 'black' | 'graphite' | 'light';
  accentColor: string;
}

const CARDS: ServiceCardData[] = [
  {
    id: 'product-design',
    number: '01',
    title: 'Digital Product Design',
    headline: 'From concept to scalable product ecosystem.',
    paragraph:
      'We design digital products from early concepts to scalable systems. Combining product strategy, UX and interface design, we help startups and established companies turn complex ideas into clear, usable experiences.',
    deliverables: ['Product Strategy', 'UX Architecture', 'Design Systems', 'Interactive Prototyping'],
    action: 'Explore Product Design',
    theme: 'black',
    accentColor: '#00AEEF',
  },
  {
    id: 'web-design-dev',
    number: '02',
    title: 'Web Design & Development',
    headline: 'High-impact web platforms engineered to convert.',
    paragraph:
      'We create marketing websites that explain products clearly, strengthen brands and support business growth. From structure and content to responsive design and development, every website is built around a specific goal.',
    deliverables: ['Next.js & React', 'High-Velocity APIs', 'Tailwind CSS', 'Sub-Second Speeds'],
    action: 'Explore Web Capabilities',
    theme: 'graphite',
    accentColor: '#6366f1',
  },
  {
    id: 'ux-research',
    number: '03',
    title: 'UX Research & UI Design',
    headline: 'Data-backed human interfaces that drive retention.',
    paragraph:
      'We conduct in-depth user research and design high-converting interfaces backed by behavioral data. Turning user feedback into intuitive, frictionless journeys that elevate customer retention and accelerate brand growth.',
    deliverables: ['User Research', 'Usability Audits', 'Core Web Vitals 95+', 'Conversion Optimization'],
    action: 'Explore UX Research',
    theme: 'light',
    accentColor: '#10b981',
  },
];

/* ─── Card 01 Visual: Vertical Fluted Architectural Glass Columns with Wave Physics ─── */
function FlutedGlassVisual({ visualRef }: { visualRef: React.RefObject<HTMLDivElement | null> }) {
  return (
    <div
      ref={visualRef}
      className="relative w-full h-64 sm:h-72 lg:h-84 flex items-center justify-center lg:justify-end overflow-hidden select-none pointer-events-none pr-0 lg:pr-8 will-change-transform"
    >
      {/* Ambient background glow */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 w-64 h-64 bg-radial from-cyan-500/20 via-indigo-500/10 to-transparent blur-[60px] rounded-full pointer-events-none" />

      {/* Fluted Glass Columns Array */}
      <div className="flex gap-2 sm:gap-3 items-center h-full">
        {[42, 68, 88, 100, 88, 62].map((heightPct, i) => (
          <div
            key={i}
            className="fluted-column w-7 sm:w-10 lg:w-12 rounded-2xl bg-linear-to-b from-white/25 via-white/8 to-white/0 border border-white/15 shadow-[0_16px_36px_rgba(0,0,0,0.65)] backdrop-blur-md will-change-transform"
            style={{
              height: `${heightPct}%`,
              opacity: 0.35 + (i / 6) * 0.65,
              transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            {/* Top specular reflection strip */}
            <div className="w-full h-1/3 bg-linear-to-b from-white/35 to-transparent rounded-t-2xl" />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Card 02 Visual: 3D Faceted Crystal Geometric Prism with Dynamic Lighting ─── */
function CrystalPrismVisual({ visualRef }: { visualRef: React.RefObject<HTMLDivElement | null> }) {
  return (
    <div
      ref={visualRef}
      className="relative w-full h-64 sm:h-72 lg:h-84 flex items-center justify-center lg:justify-end overflow-hidden select-none pointer-events-none pr-0 lg:pr-8 will-change-transform"
    >
      {/* Ambient violet & indigo glow */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 w-64 h-64 bg-radial from-indigo-500/25 via-purple-500/15 to-transparent blur-[60px] rounded-full pointer-events-none" />

      <svg
        viewBox="0 0 340 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="prism-svg w-56 h-56 sm:w-64 sm:h-64 lg:w-76 lg:h-76 drop-shadow-[0_24px_50px_rgba(99,102,241,0.3)] will-change-transform"
      >
        <defs>
          <linearGradient id="prism-facet-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#818cf8" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#6366f1" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#312e81" stopOpacity="0.95" />
          </linearGradient>
          <linearGradient id="prism-facet-2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0.55" />
          </linearGradient>
          <linearGradient id="prism-facet-3" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#c084fc" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#4f46e5" stopOpacity="0.85" />
          </linearGradient>
          <linearGradient id="prism-wire" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#818cf8" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.85" />
          </linearGradient>
        </defs>

        {/* 3D Isometric Crystal Facets */}
        <polygon points="170,30 270,110 170,170 70,110" fill="url(#prism-facet-1)" />
        <polygon points="70,110 170,170 170,290 70,230" fill="url(#prism-facet-2)" />
        <polygon points="170,170 270,110 270,230 170,290" fill="url(#prism-facet-3)" />

        {/* Inner floating prism refraction */}
        <polygon points="170,80 225,120 170,155 115,120" fill="#ffffff" opacity="0.3" />
        <polygon points="115,120 170,155 170,230 115,195" fill="#ffffff" opacity="0.18" />
        <polygon points="170,155 225,120 225,195 170,230" fill="#ffffff" opacity="0.25" />

        {/* Crisp vector wireframe lines */}
        <g stroke="url(#prism-wire)" strokeWidth="1.25" opacity="0.8">
          <line x1="170" y1="30" x2="170" y2="170" />
          <line x1="70" y1="110" x2="170" y2="170" />
          <line x1="270" y1="110" x2="170" y2="170" />
          <line x1="170" y1="170" x2="170" y2="290" />
          <line x1="70" y1="230" x2="170" y2="290" />
          <line x1="270" y1="230" x2="170" y2="290" />
          <line x1="70" y1="110" x2="70" y2="230" />
          <line x1="270" y1="110" x2="270" y2="230" />
        </g>
      </svg>
    </div>
  );
}

/* ─── Card 03 Visual: Minimalist Kinetic Gyroscope Ring with Orbital Physics ─── */
function OrbitalRingVisual({ visualRef }: { visualRef: React.RefObject<HTMLDivElement | null> }) {
  return (
    <div
      ref={visualRef}
      className="relative w-full h-64 sm:h-72 lg:h-84 flex items-center justify-center lg:justify-end overflow-hidden select-none pointer-events-none pr-0 lg:pr-8 will-change-transform"
    >
      {/* Ambient emerald & cyan glow */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 w-64 h-64 bg-radial from-emerald-500/20 via-teal-500/10 to-transparent blur-[60px] rounded-full pointer-events-none" />

      <svg
        viewBox="0 0 340 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="gyro-svg w-56 h-56 sm:w-64 sm:h-64 lg:w-76 lg:h-76 drop-shadow-[0_20px_45px_rgba(16,185,129,0.22)] will-change-transform"
      >
        <defs>
          <linearGradient id="ring-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#00AEEF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#059669" stopOpacity="0.95" />
          </linearGradient>
          <linearGradient id="ring-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#34d399" stopOpacity="0.92" />
            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="ring-wire" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0f172a" stopOpacity="0.75" />
            <stop offset="50%" stopColor="#10b981" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#00AEEF" stopOpacity="0.85" />
          </linearGradient>
        </defs>

        <ellipse cx="170" cy="170" rx="120" ry="55" transform="rotate(-30 170 170)" fill="url(#ring-grad-1)" opacity="0.75" />
        <ellipse cx="170" cy="170" rx="120" ry="55" transform="rotate(35 170 170)" fill="url(#ring-grad-2)" opacity="0.7" />
        <circle cx="170" cy="170" r="48" fill="#0f172a" opacity="0.08" />
        <circle cx="170" cy="170" r="32" fill="url(#ring-grad-1)" opacity="0.92" />
        <circle cx="170" cy="170" r="14" fill="#ffffff" opacity="0.9" />

        <g stroke="url(#ring-wire)" strokeWidth="1.25" opacity="0.75">
          <ellipse cx="170" cy="170" rx="130" ry="60" transform="rotate(-30 170 170)" />
          <ellipse cx="170" cy="170" rx="130" ry="60" transform="rotate(35 170 170)" />
          <line x1="170" y1="40" x2="170" y2="300" />
          <line x1="40" y1="170" x2="300" y2="170" />
        </g>
      </svg>
    </div>
  );
}

export default function HowWeDeliver() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const visualRefs = [
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
  ];

  // Mouse tilt / spotlight state for each card
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const card = cardRefs.current[index];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
    setHoveredCard(index);

    // Subtle 3D perspective tilt
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -3;
    const rotateY = ((x - centerX) / centerX) * 3;

    gsap.to(card, {
      rotateX,
      rotateY,
      duration: 0.4,
      ease: 'power1.out',
      transformPerspective: 1200,
    });
  };

  const handleMouseLeave = (index: number) => {
    setHoveredCard(null);
    const card = cardRefs.current[index];
    if (!card) return;
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.6,
      ease: 'power2.out',
    });
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = cardRefs.current.filter((c): c is HTMLDivElement => c !== null);
    if (cards.length === 0) return;

    const ctx = gsap.context(() => {
      // 1. Buttery smooth card stacking depth animation using GSAP physics scrub
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return; // Last card doesn't need to scale down
        const nextCard = cards[i + 1];

        // Animate card i as nextCard scrolls up over it
        gsap.fromTo(
          card,
          {
            scale: 1,
            y: 0,
            filter: 'brightness(1) blur(0px)',
            opacity: 1,
          },
          {
            scale: 0.92,
            y: -30,
            filter: 'brightness(0.65) blur(1px)',
            opacity: 0.85,
            ease: 'none',
            scrollTrigger: {
              trigger: nextCard,
              start: 'top 85%',
              end: 'top 22%',
              scrub: 0.8, // Buttery smooth physics scrub
              invalidateOnRefresh: true,
            },
          }
        );
      });

      // 2. Parallax motion on Card 01 Fluted Columns
      const flutedCols = container.querySelectorAll('.fluted-column');
      if (flutedCols.length > 0 && cards[0]) {
        gsap.to(flutedCols, {
          y: (i) => (i % 2 === 0 ? -20 : 20),
          stagger: 0.04,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: cards[0],
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: 1,
          },
        });
      }

      // 3. 3D Rotation & Float Parallax on Card 02 Crystal Prism
      const prismSvg = container.querySelector('.prism-svg');
      if (prismSvg && cards[1]) {
        gsap.to(prismSvg, {
          rotate: 22,
          y: -25,
          scale: 1.05,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: cards[1],
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: 1,
          },
        });
      }

      // 4. Kinetic Spin Parallax on Card 03 Gyroscope
      const gyroSvg = container.querySelector('.gyro-svg');
      if (gyroSvg && cards[2]) {
        gsap.to(gyroSvg, {
          rotate: 45,
          scale: 1.06,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: cards[2],
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: 1,
          },
        });
      }

      // 5. Staggered card content entry animation
      cards.forEach((card) => {
        const elementsToReveal = card.querySelectorAll('.card-reveal-elem');
        if (elementsToReveal.length > 0) {
          gsap.fromTo(
            elementsToReveal,
            { opacity: 0, y: 22 },
            {
              opacity: 1,
              y: 0,
              stagger: 0.08,
              duration: 0.7,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 82%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        }
      });
    }, container);

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      id="how-we-deliver"
      className="relative w-full bg-white pt-20 sm:pt-28 pb-28 sm:pb-40 overflow-visible rounded-t-[3rem] sm:rounded-t-[4rem] lg:rounded-t-[5rem] 2xl:rounded-t-[6rem] shadow-2xl shadow-slate-200/50"
    >
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="inline-flex items-center  px-4 py-1.5 rounded-full  text-[#00AEEF] text-xl tracking-wider font-semibold mb-5">
            How We Deliver
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-950 leading-[1.12]">
            Architecting digital products that{' '}
            <span className="gradient-text">scale seamlessly</span>
          </h2>

          <p className="mt-4 text-slate-500 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed font-normal">
            A battle tested 3 stage methodology combining product strategy, modern cloud architecture, and end-to-end execution.
          </p>
        </div>

        <div className="relative flex flex-col gap-12 sm:gap-16 pb-16">
          {CARDS.map((card, idx) => {
            const isBlack = card.theme === 'black';
            const isGraphite = card.theme === 'graphite';
            const isLight = card.theme === 'light';
            const isCurrentHovered = hoveredCard === idx;

            return (
              <div
                key={card.id}
                ref={(el) => {
                  cardRefs.current[idx] = el;
                }}
                onMouseMove={(e) => handleMouseMove(e, idx)}
                onMouseLeave={() => handleMouseLeave(idx)}
                style={{
                  top: `calc(5.5rem + ${idx * 1.75}rem)`,
                  transformOrigin: 'top center',
                }}
                className={`sticky w-full rounded-3xl sm:rounded-[2.5rem] p-7 sm:p-10 lg:p-14 transition-shadow duration-500 shadow-2xl overflow-hidden will-change-transform ${
                  isBlack
                    ? 'bg-[#09090b] text-white border border-white/10 shadow-black/50'
                    : isGraphite
                    ? 'bg-[#18181b] text-white border border-white/10 shadow-black/40'
                    : 'bg-[#f4f4f5] text-slate-900 border border-slate-300/80 shadow-slate-400/25'
                }`}
              >
                {/* Interactive cursor spotlight sheen on hover */}
                {isCurrentHovered && (
                  <div
                    className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-0"
                    style={{
                      background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, ${
                        isLight ? 'rgba(0, 174, 239, 0.08)' : 'rgba(255, 255, 255, 0.09)'
                      }, transparent 45%)`,
                    }}
                  />
                )}

                <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
                  {/* Left Content Area */}
                  <div className="w-full lg:w-7/12 flex flex-col justify-center text-left">

                    <h3
                      className={`card-reveal-elem text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight leading-snug mb-4 ${
                        isLight ? 'text-slate-950' : 'text-white'
                      }`}
                    >
                      {card.title}
                    </h3>

                    <p
                      className={`card-reveal-elem text-sm sm:text-base lg:text-[17px] leading-relaxed max-w-xl font-normal mb-6 ${
                        isLight ? 'text-slate-600' : 'text-zinc-300'
                      }`}
                    >
                      {card.paragraph}
                    </p>

                    {/* Deliverable Tags */}
                    <div className="card-reveal-elem flex flex-wrap gap-2 mb-8 max-w-lg">
                      {card.deliverables.map((del) => (
                        <span
                          key={del}
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium transition-colors duration-300 ${
                            isLight
                              ? 'bg-white border border-slate-200 text-slate-700 shadow-xs hover:border-[#00AEEF]/40'
                              : 'bg-white/5 border border-white/10 text-zinc-300 hover:bg-white/10'
                          }`}
                        >
                          <CheckCircle2
                            className="w-3 h-3"
                            style={{ color: card.accentColor }}
                          />
                          {del}
                        </span>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <div className="card-reveal-elem">
                      <Link
                        href="/works"
                        className={`group inline-flex items-center gap-3 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                          isLight
                            ? 'bg-slate-950 text-white hover:bg-[#00AEEF] hover:shadow-lg hover:shadow-[#00AEEF]/20'
                            : 'bg-white text-slate-950 hover:bg-[#00AEEF] hover:text-white hover:shadow-lg hover:shadow-[#00AEEF]/25'
                        }`}
                      >
                        <span>{card.action}</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Side: Visual Sculpture + Big Number */}
                  <div className="w-full lg:w-5/12 flex flex-col items-center lg:items-end justify-between h-full relative">
                    <span
                      className={`absolute top-0 right-0 font-mono text-3xl sm:text-4xl font-light select-none ${
                        isLight ? 'text-slate-300' : 'text-white/25'
                      }`}
                    >
                      {card.number}
                    </span>

                    <div className="w-full pt-8 lg:pt-0">
                      {idx === 0 && <FlutedGlassVisual visualRef={visualRefs[0]} />}
                      {idx === 1 && <CrystalPrismVisual visualRef={visualRefs[1]} />}
                      {idx === 2 && <OrbitalRingVisual visualRef={visualRefs[2]} />}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
