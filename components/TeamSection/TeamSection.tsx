'use client';

import React, { useEffect, useRef } from 'react';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';

const teamImages = [
  { src: 'https://maktalseo.com/wp-content/uploads/2025/02/Maktal-team-working-in-office.png', alt: 'Team collaborating at desks', label: 'Collaboration' },
  { src: 'https://maktalseo.com/wp-content/uploads/2025/02/Maktal-team-sitting-around-table-chatting.png', alt: 'Team meeting around table', label: 'Strategy' },
  { src: 'https://maktalseo.com/wp-content/uploads/2025/02/Maktal-team-brainstorming-ideas.png', alt: 'Team brainstorming session', label: 'Ideation' },
  { src: 'https://maktalseo.com/wp-content/uploads/2025/02/Maktal-office-interior.png', alt: 'Office interior', label: 'Workspace' },
];

/* Unique style per card: width, height, rotation, parallax speed, vertical offset */
const cardLayouts = [
  { w: '44%', h: '22rem', rotate: -2.5, speed: 0.05,  mt: '0',    mb: '' },
  { w: '52%', h: '18rem', rotate: 1.8,  speed: -0.04, mt: '6rem', mb: '' },
  { w: '48%', h: '20rem', rotate: -1.2, speed: 0.04,  mt: '-2rem', mb: '' },
  { w: '56%', h: '17rem', rotate: 2,    speed: -0.03, mt: '4rem', mb: '' },
];

export default function TeamSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imgRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const onScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const sectionCenter = rect.top + rect.height / 2;
      const viewCenter = window.innerHeight / 2;
      const delta = sectionCenter - viewCenter;

      imgRefs.current.forEach((el) => {
        if (!el) return;
        const speed = parseFloat(el.dataset.speed || '0');
        const rotate = parseFloat(el.dataset.rotate || '0');
        const offset = delta * speed;
        el.style.transform = `translateY(${offset}px) rotate(${rotate}deg)`;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div ref={sectionRef} className="relative w-full bg-white rounded-t-[2.5rem] sm:rounded-t-[3rem] overflow-hidden py-20 sm:py-28 lg:py-36">
      {/* Header */}
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
            <p className="mt-5 text-slate-500 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              We have a well-educated team of designers, developers, and digital marketing experts who deliver high-quality work tailored to your needs.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* === Row 1: two images, offset and varied === */}
      <ScrollReveal delay={200}>
        <div className="hidden md:flex justify-center items-start gap-6 px-6 sm:px-8 lg:px-12 w-full max-w-[1400px] mx-auto">
          {/* Card 1 */}
          <div style={{ width: cardLayouts[0].w, marginTop: cardLayouts[0].mt }} className="shrink-0">
            <ScrollReveal delay={240}>
              <div
                ref={(el) => { imgRefs.current[0] = el; }}
                data-speed={cardLayouts[0].speed}
                data-rotate={cardLayouts[0].rotate}
                className="group relative rounded-2xl overflow-hidden border border-slate-900/10 shadow-2xl shadow-slate-900/15 will-change-transform transition-[box-shadow,border-color] duration-500 hover:shadow-[0_8px_40px_rgba(0,174,239,0.18)] hover:border-[#00AEEF]/30"
                style={{ height: cardLayouts[0].h }}
              >
                <img src={teamImages[0].src} alt={teamImages[0].alt} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]" />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/5 to-transparent" />
                <span className="absolute bottom-4 left-5 text-white/0 group-hover:text-white/90 text-sm font-medium tracking-wide transition-all duration-500 translate-y-3 group-hover:translate-y-0">
                  {teamImages[0].label}
                </span>
              </div>
            </ScrollReveal>
          </div>

          {/* Card 2 */}
          <div style={{ width: cardLayouts[1].w, marginTop: cardLayouts[1].mt }} className="shrink-0">
            <ScrollReveal delay={320}>
              <div
                ref={(el) => { imgRefs.current[1] = el; }}
                data-speed={cardLayouts[1].speed}
                data-rotate={cardLayouts[1].rotate}
                className="group relative rounded-2xl overflow-hidden border border-slate-900/10 shadow-2xl shadow-slate-900/15 will-change-transform transition-[box-shadow,border-color] duration-500 hover:shadow-[0_8px_40px_rgba(0,174,239,0.18)] hover:border-[#00AEEF]/30"
                style={{ height: cardLayouts[1].h }}
              >
                <img src={teamImages[1].src} alt={teamImages[1].alt} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]" />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/5 to-transparent" />
                <span className="absolute bottom-4 left-5 text-white/0 group-hover:text-white/90 text-sm font-medium tracking-wide transition-all duration-500 translate-y-3 group-hover:translate-y-0">
                  {teamImages[1].label}
                </span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </ScrollReveal>

      {/* === Row 2: two images, different offsets === */}
      <ScrollReveal delay={380}>
        <div className="hidden md:flex justify-center items-start gap-6 px-6 sm:px-8 lg:px-12 w-full max-w-[1400px] mx-auto mt-6">
          {/* Card 3 */}
          <div style={{ width: cardLayouts[2].w, marginTop: cardLayouts[2].mt }} className="shrink-0">
            <ScrollReveal delay={420}>
              <div
                ref={(el) => { imgRefs.current[2] = el; }}
                data-speed={cardLayouts[2].speed}
                data-rotate={cardLayouts[2].rotate}
                className="group relative rounded-2xl overflow-hidden border border-slate-900/10 shadow-2xl shadow-slate-900/15 will-change-transform transition-[box-shadow,border-color] duration-500 hover:shadow-[0_8px_40px_rgba(0,174,239,0.18)] hover:border-[#00AEEF]/30"
                style={{ height: cardLayouts[2].h }}
              >
                <img src={teamImages[2].src} alt={teamImages[2].alt} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]" />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/5 to-transparent" />
                <span className="absolute bottom-4 left-5 text-white/0 group-hover:text-white/90 text-sm font-medium tracking-wide transition-all duration-500 translate-y-3 group-hover:translate-y-0">
                  {teamImages[2].label}
                </span>
              </div>
            </ScrollReveal>
          </div>

          {/* Card 4 */}
          <div style={{ width: cardLayouts[3].w, marginTop: cardLayouts[3].mt }} className="shrink-0">
            <ScrollReveal delay={500}>
              <div
                ref={(el) => { imgRefs.current[3] = el; }}
                data-speed={cardLayouts[3].speed}
                data-rotate={cardLayouts[3].rotate}
                className="group relative rounded-2xl overflow-hidden border border-slate-900/10 shadow-2xl shadow-slate-900/15 will-change-transform transition-[box-shadow,border-color] duration-500 hover:shadow-[0_8px_40px_rgba(0,174,239,0.18)] hover:border-[#00AEEF]/30"
                style={{ height: cardLayouts[3].h }}
              >
                <img src={teamImages[3].src} alt={teamImages[3].alt} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]" />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/5 to-transparent" />
                <span className="absolute bottom-4 left-5 text-white/0 group-hover:text-white/90 text-sm font-medium tracking-wide transition-all duration-500 translate-y-3 group-hover:translate-y-0">
                  {teamImages[3].label}
                </span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </ScrollReveal>

      {/* Mobile — vertical stack */}
      <ScrollReveal delay={200}>
        <div className="md:hidden flex flex-col gap-4 px-5">
          {teamImages.map((img, i) => (
            <ScrollReveal key={i} delay={240 + i * 80} direction="scale">
              <div className="relative h-48 rounded-2xl overflow-hidden border border-slate-900/10 shadow-lg shadow-slate-900/10">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-4 text-white/70 text-sm font-medium">{img.label}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </ScrollReveal>

      {/* CTA */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <ScrollReveal delay={560}>
          <div className="mt-16 text-center">
            <a
              href="#about"
              className="inline-flex items-center justify-center px-7 py-2.5 rounded-full border border-slate-900/15 bg-transparent text-slate-600 text-sm font-medium tracking-wide transition-all duration-300 hover:border-[#00AEEF]/50 hover:text-[#00AEEF] hover:bg-[#00AEEF]/10"
            >
              Learn More
            </a>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
