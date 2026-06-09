'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import SlideContainer from '@/components/SlideContainer';
import SlideTitle from '@/components/SlideTitle';

export default function Slide4() {
  const containerRef = useRef<HTMLDivElement>(null);
  const diagramRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Title reveal
      gsap.from('[data-animate-title]', {
        opacity: 0,
        duration: 0.8,
        ease: 'expo.out',
      });

      // Diagram fade in and scale
      gsap.from(diagramRef.current, {
        opacity: 0,
        scale: 0.9,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out',
      });

      // Label animations
      gsap.from('[data-label]', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.6,
        stagger: 0.15,
        ease: 'power3.out',
      });

      // Pulse animation on ovaries (subtle)
      gsap.to('[data-ovary]', {
        opacity: 0.8,
        duration: 1.5,
        delay: 1.2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    },
    { scope: containerRef }
  );

  return (
    <SlideContainer ref={containerRef}>
      <div className="flex flex-col items-center gap-8 w-full max-w-5xl">
        <SlideTitle data-animate-title>
          Sistema Reprodutivo Normal
        </SlideTitle>

        {/* Diagram container */}
        <div
          ref={diagramRef}
          className="relative w-full h-80 flex items-center justify-center"
        >
          <svg viewBox="0 0 400 300" className="w-full h-full max-w-lg">
            {/* Uterus */}
            <path
              d="M 200 120 Q 180 150 180 180 L 220 180 Q 220 150 200 120"
              fill="none"
              stroke="#E91E8C"
              strokeWidth="3"
            />

            {/* Fallopian tubes */}
            <path
              d="M 180 140 Q 120 120 80 140"
              fill="none"
              stroke="#9B59B6"
              strokeWidth="2.5"
            />
            <path
              d="M 220 140 Q 280 120 320 140"
              fill="none"
              stroke="#9B59B6"
              strokeWidth="2.5"
            />

            {/* Left ovary with follicles (normal: 1-2) */}
            <circle
              cx="60"
              cy="140"
              r="18"
              fill="none"
              stroke="#003B5C"
              strokeWidth="2"
              data-ovary
            />
            <circle
              cx="50"
              cy="130"
              r="4"
              fill="#9B59B6"
              opacity="0.7"
            />
            <circle
              cx="70"
              cy="145"
              r="3.5"
              fill="#9B59B6"
              opacity="0.6"
            />

            {/* Right ovary with follicles (normal: 1-2) */}
            <circle
              cx="340"
              cy="140"
              r="18"
              fill="none"
              stroke="#003B5C"
              strokeWidth="2"
              data-ovary
            />
            <circle
              cx="330"
              cy="135"
              r="3.5"
              fill="#9B59B6"
              opacity="0.6"
            />
            <circle
              cx="350"
              cy="148"
              r="4"
              fill="#9B59B6"
              opacity="0.7"
            />
          </svg>
        </div>

        {/* Labels */}
        <div className="flex gap-8 flex-wrap justify-center">
          <div data-label className="text-center">
            <div className="text-3xl text-[#E91E8C] font-semibold">1-2</div>
            <div className="text-sm text-[#E0E0E0]">Folículos por ovário</div>
          </div>
          <div data-label className="text-center">
            <div className="text-3xl text-[#9B59B6] font-semibold">Ciclo</div>
            <div className="text-sm text-[#E0E0E0]">Menstrual regular</div>
          </div>
          <div data-label className="text-center">
            <div className="text-3xl text-[#003B5C] font-semibold">Normal</div>
            <div className="text-sm text-[#E0E0E0]">Hormônios equilibrados</div>
          </div>
        </div>

        {/* Info box */}
        <div className="bg-white/5 backdrop-blur border border-[#E91E8C]/20 rounded-lg p-6 text-center max-w-2xl">
          <p className="text-[#E0E0E0] text-sm leading-relaxed">
            Um ovário saudável produz típicamente um óvulo por ciclo menstrual,
            com níveis hormonais equilibrados.
          </p>
        </div>
      </div>
    </SlideContainer>
  );
}
