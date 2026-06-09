'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import SlideContainer from '@/components/SlideContainer';
import SlideTitle from '@/components/SlideTitle';

interface RiskFactorProps {
  title: string;
  description: string;
  icon: string;
  delay: number;
}

function RiskFactorItem({ title, description, icon, delay }: RiskFactorProps) {
  const ref = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(ref.current, {
        opacity: 0,
        x: -30,
        duration: 0.8,
        delay,
        ease: 'power3.out',
      });

      gsap.from(iconRef.current, {
        opacity: 0,
        rotate: -90,
        duration: 0.8,
        delay: delay + 0.1,
        ease: 'power3.out',
      });
    },
    {}
  );

  return (
    <div
      ref={ref}
      className="flex gap-4 items-start bg-white/5 backdrop-blur border border-[#E91E8C]/20 rounded-lg p-6"
    >
      <div
        ref={iconRef}
        className="text-3xl min-w-fit flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-[#E91E8C]/20"
      >
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-[#E91E8C] mb-2">{title}</h3>
        <p className="text-sm text-[#E0E0E0]">{description}</p>
      </div>
    </div>
  );
}

export default function Slide6() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from('[data-animate-title]', {
        opacity: 0,
        duration: 0.8,
        ease: 'expo.out',
      });
    },
    { scope: containerRef }
  );

  const factors: RiskFactorProps[] = [
    {
      title: 'Genética',
      description: 'Histórico familiar pode aumentar risco',
      icon: '🧬',
      delay: 0.2,
    },
    {
      title: 'Resistência à Insulina',
      description: 'Aumento de produção de andrógenos',
      icon: '🔬',
      delay: 0.35,
    },
    {
      title: 'Inflamação Crônica',
      description: 'Estimula produção de andrógenos',
      icon: '⚠️',
      delay: 0.5,
    },
    {
      title: 'Fatores Ambientais',
      description: 'Exposição a disruptores endócrinos',
      icon: '🌍',
      delay: 0.65,
    },
    {
      title: 'Estilo de Vida',
      description: 'Dieta, sedentarismo, estresse',
      icon: '🏃',
      delay: 0.8,
    },
  ];

  return (
    <SlideContainer ref={containerRef}>
      <div className="flex flex-col gap-10 max-w-3xl w-full">
        <SlideTitle data-animate-title>
          Causas e Fatores de Risco
        </SlideTitle>

        {/* Risk factors list */}
        <div className="flex flex-col gap-4">
          {factors.map((factor, idx) => (
            <RiskFactorItem key={idx} {...factor} />
          ))}
        </div>

        {/* Summary */}
        <div className="bg-white/5 backdrop-blur border border-[#9B59B6]/20 rounded-lg p-6 text-center">
          <p className="text-[#E0E0E0] text-sm leading-relaxed">
            A causa exata de SOMP ainda é desconhecida, mas acredita-se que uma
            combinação de fatores genéticos e ambientais está envolvida.
          </p>
        </div>
      </div>
    </SlideContainer>
  );
}
