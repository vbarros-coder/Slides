'use client';

import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from 'react';

interface SlideContextType {
  currentSlide: number;
  direction: 1 | -1;
  goToSlide: (slideNumber: number) => void;
  nextSlide: () => void;
  prevSlide: () => void;
}

const SlideContext = createContext<SlideContextType | undefined>(undefined);

const TOTAL_SLIDES = 10;

export function SlideProvider({ children }: { children: ReactNode }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const goToSlide = useCallback((slideNumber: number) => {
    const clamped = Math.max(0, Math.min(slideNumber, TOTAL_SLIDES - 1));
    setDirection(clamped > currentSlide ? 1 : -1);
    setCurrentSlide(clamped);
  }, [currentSlide]);

  const nextSlide = useCallback(() => {
    if (currentSlide < TOTAL_SLIDES - 1) {
      setDirection(1);
      setCurrentSlide(prev => prev + 1);
    }
  }, [currentSlide]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(prev => prev - 1);
    }
  }, [currentSlide]);

  return (
    <SlideContext.Provider
      value={{
        currentSlide,
        direction,
        goToSlide,
        nextSlide,
        prevSlide,
      }}
    >
      {children}
    </SlideContext.Provider>
  );
}

export function useSlideContext() {
  const context = useContext(SlideContext);
  if (!context) {
    throw new Error('useSlideContext must be used within SlideProvider');
  }
  return context;
}
