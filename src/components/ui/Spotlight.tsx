"use client";

import React from "react";

/**
 * Static ambient glow. 
 * Replaces the interactive spotlight to keep the "Void" aesthetic 
 * without the cursor-tracking gimmick.
 */
export function Spotlight() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0"
      style={
        {
          background:
            "radial-gradient(800px circle at 50% -10%, rgba(220, 20, 60, 0.08), transparent 70%)",
        } as React.CSSProperties
      }
    />
  );
}
