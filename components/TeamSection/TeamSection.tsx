'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';
import MagneticButton from '@/components/MagneticButton/MagneticButton';


if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/* ─── Image data ─── */
const teamImages = [
  { src: 'https://maktalseo.com/wp-content/uploads/2025/02/Maktal-team-working-in-office.png',            alt: 'Team collaborating at desks', label: 'Deep Work'  },
  { src: 'https://maktalseo.com/wp-content/uploads/2025/02/Maktal-team-sitting-around-table-chatting.png', alt: 'Team meeting around table',   label: 'Team Sync'  },
  { src: 'https://maktalseo.com/wp-content/uploads/2025/02/Maktal-team-brainstorming-ideas.png',          alt: 'Team brainstorming session',  label: 'Brainstorm' },
  { src: 'https://maktalseo.com/wp-content/uploads/2025/02/Maktal-office-interior.png',                   alt: 'Office interior',             label: 'Our Space'  },
];

/* Alternating signs create layered depth while scrolling */
const PARALLAX = [0.06, -0.045, 0.055, -0.04];

/* ─── Stat data for the accent tile ─── */
const stats = [
  { value: 40,  suffix: '+', label: 'Happy Clients' },
  { value: 120, suffix: '+', label: 'Projects Done' },
];

/* ─────────────────────────────────────────
   Reusable card: overflow-hidden container
   + parallax image wrapper (inset -8%)
   + hover label pill + cyan accent bar
   ───────────────────────────────────────── */
interface PanelProps {
  idx: number;
  panelRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
  className?: string;
}

function BentoPanel({ idx, panelRefs, className = '' }: PanelProps) {
  const img = teamImages[idx];
  return (
    <div
      className={`group relative overflow-hidden rounded-[1.6rem]
        ring-1 ring-slate-200/90
        shadow-[0_6px_32px_-6px_rgba(0,0,0,0.13)]
        hover:ring-[#00AEEF]/60
        hover:shadow-[0_20px_60px_-8px_rgba(0,174,239,0.28)]
        transition-[box-shadow,ring-color] duration-700 ease-out
        cursor-pointer ${className}`}
    >
      {/* ─ Parallax wrapper: image is larger than card, shifts on scroll ─ */}
      <div
        ref={(el) => { panelRefs.current[idx] = el; }}
        className="will-change-transform"
        style={{ position: 'absolute', inset: '-8%' }}
      >
        <img
          src={img.src}
          alt={img.alt}
          className="w-full h-full object-cover
                     transition-transform duration-[1.1s] ease-out
                     group-hover:scale-[1.07]"
          loading="lazy"
        />
      </div>

      {/* ─ Index number — mono chip top-left ─ */}
      <div
        className="absolute top-4 left-4 z-10
                   font-mono text-[10px] tracking-widest
                   text-white/90 bg-black/30 backdrop-blur-sm
                   px-2 py-0.5 rounded-full"
      >
        {String(idx + 1).padStart(2, '0')}
      </div>

      {/* ─ Label pill — slides up on hover ─ */}
      <div
        className="absolute bottom-4 left-4 z-10
                   translate-y-3 opacity-0
                   group-hover:translate-y-0 group-hover:opacity-100
                   transition-all duration-500 ease-out"
      >
        <span
          className="inline-flex items-center gap-1.5 px-3 py-1.25
                     rounded-full bg-white/95 backdrop-blur-md
                     border border-slate-200/80 shadow-sm
                     text-slate-700 text-[11px] font-semibold tracking-wide"
        >
          <span className="w-1.75 h-1.75 rounded-full bg-[#00AEEF] shrink-0" />
          {img.label}
        </span>
      </div>

      {/* ─ Cyan sweep bar ─ */}
      <div
        className="absolute inset-x-0 bottom-0 h-0.75 z-10
                   bg-linear-to-r from-transparent via-[#00AEEF] to-transparent
                   scale-x-0 group-hover:scale-x-100
                   transition-transform duration-700 origin-center"
      />
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   Main section
   ═══════════════════════════════════════════════════ */
export default function TeamSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const panelRefs  = useRef<(HTMLDivElement | null)[]>([]);
  const bentoRef   = useRef<HTMLDivElement>(null);
  const tileRefs   = useRef<(HTMLDivElement | null)[]>([]);
  const [activeDot, setActiveDot] = useState(0);

  /* ── Animated stat counters ── */
  const [statValues, setStatValues] = useState([0, 0]);
  const statsTileRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const tile = statsTileRef.current;
    if (!tile) return;

    const ctx = gsap.context(() => {
      gsap.to({ v: 0 }, {
        v: 1,
        duration: 1.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: tile,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        onUpdate: function (this: { progress: () => number }) {
          const p = this.progress();
          setStatValues(stats.map((s) => Math.round(s.value * p)));
        },
      });
    }, tile);

    return () => ctx.revert();
  }, []);

  /* ── Scroll parallax on panels ── */
  useEffect(() => {
    const onScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const delta =
        (section.getBoundingClientRect().top + section.offsetHeight / 2) -
        window.innerHeight / 2;

      panelRefs.current.forEach((el, i) => {
        if (!el) return;
        el.style.transform = `translateY(${delta * PARALLAX[i]}px)`;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── GSAP diagonal clip-path wipe-in — panels reveal top-left → bottom-right ── */
  useEffect(() => {
    const bento = bentoRef.current;
    if (!bento) return;

    const panels = bento.querySelectorAll<HTMLElement>('.bento-panel');

    const ctx = gsap.context(() => {
      gsap.set(panels, { clipPath: 'inset(0% 100% 100% 0% round 1.6rem)', opacity: 1 });

      gsap.to(panels, {
        clipPath: 'inset(0% 0% 0% 0% round 1.6rem)',
        duration: 1.2,
        ease: 'expo.out',
        stagger: 0.14,
        scrollTrigger: {
          trigger: bento,
          start: 'top 82%',
          toggleActions: 'play none none none',
        },
      });
    }, bento);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative w-full bg-white rounded-t-[2.5rem] sm:rounded-t-[3rem] overflow-hidden py-20 sm:py-28 lg:py-36"
    >

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-20">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 text-[#00AEEF] text-xs font-mono tracking-[0.22em] uppercase mb-6">
              Our Team
            </span>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-snug max-w-3xl mx-auto">
              A team of <span className="gradient-text">passionate builders</span> creating digital experiences
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={140}>
            <p className="mt-5 text-slate-500 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-light">
              We have a well-educated team of designers, developers, and digital
              marketing experts who deliver high-quality work tailored to your needs.
            </p>
          </ScrollReveal>
        </div>
      </div>


      {/* ── Desktop: refined bento 2.0 — aligned grid + stats tile ── */}
      <div
        ref={bentoRef}
        className="hidden md:grid
                   px-6 sm:px-10 lg:px-16 xl:px-20
                   w-full max-w-384 mx-auto
                   grid-cols-12 gap-3"
        style={{ gridTemplateRows: '22rem 15rem' }}
      >

        {/* ─ 01 — tall anchor panel, left ─ */}
        <div className="col-span-5 row-span-2 bento-panel">
          <BentoPanel idx={0} panelRefs={panelRefs} className="w-full h-full" />
        </div>

        {/* ─ 02 — wide panel, top middle ─ */}
        <div className="col-span-4 row-span-1 bento-panel">
          <BentoPanel idx={1} panelRefs={panelRefs} className="w-full h-full" />
        </div>

        {/* ─ 03 — stats tile, top right ─ */}
        <div
          className="col-span-3 row-span-1 bento-panel"
          ref={(el) => { statsTileRef.current = el; }}
        >
          <div
            className="w-full h-full rounded-[1.6rem]
                       border border-[#00AEEF]/25 bg-[#00AEEF]/[0.04]
                       flex flex-col items-center justify-center gap-3
                       ring-1 ring-transparent hover:ring-[#00AEEF]/50
                       hover:bg-[#00AEEF]/[0.07] transition-all duration-500"
          >
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                  {statValues[i]}
                  <span className="text-[#00AEEF]">{s.suffix}</span>
                </div>
                <div className="text-slate-500 text-[11px] font-mono tracking-[0.18em] uppercase mt-0.5">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─ 04 — wide panel, bottom middle-left ─ */}
        <div className="col-span-7 row-span-1 bento-panel">
          <BentoPanel idx={2} panelRefs={panelRefs} className="w-full h-full" />
        </div>

        {/* ─ 05 — bottom right ─ */}
        <div className="col-span-5 row-span-1 bento-panel">
          <BentoPanel idx={3} panelRefs={panelRefs} className="w-full h-full" />
        </div>

      </div>

      {/* ── Mobile: snap carousel with dots ── */}
      <div
        className="md:hidden relative px-5"
        ref={(el) => { tileRefs.current[4] = el; }}
      >
        <div
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory
                     pb-4 -mx-5 px-5
                     [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          onScroll={(e) => {
            const el = e.currentTarget;
            const tile = el.scrollWidth / teamImages.length;
            setActiveDot(Math.min(teamImages.length - 1, Math.round(el.scrollLeft / tile)));
          }}
        >
          {teamImages.map((img, i) => (
            <ScrollReveal key={i} delay={120 + i * 80}>
              <div
                ref={(el) => { tileRefs.current[i] = el; }}
                className="group relative shrink-0 w-[78vw] max-w-[340px] h-60
                           rounded-2xl overflow-hidden ring-1 ring-slate-200 shadow-md
                           snap-center"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover
                             transition-transform duration-700 ease-out
                             group-hover:scale-[1.06]"
                  loading="lazy"
                />
                <div
                  className="absolute top-3 left-3 font-mono text-[10px] tracking-widest
                             text-white/90 bg-black/30 backdrop-blur-sm px-2 py-0.5 rounded-full"
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div
                  className="absolute inset-x-0 bottom-0 h-0.75
                             bg-linear-to-r from-transparent via-[#00AEEF] to-transparent
                             scale-x-0 group-hover:scale-x-100
                             transition-transform duration-700 origin-center" />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* ─ dot indicators ─ */}
        <div className="flex justify-center gap-2 mt-2">
          {teamImages.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300
                          ${activeDot === i ? 'w-6 bg-[#00AEEF]' : 'w-1.5 bg-slate-300'}`}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <ScrollReveal delay={560}>
          <div className="mt-16 text-center">
            <MagneticButton strength={0.38} innerStrength={0.2}>
              <a
                href="#about"
                className="inline-flex items-center justify-center px-7 py-2.5 rounded-full
                           border border-slate-900/15 bg-transparent text-slate-600 text-sm
                           tracking-wide transition-all duration-300
                           hover:border-[#00AEEF]/50 hover:text-[#00AEEF] hover:bg-[#00AEEF]/10
                           font-normal"
              >
                Learn More
              </a>
            </MagneticButton>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}