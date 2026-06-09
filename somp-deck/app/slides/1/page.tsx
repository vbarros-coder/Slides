'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import SlideContainer from '@/components/SlideContainer';
import SlideTitle from '@/components/SlideTitle';

export default function Slide1() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from('[data-animate-title]', {
        opacity: 0,
        duration: 1,
        ease: 'expo.out',
      });

      gsap.from('[data-animate-subtitle]', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.2,
        ease: 'power3.out',
      });

      gsap.from('[data-animate-name]', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.4,
        ease: 'power3.out',
      });
    },
    { scope: containerRef }
  );

  return (
    <SlideContainer ref={containerRef}>
      <div className="flex flex-col items-center justify-center gap-8">
        <SlideTitle>Síndrome dos Ovários Policísticos</SlideTitle>

        <div
          data-animate-subtitle
          className="text-xl sm:text-2xl text-[#E91E8C] font-light tracking-wide"
        >
          Uma Visão Clínica Abrangente
        </div>

        <div
          data-animate-name
          className="text-base sm:text-lg text-[#E0E0E0] mt-8 font-light"
        >
          Apresentação Académica
        </div>
      </div>
    </SlideContainer>
  );
}
