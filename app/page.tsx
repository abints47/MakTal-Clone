'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Lightbulb, Code2, Rocket, ArrowRight, Globe, TrendingUp, BarChart3, Zap, Shield, Users, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Footer from '@/components/Footer/Footer';
import BrandShowcase from '@/components/BrandShowcase/BrandShowcase';
import HowWeDeliver from '@/components/HowWeDeliver/HowWeDeliver';
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
import MagneticButton from '@/components/MagneticButton/MagneticButton';


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
    video: 'https://assets.mixkit.co/videos/4122/4122-720.mp4',
    url: 'https://www.myblueterra.com/' 
  },
  { 
    title: 'Drizzla, USA', 
    desc: 'Outcome-as-a-Service partner website developed in React.js and Python', 
    image: 'https://maktalseo.com/wp-content/uploads/2025/10/drizzla-react-js-website-development-1.avif', 
    video: 'https://assets.mixkit.co/videos/46635/46635-720.mp4',
    url: 'https://www.drizzla.com/' 
  },
  { 
    title: 'Solo Flowers, UAE', 
    desc: 'Flower delivery E-commerce website development in WordPress and WooCommerce.', 
    image: 'https://maktalseo.com/wp-content/uploads/2025/10/solo-flowers-ecommerce-website-development.avif', 
    video: 'https://assets.mixkit.co/videos/4120/4120-720.mp4',
    url: 'https://www.soloflowers.ae' 
  },
  { 
    title: 'World of Appliances, Bahrain', 
    desc: 'WordPress based E-commerce website with Shipping and Payment options.', 
    image: 'https://maktalseo.com/wp-content/uploads/2025/10/ecommerce-development-wordpress.avif', 
    video: 'https://assets.mixkit.co/videos/4122/4122-720.mp4',
    url: 'https://www.worldofappliancesbh.com/' 
  },
];

const marqueeItems = ['Web Development', 'Digital Marketing', 'SEO Optimization', 'UI/UX Design', 'Brand Identity', 'E-Commerce', 'Next.js', 'WordPress'];

export default function Page() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans relative overflow-x-clip">

      {/* ═══ SCATTERED GRADIENT ORBS (parallax) ═══ */}
      <ParallaxOrbs />

      {/* ═══ FLOATING NAV ═══ */}
      <FloatingNav />

      {/* ═══ HERO SECTION ═══  */}
      <ParallaxHero>
        <div className="relative z-20 w-full max-w-[1800px] 2xl:max-w-[1920px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 pt-36 pb-28 sm:pt-44 sm:pb-36 lg:pt-52 lg:pb-44 flex flex-col justify-center min-h-[90vh]">
          <div className="max-w-3xl lg:max-w-4xl text-left">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <span className="inline-block text-[#00AEEF] text-xs sm:text-sm font-semibold font-stretch-100% tracking-[0.25em] pl-5 uppercase mb-4 sm:mb-6">
                MAKTAL TECHNOLOGIES
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.35 }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-[3.6rem] xl:text-[4.2rem] font-bold text-white tracking-tight leading-[1.12] sm:leading-[1.08] mb-5 sm:mb-6"
            >
              <span className="block">We create digital</span>
              <span className="block">experiences that move</span>
              <span className="block">businesses forward.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="text-white/70 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-xl mb-8 sm:mb-10"
            >
              Strategy, design, and development for brands{' '}
              <br className="hidden sm:inline" />
              ready to grow, connect, and lead.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="flex items-center"
            >
              <a
                href="#works"
                className="group inline-flex items-center justify-center gap-3 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full border border-white/35 bg-black/20 backdrop-blur-xs text-white hover:border-white hover:bg-white hover:text-black text-sm sm:text-base font-medium transition-all duration-300 shadow-lg shadow-black/20"
              >
                <span>View Our Work</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>
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
                  <span className="text-[12px] text-white/60 font-medium">{feature.title}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ SERVICES SECTION ═══ */}
      <section id="services" className="relative w-full pt-24 sm:pt-32 lg:pt-40 pb-16 sm:pb-24 lg:pb-32">
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

          <div className="max-w-4xl mx-auto">
            {services.map((service, index) => (
              <React.Fragment key={index}>
                <ScrollReveal delay={index * 100}>
                  <div className="group flex items-start gap-6 sm:gap-10 py-8 sm:py-10 cursor-default">
                    <div className="shrink-0 mt-1 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-500" style={{ background: `${service.color}10`, border: `1px solid ${service.color}20` }}>
                      <service.icon className="w-6 h-6" style={{ color: service.color }}/>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-tight group-hover:text-[#00AEEF] transition-colors duration-300">{service.title}</h3>
                      <div className="mt-2 h-px w-6 transition-all duration-500 group-hover:w-10" style={{ background: `${service.color}40` }}/>
                      <p className="mt-3 text-white/35 text-sm sm:text-[15px] leading-relaxed max-w-2xl group-hover:text-white/50 transition-colors duration-300">{service.description}</p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {service.tags.map((tag) => (
                          <span key={tag} className="font-mono px-2.5 py-1 rounded-md bg-white/3 border border-white/6 text-white/30 text-[10px] uppercase tracking-wider">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
                {index < services.length - 1 && <div className="h-px bg-linear-to-r from-transparent via-white/6 to-transparent"/>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ROUNDED WHITE SECTION: HOW WE DELIVER + PHILOSOPHY + STATS ═══ */}
      <div className="relative z-10 -mt-12 sm:-mt-20 bg-white rounded-t-[3rem] sm:rounded-t-[4rem]">
        <HowWeDeliver />
        <BrandShowcase />
        <StatsCounter />
      </div>

      {/* ═══ SELECTED WORKS — Lusion style ═══ */}
      <section
        id="works"
        className="relative z-20 w-full bg-[#050505] rounded-t-[3rem] sm:rounded-t-[4rem] -mt-12 sm:-mt-20 overflow-hidden"
      >
        {/* Background Gradient Orbs */}
        <div className="absolute top-0 right-0 w-150 h-150 bg-[#00AEEF]/10 blur-[150px] pointer-events-none rounded-full translate-x-1/4 -translate-y-1/4" />
        <div className="absolute top-1/3 left-0 w-125 h-125 bg-indigo-500/10 blur-[150px] pointer-events-none rounded-full -translate-x-1/3" />
        <div className="absolute bottom-0 right-1/4 w-175 h-175 bg-[#00AEEF]/5 blur-[180px] pointer-events-none rounded-full translate-y-1/3" />

        {/* ── Split Header ── */}
        <div className="relative z-10 max-w-384 mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 pt-20 sm:pt-28 lg:pt-36 pb-14 sm:pb-20">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 sm:gap-12">
              {/* Big title left */}
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold text-white tracking-tight leading-[1.02] max-w-xl">
                Selected<br />Works
              </h2>
              {/* Descriptor right */}
              <p className="text-white/40 text-xs sm:text-sm leading-relaxed max-w-xs font-medium tracking-wide uppercase">
                A selection of web development and digital marketing projects created for ambitious brands and forward-thinking teams.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* ── 2-col project grid ── */}
        <div className="relative z-10 max-w-384 mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 pb-20 sm:pb-28 lg:pb-36">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-20 sm:gap-y-24 lg:gap-x-12 lg:gap-y-28 w-full">
            {projects.map((project, i) => (
              <ProjectCard
                key={i}
                title={project.title}
                desc={project.desc}
                image={project.image}
                video={project.video}
                url={project.url}
                tags={['Web', 'Design', 'Development']}
                index={i}
              />
            ))}
          </div>

          {/* View all link — Magnetic */}
          <ScrollReveal delay={200}>
            <div className="flex justify-start mt-16 sm:mt-20">
              <MagneticButton strength={0.4} innerStrength={0.25}>
                <Link
                  href="/works"
                  className="group inline-flex items-center gap-3 text-white hover:text-[#00AEEF] transition-colors duration-300"
                >
                  <span className="text-base font-semibold tracking-wide transition-colors duration-300">
                    Explore All Cases
                  </span>
                  <div className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:bg-[#00AEEF] group-hover:border-[#00AEEF] group-hover:scale-110">
                    <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform duration-300" />
                  </div>
                </Link>
              </MagneticButton>
            </div>
          </ScrollReveal>
        </div>
      </section>




      <TeamSection />

      <BlogSection />

      {/* ═══ TESTIMONIAL QUOTE ═══ */}
      <section className="relative z-20 w-full py-24 sm:py-32 lg:py-40 bg-[#050505] rounded-t-[3rem] sm:rounded-t-[4rem] -mt-12 sm:-mt-20 overflow-hidden">
        {/* Subtle glow line at the rounded top edge */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-linear-to-r from-transparent via-[#00AEEF]/20 to-transparent" />
        {/* Atmospheric gradient orbs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-150 h-150 bg-[#00AEEF]/5 blur-[180px] pointer-events-none rounded-full" />
        <div className="absolute bottom-16 right-0 w-100 h-100 bg-indigo-500/4 blur-[150px] pointer-events-none rounded-full translate-x-1/4" />
        <div className="absolute top-0 left-0 w-75 h-75 bg-[#00AEEF]/3 blur-[120px] pointer-events-none rounded-full -translate-x-1/3 -translate-y-1/3" />

        <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10 sm:mb-14">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 text-[#00AEEF] text-xs font-mono tracking-[0.22em] uppercase mb-6">
                Testimonials
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.2] max-w-4xl mx-auto">
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
        
        <GoogleReviews />
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
