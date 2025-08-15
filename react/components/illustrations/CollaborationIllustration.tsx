import React from "react";

export function CollaborationIllustration({
  className = "w-64 h-64",
}: {
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Collaboration illustration showing puzzle pieces coming together with helping hands"
    >
      {/* Background */}
      <circle
        cx="100"
        cy="100"
        r="90"
        fill="hsl(var(--chart-4) / 0.1)"
        stroke="hsl(var(--chart-4) / 0.2)"
        strokeWidth="2"
      />

      {/* Puzzle pieces coming together */}
      <g transform="translate(100,100)">
        {/* Center piece */}
        <path
          d="M-18,-18 L18,-18 L18,-6 Q24,-6 24,0 Q24,6 18,6 L18,18 L-18,18 L-18,6 Q-24,6 -24,0 Q-24,-6 -18,-6 Z"
          fill="hsl(var(--primary))"
          stroke="hsl(var(--background))"
          strokeWidth="2"
        />

        {/* Top piece */}
        <path
          d="M-18,-48 L18,-48 L18,-36 Q24,-36 24,-30 Q24,-24 18,-24 L18,-18 L6,-18 Q6,-24 0,-24 Q-6,-24 -6,-18 L-18,-18 Z"
          fill="hsl(var(--chart-1))"
          stroke="hsl(var(--background))"
          strokeWidth="2"
        />

        {/* Right piece */}
        <path
          d="M18,-18 L48,-18 L48,18 L36,18 Q36,24 30,24 Q24,24 24,18 L18,18 L18,6 Q24,6 24,0 Q24,-6 18,-6 Z"
          fill="hsl(var(--chart-2))"
          stroke="hsl(var(--background))"
          strokeWidth="2"
        />

        {/* Bottom piece */}
        <path
          d="M-18,18 L-6,18 Q-6,24 0,24 Q6,24 6,18 L18,18 L18,48 L-18,48 L-18,24 Q-24,24 -24,18 Q-24,12 -18,12 Z"
          fill="hsl(var(--chart-3))"
          stroke="hsl(var(--background))"
          strokeWidth="2"
        />

        {/* Left piece */}
        <path
          d="M-48,-18 L-24,-18 Q-24,-24 -18,-24 Q-12,-24 -12,-18 L-18,-18 L-18,18 L-48,18 L-48,6 Q-42,6 -42,0 Q-42,-6 -48,-6 Z"
          fill="hsl(var(--chart-5))"
          stroke="hsl(var(--background))"
          strokeWidth="2"
        />
      </g>

      {/* Connecting hands around the puzzle */}
      {/* Top hands */}
      <ellipse
        cx="80"
        cy="30"
        rx="10"
        ry="5"
        fill="hsl(var(--primary) / 0.8)"
        transform="rotate(-30 80 30)"
      />
      <ellipse
        cx="120"
        cy="30"
        rx="10"
        ry="5"
        fill="hsl(var(--primary) / 0.8)"
        transform="rotate(30 120 30)"
      />

      {/* Side hands */}
      <ellipse
        cx="30"
        cy="100"
        rx="10"
        ry="5"
        fill="hsl(var(--primary) / 0.8)"
        transform="rotate(90 30 100)"
      />
      <ellipse
        cx="170"
        cy="100"
        rx="10"
        ry="5"
        fill="hsl(var(--primary) / 0.8)"
        transform="rotate(-90 170 100)"
      />

      {/* Bottom hands */}
      <ellipse
        cx="80"
        cy="170"
        rx="10"
        ry="5"
        fill="hsl(var(--primary) / 0.8)"
        transform="rotate(30 80 170)"
      />
      <ellipse
        cx="120"
        cy="170"
        rx="10"
        ry="5"
        fill="hsl(var(--primary) / 0.8)"
        transform="rotate(-30 120 170)"
      />

      {/* Small connecting dots/sparkles */}
      <circle
        cx="60"
        cy="60"
        r="3"
        fill="hsl(var(--chart-1))"
      />
      <circle
        cx="140"
        cy="60"
        r="3"
        fill="hsl(var(--chart-2))"
      />
      <circle
        cx="140"
        cy="140"
        r="3"
        fill="hsl(var(--chart-3))"
      />
      <circle
        cx="60"
        cy="140"
        r="3"
        fill="hsl(var(--chart-5))"
      />

      {/* Connection lines */}
      <path
        d="M60 60 Q100 40 140 60"
        stroke="hsl(var(--primary) / 0.4)"
        strokeWidth="2"
        fill="none"
        strokeDasharray="4,4"
      />
      <path
        d="M140 60 Q160 100 140 140"
        stroke="hsl(var(--primary) / 0.4)"
        strokeWidth="2"
        fill="none"
        strokeDasharray="4,4"
      />
      <path
        d="M140 140 Q100 160 60 140"
        stroke="hsl(var(--primary) / 0.4)"
        strokeWidth="2"
        fill="none"
        strokeDasharray="4,4"
      />
      <path
        d="M60 140 Q40 100 60 60"
        stroke="hsl(var(--primary) / 0.4)"
        strokeWidth="2"
        fill="none"
        strokeDasharray="4,4"
      />
    </svg>
  );
}