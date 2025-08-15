import React from 'react';

export function GrowthIllustration({ className = "w-64 h-64" }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 200 200" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Growth illustration showing plants growing and reaching upward"
    >
      {/* Background */}
      <circle cx="100" cy="100" r="90" fill="hsl(var(--primary) / 0.1)" stroke="hsl(var(--primary) / 0.2)" strokeWidth="2" />
      
      {/* Ground line */}
      <line x1="20" y1="160" x2="180" y2="160" stroke="hsl(var(--muted-foreground))" strokeWidth="3" />
      
      {/* Plant 1 - Small */}
      <path d="M50 160 Q50 140 55 130 Q60 120 65 115" stroke="hsl(var(--chart-3))" strokeWidth="4" fill="none" strokeLinecap="round" />
      <ellipse cx="67" cy="113" rx="8" ry="4" fill="hsl(var(--chart-3))" transform="rotate(45 67 113)" />
      <ellipse cx="63" cy="118" rx="6" ry="3" fill="hsl(var(--chart-3))" transform="rotate(-30 63 118)" />
      
      {/* Plant 2 - Medium */}
      <path d="M100 160 Q100 130 105 110 Q110 90 115 80" stroke="hsl(var(--chart-2))" strokeWidth="5" fill="none" strokeLinecap="round" />
      <ellipse cx="118" cy="77" rx="12" ry="6" fill="hsl(var(--chart-2))" transform="rotate(45 118 77)" />
      <ellipse cx="112" cy="85" rx="10" ry="5" fill="hsl(var(--chart-2))" transform="rotate(-30 112 85)" />
      <ellipse cx="108" cy="95" rx="8" ry="4" fill="hsl(var(--chart-2))" transform="rotate(60 108 95)" />
      
      {/* Plant 3 - Large */}
      <path d="M150 160 Q150 120 155 90 Q160 60 165 45" stroke="hsl(var(--primary))" strokeWidth="6" fill="none" strokeLinecap="round" />
      <ellipse cx="168" cy="42" rx="15" ry="8" fill="hsl(var(--primary))" transform="rotate(45 168 42)" />
      <ellipse cx="160" cy="52" rx="12" ry="6" fill="hsl(var(--primary))" transform="rotate(-30 160 52)" />
      <ellipse cx="155" cy="65" rx="10" ry="5" fill="hsl(var(--primary))" transform="rotate(60 155 65)" />
      <ellipse cx="152" cy="80" rx="8" ry="4" fill="hsl(var(--primary))" transform="rotate(-45 152 80)" />
      
      {/* Sun */}
      <circle cx="160" cy="40" r="15" fill="hsl(var(--chart-4) / 0.3)" stroke="hsl(var(--chart-4))" strokeWidth="2" />
      <circle cx="160" cy="40" r="8" fill="hsl(var(--chart-4))" />
      
      {/* Sun rays */}
      <path d="M160 20 L160 15" stroke="hsl(var(--chart-4))" strokeWidth="2" strokeLinecap="round" />
      <path d="M160 65 L160 70" stroke="hsl(var(--chart-4))" strokeWidth="2" strokeLinecap="round" />
      <path d="M180 40 L185 40" stroke="hsl(var(--chart-4))" strokeWidth="2" strokeLinecap="round" />
      <path d="M135 40 L140 40" stroke="hsl(var(--chart-4))" strokeWidth="2" strokeLinecap="round" />
      <path d="M175 25 L178 22" stroke="hsl(var(--chart-4))" strokeWidth="2" strokeLinecap="round" />
      <path d="M142 58 L145 55" stroke="hsl(var(--chart-4))" strokeWidth="2" strokeLinecap="round" />
      <path d="M175 55 L178 58" stroke="hsl(var(--chart-4))" strokeWidth="2" strokeLinecap="round" />
      <path d="M142 22 L145 25" stroke="hsl(var(--chart-4))" strokeWidth="2" strokeLinecap="round" />
      
      {/* Growth arrows */}
      <path d="M70 125 L75 120 L70 115" stroke="hsl(var(--chart-1))" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M120 95 L125 90 L120 85" stroke="hsl(var(--chart-1))" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M170 60 L175 55 L170 50" stroke="hsl(var(--chart-1))" strokeWidth="2" strokeLinecap="round" fill="none" />
      
      {/* Small floating seeds/ideas */}
      <circle cx="40" cy="120" r="2" fill="hsl(var(--chart-5))" />
      <circle cx="45" cy="110" r="1.5" fill="hsl(var(--chart-5) / 0.8)" />
      <circle cx="35" cy="105" r="1" fill="hsl(var(--chart-5) / 0.6)" />
      
      <circle cx="180" cy="100" r="2" fill="hsl(var(--chart-1))" />
      <circle cx="175" cy="90" r="1.5" fill="hsl(var(--chart-1) / 0.8)" />
      <circle cx="185" cy="85" r="1" fill="hsl(var(--chart-1) / 0.6)" />
    </svg>
  );
}