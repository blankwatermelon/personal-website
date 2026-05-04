"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Fires `revealed = true` the first time the ref'd element enters the viewport.
 * Disconnects after the first hit so the animation never replays.
 * Skips the wait entirely when the user prefers reduced motion.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options: { threshold?: number; rootMargin?: string } = {}
) {
  const { threshold = 0.1, rootMargin = "0px 0px -10% 0px" } = options;
  const ref = useRef<T | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (revealed) return;
    const el = ref.current;
    if (!el) return;

    // CSS rule under @media (prefers-reduced-motion: reduce) keeps the
    // element visible regardless of `.is-revealed` — no JS work needed here.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [revealed, threshold, rootMargin]);

  return [ref, revealed] as const;
}
