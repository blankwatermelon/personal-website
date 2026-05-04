"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const BOOT_DURATION = 2800;
const FADE_DURATION = 500;
const SESSION_KEY = "boot-played";
const TRIANGLE_COUNT = 18;

type Phase = "checking" | "active" | "exiting" | "done";

// Deterministic pseudo-random so SSR and client match (no Math.random).
const triangles = Array.from({ length: TRIANGLE_COUNT }).map((_, i) => {
  const seed = i * 73 + 17;
  return {
    key: i,
    left: (seed * 13) % 100,
    size: 28 + ((seed * 7) % 80),
    delay: ((seed * 11) % 200) / 100,
    duration: 4 + ((seed * 5) % 400) / 100,
    opacity: 0.18 + ((seed * 3) % 22) / 100,
  };
});

export function BootIntro() {
  const [phase, setPhase] = useState<Phase>("checking");

  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    // TEMP: gating disabled so the boot intro plays on every load.
    setPhase("active");

    const exitTimer = window.setTimeout(() => {
      setPhase("exiting");
    }, BOOT_DURATION);

    return () => window.clearTimeout(exitTimer);
  }, []);
  /* eslint-enable react-hooks/set-state-in-effect */

  useEffect(() => {
    if (phase !== "exiting") return;

    document.documentElement.classList.remove("boot-active");
    sessionStorage.setItem(SESSION_KEY, "1");

    const doneTimer = window.setTimeout(() => {
      setPhase("done");
    }, FADE_DURATION);

    return () => window.clearTimeout(doneTimer);
  }, [phase]);

  if (phase === "checking" || phase === "done") return null;

  const handleSkip = () => {
    if (phase === "active") setPhase("exiting");
  };

  return (
    <div
      aria-hidden
      onClick={handleSkip}
      className={`boot-overlay fixed inset-0 z-[100] flex items-center justify-center bg-black overflow-hidden cursor-pointer ${
        phase === "exiting" ? "boot-overlay-exit" : ""
      }`}
    >
      {/* Drifting triangle field — osu!'s signature background pattern */}
      <div className="boot-triangles" aria-hidden>
        {triangles.map((t) => (
          <span
            key={t.key}
            className="boot-triangle"
            style={{
              left: `${t.left}%`,
              width: `${t.size}px`,
              height: `${t.size}px`,
              animationDelay: `-${t.delay}s`,
              animationDuration: `${t.duration}s`,
              opacity: t.opacity,
            }}
          />
        ))}
      </div>

      {/* Welcome scene — sunburst rays bursting from behind a black disc */}
      <div className="boot-welcome-scene relative z-10">
        <div className="boot-rays" aria-hidden />
        <div className="boot-rays boot-rays-secondary" aria-hidden />
        <div className="boot-disc">
          <span className="boot-welcome">welcome</span>
          <Image
            src="/icons/KT.svg"
            alt=""
            width={300}
            height={300}
            priority
            className="boot-logo"
          />
        </div>
      </div>
    </div>
  );
}
