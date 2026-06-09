'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import SlideContainer from '@/components/SlideContainer';
import SlideTitle from '@/components/SlideTitle';

export default function Slide10() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from('[data-animate-title]', {
        opacity: 0,
        duration: 0.8,
        ease: 'expo.out',
      });

      gsap.from('[data-animate-bullet]', {
        opacity: 0,
        x: -40,
        duration: 0.8,
        delay: 0.3,
        stagger: 0.15,
        ease: 'power3.out',
      });

      gsap.from('[data-animate-closing]', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.8,
        ease: 'power3.out',
      });
    },
    { scope: containerRef }
  );

  return (
    <SlideContainer ref={containerRef}>
      <div className="flex flex-col gap-12 max-w-3xl w-full">
        <SlideTitle data-animate-title>Conclusão</SlideTitle>

        {/* Key points */}
        <div className="space-y-4">
          <div
            data-animate-bullet
            className="flex gap-4 items-start bg-white/5 backdrop-blur border border-[#E91E8C]/20 rounded-lg p-6"
          >
            <span className="text-2xl flex-shrink-0">✓</span>
            <div>
              <p className="text-[#E0E0E0] font-semibold">Condição comum</p>
              <p className="text-sm text-[#E0E0E0]/70">
                Afeta milhões de mulheres globalmente
              </p>
            </div>
          </div>

          <div
            data-animate-bullet
            className="flex gap-4 items-start bg-white/5 backdrop-blur border border-[#9B59B6]/20 rounded-lg p-6"
          >
            <span className="text-2xl flex-shrink-0">✓</span>
            <div>
              <p className="text-[#E0E0E0] font-semibold">Diagnóstico acessível</p>
              <p className="text-sm text-[#E0E0E0]/70">
                Critérios Rotterdam claros e bem estabelecidos
              </p>
            </div>
          </div>

          <div
            data-animate-bullet
            className="flex gap-4 items-start bg-white/5 backdrop-blur border border-[#E91E8C]/20 rounded-lg p-6"
          >
            <span className="text-2xl flex-shrink-0">✓</span>
            <div>
              <p className="text-[#E0E0E0] font-semibold">Gerenciável</p>
              <p className="text-sm text-[#E0E0E0]/70">
                Múltiplas opções de tratamento disponíveis
              </p>
            </div>
          </div>

          <div
            data-animate-bullet
            className="flex gap-4 items-start bg-white/5 backdrop-blur border border-[#9B59B6]/20 rounded-lg p-6"
          >
            <span className="text-2xl flex-shrink-0">✓</span>
            <div>
              <p className="text-[#E0E0E0] font-semibold">Requer acompanhamento</p>
              <p className="text-sm text-[#E0E0E0]/70">
                Monitoramento contínuo e personalização do tratamento
              </p>
            </div>
          </div>
        </div>

        {/* Closing message */}
        <div
          data-animate-closing
          className="bg-gradient-to-r from-[#E91E8C]/20 to-[#9B59B6]/20 backdrop-blur border border-[#E91E8C]/30 rounded-lg p-8 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Obrigado
          </h2>
          <p className="text-[#E0E0E0] mb-6">
            Dúvidas?
          </p>
          <div className="text-xs text-[#E0E0E0]/60">
            <p className="mb-2">Referências:</p>
            <p>
              Teede HJ, Misso ML, Costello MF, et al. Recommendations from the
              international evidence-based guideline assessment in polycystic
              ovary syndrome (PCOS). Human Reproduction. 2019.
            </p>
          </div>
        </div>
      </div>
    </SlideContainer>
  );
}
