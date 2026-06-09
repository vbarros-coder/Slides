'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

export default function Slide1() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Background gradient subtle animation
      gsap.from(containerRef.current, {
        backgroundPosition: '0% 0%',
        duration: 2,
        ease: 'sine.inOut',
      });

      // Title clip-path reveal (bottom to top)
      if (titleRef.current) {
        gsap.from(titleRef.current, {
          clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
          opacity: 0,
          duration: 1,
          ease: 'expo.out',
        });
      }

      // Subtitle fade + slide up
      gsap.from('[data-animate-subtitle]', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        delay: 0.3,
        ease: 'power3.out',
      });

      // Name/attribution fade + slide up
      gsap.from('[data-animate-name]', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        delay: 0.5,
        ease: 'power3.out',
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="relative w-screen h-screen min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 sm:px-12 lg:px-20"
      style={{
        background: 'linear-gradient(-45deg, #003B5C, #1A1A2E, #9B59B6, #0F1419)',
        backgroundSize: '400% 400%',
        backgroundPosition: '100% 100%',
      }}
    >
      {/* Animated gradient overlay for depth */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              'radial-gradient(ellipse at 30% 50%, rgba(233, 30, 140, 0.1) 0%, transparent 50%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-6 sm:gap-8">
        {/* Title with clip-path reveal */}
        <div
          ref={titleRef}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white text-center leading-tight max-w-4xl"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Síndrome dos Ovários Policísticos
        </div>

        {/* Subtitle */}
        <div
          data-animate-subtitle
          className="text-lg sm:text-xl lg:text-2xl text-[#E91E8C] font-light tracking-widest"
        >
          Uma Visão Clínica Abrangente
        </div>

        {/* Name/Attribution */}
        <div
          data-animate-name
          className="text-sm sm:text-base text-[#E0E0E0] mt-6 sm:mt-8 font-light tracking-wide opacity-80"
        >
          Apresentação Académica
        </div>
      </div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-16 w-16 h-1 bg-gradient-to-r from-[#E91E8C] to-[#9B59B6] rounded-full"
        style={{
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      />
    </div>
  );
}
