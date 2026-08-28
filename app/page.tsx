'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Phone, Lightbulb, Code2, Rocket, ArrowRight, CheckCircle2, Sparkles, Globe, TrendingUp, Zap, Shield, Users, BarChart3 } from 'lucide-react';
import Link from 'next/link';
import Footer from '@/components/Footer/Footer';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';
import WhatsAppFloat from '@/components/WhatsAppFloat/WhatsAppFloat';
import BlogSection from '@/components/BlogSection/BlogSection';
import GoogleReviews from '@/components/GoogleReviews/GoogleReviews';
import TeamSection from '@/components/TeamSection/TeamSection';
import StatsCounter from '@/components/StatsCounter/StatsCounter';
import GlowCard from '@/components/GlowCard/GlowCard';
import FloatingNav from '@/components/FloatingNav/FloatingNav';
import BlurText from '@/components/bits/BlurText';

const services = [
  {
    icon: Globe,
    title: 'Website Development',
    description: 'Custom-built, responsive websites using Next.js, React, and WordPress — designed to convert visitors into customers.',
    color: '#00AEEF',
    tags: ['Next.js', 'React', 'WordPress'],
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    description: 'Strategic campaigns across Google Ads, Meta, and social media to amplify your brand reach and drive qualified traffic.',
    color: '#0077B6',
    tags: ['Google Ads', 'Meta', 'Social'],
  },
  {
    icon: BarChart3,
    title: 'SEO Optimization',
    description: 'Data-driven SEO strategies that boost your search rankings, increase organic traffic, and deliver long-term growth.',
    color: '#00AEEF',
    tags: ['Technical SEO', 'Content', 'Analytics'],
  },
];

const processSteps = [
  { icon: Lightbulb, label: 'Strategy', desc: 'Deep dive into your goals, audience, and market to craft a winning strategy.', step: '01', color: '#00AEEF' },
  { icon: Code2, label: 'Build', desc: 'Design and develop your solution with cutting-edge technology and pixel-perfect execution.', step: '02', color: '#0077B6' },
  { icon: Rocket, label: 'Launch', desc: 'Deploy, optimize, and scale — we grow with you post-launch.', step: '03', color: '#00AEEF' },
];

const features = [
  { icon: Zap, title: 'Lightning Fast', desc: 'Optimized performance with sub-second load times.' },
  { icon: Shield, title: 'Enterprise Security', desc: 'Bank-grade security to protect your data.' },
  { icon: Users, title: 'Dedicated Support', desc: '24/7 expert support whenever you need us.' },
  { icon: BarChart3, title: 'Analytics Driven', desc: 'Data-backed decisions for maximum ROI.' },
];

const projects = [
  { title: 'BlueTerra, UAE', desc: 'Boutique travel company website developed in Next.js and Python', image: 'https://maktalseo.com/wp-content/uploads/2025/10/blueterra-travel-website-development-work-1.avif', url: 'https://www.myblueterra.com/' },
  { title: 'Drizzla, USA', desc: 'Outcome-as-a-Service partner website developed in React.js and Python', image: 'https://maktalseo.com/wp-content/uploads/2025/10/drizzla-react-js-website-development-1.avif', url: 'https://www.drizzla.com/' },
  { title: 'Solo Flowers, UAE', desc: 'Flower delivery E-commerce website development in WordPress and WooCommerce.', image: 'https://maktalseo.com/wp-content/uploads/2025/10/solo-flowers-ecommerce-website-development.avif', url: 'https://www.soloflowers.ae' },
  { title: 'World of Appliances, Bahrain', desc: 'WordPress based E-commerce website with Shipping and Payment options.', image: 'https://maktalseo.com/wp-content/uploads/2025/10/ecommerce-development-wordpress.avif', url: 'https://www.worldofappliancesbh.com/' },
];

const techStack = ['Next.js', 'React', 'WordPress', 'Python', 'Node.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'];

const textsToCycle = ['Logo Design', 'Social Media', 'Mobile-App Development', 'Website Development', 'Design Services', 'Digital Marketing', 'SEO Optimization'];

export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayBrandingText, setDisplayBrandingText] = useState(textsToCycle[0]);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setCurrentIndex((p) => (p + 1) % textsToCycle.length), 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*';
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayBrandingText(
        textsToCycle[currentIndex]
          .split('')
          .map((l, i) => (l === ' ' ? ' ' : i < iteration ? textsToCycle[currentIndex][i] : chars[Math.floor(Math.random() * chars.length)]))
          .join('')
      );
      if (iteration >= textsToCycle[currentIndex].length) clearInterval(interval);
      iteration += 0.5;
    }, 30);
    return () => clearInterval(interval);
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((p) => (p + 1) % services.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black font-sans relative overflow-x-hidden">

      {/* ═══ FLOATING NAV ═══ */}
      <FloatingNav />

      {/* ═══ HERO SECTION ═══ */}
      <section className="relative w-full h-[50vh] sm:h-[60vh] md:h-[80vh] lg:h-screen min-h-140 overflow-hidden flex flex-col justify-between bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.45),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.25),transparent_30%),linear-gradient(135deg,#0a0a0b_0%,#141416_40%,#0f1112_100%)]">
        {/* Video Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video autoPlay loop muted playsInline poster="/images/it.jpg" className="w-full h-full object-cover" style={{ filter: 'saturate(0.85) contrast(1.1) brightness(0.5)' }}>
            <source src="https://assets.mixkit.co/videos/46635/46635-720.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[#0a0a0b]/40" />
          {/* Blue accent glows on video */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,174,239,0.12),transparent_60%)]" />
        </div>

        {/* Floating dots on video */}
        <div className="absolute top-32 left-[15%] w-2 h-2 rounded-full bg-[#00AEEF] animate-float opacity-40 z-10" />
        <div className="absolute top-48 right-[20%] w-3 h-3 rounded-full bg-[#00AEEF] animate-float opacity-30 z-10" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-40 left-[25%] w-1.5 h-1.5 rounded-full bg-[#00AEEF] animate-float opacity-50 z-10" style={{ animationDelay: '1s' }} />
        <div className="absolute top-60 left-[60%] w-2.5 h-2.5 rounded-full bg-[#00AEEF]/50 animate-float z-10" style={{ animationDelay: '3s' }} />

        {/* Orbit rings on video */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 md:w-200 md:h-200 pointer-events-none z-10">
          <div className="absolute inset-0 rounded-full border border-white/4 animate-spin-slow" />
          <div className="absolute inset-12 rounded-full border border-[#00AEEF]/0.08 animate-spin-slow" style={{ animationDuration: '30s', animationDirection: 'reverse' }} />
          <div className="absolute inset-24 rounded-full border border-white/0.03 animate-spin-slow" style={{ animationDuration: '25s' }} />
        </div>

        {/* Content on video */}
        <div className="relative z-20 max-w-5xl mx-auto px-5 sm:px-6 text-center my-auto flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-[#00AEEF] text-xs font-medium tracking-widest uppercase mb-8 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00AEEF] animate-pulse" />
              MAKTAL TECHNOLOGIES
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[82px] font-bold text-white tracking-tight leading-[1.05] mb-6"
          >
            We Build <br className="hidden sm:inline" />
            <span className="text-[#00AEEF]">Digital Experiences</span>
            <br className="hidden sm:inline" />
            That Scale
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-white/50 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            From stunning websites to powerful digital marketing — we craft solutions that transform businesses and drive measurable growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#contact"
              className="btn-brand group px-8 py-3.5 rounded-full text-sm font-semibold flex items-center gap-2"
            >
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#works"
              className="group px-8 py-3.5 rounded-full border border-white/20 bg-white/5 text-white/80 font-medium text-sm tracking-wide transition-all duration-300 hover:border-[#00AEEF]/40 hover:text-white backdrop-blur-sm"
            >
              View Our Work
            </a>
          </motion.div>

          {/* Tech stack pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-16 sm:mt-20 flex flex-wrap justify-center gap-2 sm:gap-3"
          >
            {techStack.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + i * 0.08 }}
                className="px-3 py-1.5 rounded-lg border border-white/8 bg-white/4 text-white/30 text-[11px] font-medium tracking-wide backdrop-blur-sm"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="relative z-20 pb-4 sm:pb-6"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-white/20 text-[10px] tracking-widest uppercase">Scroll</span>
            <div className="w-5 h-8 rounded-full border border-white/15 flex items-start justify-center pt-1.5">
              <div className="w-1 h-2 rounded-full bg-[#00AEEF] animate-float" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* ═══ TRUSTED BY MARQUEE ═══ */}
      <section className="relative w-full py-12 sm:py-16 overflow-hidden border-y border-black/6 bg-[#f8f9fb]">
        <div className="absolute inset-0 bg-linear-to-r from-white via-transparent to-white z-10 pointer-events-none" />
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, setIdx) => (
            <React.Fragment key={setIdx}>
              {['Next.js', 'React', 'WordPress', 'Python', 'Node.js', 'TypeScript', 'Tailwind CSS', 'Shopify', 'WooCommerce', 'Google Ads', 'Meta Ads', 'SEO'].map((tech, i) => (
                <span key={`${setIdx}-${i}`} className="inline-flex items-center gap-3 mx-8 text-black/15 text-sm font-medium tracking-wide">
                  <Sparkles className="w-3 h-3 text-[#00AEEF]/40" />
                  {tech}
                </span>
              ))}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* ═══ ABOUT SECTION ═══ */}
      <section id="about" className="relative w-full py-24 sm:py-32 lg:py-40">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00AEEF]/15 bg-[#00AEEF]/5 text-[#0077B6] text-xs font-medium tracking-widest uppercase mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00AEEF] animate-pulse" />
              About Us
            </span>
          </ScrollReveal>
          <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-1 mb-4">
            <BlurText text="At" delay={80} animateBy="words" direction="bottom" threshold={0.2} stepDuration={0.4} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-black leading-snug tracking-tight text-center" />
            <BlurText text="MakTal Technologies," delay={80} animateBy="words" direction="bottom" threshold={0.2} stepDuration={0.4} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold gradient-text leading-snug tracking-tight text-center" />
          </div>
          <BlurText text="we craft digital experiences that inspire, connect, and drive meaningful growth." delay={80} animateBy="words" direction="bottom" threshold={0.2} stepDuration={0.4} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-black/30 leading-snug tracking-tight text-center" />

          <ScrollReveal delay={200}>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {features.map((feature, i) => (
                <div key={i} className="bg-[#f8f9fb] rounded-xl p-4 text-center border border-black/6 transition-all duration-300 hover:border-[#00AEEF]/20 hover:shadow-lg hover:shadow-[#00AEEF]/5 group">
                  <feature.icon className="w-5 h-5 mx-auto mb-2 text-black/15 group-hover:text-[#00AEEF] transition-colors" />
                  <span className="text-[11px] text-black/40 font-medium">{feature.title}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ SERVICES SECTION ═══ */}
      <section id="services" className="relative w-full py-24 sm:py-32 lg:py-40 bg-[#f8f9fb]">
        <div className="absolute top-0 right-0 w-125 h-125 bg-[#00AEEF]/4 rounded-full blur-[200px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16 sm:mb-20">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00AEEF]/15 bg-[#00AEEF]/5 text-[#0077B6] text-xs font-medium tracking-widest uppercase mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00AEEF] animate-pulse" />
                What We Do
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight">
                Services Built for{' '}
                <span className="gradient-text">Growth</span>
              </h2>
              <p className="mt-5 text-black/35 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
                End-to-end digital solutions to take your business from idea to launch — and beyond.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <ScrollReveal key={index} delay={index * 150}>
                <GlowCard
                  glowColor={`${service.color}12`}
                  className="h-full"
                >
                  <div className="bg-white rounded-2xl p-6 sm:p-8 h-full border border-black/6 shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-[#00AEEF]/5 hover:border-[#00AEEF]/15 group">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110"
                      style={{ backgroundColor: `${service.color}10`, border: `1px solid ${service.color}20` }}
                    >
                      <service.icon className="w-6 h-6" style={{ color: service.color }} />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-black tracking-tight mb-3 group-hover:text-[#00AEEF] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-black/40 text-sm leading-relaxed mb-5">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md bg-[#f8f9fb] border border-black/6 text-black/30 text-[10px] font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </GlowCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROCESS SECTION ═══ */}
      <section className="relative w-full py-24 sm:py-32">
        <div className="absolute inset-0 bg-linear-to-b from-white via-[#00AEEF]/2 to-white pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16 sm:mb-20">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0077B6]/15 bg-[#0077B6]/5 text-[#0077B6] text-xs font-medium tracking-widest uppercase mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0077B6] animate-pulse" />
                Our Process
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight">
                How We <span className="gradient-text">Deliver</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-[16%] right-[16%] h-px -translate-y-1/2">
              <div className="w-full h-full bg-linear-to-r from-[#00AEEF]/20 via-[#0077B6]/15 to-[#00AEEF]/20" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {processSteps.map((item, i) => (
                <ScrollReveal key={i} delay={i * 200}>
                  <div className="group relative flex flex-col items-center text-center">
                    <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-2xl bg-white border border-black/8 flex flex-col items-center justify-center space-y-3 transition-all duration-500 group-hover:border-[#00AEEF]/20 group-hover:shadow-xl group-hover:shadow-[#00AEEF]/5 mb-6">
                      <div className="absolute top-3 left-3 text-[10px] font-mono text-black/10 group-hover:text-[#00AEEF]/30 transition-colors">
                        {item.step}
                      </div>
                      <div
                        className="p-3 rounded-xl transition-all duration-500"
                        style={{ backgroundColor: `${item.color}10` }}
                      >
                        <item.icon className="w-7 h-7" style={{ color: item.color }} />
                      </div>
                      <span className="text-black text-sm font-semibold tracking-wide">{item.label}</span>
                    </div>
                    <p className="text-black/35 text-sm leading-relaxed max-w-xs">{item.desc}</p>
                    <div
                      className="hidden md:block absolute bottom-0 w-3 h-3 rounded-full border-2 bg-white transition-all duration-500"
                      style={{ borderColor: item.color, boxShadow: `0 0 10px ${item.color}30` }}
                    />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ STATS ═══ */}
      <StatsCounter />

      {/* ═══ WORKS SECTION ═══ */}
      <section id="works" className="relative w-full py-24 sm:py-32 lg:py-40">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14 sm:mb-20">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00AEEF]/15 bg-[#00AEEF]/5 text-[#0077B6] text-xs font-medium tracking-widest uppercase mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00AEEF] animate-pulse" />
                Our Work
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight">
                Featured <span className="gradient-text">Projects</span>
              </h2>
              <p className="mt-4 text-black/35 text-sm sm:text-base max-w-lg mx-auto">
                A selection of projects we&apos;ve delivered across industries.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="group relative bg-white rounded-2xl overflow-hidden border border-black/6 shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-[#00AEEF]/5 hover:border-[#00AEEF]/15 hover:-translate-y-1 flex flex-col">
                  <div className="relative w-full h-52 sm:h-60 md:h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-white/60 z-10" />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => {
                        const t = e.currentTarget;
                        t.style.display = 'none';
                      }}
                    />
                  </div>
                  <div className="p-5 sm:p-6 flex flex-col grow justify-between space-y-3">
                    <div className="space-y-2">
                      <h3 className="text-base sm:text-lg font-bold text-black group-hover:text-[#00AEEF] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-black/40 text-xs sm:text-sm leading-relaxed">{project.desc}</p>
                    </div>
                    <Link
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-black/30 hover:text-[#00AEEF] font-medium text-xs sm:text-sm transition-colors group/link"
                    >
                      <span>Visit Website</span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={200}>
            <div className="flex justify-center mt-12">
              <Link
                href="/works"
                className="group inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-black/1 bg-transparent text-black/60 font-medium text-sm tracking-wide transition-all duration-300 hover:border-[#00AEEF]/30 hover:text-[#00AEEF] hover:bg-[#00AEEF]/5"
              >
                View All Projects
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ TEAM ═══ */}
      <TeamSection />

      {/* ═══ BLOG ═══ */}
      <BlogSection />

      {/* ═══ CTA SECTION ═══ */}
      <section className="relative w-full py-24 sm:py-32 lg:py-40 bg-[#f8f9fb]">
        <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="relative rounded-3xl overflow-hidden">
              <div className="absolute inset-0 rounded-3xl p-px bg-linear-to-r from-[#00AEEF]/40 via-[#0077B6]/40 to-[#00AEEF]/40" style={{ backgroundSize: '300% 300%', animation: 'gradient-border-shift 6s ease infinite' }}>
                <div className="absolute inset-0 rounded-3xl bg-white" />
              </div>
              <div className="relative rounded-3xl bg-white p-10 sm:p-14 lg:p-20 shadow-sm">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-75 h-75 bg-[#00AEEF]/5 rounded-full blur-[100px] pointer-events-none" />

                <h2 className="relative text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight mb-5">
                  Have Something{' '}
                  <span className="gradient-text">in Mind?</span>
                </h2>
                <p className="relative text-black/40 text-sm sm:text-base leading-relaxed max-w-lg mx-auto mb-10">
                  We build custom websites and digital marketing solutions that grow your business and attract more customers. Let&apos;s create something extraordinary together.
                </p>
                <a
                  href="#contact"
                  className="btn-brand relative inline-flex items-center justify-center px-10 py-4 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 group"
                >
                  <span className="flex items-center gap-2">
                    Talk to Us
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ GOOGLE REVIEWS ═══ */}
      <GoogleReviews />

      {/* ═══ CONTACT SECTION ═══ */}
      <section id="contact" className="relative w-full py-24 sm:py-32 lg:py-40">
        <div className="absolute inset-0 bg-linear-to-b from-white via-[#00AEEF]/2 to-white pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14 sm:mb-20">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00AEEF]/15 bg-[#00AEEF]/5 text-[#0077B6] text-xs font-medium tracking-widest uppercase mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00AEEF] animate-pulse" />
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight">
                Let&apos;s Build{' '}
                <span className="gradient-text">Together</span>
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
              {/* Contact Info */}
              <div className="space-y-8">
                <div className="bg-white rounded-2xl p-6 sm:p-8 space-y-6 border border-black/6 shadow-sm">
                  <h3 className="text-lg font-bold text-black">Contact Information</h3>
                  <div className="space-y-4">
                    <a href="tel:+917736101555" className="flex items-center gap-3 text-black/50 hover:text-[#00AEEF] transition-colors group">
                      <div className="w-10 h-10 rounded-xl bg-[#00AEEF]/5 border border-[#00AEEF]/15 flex items-center justify-center group-hover:bg-[#00AEEF]/10 transition-colors">
                        <Phone className="w-4 h-4 text-[#00AEEF]" />
                      </div>
                      <div>
                        <p className="text-xs text-black/25 mb-0.5">Phone</p>
                        <p className="text-sm font-medium">+91 7736 101 555</p>
                      </div>
                    </a>
                    <a href="mailto:info@maktal.com" className="flex items-center gap-3 text-black/50 hover:text-[#0077B6] transition-colors group">
                      <div className="w-10 h-10 rounded-xl bg-[#0077B6]/5 border border-[#0077B6]/15 flex items-center justify-center group-hover:bg-[#0077B6]/10 transition-colors">
                        <Globe className="w-4 h-4 text-[#0077B6]" />
                      </div>
                      <div>
                        <p className="text-xs text-black/25 mb-0.5">Email</p>
                        <p className="text-sm font-medium">Click to email us</p>
                      </div>
                    </a>
                  </div>
                  <div className="glow-line" />
                  <div className="space-y-3">
                    <p className="text-xs text-black/25 uppercase tracking-wider font-medium">Locations</p>
                    <div className="text-sm text-black/40 leading-relaxed">
                      <p>Thrissur, Kerala, India</p>
                      <p>Aluva, Ernakulam, Kerala, India</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-black/6 shadow-sm">
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-black/40 font-medium mb-2 uppercase tracking-wider">Name</label>
                      <input
                        type="text"
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl bg-[#f8f9fb] border border-black/8 text-black text-sm placeholder:text-black/20 focus:outline-none focus:border-[#00AEEF]/40 focus:bg-white focus:shadow-sm transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-black/40 font-medium mb-2 uppercase tracking-wider">Email</label>
                      <input
                        type="email"
                        placeholder="you@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#f8f9fb] border border-black/8 text-black text-sm placeholder:text-black/20 focus:outline-none focus:border-[#00AEEF]/40 focus:bg-white focus:shadow-sm transition-all duration-300"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-black/40 font-medium mb-2 uppercase tracking-wider">Service</label>
                    <select className="w-full px-4 py-3 rounded-xl bg-[#f8f9fb] border border-black/8 text-black/50 text-sm focus:outline-none focus:border-[#00AEEF]/40 focus:bg-white focus:shadow-sm transition-all duration-300 appearance-none">
                      <option value="">Select a service</option>
                      <option value="web">Website Development</option>
                      <option value="marketing">Digital Marketing</option>
                      <option value="seo">SEO Optimization</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-black/40 font-medium mb-2 uppercase tracking-wider">Message</label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your project..."
                      className="w-full px-4 py-3 rounded-xl bg-[#f8f9fb] border border-black/8 text-black text-sm placeholder:text-black/20 focus:outline-none focus:border-[#00AEEF]/40 focus:bg-white focus:shadow-sm transition-all duration-300 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full btn-brand py-3.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2"
                  >
                    Send Message
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
