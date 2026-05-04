"use client";

import { useEffect, useRef } from "react";

export function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    el.style.setProperty("--mx", `${window.innerWidth / 2}px`);
    el.style.setProperty("--my", `${window.innerHeight / 3}px`);

    let raf = 0;
    const handler = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.setProperty("--mx", `${e.clientX}px`);
        el.style.setProperty("--my", `${e.clientY}px`);
      });
    };

    window.addEventListener("mousemove", handler, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handler);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0"
      style={
        {
          "--mx": "50%",
          "--my": "33%",
          background:
            "radial-gradient(650px circle at var(--mx) var(--my), rgba(220, 20, 60, 0.13), transparent 60%)",
        } as React.CSSProperties
      }
    />
  );
}
