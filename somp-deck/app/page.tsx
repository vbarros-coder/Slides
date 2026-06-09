'use client';

import { useSlideContext } from '@/context/SlideContext';
import { useMemo } from 'react';
import dynamic from 'next/dynamic';

const slidesMap: Record<number, React.ComponentType> = {
  0: dynamic(() => import('@/app/slides/1/page')),
  1: dynamic(() => import('@/app/slides/2/page')),
  2: dynamic(() => import('@/app/slides/3/page')),
  3: dynamic(() => import('@/app/slides/4/page')),
  4: dynamic(() => import('@/app/slides/5/page')),
  5: dynamic(() => import('@/app/slides/6/page')),
  6: dynamic(() => import('@/app/slides/7/page')),
  7: dynamic(() => import('@/app/slides/8/page')),
  8: dynamic(() => import('@/app/slides/9/page')),
  9: dynamic(() => import('@/app/slides/10/page')),
};

export default function Home() {
  const { currentSlide } = useSlideContext();
  const SlideComponent = useMemo(
    () => slidesMap[currentSlide],
    [currentSlide]
  );

  return <SlideComponent />;
}
