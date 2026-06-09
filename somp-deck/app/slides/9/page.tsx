'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import SlideContainer from '@/components/SlideContainer';
import SlideTitle from '@/components/SlideTitle';

interface TreatmentProps {
  title: string;
  items: string[];
  icon: string;
  delay: number;
}

function TreatmentColumn({ title, items, icon, delay }: TreatmentProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(ref.current, {
        opacity: 0,
        x: title === 'Medicamentosa' ? -40 : 40,
        duration: 0.8,
        delay,
        ease: 'power3.out',
      });

      gsap.from(`[data-item-${title}]`, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        delay: delay + 0.2,
        stagger: 0.1,
        ease: 'power3.out',
      });
    },
    {}
  );

  return (
    <div
      ref={ref}
      className="bg-white/5 backdrop-blur border border-[#E91E8C]/20 rounded-lg p-8"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-2xl font-semibold text-[#E91E8C] mb-6">{title}</h3>

      <ul className="space-y-3">
        {items.map((item, idx) => (
          <li
            key={idx}
            data-item-medicamentosa={title === 'Medicamentosa'}
            data-item-lifestyle={title === 'Lifestyle'}
            className="flex gap-3"
          >
            <span className="text-[#9B59B6] font-bold flex-shrink-0">•</span>
            <span className="text-[#E0E0E0] text-sm">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Slide9() {
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

  const treatments: TreatmentProps[] = [
    {
      title: 'Medicamentosa',
      icon: '💊',
      delay: 0.2,
      items: [
        'Contraceptivos orais',
        'Metformina (resistência à insulina)',
        'Espironolactona (anti-androgênio)',
        'Inositol (complemento)',
        'Medicamentos para ovulação (se infertilidade)',
      ],
    },
    {
      title: 'Lifestyle',
      icon: '🏃',
      delay: 0.35,
      items: [
        'Exercício regular (30+ min/dia)',
        'Dieta balanceada (reduzir processados)',
        'Manejo do estresse',
        'Sono adequado (7-9h/noite)',
        'Perda de peso (5-10% reduz sintomas)',
      ],
    },
  ];

  return (
    <SlideContainer ref={containerRef}>
      <div className="flex flex-col gap-10 max-w-5xl w-full">
        <SlideTitle data-animate-title>Tratamentos</SlideTitle>

        {/* Treatment columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {treatments.map((treatment, idx) => (
            <TreatmentColumn key={idx} {...treatment} />
          ))}
        </div>

        {/* Note */}
        <div className="bg-white/5 backdrop-blur border border-[#9B59B6]/20 rounded-lg p-6 text-center">
          <p className="text-[#E0E0E0] text-sm leading-relaxed">
            O tratamento é personalizado e pode combinar{' '}
            <span className="text-[#E91E8C] font-semibold">medicação</span> com{' '}
            <span className="text-[#9B59B6] font-semibold">mudanças no estilo de vida</span>
          </p>
        </div>
      </div>
    </SlideContainer>
  );
}
