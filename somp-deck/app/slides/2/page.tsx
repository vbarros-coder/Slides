'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import SlideContainer from '@/components/SlideContainer';
import SlideTitle from '@/components/SlideTitle';

export default function Slide2() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Title reveal
      gsap.from('[data-animate-title]', {
        opacity: 0,
        duration: 0.8,
        ease: 'expo.out',
      });

      // Left border animation
      gsap.from('[data-border-left]', {
        width: 0,
        duration: 0.8,
        delay: 0.2,
        ease: 'power3.out',
      });

      // Content blocks fade in with stagger
      gsap.from('[data-animate-block]', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.3,
        stagger: 0.15,
        ease: 'power3.out',
      });
    },
    { scope: containerRef }
  );

  return (
    <SlideContainer ref={containerRef}>
      <div className="flex flex-col gap-12 max-w-3xl w-full">
        <SlideTitle data-animate-title>O que é SOMP?</SlideTitle>

        {/* Left border accent */}
        <div
          data-border-left
          className="h-1 w-20 bg-gradient-to-r from-[#E91E8C] to-transparent rounded-full"
        />

        {/* Definition block */}
        <div
          data-animate-block
          className="bg-white/5 backdrop-blur border border-[#E91E8C]/20 rounded-lg p-6 sm:p-8"
        >
          <div className="text-lg sm:text-xl text-[#E0E0E0] leading-relaxed">
            A Síndrome dos Ovários Policísticos (SOMP) é um{' '}
            <span className="text-[#E91E8C] font-semibold">
              distúrbio endócrino comum
            </span>{' '}
            em mulheres em idade reprodutiva, caracterizado pela presença de{' '}
            <span className="text-[#9B59B6] font-semibold">
              múltiplos folículos
            </span>{' '}
            nos ovários.
          </div>
        </div>

        {/* Impact block */}
        <div
          data-animate-block
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          <div className="bg-white/5 backdrop-blur border border-[#9B59B6]/20 rounded-lg p-6">
            <div className="text-[#9B59B6] font-semibold text-sm uppercase tracking-wider mb-3">
              Hormonal
            </div>
            <div className="text-[#E0E0E0] text-sm leading-relaxed">
              Desequilíbrio nos níveis de andrógenos e insulina
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur border border-[#E91E8C]/20 rounded-lg p-6">
            <div className="text-[#E91E8C] font-semibold text-sm uppercase tracking-wider mb-3">
              Reprodutivo
            </div>
            <div className="text-[#E0E0E0] text-sm leading-relaxed">
              Irregularidades menstruais e infertilidade
            </div>
          </div>
        </div>

        {/* Additional info */}
        <div
          data-animate-block
          className="text-sm text-[#E0E0E0]/70 italic leading-relaxed"
        >
          Afeta aproximadamente{' '}
          <span className="text-[#E91E8C] font-semibold">1 em cada 10</span>{' '}
          mulheres em idade reprodutiva globalmente
        </div>
      </div>
    </SlideContainer>
  );
}
