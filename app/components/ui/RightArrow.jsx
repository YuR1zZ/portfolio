'use client'

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const AnimatedRightArrow = () => {
  const arrowRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.to(arrowRef.current, { x: 10, duration: 0.5, ease: 'power1.inOut' })
      .to(arrowRef.current, { x: 0, duration: 0.5, ease: 'power1.inOut' });
  }, []);

  return (
    <div className="flex items-center justify-center h-10 w-10 scale-60">
      <svg
        ref={arrowRef}
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );
};

export default AnimatedRightArrow;



