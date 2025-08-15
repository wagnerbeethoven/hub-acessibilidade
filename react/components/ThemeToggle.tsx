import React from 'react';
import { Button } from './ui/button';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
      className="relative overflow-hidden"
    >
      <Sun className={`h-[1.2rem] w-[1.2rem] transition-all ${
        theme === 'dark' ? 'rotate-90 scale-0' : 'rotate-0 scale-100'
      }`} />
      <Moon className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${
        theme === 'dark' ? 'rotate-0 scale-100' : '-rotate-90 scale-0'
      }`} />
    </Button>
  );
}