"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const BOOT_DURATION = 3000;
const FADE_DURATION = 500;
const SESSION_KEY = "boot-played";

type Phase = "checking" | "active" | "exiting" | "done";

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
      {/* Welcome scene — just the black disc with the logo/text */}
      <div className="boot-welcome-scene relative z-10">
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
