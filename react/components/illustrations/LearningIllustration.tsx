import React from 'react';

export function LearningIllustration({ className = "w-64 h-64" }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 200 200" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Learning illustration showing a person with a book and knowledge symbols"
    >
      {/* Background */}
      <circle cx="100" cy="100" r="90" fill="hsl(var(--chart-3) / 0.1)" stroke="hsl(var(--chart-3) / 0.2)" strokeWidth="2" />
      
      {/* Book/knowledge base */}
      <rect x="70" y="120" width="60" height="40" rx="6" fill="hsl(var(--chart-3))" stroke="hsl(var(--background))" strokeWidth="2" />
      <rect x="70" y="120" width="60" height="10" fill="hsl(var(--chart-3))" />
      <line x1="80" y1="135" x2="120" y2="135" stroke="hsl(var(--background))" strokeWidth="2" />
      <line x1="80" y1="145" x2="110" y2="145" stroke="hsl(var(--background))" strokeWidth="2" />
      <line x1="80" y1="155" x2="115" y2="155" stroke="hsl(var(--background))" strokeWidth="2" />
      
      {/* Person reading/learning */}
      <circle cx="100" cy="70" r="12" fill="hsl(var(--primary))" stroke="hsl(var(--background))" strokeWidth="2" />
      <rect x="90" y="87" width="20" height="30" rx="10" fill="hsl(var(--primary) / 0.8)" />
      
      {/* Knowledge bubbles/ideas */}
      <circle cx="130" cy="50" r="10" fill="hsl(var(--chart-1) / 0.3)" stroke="hsl(var(--chart-1))" strokeWidth="2" />
      <path d="M125 45 L130 50 L135 45" stroke="hsl(var(--chart-1))" strokeWidth="2" strokeLinecap="round" />
      <circle cx="128" cy="48" r="2" fill="hsl(var(--chart-1))" />
      
      <circle cx="160" cy="80" r="8" fill="hsl(var(--chart-2) / 0.3)" stroke="hsl(var(--chart-2))" strokeWidth="2" />
      <rect x="156" y="76" width="8" height="8" fill="hsl(var(--chart-2))" />
      
      <circle cx="145" cy="110" r="9" fill="hsl(var(--chart-4) / 0.3)" stroke="hsl(var(--chart-4))" strokeWidth="2" />
      <circle cx="145" cy="110" r="4" fill="hsl(var(--chart-4))" />
      
      {/* Learning path/growth */}
      <path 
        d="M70 90 Q85 75 100 85 Q115 95 130 80 Q145 65 160 70" 
        stroke="hsl(var(--primary) / 0.6)" 
        strokeWidth="4" 
        fill="none" 
        strokeDasharray="8,4"
      />
      
      {/* Growth arrows */}
      <path d="M155 75 L160 70 L155 65" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round" fill="none" />
      
      {/* Knowledge sharing symbols */}
      <circle cx="50" cy="60" r="4" fill="hsl(var(--chart-5))" />
      <circle cx="45" cy="75" r="3" fill="hsl(var(--chart-5) / 0.7)" />
      <circle cx="55" cy="80" r="3" fill="hsl(var(--chart-5) / 0.7)" />
      
      {/* Books stack */}
      <rect x="40" y="100" width="20" height="4" rx="2" fill="hsl(var(--chart-1) / 0.8)" />
      <rect x="40" y="107" width="20" height="4" rx="2" fill="hsl(var(--chart-2) / 0.8)" />
      <rect x="40" y="114" width="20" height="4" rx="2" fill="hsl(var(--chart-4) / 0.8)" />
    </svg>
  );
}