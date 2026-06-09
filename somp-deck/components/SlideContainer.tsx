'use client';

import { ReactNode, forwardRef } from 'react';

interface SlideContainerProps {
  children: ReactNode;
  className?: string;
}

const SlideContainer = forwardRef<HTMLDivElement, SlideContainerProps>(
  ({ children, className = '' }, ref) => {
    return (
      <div
        ref={ref}
        className={`relative w-screen h-screen min-h-screen bg-gradient-to-br from-[#0F1419] to-[#1A1A2E] flex flex-col items-center justify-center overflow-hidden px-6 sm:px-12 lg:px-20 ${className}`}
      >
        {children}
      </div>
    );
  }
);

SlideContainer.displayName = 'SlideContainer';

export default SlideContainer;
