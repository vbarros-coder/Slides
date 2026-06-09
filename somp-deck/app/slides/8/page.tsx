'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import SlideContainer from '@/components/SlideContainer';
import SlideTitle from '@/components/SlideTitle';

export default function Slide8() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from('[data-animate-title]', {
        opacity: 0,
        duration: 0.8,
        ease: 'expo.out',
      });

      gsap.from('[data-animate-criteria]', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.3,
        stagger: 0.15,
        ease: 'power3.out',
      });

      // Draw the connecting lines
      gsap.from('[data-line]', {
        strokeDashoffset: 100,
        duration: 1,
        delay: 0.5,
        ease: 'power3.out',
      });
    },
    { scope: containerRef }
  );

  return (
    <SlideContainer ref={containerRef}>
      <div className="flex flex-col gap-10 max-w-3xl w-full">
        <SlideTitle data-animate-title>Diagnóstico</SlideTitle>

        {/* Criteria flowchart */}
        <div className="bg-white/5 backdrop-blur border border-[#9B59B6]/20 rounded-lg p-8">
          <h3 className="text-xl font-semibold text-[#E91E8C] mb-6 text-center">
            Critérios de Rotterdam
          </h3>

          <div className="space-y-6">
            {/* Criterion 1 */}
            <div data-animate-criteria>
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#E91E8C]/20 flex items-center justify-center text-[#E91E8C] font-bold">
                  1
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-[#E0E0E0]">Disfunção Ovulatória</p>
                  <p className="text-sm text-[#E0E0E0]/70">
                    Ciclos menstruais irregulares ou anovulatórios
                  </p>
                </div>
              </div>
            </div>

            {/* Criterion 2 */}
            <div data-animate-criteria>
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#E91E8C]/20 flex items-center justify-center text-[#E91E8C] font-bold">
                  2
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-[#E0E0E0]">
                    Sinais Clínicos ou Bioquímicos
                  </p>
                  <p className="text-sm text-[#E0E0E0]/70">
                    Hirsutismo, acne, ou níveis elevados de andrógenos
                  </p>
                </div>
              </div>
            </div>

            {/* Criterion 3 */}
            <div data-animate-criteria>
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#E91E8C]/20 flex items-center justify-center text-[#E91E8C] font-bold">
                  3
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-[#E0E0E0]">Achados Ovarianos</p>
                  <p className="text-sm text-[#E0E0E0]/70">
                    &gt;12 folículos por ovário em ultrassom
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Diagnosis rule */}
          <div data-animate-criteria className="mt-8 pt-6 border-t border-[#E91E8C]/20">
            <p className="text-center text-[#E91E8C] font-semibold">
              Diagnóstico: 2 de 3 critérios presentes
            </p>
          </div>
        </div>

        {/* Additional tests */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div data-animate-criteria className="bg-white/5 backdrop-blur border border-[#9B59B6]/20 rounded-lg p-4">
            <p className="text-sm font-semibold text-[#9B59B6] mb-2">
              Testes Laboratoriais
            </p>
            <ul className="text-xs text-[#E0E0E0]/70 space-y-1">
              <li>• Hormônios reprodutivos</li>
              <li>• Teste de tolerância à glicose</li>
              <li>• Lipidograma</li>
            </ul>
          </div>
          <div data-animate-criteria className="bg-white/5 backdrop-blur border border-[#9B59B6]/20 rounded-lg p-4">
            <p className="text-sm font-semibold text-[#9B59B6] mb-2">
              Imagens
            </p>
            <ul className="text-xs text-[#E0E0E0]/70 space-y-1">
              <li>• Ultrassom transvaginal</li>
              <li>• Ultrassom abdominal</li>
              <li>• Ressonância magnética (se necessário)</li>
            </ul>
          </div>
        </div>
      </div>
    </SlideContainer>
  );
}
