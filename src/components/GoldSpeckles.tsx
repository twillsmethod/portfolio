"use client";

import { useEffect, useRef, useState } from "react";

interface Speckle {
  x: number;
  y: number;
  r: number;
  opacity: number;
  color: string;
  shimmer: boolean;
  shimmerBase: number;
  shimmerPeak: number;
  shimmerDuration: number;
  shimmerDelay: number;
}

const COLORS = ["#B8842A", "#C49A2E", "#D4A843"];

function generateSpeckles(count: number): Speckle[] {
  return Array.from({ length: count }, (_, i) => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    r: 0.8 + Math.random() * 1.4,
    opacity: 0.3 + Math.random() * 0.25,
    color: COLORS[i % COLORS.length],
    shimmer: Math.random() > 0.65,
    shimmerBase: 0.3 + Math.random() * 0.1,
    shimmerPeak: 0.5 + Math.random() * 0.1,
    shimmerDuration: 3 + Math.random() * 2,
    shimmerDelay: Math.random() * 4,
  }));
}

export default function GoldSpeckles() {
  const [speckles] = useState<Speckle[]>(() => generateSpeckles(180));
  const [offsetY, setOffsetY] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        setOffsetY(window.scrollY * 0.3);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ transform: `translateY(${offsetY}px)` }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {speckles.map((s, i) => (
        <circle
          key={i}
          cx={`${s.x}%`}
          cy={`${s.y}%`}
          r={s.r}
          fill={s.color}
          opacity={s.opacity}
          style={
            s.shimmer
              ? {
                  animation: `shimmer ${s.shimmerDuration}s ${s.shimmerDelay}s ease-in-out infinite`,
                  // @ts-expect-error CSS custom properties
                  "--shimmer-base": s.shimmerBase,
                  "--shimmer-peak": s.shimmerPeak,
                }
              : undefined
          }
        />
      ))}
    </svg>
  );
}
