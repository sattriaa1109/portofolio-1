import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

export default function TextReveal({ text, tag: Tag = 'span', className = '', delay = 0, style = {} }) {
  const elRef = useRef(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const split = new SplitType(el, { types: 'words' });

    // Wrap each word in a mask — done once, no extra DOM queries
    split.words.forEach((word) => {
      const mask = document.createElement('span');
      mask.style.cssText = 'display:inline-block;overflow:hidden;vertical-align:bottom;';
      word.parentNode.insertBefore(mask, word);
      mask.appendChild(word);
    });

    gsap.set(split.words, { yPercent: 105 });

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top 90%',
      once: true,
      onEnter: () => {
        gsap.to(split.words, {
          yPercent: 0,
          duration: 0.65,
          ease: 'power2.out',
          stagger: 0.055,
          delay,
          // Clear will-change after animation
          onComplete: () => {
            split.words.forEach(w => { w.style.willChange = 'auto'; });
          },
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
