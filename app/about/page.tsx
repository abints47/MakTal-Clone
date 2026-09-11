'use client';

import React from 'react';
import FloatingNav from "@/components/FloatingNav/FloatingNav";
import Footer from "@/components/Footer/Footer";
import BounceCards from './BounceCards';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';
import MagneticButton from '@/components/MagneticButton/MagneticButton';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  MessageCircle,
  MapPin,
  Code2,
  TrendingUp,
  BarChart3,
  Palette,
  Sparkles
} from "lucide-react";

/* ─── Authentic Team & Studio Photos ─── */
const cultureImages = [
  "https://maktalseo.com/wp-content/uploads/2025/02/Maktal-team-working-in-office.png",
  "https://maktalseo.com/wp-content/uploads/2025/02/Maktal-team-sitting-around-table-chatting.png",
  "https://maktalseo.com/wp-content/uploads/2025/02/Maktal-team-brainstorming-ideas.png",
  "https://maktalseo.com/wp-content/uploads/2025/02/Maktal-office-interior.png",
  "https://maktalseo.com/wp-content/uploads/2025/10/blueterra-travel-website-development-work-1.avif"
];

const transformStyles = [
  "rotate(6deg) translate(-260px)",
  "rotate(2deg) translate(-130px)",
  "rotate(-4deg) translate(0px)",
  "rotate(3deg) translate(130px)",
  "rotate(-6deg) translate(260px)"
];

const stats = [
  { value: "2015", label: "Founded in Mannuthy, Thrissur" },
  { value: "10+",  label: "Years of Digital Craft" },
  { value: "150+", label: "Products & Brands Delivered" },
  { value: "02",   label: "Studios in Kerala (HQ & Kochi)" },
];

const servicesList = [
  {
    num: "01",
    title: "Web Engineering & Next.js",
    desc: "Custom high-performance web applications, responsive platforms, and headless systems built for scale and sub-second load times.",
    tags: ["Next.js", "React.js", "TypeScript", "WordPress", "Tailwind CSS"]
  },
  {
    num: "02",
    title: "Digital Marketing & Paid Ads",
    desc: "Targeted customer acquisition campaigns across Google Ads and Meta with rigorous data tracking, conversion optimization, and clear ROI.",
    tags: ["Google Search & Display", "Meta Ads", "Lead Funnels", "Conversion Rate"]
  },
  {
    num: "03",
    title: "Technical SEO & Organic Authority",
    desc: "Data-driven SEO strategies spanning on-page architecture, Core Web Vitals optimization, and keyword authority to drive compound growth.",
    tags: ["Technical Audits", "Keyword Strategy", "Speed Optimization", "Analytics"]
  },
  {
    num: "04",
    title: "UI/UX & Brand Identity",
    desc: "Human-centered digital product design, clean design systems, and cohesive brand identities tailored for memorable digital impressions.",
    tags: ["Design Systems", "Figma", "Interaction Design", "Brand Guidelines"]
  }
];

const locations = [
  {
    city: "Thrissur",
    role: "Headquarters",
    area: "Mannuthy, Thrissur, Kerala",
    desc: "Our founding home since 2015. Housing our core engineering, design leadership, and strategy hub."
  },
  {
    city: "Ernakulam",
    role: "Studio Office",
    area: "Kochi, Ernakulam, Kerala",
    desc: "Our expansion studio partnering with high-growth businesses, startups, and international clientele."
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#00AEEF] selection:text-black relative overflow-x-hidden">
      <FloatingNav />

      {/* Subtle atmospheric ambient glow (matches site theme) */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-[#00AEEF]/8 blur-[160px] rounded-full translate-x-1/4 -translate-y-1/4" />
        <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-indigo-500/6 blur-[160px] rounded-full -translate-x-1/3" />
      </div>

      <main className="relative z-10">

        {/* ═══════════════════════════════════════════════════
            1. FULL-WIDTH BACKGROUND LANDING HERO
            ═══════════════════════════════════════════════════ */}
        <section className="relative w-full min-h-[85vh] lg:min-h-screen flex items-center justify-center overflow-hidden">
          {/* Full-width background image */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/laptop.jpg"
              alt="MakTal Engineering & Digital Craft"
              className="w-full h-full object-cover object-center"
            />
            {/* Dark overlay & gradients for high contrast readability */}
            <div className="absolute inset-0 bg-black/75 backdrop-blur-[1px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/70" />
            <div className="absolute inset-0 bg-radial from-transparent via-black/40 to-black/90" />
          </div>

          <div className="relative z-10 w-full max-w-[96rem] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 pt-36 sm:pt-40 pb-20 sm:pb-24">
            {/* Section badge */}
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-8">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/15 text-[#00AEEF] text-xs font-mono tracking-widest uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00AEEF] animate-pulse" />
                  ABOUT MAKTAL
                </span>
                <span className="text-white/40 text-xs font-mono tracking-widest uppercase hidden sm:inline-block">
                  EST. AUGUST 2015
                </span>
              </div>
            </ScrollReveal>

            {/* Main big headline */}
            <ScrollReveal delay={80}>
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] xl:text-[6rem] font-bold text-white tracking-tight leading-[1.04] max-w-6xl mb-8 sm:mb-12">
                A Comprehensive Web Development and Digital Marketing Agency
              </h1>
            </ScrollReveal>

            {/* Hero bottom split */}
            <ScrollReveal delay={160}>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pt-8 border-t border-white/15 max-w-6xl">
                <div className="max-w-2xl">
                  <p className="text-white/70 text-base sm:text-lg lg:text-xl font-light leading-relaxed">
                    Registered and recognized company in India with 10+ years of experience in the field serving clients worldwide with clean code and high-impact strategy.
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <MagneticButton strength={0.35} innerStrength={0.18}>
                    <a
                      href="#story"
                      className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/20 bg-black/40 backdrop-blur-md text-white hover:text-white hover:border-[#00AEEF] hover:bg-[#00AEEF]/15 text-xs font-mono uppercase tracking-widest transition-all duration-300"
                    >
                      <span>Read Our Story</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#00AEEF]" />
                    </a>
                  </MagneticButton>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            2. EDITORIAL NUMBERS STRIP
            ═══════════════════════════════════════════════════ */}
        <section className="border-y border-white/10 bg-white/[0.015] py-12 sm:py-16 px-6 sm:px-10 lg:px-16 xl:px-20">
          <div className="max-w-[96rem] mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {stats.map((item, i) => (
                <ScrollReveal key={item.label} delay={i * 80}>
                  <div className="flex flex-col justify-between">
                    <span className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-2 font-mono">
                      {item.value}
                    </span>
                    <span className="text-white/45 text-xs sm:text-sm font-medium tracking-wide">
                      {item.label}
                    </span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            3. WHO WE ARE (Exact matching text & team photo)
            ═══════════════════════════════════════════════════ */}
        <section id="story" className="py-24 sm:py-32 lg:py-40 px-6 sm:px-10 lg:px-16 xl:px-20 max-w-[96rem] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

            {/* Left: Authentic Team Photo Card */}
            <div className="lg:col-span-6">
              <ScrollReveal>
                <div className="group relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden bg-slate-900 border border-white/10 shadow-2xl">
                  <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] w-full overflow-hidden">
                    <img
                      src="https://maktalseo.com/wp-content/uploads/2025/02/Maktal-team-working-in-office.png"
                      alt="MakTal Team In Office"
                      className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                    {/* Clean caption pill */}
                    <div className="absolute bottom-5 left-5 z-10">
                      <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white text-[11px] font-medium tracking-wide">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00AEEF]" />
                        Maktal Team • Mannuthy &amp; Kochi
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: The exact narrative text */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <ScrollReveal delay={80}>
                <span className="inline-block text-[#00AEEF] text-xs font-mono tracking-[0.25em] uppercase mb-4 font-semibold">
                  WHO WE ARE
                </span>
              </ScrollReveal>

              <ScrollReveal delay={120}>
                <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white tracking-tight leading-[1.15] mb-6">
                  A Full Service Web Development and Digital Marketing Company
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={160}>
                <div className="space-y-4 text-white/65 text-sm sm:text-base lg:text-[1.05rem] leading-relaxed font-light mb-8">
                  <p>
                    Our journey was started in August 2015 at Mannuthy, Thrissur in a small office space. Later, we have acquired many clients and more people joined making the team much stronger. We now have offices in Thrissur (Head office) and Ernakulam.
                  </p>
                  <p>
                    We have a well-educated team of designers, developers, and digital marketing experts who deliver high-quality work according to your needs. We always try to deliver awesome results using the best ideas and industry standards. Our trained in-house team is passionate about their work and well adapted to latest technologies.
                  </p>
                </div>
              </ScrollReveal>

              {/* Minimal magnetic chat button */}
              <ScrollReveal delay={200}>
                <div className="flex items-center gap-4">
                  <MagneticButton strength={0.35} innerStrength={0.18}>
                    <a
                      href="https://wa.me/919995544444"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-full border border-white/20 bg-white/5 hover:border-[#00AEEF] hover:bg-[#00AEEF]/10 hover:text-[#00AEEF] text-white text-xs sm:text-sm font-semibold tracking-widest uppercase transition-all duration-300"
                    >
                      <MessageCircle className="w-4 h-4 text-[#00AEEF]" />
                      <span>CHAT WITH US</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </MagneticButton>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            4. STUDIO LIFE / MOMENTS (BounceCards)
            ═══════════════════════════════════════════════════ */}
        <section className="py-20 sm:py-28 lg:py-36 border-t border-white/10 overflow-hidden">
          <div className="max-w-[96rem] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 text-center mb-12 sm:mb-16">
            <ScrollReveal>
              <span className="inline-block text-[#00AEEF] text-xs font-mono tracking-[0.25em] uppercase mb-3 font-semibold">
                CULTURE &amp; MOMENTS
              </span>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
                Life Behind The Creations
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={140}>
              <p className="text-white/50 max-w-xl mx-auto text-sm sm:text-base font-light">
                An authentic glimpse into our studio culture, team syncs, and the people behind every project.
              </p>
            </ScrollReveal>
          </div>

          <div className="w-full flex items-center justify-center py-6 overflow-visible">
            <div className="scale-65 sm:scale-80 md:scale-95 lg:scale-100 origin-center transition-transform">
              <BounceCards
                className="custom-bounceCards"
                images={cultureImages}
                containerWidth={900}
                containerHeight={520}
                cardWidth={340}
                cardHeight={450}
                animationDelay={0.2}
                animationStagger={0.08}
                easeType="elastic.out(1, 0.5)"
                transformStyles={transformStyles}
                enableHover={true}
              />
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            5. CUBERTO-STYLE CAPABILITIES LIST
            ═══════════════════════════════════════════════════ */}
        <section className="py-24 sm:py-32 lg:py-40 border-t border-white/10 px-6 sm:px-10 lg:px-16 xl:px-20 max-w-[96rem] mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-10 mb-16 sm:mb-20">
            <div>
              <span className="inline-block text-[#00AEEF] text-xs font-mono tracking-[0.25em] uppercase mb-3 font-semibold">
                EXPERTISE
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
                What We Do Best
              </h2>
            </div>
            <p className="text-white/50 text-sm sm:text-base max-w-md font-light leading-relaxed">
              We operate as your dedicated digital team — taking complex business goals and turning them into measurable digital outcomes.
            </p>
          </div>

          {/* Minimal hairline list */}
          <div className="divide-y divide-white/10 border-y border-white/10">
            {servicesList.map((svc, idx) => (
              <ScrollReveal key={svc.title} delay={idx * 60}>
                <div className="group py-10 sm:py-14 transition-colors duration-300 hover:bg-white/[0.015] px-2 sm:px-4">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
                    {/* Number */}
                    <div className="lg:col-span-2 text-white/30 text-xs font-mono tracking-widest">
                      {svc.num}
                    </div>

                    {/* Title & Description */}
                    <div className="lg:col-span-6">
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-3 group-hover:text-[#00AEEF] transition-colors duration-300">
                        {svc.title}
                      </h3>
                      <p className="text-white/55 text-sm sm:text-base font-light leading-relaxed max-w-xl">
                        {svc.desc}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end">
                      {svc.tags.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 rounded-full bg-white/5 text-white/50 text-xs font-mono"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            6. LOCATIONS / PRESENCE
            ═══════════════════════════════════════════════════ */}
        <section className="py-20 sm:py-28 border-t border-white/10 px-6 sm:px-10 lg:px-16 xl:px-20 max-w-[96rem] mx-auto">
          <div className="mb-12">
            <span className="inline-block text-[#00AEEF] text-xs font-mono tracking-[0.25em] uppercase mb-2 font-semibold">
              PRESENCE
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Our Studios
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {locations.map((loc) => (
              <div key={loc.city} className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/10">
                <span className="inline-block text-[#00AEEF] text-xs font-mono tracking-widest uppercase mb-2 font-semibold">
                  {loc.role}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">{loc.city}</h3>
                <p className="text-white/70 text-sm mb-4 font-mono">{loc.area}</p>
                <p className="text-white/50 text-sm font-light leading-relaxed">{loc.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            7. CUBERTO-STYLE MINIMAL GIANT CTA
            ═══════════════════════════════════════════════════ */}
        <section className="py-28 sm:py-36 lg:py-48 border-t border-white/10 px-6 sm:px-10 lg:px-16 xl:px-20 text-center">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <span className="text-white/40 text-xs font-mono tracking-widest uppercase mb-6 inline-block">
                HAVE A PROJECT IN MIND?
              </span>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold text-white tracking-tight leading-[1.04] mb-12">
                Let&apos;s build something <span className="text-white/35 font-serif italic font-normal">remarkable.</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={140}>
              <div className="flex justify-center">
                <MagneticButton strength={0.4} innerStrength={0.22}>
                  <a
                    href="https://wa.me/919995544444"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-10 py-4 sm:px-12 sm:py-5 rounded-full bg-white text-black hover:bg-[#00AEEF] hover:text-black font-semibold text-sm sm:text-base tracking-wide transition-all duration-300"
                  >
                    <span>Start a Project</span>
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </MagneticButton>
              </div>
            </ScrollReveal>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
