'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import SlideContainer from '@/components/SlideContainer';
import SlideTitle from '@/components/SlideTitle';

export default function Slide3() {
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
        stagger: 0.1,
        ease: 'power3.out',
      });
    },
    { scope: containerRef }
  );

  return (
    <SlideContainer ref={containerRef}>
      <div className="flex flex-col gap-8 max-w-3xl">
        <SlideTitle>Slide 3</SlideTitle>
        <div data-animate className="text-lg text-[#E0E0E0]">
          Conteúdo do Slide 3 será adicionado aqui.
        </div>
      </div>
    </SlideContainer>
  );
}
