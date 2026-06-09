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
      gsap.from('[data-animate-title]', {
        opacity: 0,
        duration: 0.8,
        ease: 'expo.out',
      });

      gsap.from('[data-animate]', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.3,
        stagger: 0.2,
        ease: 'power3.out',
      });
    },
    { scope: containerRef }
  );

  return (
    <SlideContainer ref={containerRef}>
      <div className="flex flex-col gap-12 max-w-3xl">
        <SlideTitle>O que é SOMP?</SlideTitle>

        <div data-animate className="text-lg text-[#E0E0E0] leading-relaxed">
          A Síndrome dos Ovários Policísticos (SOMP) é um distúrbio endócrino comum em mulheres em idade reprodutiva, caracterizado pela presença de múltiplos folículos nos ovários.
        </div>

        <div data-animate className="text-lg text-[#E0E0E0] leading-relaxed">
          Afeta os níveis de hormônios, causando irregularidades menstruais, infertilidade e outras complicações metabólicas.
        </div>
      </div>
    </SlideContainer>
  );
}
