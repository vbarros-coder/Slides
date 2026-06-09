'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import SlideContainer from '@/components/SlideContainer';
import SlideTitle from '@/components/SlideTitle';

interface StatisticProps {
  number: number;
  label: string;
  delay: number;
}

function StatisticCard({ number, label, delay }: StatisticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Card scale animation
      gsap.from(ref.current, {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        delay,
        ease: 'power3.out',
      });

      // Counter animation
      if (numberRef.current) {
        const obj = { value: 0 };
        gsap.to(obj, {
          value: number,
          duration: 1,
          delay: delay + 0.1,
          ease: 'power3.out',
          onUpdate: () => {
            if (numberRef.current) {
              numberRef.current.textContent = Math.round(obj.value).toString();
            }
          },
        });
      }
    },
    {}
  );

  return (
    <div
      ref={ref}
      className="bg-white/5 backdrop-blur border border-[#E91E8C]/20 rounded-lg p-8 flex flex-col items-center gap-4 min-w-0"
    >
      <div
        ref={numberRef}
        className="text-5xl sm:text-6xl font-bold text-[#E91E8C]"
      >
        0
      </div>
      <div className="text-sm sm:text-base text-[#E0E0E0] text-center">
        {label}
      </div>
    </div>
  );
}

export default function Slide3() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Title reveal
      gsap.from('[data-animate-title]', {
        opacity: 0,
        duration: 0.8,
        ease: 'expo.out',
      });
    },
    { scope: containerRef }
  );

  return (
    <SlideContainer ref={containerRef}>
      <div className="flex flex-col gap-12 max-w-5xl w-full">
        <SlideTitle data-animate-title>Estatísticas Globais</SlideTitle>

        {/* Statistics grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <StatisticCard
            number={10}
            label="1 em cada 10 mulheres afetadas"
            delay={0.2}
          />
          <StatisticCard
            number={100}
            label="Milhões de mulheres globalmente"
            delay={0.3}
          />
          <StatisticCard
            number={30}
            label="Idade média de diagnóstico (anos)"
            delay={0.4}
          />
        </div>

        {/* Additional context */}
        <div className="bg-white/5 backdrop-blur border border-[#9B59B6]/20 rounded-lg p-8 mt-4">
          <div className="text-lg text-[#E0E0E0] leading-relaxed">
            SOMP é a{' '}
            <span className="text-[#E91E8C] font-semibold">
              condição endócrina mais comum
            </span>{' '}
            em mulheres em idade reprodutiva, afetando aproximadamente{' '}
            <span className="text-[#9B59B6] font-semibold">
              15-20% da população
            </span>{' '}
            mundial.
          </div>
        </div>
      </div>
    </SlideContainer>
  );
}
