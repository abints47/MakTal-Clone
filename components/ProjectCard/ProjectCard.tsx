'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  desc: string;
  image: string;
  video: string;
  url: string;
}

export default function ProjectCard({ title, desc, image, video, url }: ProjectCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play().catch(e => console.log("Video play failed:", e));
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <Link 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="group block w-full relative cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative w-full aspect-[4/3] sm:aspect-[4/5] lg:aspect-[3/4] xl:aspect-[4/5] rounded-3xl overflow-hidden mb-6 sm:mb-8 bg-zinc-900 border border-white/5 transform transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[0.98]">
        
        {/* Fallback / Thumbnail Image */}
        <img
          src={image}
          alt={title}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isHovered ? 'scale-105 opacity-0' : 'scale-100 opacity-100'}`}
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
        
        {/* Hover Video */}
        <video
          ref={videoRef}
          src={video}
          muted
          loop
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isHovered ? 'scale-100 opacity-100' : 'scale-110 opacity-0'}`}
        />
        
        {/* Overlay Dark Gradient for legibility if needed */}
        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 px-2 sm:px-4">
        <div className="flex-1">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight group-hover:text-[var(--brand)] transition-colors duration-500">
            {title}
          </h3>
          <p className="text-white/50 text-sm sm:text-base lg:text-lg mt-3 max-w-2xl leading-relaxed transition-colors duration-500 group-hover:text-white/70">
            {desc}
          </p>
        </div>
        <div className="hidden sm:flex shrink-0 w-14 h-14 rounded-full border border-white/10 items-center justify-center transition-all duration-500 group-hover:bg-white group-hover:border-white">
          <ArrowUpRight className="w-6 h-6 text-white group-hover:text-black transition-colors duration-500" />
        </div>
      </div>
    </Link>
  );
}
