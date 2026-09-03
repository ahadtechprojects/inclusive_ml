"use client";

import React from "react";

interface LogoProps {
  className?: string;
  size?: number;
  pulsating?: boolean;
}

export function Logo({ className = "", size = 40, pulsating = false }: LogoProps) {
  return (
    <div
      className={`relative flex items-center justify-center select-none ${
        pulsating ? "animate-pulse" : ""
      } ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 120 120"
        width={size}
        height={size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-sm transition-transform"
      >
        {/* Transparent background - outer hexagon path */}
        <polygon
          points="60,6 110,33 110,87 60,114 10,87 10,33"
          stroke="currentColor"
          strokeWidth="10"
          strokeLinejoin="round"
          strokeLinecap="round"
          className="text-primary"
          fill="none"
        />

        {/* Inner stylized IML Monogram */}
        <text
          x="60"
          y="72"
          textAnchor="middle"
          fill="currentColor"
          className="text-primary font-black tracking-tighter"
          style={{
            fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            fontSize: "44px",
            fontWeight: 900,
            letterSpacing: "-2px",
          }}
        >
          IML
        </text>
      </svg>
    </div>
  );
}
