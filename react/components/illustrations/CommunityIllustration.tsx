import React from 'react';

export function CommunityIllustration({ className = "w-64 h-64" }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 200 200" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Community illustration showing people connected in a circle"
    >
      {/* Background circle */}
      <circle cx="100" cy="100" r="90" fill="hsl(var(--primary) / 0.1)" stroke="hsl(var(--primary) / 0.2)" strokeWidth="2" />
      
      {/* People figures */}
      {/* Person 1 - Top Left */}
      <circle cx="70" cy="70" r="12" fill="hsl(var(--primary))" />
      <rect x="62" y="85" width="16" height="20" rx="8" fill="hsl(var(--primary) / 0.8)" />
      
      {/* Person 2 - Top Right */}
      <circle cx="130" cy="70" r="12" fill="hsl(var(--chart-2))" />
      <rect x="122" y="85" width="16" height="20" rx="8" fill="hsl(var(--chart-2) / 0.8)" />
      
      {/* Person 3 - Center */}
      <circle cx="100" cy="120" r="12" fill="hsl(var(--chart-3))" />
      <rect x="92" y="135" width="16" height="20" rx="8" fill="hsl(var(--chart-3) / 0.8)" />
      
      {/* Person 4 - Bottom Left */}
      <circle cx="60" cy="140" r="12" fill="hsl(var(--chart-4))" />
      <rect x="52" y="155" width="16" height="20" rx="8" fill="hsl(var(--chart-4) / 0.8)" />
      
      {/* Person 5 - Bottom Right */}
      <circle cx="140" cy="140" r="12" fill="hsl(var(--chart-5))" />
      <rect x="132" y="155" width="16" height="20" rx="8" fill="hsl(var(--chart-5) / 0.8)" />
      
      {/* Connection lines */}
      <path 
        d="M70 80 Q100 50 130 80" 
        stroke="hsl(var(--primary) / 0.6)" 
        strokeWidth="3" 
        fill="none" 
        strokeDasharray="6,6"
      />
      <path 
        d="M80 85 Q90 100 100 120" 
        stroke="hsl(var(--primary) / 0.6)" 
        strokeWidth="3" 
        fill="none" 
        strokeDasharray="6,6"
      />
      <path 
        d="M120 85 Q110 100 100 120" 
        stroke="hsl(var(--primary) / 0.6)" 
        strokeWidth="3" 
        fill="none" 
        strokeDasharray="6,6"
      />
      <path 
        d="M70 145 Q85 130 100 135" 
        stroke="hsl(var(--primary) / 0.6)" 
        strokeWidth="3" 
        fill="none" 
        strokeDasharray="6,6"
      />
      <path 
        d="M130 145 Q115 130 100 135" 
        stroke="hsl(var(--primary) / 0.6)" 
        strokeWidth="3" 
        fill="none" 
        strokeDasharray="6,6"
      />
      
      {/* Heart in center */}
      <path 
        d="M100 95 C95 90 85 90 85 100 C85 110 100 120 100 120 C100 120 115 110 115 100 C115 90 105 90 100 95Z" 
        fill="hsl(var(--primary))"
        stroke="hsl(var(--background))"
        strokeWidth="2"
      />
      
      {/* Floating hearts/sparkles */}
      <circle cx="40" cy="60" r="3" fill="hsl(var(--chart-1) / 0.8)" />
      <circle cx="160" cy="50" r="2" fill="hsl(var(--chart-2) / 0.8)" />
      <circle cx="170" cy="120" r="2.5" fill="hsl(var(--chart-3) / 0.8)" />
      <circle cx="30" cy="130" r="2" fill="hsl(var(--chart-4) / 0.8)" />
    </svg>
  );
}