import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Premium easing — cubic-bezier(0.25, 0.1, 0.25, 1)
    // Approximated as a JS function for Lenis
    const ease = (t) => {
      // Cubic bezier approximation: ease (standard CSS)
      // Equivalent to cubic-bezier(0.25, 0.1, 0.25, 1)
      return t < 0.5
        ? 4 * t * t * t
        : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const lenis = new Lenis({
      duration:        1.1,
      easing:          ease,
      smoothWheel:     true,
      smoothTouch:     false,
      touchMultiplier: 1.8,
      wheelMultiplier: 0.9,
      infinite:        false,
      autoRaf:         false,   // We drive it manually via GSAP ticker
    });

    lenisRef.current = lenis;

    // Sync Lenis with GSAP ticker — this is the key to 60fps lock
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    // Prevent GSAP from throttling on slow frames
    gsap.ticker.lagSmoothing(0);

    // Keep ScrollTrigger in sync with Lenis scroll position
    lenis.on('scroll', ScrollTrigger.update);

    return () => {
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
