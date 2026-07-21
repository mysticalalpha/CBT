"use client";

import React from "react";

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

export default function ShinyText({
  text,
  disabled = false,
  speed = 5,
  className = "",
}: ShinyTextProps) {
  const animationDuration = `${speed}s`;

  // Detect if the text should shimmer with dark colors (when placed on light backgrounds)
  const isDark =
    className.includes("text-black") ||
    className.includes("text-slate-") ||
    className.includes("text-zinc-") ||
    className.includes("text-neutral-") ||
    className.includes("text-gray-");

  const gradientClass = isDark
    ? "bg-[linear-gradient(120deg,rgba(0,0,0,0.55)_30%,rgba(0,0,0,1)_50%,rgba(0,0,0,0.55)_70%)]"
    : "bg-[linear-gradient(120deg,rgba(255,255,255,0.55)_30%,rgba(255,255,255,1)_50%,rgba(255,255,255,0.55)_70%)]";

  return (
    <span
      className={`inline-block ${
        disabled
          ? ""
          : `animate-shiny ${gradientClass} bg-[length:200%_auto] bg-clip-text text-transparent bg-no-repeat`
      } ${className}`}
      style={{
        animationDuration,
        backgroundImage: disabled ? "none" : undefined,
      }}
    >
      {text}
    </span>
  );
}
