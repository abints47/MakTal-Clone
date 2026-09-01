'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Phone, Lightbulb, Code2, Rocket, ArrowRight, Globe, TrendingUp, BarChart3, Zap, Shield, Users, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Footer from '@/components/Footer/Footer';
import BrandShowcase from '@/components/BrandShowcase/BrandShowcase';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';
import WhatsAppFloat from '@/components/WhatsAppFloat/WhatsAppFloat';
import BlogSection from '@/components/BlogSection/BlogSection';
import GoogleReviews from '@/components/GoogleReviews/GoogleReviews';
import TeamSection from '@/components/TeamSection/TeamSection';
import StatsCounter from '@/components/StatsCounter/StatsCounter';
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
    color: '#00AEEF',
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
  { icon: Lightbulb, label: 'Strategy', desc: 'We start by understanding your business, target audience, and goals — then map out a clear roadmap before touching any code.', step: '01', color: '#00AEEF' },
  { icon: Code2, label: 'Build', desc: 'Our team designs and develops your project using modern frameworks, with regular check-ins so nothing falls through the cracks.', step: '02', color: '#00AEEF' },
  { icon: Rocket, label: 'Launch', desc: 'We handle the deployment, run final testing, and stick around post-launch to make sure everything runs smoothly.', step: '03', color: '#00AEEF' },
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

const marqueeItems = ['Web Development', 'Digital Marketing', 'SEO Optimization', 'UI/UX Design', 'Brand Identity', 'E-Commerce', 'Next.js', 'WordPress'];

export default function Page() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans relative overflow-x-hidden">

      {/* ═══ SCATTERED GRADIENT ORBS ═══ */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {/* Hero area */}
        <div className="absolute top-[-5%] left-[8%] w-[350px] h-[350px] rounded-full bg-[#00AEEF]/[0.08] blur-[120px]" />
        <div className="absolute top-[5%] right-[10%] w-[400px] h-[400px] rounded-full bg-[#00AEEF]/[0.06] blur-[150px]" />

        {/* About section */}
        <div className="absolute top-[15%] left-[12%] w-[320px] h-[320px] rounded-full bg-[#00AEEF]/[0.09] blur-[130px]" />
        <div className="absolute top-[25%] right-[12%] w-[300px] h-[300px] rounded-full bg-[#00AEEF]/[0.07] blur-[140px]" />

        {/* Services section */}
        <div className="absolute top-[40%] left-[5%] w-[380px] h-[380px] rounded-full bg-[#00AEEF]/[0.10] blur-[130px]" />
        <div className="absolute top-[50%] right-[8%] w-[300px] h-[300px] rounded-full bg-[#00AEEF]/[0.08] blur-[150px]" />

        {/* Process section */}
        <div className="absolute top-[65%] left-[15%] w-[350px] h-[350px] rounded-full bg-[#00AEEF]/[0.07] blur-[140px]" />
        <div className="absolute top-[75%] right-[10%] w-[360px] h-[360px] rounded-full bg-[#00AEEF]/[0.08] blur-[130px]" />

        {/* Works / Team / Blog sections */}
        <div className="absolute top-[100%] left-[10%] w-[320px] h-[320px] rounded-full bg-[#00AEEF]/[0.09] blur-[140px]" />
        <div className="absolute top-[130%] right-[12%] w-[340px] h-[340px] rounded-full bg-[#00AEEF]/[0.08] blur-[150px]" />
        <div className="absolute top-[160%] left-[8%] w-[360px] h-[360px] rounded-full bg-[#00AEEF]/[0.07] blur-[130px]" />

        {/* Testimonial / Contact sections */}
        <div className="absolute top-[190%] right-[8%] w-[320px] h-[320px] rounded-full bg-[#00AEEF]/[0.09] blur-[140px]" />
        <div className="absolute top-[220%] left-[12%] w-[300px] h-[300px] rounded-full bg-[#00AEEF]/[0.08] blur-[150px]" />
        <div className="absolute top-[250%] right-[10%] w-[340px] h-[340px] rounded-full bg-[#00AEEF]/[0.07] blur-[140px]" />
      </div>

      {/* ═══ FLOATING NAV ═══ */}
      <FloatingNav />

      {/* ═══ HERO SECTION ═══ (Cuberto-inspired) ═══ */}
      <section className="relative w-full min-h-screen overflow-hidden flex flex-col justify-center bg-[#0a0a0a]">
        {/* Video Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video autoPlay loop muted playsInline poster="/images/it.jpg" className="w-full h-full object-cover" style={{ filter: 'saturate(0.85) contrast(1.1) brightness(0.5)' }}>
            <source src="https://assets.mixkit.co/videos/46635/46635-720.mp4" type="video/mp4" />
          </video>
          {/* Dark-to-light gradient: left side darker, right side brighter */}
          <div className="absolute inset-0 bg-linear-to-r from-[#0a0a0a]/80 via-[#0a0a0a]/30 to-transparent" />
          <div className="absolute inset-0 bg-[#0a0a0a]/10" />
        </div>

        <div className="relative z-20 max-w-350 mx-auto pl-4 pr-5 sm:pl-6 sm:pr-8 lg:pl-2 lg:pr-12 w-full py-28 sm:py-36">
          <div className="max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <span className="inline-block text-white/30 text-[12px] font-medium tracking-wider uppercase mb-6">
                Digital design & development agency
              </span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.3 }} className="text-[clamp(2rem,5vw,4.5rem)] font-bold text-white tracking-[-0.03em] leading-[1.05] mb-8">
              We design and build digital products, brands and websites
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.6 }} className="text-white/35 text-[15px] sm:text-[16px] leading-relaxed max-w-lg mb-10">
              For companies ready to move beyond the ordinary. Combining beautiful visuals with measurable business results.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.8 }}>
              <a href="#contact" className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-white/15 bg-transparent text-white/60 hover:text-white hover:border-white/30 hover:bg-white/4 px-7 py-3 text-[13px] font-semibold tracking-wide transition-all duration-300">
                Get in touch
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-10 pointer-events-none">
          <div className="w-5 h-8 rounded-full border border-white/10 flex justify-center pt-1.5">
            <div className="w-0.5 h-1.5 bg-white/25 rounded-full" />
          </div>
          <span className="text-[10px] tracking-[0.2em] text-white/15 uppercase">scroll</span>
        </div>
      </section>


      {/* ═══ ABOUT SECTION ═══ */}
      <section id="about" className="relative w-full py-24 sm:py-32 lg:py-40">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 text-[#00AEEF] text-xs font-mono tracking-[0.22em] uppercase mb-8">
              About Us
            </span>
          </ScrollReveal>
          <ScrollReveal>
            <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-1 mb-4">
              <BlurText text="At" delay={80} animateBy="words" direction="bottom" threshold={0.2} stepDuration={0.4} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white/85 leading-snug tracking-tight text-center" />
              <BlurText text="MakTal Technologies," delay={80} animateBy="words" direction="bottom" threshold={0.2} stepDuration={0.4} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold gradient-text leading-snug tracking-tight text-center" />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <BlurText text="we craft digital experiences that inspire, connect, and drive meaningful growth." delay={80} animateBy="words" direction="bottom" threshold={0.2} stepDuration={0.4} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white/85 leading-snug tracking-tight text-center" />
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {features.map((feature, i) => (
                <div key={i} className="glass-card rounded-xl p-4 text-center transition-all duration-300 hover:border-[#00AEEF]/15 hover:shadow-lg hover:shadow-[#00AEEF]/5 group">
                  <feature.icon className="w-5 h-5 mx-auto mb-2 text-white/50 group-hover:text-[#00AEEF] transition-colors" />
                  <span className="text-[11px] text-white/60 font-medium">{feature.title}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ SERVICES SECTION ═══ */}
      <section id="services" className="relative w-full py-24 sm:py-32 lg:py-40">
        <div className="absolute top-0 right-0 w-125 h-125 bg-[#00AEEF]/3 rounded-full blur-[200px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16 sm:mb-20">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 text-[#00AEEF] text-xs font-mono tracking-[0.22em] uppercase mb-6">
                What We Do
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
                Services Built for{' '}
                <span className="gradient-text">Growth</span>
              </h2>
              <p className="mt-5 text-white/35 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
                End-to-end digital solutions to take your business from idea to launch — and beyond.
              </p>
            </div>
          </ScrollReveal>

          {/* Wizora-style vertical service list */}
          <div className="max-w-4xl mx-auto">
            {services.map((service, index) => (
              <React.Fragment key={index}>
                <ScrollReveal delay={index * 100}>
                  <div className="group flex items-start gap-6 sm:gap-10 py-8 sm:py-10 cursor-default">
                    <div className="shrink-0 mt-1 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-500" style={{ background: `${service.color}10`, border: `1px solid ${service.color}20` }}>
                      <service.icon className="w-6 h-6" style={{ color: service.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-tight group-hover:text-[#00AEEF] transition-colors duration-300">{service.title}</h3>
                      <div className="mt-2 h-px w-6 transition-all duration-500 group-hover:w-10" style={{ background: `${service.color}40` }} />
                      <p className="mt-3 text-white/35 text-sm sm:text-[15px] leading-relaxed max-w-2xl group-hover:text-white/50 transition-colors duration-300">{service.description}</p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {service.tags.map((tag) => (
                          <span key={tag} className="font-mono px-2.5 py-1 rounded-md bg-white/3 border border-white/6 text-white/30 text-[10px] uppercase tracking-wider">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
                {index < services.length - 1 && <div className="h-px bg-linear-to-r from-transparent via-white/6 to-transparent" />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROCESS SECTION ═══ */}
      <section className="relative w-full py-24 sm:py-32">
        <div className="relative max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16 sm:mb-20">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 text-[#00AEEF] text-xs font-mono tracking-[0.22em] uppercase mb-6">
                Our Process
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
                How We <span className="gradient-text">Deliver</span>
              </h2>
              <p className="mt-5 text-white/35 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
                From initial consultation to final deployment — a hands-on approach that keeps you involved at every stage.
              </p>
            </div>
          </ScrollReveal>

          <div className="relative">
            <div className="hidden md:block process-line" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 items-stretch">
              {processSteps.map((item, i) => (
                <ScrollReveal key={i} delay={i * 200}>
                  <div className="group relative flex flex-col items-center text-center h-full">
                    <div className="relative w-full h-full flex flex-col glass-card rounded-2xl p-8 transition-all duration-500 group-hover:border-white/12 group-hover:shadow-xl group-hover:shadow-[#00AEEF]/3 mb-6">
                      <span className="font-mono text-[10px] text-white/20 uppercase tracking-[0.3em] mb-4">{item.step}</span>
                      <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5 transition-all duration-500 group-hover:scale-110 shrink-0" style={{ background: `${item.color}12`, border: `1px solid ${item.color}20` }}>
                        <item.icon className="w-6 h-6" style={{ color: item.color }} />
                      </div>
                      <h3 className="text-lg font-bold text-white tracking-tight mb-2">
                        {item.label}
                      </h3>
                      <p className="text-white/35 text-sm leading-relaxed mt-auto">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ BRAND SHOWCASE + STATS ═══ */}
      <div className="relative z-10 mt-20 sm:mt-28 bg-white rounded-[2.5rem] sm:rounded-[3.5rem]">
        <BrandShowcase />
        <StatsCounter />
      </div>

      {/* ═══ WORKS SECTION ═══ */}
      <section id="works" className="relative w-full py-24 sm:py-32 lg:py-40">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14 sm:mb-20">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 text-[#00AEEF] text-xs font-mono tracking-[0.22em] uppercase mb-6">
                Our Work
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
                Featured <span className="gradient-text">Projects</span>
              </h2>
              <p className="mt-4 text-white/30 text-sm sm:text-base max-w-lg mx-auto">
                A selection of projects we&apos;ve delivered across industries.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <Link href={project.url} target="_blank" rel="noopener noreferrer" className="group project-card block">
                  <div className="relative w-full h-52 sm:h-60 md:h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#050505]/60 z-10" />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image w-full h-full object-cover object-center transition-transform duration-700"
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                  </div>
                  <div className="p-5 sm:p-6 flex flex-col grow justify-between space-y-3">
                    <div className="space-y-2">
                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#00AEEF] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-white/35 text-xs sm:text-sm leading-relaxed">{project.desc}</p>
                    </div>
                    <span className="inline-flex items-center space-x-2 text-white/30 hover:text-[#00AEEF] font-medium text-xs sm:text-sm transition-colors group/link">
                      <span>Visit Website</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={200}>
            <div className="flex justify-center mt-12">
              <Link href="/works" className="group inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-white/10 bg-transparent text-white/50 font-medium text-sm tracking-wide transition-all duration-300 hover:border-[#00AEEF]/30 hover:text-[#00AEEF] hover:bg-[#00AEEF]/5">
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

      {/* ═══ TESTIMONIAL QUOTE ═══ */}
      <section className="relative w-full py-24 sm:py-32 lg:py-40">
        <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="relative rounded-3xl overflow-hidden">
              <div className="relative rounded-3xl glass-card p-10 sm:p-14 lg:p-20">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-75 h-75 bg-[#00AEEF]/3 rounded-full blur-[100px] pointer-events-none" />

                <div className="relative">
                  <p className="text-white/30 text-2xl mb-6">&ldquo;</p>
                  <h2 className="relative text-2xl sm:text-3xl md:text-4xl font-bold text-white/85 tracking-tight mb-5 leading-relaxed">
                    Clear process, strong communication, and solid execution from start to finish.
                  </h2>
                  <p className="relative text-white/30 text-sm sm:text-base leading-relaxed max-w-lg mx-auto mb-8">
                    We build custom websites and digital marketing solutions that grow your business and attract more customers. Let&apos;s create something extraordinary together.
                  </p>
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#00AEEF]/15 border border-[#00AEEF]/20 flex items-center justify-center">
                      <span className="text-[#00AEEF] text-xs font-bold">SK</span>
                    </div>
                    <div className="text-left">
                      <p className="text-white/70 text-sm font-semibold">Sarah K.</p>
                      <p className="text-white/30 text-xs">Head of Marketing</p>
                    </div>
                  </div>
                  <a href="#contact" className="btn-brand relative inline-flex items-center justify-center px-10 py-4 rounded-full text-sm font-bold tracking-wide transition-all duration-300 group mt-8">
                    <span className="flex items-center gap-2">
                      Start a Project
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ GOOGLE REVIEWS ═══ */}
      <GoogleReviews />

      {/* ═══ FREE AUDIT / CONTACT SECTION ═══ */}
      <section id="contact" className="relative w-full py-24 sm:py-32 lg:py-40">
        <div className="absolute inset-0 bg-linear-to-b from-[#050505] via-[#00AEEF]/2 to-[#050505] pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14 sm:mb-20">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00AEEF]/15 bg-[#00AEEF]/5 text-[#00AEEF] text-xs font-mono tracking-[0.22em] uppercase mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00AEEF] animate-pulse" />
                Free Audit
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
                Let&apos;s Build{' '}
                <span className="gradient-text">Together</span>
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
              {/* Contact Info */}
              <div className="space-y-8">
                <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-6">
                  <h3 className="text-lg font-bold text-white">Contact Information</h3>
                  <div className="space-y-4">
                    <a href="tel:+917736101555" className="flex items-center gap-3 text-white/50 hover:text-[#00AEEF] transition-colors group">
                      <div className="w-10 h-10 rounded-xl bg-[#00AEEF]/8 border border-[#00AEEF]/15 flex items-center justify-center group-hover:bg-[#00AEEF]/12 transition-colors">
                        <Phone className="w-4 h-4 text-[#00AEEF]" />
                      </div>
                      <div>
                        <p className="text-xs text-white/25 mb-0.5 font-mono uppercase tracking-wider">Phone</p>
                        <p className="text-sm font-medium text-white/70">+91 7736 101 555</p>
                      </div>
                    </a>
                    <a href="mailto:info@maktal.com" className="flex items-center gap-3 text-white/50 hover:text-[#00AEEF] transition-colors group">
                      <div className="w-10 h-10 rounded-xl bg-[#00AEEF]/8 border border-[#00AEEF]/15 flex items-center justify-center group-hover:bg-[#00AEEF]/12 transition-colors">
                        <Globe className="w-4 h-4 text-[#00AEEF]" />
                      </div>
                      <div>
                        <p className="text-xs text-white/25 mb-0.5 font-mono uppercase tracking-wider">Email</p>
                        <p className="text-sm font-medium text-white/70">Click to email us</p>
                      </div>
                    </a>
                  </div>
                  <div className="glow-line" />
                  <div className="space-y-3">
                    <p className="text-xs text-white/25 uppercase tracking-wider font-mono font-medium">Locations</p>
                    <div className="text-sm text-white/40 leading-relaxed">
                      <p>Thrissur, Kerala, India</p>
                      <p>Aluva, Ernakulam, Kerala, India</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="glass-card rounded-2xl p-6 sm:p-8">
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-white/30 font-mono font-medium mb-2 uppercase tracking-wider">Name</label>
                      <input type="text" placeholder="Your name" className="w-full px-4 py-3 rounded-xl bg-white/3 border border-white/6 text-white text-sm placeholder:text-white/15 focus:outline-none focus:border-[#00AEEF]/40 focus:bg-white/5 transition-all duration-300" />
                    </div>
                    <div>
                      <label className="block text-xs text-white/30 font-mono font-medium mb-2 uppercase tracking-wider">Email</label>
                      <input type="email" placeholder="you@company.com" className="w-full px-4 py-3 rounded-xl bg-white/3 border border-white/6 text-white text-sm placeholder:text-white/15 focus:outline-none focus:border-[#00AEEF]/40 focus:bg-white/5 transition-all duration-300" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-white/30 font-mono font-medium mb-2 uppercase tracking-wider">Service</label>
                    <select className="w-full px-4 py-3 rounded-xl bg-white/3 border border-white/6 text-white/50 text-sm focus:outline-none focus:border-[#00AEEF]/40 focus:bg-white/5 transition-all duration-300 appearance-none">
                      <option value="">Select a service</option>
                      <option value="web">Website Development</option>
                      <option value="marketing">Digital Marketing</option>
                      <option value="seo">SEO Optimization</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-white/30 font-mono font-medium mb-2 uppercase tracking-wider">Message</label>
                    <textarea rows={4} placeholder="Tell us about your project..." className="w-full px-4 py-3 rounded-xl bg-white/3 border border-white/6 text-white text-sm placeholder:text-white/15 focus:outline-none focus:border-[#00AEEF]/40 focus:bg-white/5 transition-all duration-300 resize-none" />
                  </div>
                  <button type="submit" className="w-full btn-brand py-3.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2">
                    <span className="flex items-center gap-2">
                      Get My Free Audit
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </button>
                  <p className="text-center text-[9px] font-mono text-white/30 uppercase tracking-widest">Free · No spam · Reply within 24 hours</p>
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
