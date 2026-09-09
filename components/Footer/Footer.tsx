'use client';

import React from 'react';
import { ArrowUp, Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';

const serviceLinks = [
  { label: 'E-Commerce Development', href: '#services' },
  { label: 'Malware Removal', href: '#services' },
  { label: 'Search Engine Optimisation', href: '#services' },
  { label: 'Social Media Management', href: '#services' },
  { label: 'Website Development', href: '#services' },
  { label: 'Website Security and Maintenance', href: '#services' },
];

const usefulLinks = [
  { label: 'About', href: '#about' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
  { label: 'Terms and Conditions', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Delivery & Refunds', href: '#' },
];

const locations = [
  '2nd Floor, Mexa Building Ollukkara, Thrissur, Kerala India - 680 651',
  '2nd Floor, Erakkath Building, Sub jail Road, Aluva, Ernakulam, Kerala India - 683 101',
];

const socialLinks = [
  {
    label: 'WhatsApp',
    href: 'https://wa.me/917736101555',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
    ),
  },
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm4.8-11.5c-.795 0-1.44.645-1.44 1.44s.645 1.44 1.44 1.44 1.44-.645 1.44-1.44-.645-1.44-1.44-1.44z" /></svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" /></svg>
    ),
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden bg-[#050505] text-white">
      <div className="relative z-10 w-full max-w-[1800px] 2xl:max-w-[1920px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 pt-16 sm:pt-20 lg:pt-24 pb-10 sm:pb-12">

        {/* ═══ LINK GRID ═══ */}
        <ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-x-8 lg:gap-x-12 gap-y-12">

            {/* Brand Column */}
            <div className="lg:col-span-4 flex flex-col items-start">
              <Link href="/" className="transition-opacity duration-300 hover:opacity-80">
                <img src="/images/maktal-logo.png" alt="MakTal Technologies" className="h-10 sm:h-11 w-auto brightness-0 invert opacity-90" />
              </Link>
              <p className="mt-6 text-[15px] text-white/75 leading-[1.9] max-w-sm">
                MakTal Technologies is a registered website development and digital marketing company providing top notch services at reasonable prices.
              </p>
              <ul className="mt-7 flex flex-col gap-4">
                <li>
                  <a href="tel:+917736101555" className="group inline-flex items-center gap-3 text-[15px] text-white/90 hover:text-[#00AEEF] transition-colors duration-300">
                    <Phone className="w-[18px] h-[18px] shrink-0" />
                    +91 7736 101 555
                  </a>
                </li>
                <li>
                  <a href="mailto:info@maktal.com" className="group inline-flex items-center gap-3 text-[15px] text-white/90 hover:text-[#00AEEF] transition-colors duration-300">
                    <Mail className="w-[18px] h-[18px] shrink-0" />
                    Click to email
                  </a>
                </li>
              </ul>
              <div className="mt-8 flex items-center gap-5">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-white/90 hover:text-[#00AEEF] transition-colors duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="lg:col-span-3">
              <h3 className="text-xl font-medium text-white mb-7">Services</h3>
              <ul className="flex flex-col gap-4">
                {serviceLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-[15px] text-white/85 hover:text-[#00AEEF] transition-colors duration-300">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Useful Links */}
            <div className="lg:col-span-2">
              <h3 className="text-xl font-medium text-white mb-7">Useful Links</h3>
              <ul className="flex flex-col gap-4">
                {usefulLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-[15px] text-white/85 hover:text-[#00AEEF] transition-colors duration-300">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Locations */}
            <div className="sm:col-span-2 lg:col-span-3">
              <h3 className="text-xl font-medium text-white mb-7">Locations</h3>
              <ul className="flex flex-col gap-6">
                {locations.map((location) => (
                  <li key={location} className="flex items-start gap-3">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px] shrink-0 mt-1 text-[#00AEEF]">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    <span className="text-[15px] text-white/85 leading-relaxed">{location}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>

        {/* ═══ BOTTOM BAR ═══ */}
        <ScrollReveal delay={80}>
          <div className="mt-14 sm:mt-16 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="order-2 sm:order-1 text-[12px] text-white/40 tracking-wide">
              © 2026 MakTal Technologies. All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="group order-1 sm:order-2 flex items-center gap-2.5 text-[10px] font-mono uppercase tracking-[0.25em] text-white/40 hover:text-[#00AEEF] transition-colors duration-300 cursor-pointer"
            >
              Back to top
              <span className="w-9 h-9 rounded-full border border-white/10 bg-white/5 flex items-center justify-center transition-all duration-300 group-hover:border-[#00AEEF]/40 group-hover:bg-[#00AEEF]/10 group-hover:-translate-y-0.5">
                <ArrowUp className="w-3.5 h-3.5" />
              </span>
            </button>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
