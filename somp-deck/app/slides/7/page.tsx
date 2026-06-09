'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import SlideContainer from '@/components/SlideContainer';
import SlideTitle from '@/components/SlideTitle';

interface SymptomProps {
  icon: string;
  title: string;
  description: string;
}

function SymptomCard({ icon, title, description }: SymptomProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(ref.current, {
        opacity: 0,
        scale: 0.8,
        y: 20,
        duration: 0.8,
        ease: 'power3.out',
      });
    },
    {}
  );

  return (
    <div
      ref={ref}
      className="bg-white/5 backdrop-blur border border-[#E91E8C]/20 rounded-lg p-6 hover:border-[#E91E8C]/50 hover:bg-white/10 transition-all duration-300 cursor-pointer group"
    >
      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-[#E91E8C] mb-3">{title}</h3>
      <p className="text-sm text-[#E0E0E0] leading-relaxed">{description}</p>
    </div>
  );
}

export default function Slide7() {
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

  const symptoms: SymptomProps[] = [
    {
      icon: '🩸',
      title: 'Ciclos Irregulares',
      description: 'Períodos ausentes ou muito frequentes',
    },
    {
      icon: '🚫',
      title: 'Infertilidade',
      description: 'Dificuldade em engravidar naturalmente',
    },
    {
      icon: '😫',
      title: 'Acne e Hirsutismo',
      description: 'Aumento de pelos e acne devido aos andrógenos',
    },
    {
      icon: '⚖️',
      title: 'Ganho de Peso',
      description: 'Dificuldade em perder peso',
    },
    {
      icon: '🧠',
      title: 'Queda de Cabelo',
      description: 'Alopecia androgenética',
    },
    {
      icon: '😔',
      title: 'Sintomas Psicológicos',
      description: 'Depressão, ansiedade e alterações de humor',
    },
  ];

  return (
    <SlideContainer ref={containerRef}>
      <div className="flex flex-col gap-10 max-w-5xl w-full">
        <SlideTitle data-animate-title>Sintomas</SlideTitle>

        {/* Symptoms grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {symptoms.map((symptom, idx) => (
            <div key={idx} style={{ '--stagger-delay': `${idx * 0.1 + 0.2}s` } as React.CSSProperties}>
              <SymptomCard {...symptom} />
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-sm text-[#E0E0E0]/70 italic">
          Os sintomas variam de pessoa para pessoa e podem ser leves ou severos
        </p>
      </div>
    </SlideContainer>
  );
}
