import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

// ─────────────────────────────────────────────
//  TextReveal — word-mask slide-up
//  • Uses SplitType to split into words/lines
//  • Each word slides up from a clipped mask
//  • Stagger: 0.08s per word
//  • Easing: cubic-bezier(0.25, 0.1, 0.25, 1)
//  • Triggered by ScrollTrigger (once)
//  • delay prop: seconds before animation starts
// ─────────────────────────────────────────────
export default function TextReveal({ text, tag: Tag = 'span', className = '', delay = 0, style = {} }) {
  const elRef = useRef(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    // Split into words
    const split = new SplitType(el, { types: 'words' });

    // Wrap each word in a mask div
    split.words.forEach((word) => {
      const mask = document.createElement('span');
      mask.style.cssText = 'display:inline-block; overflow:hidden; vertical-align:bottom;';
      word.parentNode.insertBefore(mask, word);
      mask.appendChild(word);
    });

    // Set initial state — words hidden below mask
    gsap.set(split.words, { yPercent: 110 });

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top 88%',
      once: true,
      onEnter: () => {
        gsap.to(split.words, {
          yPercent: 0,
          duration: 0.75,
          ease: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
          stagger: 0.07,
          delay,
        });
      },
    });

    return () => {
      trigger.kill();
      split.revert();
    };
  }, [text, delay]);

  return (
    <Tag ref={elRef} className={className} style={style}>
      {text}
    </Tag>
  );
}
