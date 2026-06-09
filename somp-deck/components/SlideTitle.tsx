'use client';

import { ReactNode } from 'react';

interface SlideTitleProps {
  children: ReactNode;
  className?: string;
}

export default function SlideTitle({
  children,
  className = '',
}: SlideTitleProps) {
  return (
    <h1
      className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-center leading-tight max-w-4xl ${className}`}
      style={{ fontFamily: 'Montserrat, sans-serif' }}
      data-animate-title
    >
      {children}
    </h1>
  );
}
