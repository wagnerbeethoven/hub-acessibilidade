import React from 'react';

export function AccessibilityIllustration({ className = "w-64 h-64" }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 200 200" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Accessibility illustration showing universal access symbol and assistive technology icons"
    >
      {/* Background */}
      <circle cx="100" cy="100" r="90" fill="hsl(var(--chart-2) / 0.1)" stroke="hsl(var(--chart-2) / 0.2)" strokeWidth="2" />
      
      {/* Universal access symbol stylized */}
      <circle cx="100" cy="100" r="60" stroke="hsl(var(--primary))" strokeWidth="4" fill="none" />
      
      {/* Person figure */}
      <circle cx="100" cy="75" r="10" fill="hsl(var(--primary))" />
      
      {/* Body */}
      <rect x="93" y="90" width="14" height="25" rx="7" fill="hsl(var(--primary))" />
      
      {/* Arms spread wide (universal access pose) */}
      <rect x="70" y="95" width="25" height="6" rx="3" fill="hsl(var(--primary))" />
      <rect x="105" y="95" width="25" height="6" rx="3" fill="hsl(var(--primary))" />
      
      {/* Legs */}
      <rect x="92" y="115" width="6" height="18" rx="3" fill="hsl(var(--primary))" />
      <rect x="102" y="115" width="6" height="18" rx="3" fill="hsl(var(--primary))" />
      
      {/* Accessibility symbols around */}
      {/* Screen reader icon */}
      <rect x="125" y="55" width="25" height="18" rx="4" fill="hsl(var(--chart-2))" stroke="hsl(var(--background))" strokeWidth="1" />
      <rect x="129" y="59" width="17" height="10" rx="2" fill="hsl(var(--background))" />
      <circle cx="137" cy="64" r="3" fill="hsl(var(--chart-2))" />
      
      {/* Keyboard icon */}
      <rect x="45" y="130" width="30" height="18" rx="4" fill="hsl(var(--chart-3))" stroke="hsl(var(--background))" strokeWidth="1" />
      <rect x="49" y="134" width="4" height="4" rx="1" fill="hsl(var(--background))" />
      <rect x="55" y="134" width="4" height="4" rx="1" fill="hsl(var(--background))" />
      <rect x="61" y="134" width="4" height="4" rx="1" fill="hsl(var(--background))" />
      <rect x="67" y="134" width="4" height="4" rx="1" fill="hsl(var(--background))" />
      <rect x="52" y="140" width="12" height="4" rx="1" fill="hsl(var(--background))" />
      
      {/* Voice/audio waves */}
      <path 
        d="M150 115 Q155 110 160 115 Q155 120 150 115" 
        stroke="hsl(var(--chart-4))" 
        strokeWidth="3" 
        fill="none"
      />
      <path 
        d="M147 115 Q158 105 169 115 Q158 125 147 115" 
        stroke="hsl(var(--chart-4))" 
        strokeWidth="3" 
        fill="none"
      />
      <path 
        d="M144 115 Q161 100 178 115 Q161 130 144 115" 
        stroke="hsl(var(--chart-4) / 0.6)" 
        strokeWidth="2" 
        fill="none"
      />
      
      {/* Eye icon (vision) */}
      <ellipse cx="40" cy="80" rx="15" ry="10" fill="hsl(var(--chart-5))" stroke="hsl(var(--background))" strokeWidth="1" />
      <circle cx="40" cy="80" r="6" fill="hsl(var(--background))" />
      <circle cx="40" cy="80" r="3" fill="hsl(var(--chart-5))" />
      
      {/* Connecting dots */}
      <circle cx="120" cy="35" r="3" fill="hsl(var(--primary) / 0.8)" />
      <circle cx="80" cy="35" r="3" fill="hsl(var(--primary) / 0.8)" />
      <circle cx="35" cy="120" r="3" fill="hsl(var(--primary) / 0.8)" />
      <circle cx="165" cy="160" r="3" fill="hsl(var(--primary) / 0.8)" />
    </svg>
  );
}