"use client";

import { useEffect, useRef } from "react";

export function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // Matrix characters
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()";
    const fontSize = 14;
    const borderWidth = 100; // Width of the border area

    // Columns for each border
    const topColumns: number[] = [];
    const bottomColumns: number[] = [];
    const leftColumns: number[] = [];
    const rightColumns: number[] = [];

    // Initialize columns
    const numHorizontalColumns = Math.ceil(canvas.width / fontSize);
    const numVerticalColumns = Math.ceil(canvas.height / fontSize);

    for (let i = 0; i < numHorizontalColumns; i++) {
      topColumns[i] = 1;
      bottomColumns[i] = 1;
    }

    for (let i = 0; i < numVerticalColumns; i++) {
      leftColumns[i] = 1;
      rightColumns[i] = 1;
    }

    const draw = () => {
      // Semi-transparent black to create fade effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      // Draw left border - flowing top to bottom
      for (let i = 0; i < Math.ceil(borderWidth / fontSize); i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = leftColumns[i] * fontSize;

        if (x < borderWidth && y > 0 && y < canvas.height) {
          const opacity = 1 - x / borderWidth;
          ctx.fillStyle = `rgba(220, 20, 60, ${opacity})`;
          ctx.fillText(text, x, y);
        }

        if (y > canvas.height && Math.random() > 0.975) {
          leftColumns[i] = 0;
        }
        leftColumns[i]++;
      }

      // Draw right border - flowing top to bottom
      for (let i = 0; i < Math.ceil(borderWidth / fontSize); i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = canvas.width - (i + 1) * fontSize;
        const y = rightColumns[i] * fontSize;

        if (canvas.width - x < borderWidth && y > 0 && y < canvas.height) {
          const opacity = 1 - (canvas.width - x - fontSize) / borderWidth;
          ctx.fillStyle = `rgba(220, 20, 60, ${opacity})`;
          ctx.fillText(text, x, y);
        }

        if (y > canvas.height && Math.random() > 0.975) {
          rightColumns[i] = 0;
        }
        rightColumns[i]++;
      }
    };

    const interval = setInterval(draw, 50);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
