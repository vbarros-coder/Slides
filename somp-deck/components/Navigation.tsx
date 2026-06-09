'use client';

import { useSlideContext } from '@/context/SlideContext';
import { useEffect } from 'react';

export default function Navigation() {
  const { currentSlide, nextSlide, prevSlide } = useSlideContext();
  const totalSlides = 10;

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [nextSlide, prevSlide]);

  return (
    <div className="fixed bottom-8 left-0 right-0 flex items-center justify-between px-6 sm:px-12 lg:px-20 z-50">
      <button
        onClick={prevSlide}
        disabled={currentSlide === 0}
        className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-[#E91E8C] text-[#E91E8C] hover:bg-[#E91E8C]/10 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        aria-label="Previous slide"
      >
        ←
      </button>

      <span className="text-[#E0E0E0] text-sm font-medium">
        {currentSlide + 1} / {totalSlides}
      </span>

      <button
        onClick={nextSlide}
        disabled={currentSlide === totalSlides - 1}
        className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-[#E91E8C] text-[#E91E8C] hover:bg-[#E91E8C]/10 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        aria-label="Next slide"
      >
        →
      </button>
    </div>
  );
}
