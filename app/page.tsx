'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Lightbulb, Code2, Rocket, ArrowRight, Globe, TrendingUp, BarChart3, Zap, Shield, Users, ArrowUpRight } from 'lucide-react';
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
import { ParallaxHero, ParallaxOrbs } from '@/components/ParallaxHero/ParallaxHero';

import ProjectCard from '@/components/ProjectCard/ProjectCard';

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
  { 
    title: 'BlueTerra, UAE', 
    desc: 'Boutique travel company website developed in Next.js and Python', 
    image: 'https://maktalseo.com/wp-content/uploads/2025/10/blueterra-travel-website-development-work-1.avif', 
    video: 'https://assets.mixkit.co/videos/46635/46635-720.mp4',
    url: 'https://www.myblueterra.com/' 
  },
  { 
    title: 'Drizzla, USA', 
    desc: 'Outcome-as-a-Service partner website developed in React.js and Python', 
    image: 'https://maktalseo.com/wp-content/uploads/2025/10/drizzla-react-js-website-development-1.avif', 
    video: 'https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-4174-large.mp4',
    url: 'https://www.drizzla.com/' 
  },
  { 
    title: 'Solo Flowers, UAE', 
    desc: 'Flower delivery E-commerce website development in WordPress and WooCommerce.', 
    image: 'https://maktalseo.com/wp-content/uploads/2025/10/solo-flowers-ecommerce-website-development.avif', 
    video: 'https://assets.mixkit.co/videos/preview/mixkit-close-up-of-a-pink-rose-blooming-4201-large.mp4',
    url: 'https://www.soloflowers.ae' 
  },
  { 
    title: 'World of Appliances, Bahrain', 
    desc: 'WordPress based E-commerce website with Shipping and Payment options.', 
    image: 'https://maktalseo.com/wp-content/uploads/2025/10/ecommerce-development-wordpress.avif', 
    video: 'https://assets.mixkit.co/videos/preview/mixkit-hands-typing-on-a-laptop-keyboard-4171-large.mp4',
    url: 'https://www.worldofappliancesbh.com/' 
  },
];

const marqueeItems = ['Web Development', 'Digital Marketing', 'SEO Optimization', 'UI/UX Design', 'Brand Identity', 'E-Commerce', 'Next.js', 'WordPress'];

export default function Page() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans relative overflow-x-hidden">

      {/* ═══ SCATTERED GRADIENT ORBS (parallax) ═══ */}
      <ParallaxOrbs />

      {/* ═══ FLOATING NAV ═══ */}
      <FloatingNav />

      {/* ═══ HERO SECTION ═══ (Cuberto-inspired) ═══ */}
      <ParallaxHero>
        <div className="relative z-20 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full pt-32 pb-24 sm:pt-40 sm:pb-32 lg:pt-48 lg:pb-40 flex flex-col justify-center min-h-[80vh]">
          <div className="max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <span className="inline-block text-white/40 text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase mb-4 sm:mb-6">
                Digital design & development agency
              </span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.3 }} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-[-0.03em] leading-[1.1] sm:leading-[1.05] mb-6 sm:mb-8">
              We design and build digital products, brands and websites
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.6 }} className="text-white/50 text-base sm:text-lg lg:text-xl leading-relaxed max-w-lg lg:max-w-2xl mb-8 sm:mb-10">
              For companies ready to move beyond the ordinary. Combining beautiful visuals with measurable business results.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.8 }} className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <a href="#works" className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full border border-white/15 bg-transparent text-white hover:text-white hover:border-white/40 hover:bg-white/5 px-8 py-3.5 sm:py-4 text-sm sm:text-[15px] font-medium tracking-wide transition-all duration-300">
                Our Work
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
      </ParallaxHero>


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

      {/* ═══ STICKY DARK SECTION + ROUNDED WHITE REVEAL ═══ */}
      <div className="relative">
        {/* Sticky dark background that stays pinned */}
        <div className="sticky top-0 h-screen overflow-hidden pb-90">
          <div className="relative h-full max-w-5xl mx-auto px-5 sm:px-6 lg:px-6 flex flex-col justify-center">
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
        </div>

        {/* White section with rounded corners that slides up over the dark */}
        <div className="relative z-10 -mt-40 bg-white rounded-t-[3rem] sm:rounded-t-[4rem]">
          <BrandShowcase />
          <StatsCounter />
        </div>
      </div>

      {/* ═══ WORKS SECTION (Cuberto Style) ═══ */}
      <section id="works" className="relative z-20 w-full py-24 sm:py-32 lg:py-48 bg-[#050505] rounded-t-[3rem] sm:rounded-t-[4rem] overflow-hidden -mt-12 sm:-mt-20">
        
        {/* Background Gradient Orbs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00AEEF]/10 blur-[150px] pointer-events-none rounded-full translate-x-1/4 -translate-y-1/4" />
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-indigo-500/10 blur-[150px] pointer-events-none rounded-full -translate-x-1/3" />
        <div className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-[#00AEEF]/5 blur-[180px] pointer-events-none rounded-full translate-y-1/3" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center sm:text-left mb-16 sm:mb-24 lg:mb-32">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 text-[#00AEEF] text-xs font-mono tracking-[0.22em] uppercase mb-6 border border-[#00AEEF]/20 rounded-full">
                Selected Works
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight max-w-3xl">
                Digital products that <span className="text-white/30 italic font-light">actually work.</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 lg:gap-x-20 lg:gap-y-24 w-full">
            {projects.map((project, index) => (
              <div key={index} className={index % 2 !== 0 ? "md:mt-32" : ""}>
                <ScrollReveal delay={(index % 2) * 100}>
                  <ProjectCard
                    title={project.title}
                    desc={project.desc}
                    image={project.image}
                    video={project.video}
                    url={project.url}
                  />
                </ScrollReveal>
              </div>
            ))}
          </div>

          <ScrollReveal delay={200}>
            <div className="flex justify-center sm:justify-start mt-8">
              <Link href="/works" className="group inline-flex items-center justify-center gap-4 text-white hover:text-[#00AEEF] transition-colors duration-300">
                <span className="text-lg font-medium tracking-wide">Explore All Cases</span>
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-[#00AEEF]/10 group-hover:border-[#00AEEF]/30">
                  <ArrowRight className="w-5 h-5 text-white group-hover:text-[#00AEEF] group-hover:translate-x-1 transition-all duration-300" />
                </div>
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
      <section className="relative w-full py-28 sm:py-36 lg:py-44 bg-[#050505] rounded-t-[3rem] sm:rounded-t-[4rem] -mt-12 sm:-mt-20 z-20 overflow-hidden">
        {/* Atmospheric gradient orbs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#00AEEF]/5 blur-[180px] pointer-events-none rounded-full" />
        <div className="absolute bottom-16 right-0 w-[400px] h-[400px] bg-indigo-500/4 blur-[150px] pointer-events-none rounded-full translate-x-1/4" />
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#00AEEF]/3 blur-[120px] pointer-events-none rounded-full -translate-x-1/3 -translate-y-1/3" />

        <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
          {/* Large decorative quote mark */}
          <ScrollReveal>
            <div className="relative text-center mb-12 sm:mb-16">
              <span className="block text-[120px] sm:text-[180px] md:text-[220px] leading-none font-serif text-white/[0.03] select-none pointer-events-none -mb-20 sm:-mb-28 md:-mb-36">
                &ldquo;
              </span>
            </div>
          </ScrollReveal>

          {/* Main quote */}
          <ScrollReveal delay={100}>
            <div className="text-center -mt-16 sm:-mt-20 md:-mt-28">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-bold text-white/90 tracking-tight leading-[1.2] max-w-4xl mx-auto">
                Clear process, strong communication,
                <br className="hidden sm:block" />
                <span className="text-white/50"> and </span>
                <span className="gradient-text">solid execution</span>
                <br className="hidden sm:block" />
                from start to finish.
              </h2>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ GOOGLE REVIEWS ═══ */}
      <GoogleReviews />

      {/* ═══ FOOTER ═══ */}   
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
