import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function Preloader({ onComplete }) {
  const containerRef = useRef(null);
  const sPathRef = useRef(null);
  const pPathRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          // Scale up & fade out
          gsap.to(containerRef.current, {
            opacity: 0,
            scale: 1.1,
            duration: 0.8,
            ease: "cubic-bezier(0.7, 0, 0.3, 1)",
            onComplete: onComplete,
          });
        },
      });

      // Set stroke-dasharray & offset
      gsap.set([sPathRef.current, pPathRef.current], {
        strokeDasharray: (i, target) => target.getTotalLength(),
        strokeDashoffset: (i, target) => target.getTotalLength(),
        opacity: 1,
      });

      // Draw "S" — starts immediately
      tl.to(sPathRef.current, {
        strokeDashoffset: 0,
        duration: 1.8,
        ease: "cubic-bezier(0.7, 0, 0.3, 1)",
      }, 0);

      // Draw "P" — starts when S is at ~50%
      tl.to(pPathRef.current, {
        strokeDashoffset: 0,
        duration: 1.8,
        ease: "cubic-bezier(0.7, 0, 0.3, 1)",
      }, 0.9);
    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'var(--cream, #F5F4EF)',
        zIndex: 99999,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <svg
        width="160"
        height="160"
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: 'visible' }}
      >
        {/* Ink bleed filter */}
        <filter id="inkBleed" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.04"
            numOctaves="3"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="4"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>

        <g filter="url(#inkBleed)" stroke="var(--charcoal, #1A1A1A)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none">
          {/* S */}
          <path
            ref={sPathRef}
            d="M 95 35 C 75 15 35 25 35 60 C 35 95 95 85 95 120 C 95 145 55 150 35 130"
            opacity="0"
          />
          {/* P */}
          <path
            ref={pPathRef}
            d="M 115 145 L 115 25 C 135 15 165 25 165 55 C 165 85 135 90 115 85"
            opacity="0"
          />
        </g>
      </svg>
    </div>
  );
}
