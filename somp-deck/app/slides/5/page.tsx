'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import SlideContainer from '@/components/SlideContainer';
import SlideTitle from '@/components/SlideTitle';

export default function Slide5() {
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

      // Pulse animation on follicles (stressed)
      gsap.to('[data-follicle]', {
        opacity: 1,
        duration: 0.8,
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
          Sistema com SOMP
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
              opacity="0.6"
            />

            {/* Fallopian tubes */}
            <path
              d="M 180 140 Q 120 120 80 140"
              fill="none"
              stroke="#9B59B6"
              strokeWidth="2.5"
              opacity="0.5"
            />
            <path
              d="M 220 140 Q 280 120 320 140"
              fill="none"
              stroke="#9B59B6"
              strokeWidth="2.5"
              opacity="0.5"
            />

            {/* Left ovary with multiple follicles (SOMP: 12+) */}
            <circle
              cx="60"
              cy="140"
              r="24"
              fill="none"
              stroke="#E91E8C"
              strokeWidth="2.5"
            />
            {/* Multiple follicles - creating a pearl-like pattern */}
            {[
              [45, 120],
              [60, 115],
              [75, 120],
              [40, 140],
              [80, 140],
              [45, 160],
              [60, 165],
              [75, 160],
            ].map((pos, i) => (
              <circle
                key={`left-${i}`}
                cx={pos[0]}
                cy={pos[1]}
                r="3.5"
                fill="#E91E8C"
                opacity="0.8"
                data-follicle
              />
            ))}

            {/* Right ovary with multiple follicles (SOMP: 12+) */}
            <circle
              cx="340"
              cy="140"
              r="24"
              fill="none"
              stroke="#E91E8C"
              strokeWidth="2.5"
            />
            {/* Multiple follicles */}
            {[
              [325, 120],
              [340, 115],
              [355, 120],
              [320, 140],
              [360, 140],
              [325, 160],
              [340, 165],
              [355, 160],
            ].map((pos, i) => (
              <circle
                key={`right-${i}`}
                cx={pos[0]}
                cy={pos[1]}
                r="3.5"
                fill="#E91E8C"
                opacity="0.8"
                data-follicle
              />
            ))}
          </svg>
        </div>

        {/* Labels */}
        <div className="flex gap-8 flex-wrap justify-center">
          <div data-label className="text-center">
            <div className="text-3xl text-[#E91E8C] font-semibold">12+</div>
            <div className="text-sm text-[#E0E0E0]">Folículos por ovário</div>
          </div>
          <div data-label className="text-center">
            <div className="text-3xl text-[#E91E8C] font-semibold">Irregular</div>
            <div className="text-sm text-[#E0E0E0]">Ciclo menstrual</div>
          </div>
          <div data-label className="text-center">
            <div className="text-3xl text-[#E91E8C] font-semibold">↑ Androgênios</div>
            <div className="text-sm text-[#E0E0E0]">Hormônios elevados</div>
          </div>
        </div>

        {/* Info box */}
        <div className="bg-white/5 backdrop-blur border border-[#E91E8C]/20 rounded-lg p-6 text-center max-w-2xl">
          <p className="text-[#E0E0E0] text-sm leading-relaxed">
            Nos ovários com SOMP, múltiplos folículos pequenos acumulam devido
            a níveis elevados de andrógenos, impedindo a ovulação normal.
          </p>
        </div>
      </div>
    </SlideContainer>
  );
}
