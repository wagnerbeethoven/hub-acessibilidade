import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';

// Simple components
function Button({ children, variant = "default", size = "default", className = "", asChild = false, ...props }: any) {
  const baseClasses = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
  const variantClasses = {
    default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
    outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground"
  }
  const sizeClasses = {
    default: "h-9 px-4 py-2",
    sm: "h-8 rounded-md px-3 text-xs",
    lg: "h-10 rounded-md px-8"
  }
  const combinedClassName = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`.trim()
  
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, { className: combinedClassName, ...props })
  }
  return <button className={combinedClassName} {...props}>{children}</button>
}

// Icons
const Menu = ({ className = "" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
)

const X = ({ className = "" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
)

const Heart = ({ className = "" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
)

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Aprender', href: '/articles', description: 'Artigos e tutoriais' },
    { name: 'Pessoas', href: '/people', description: 'Nossa comunidade' },
    { name: 'Projetos', href: '/projects', description: 'Criações da comunidade' },
    { name: 'Recursos', href: '/resources', description: 'Ferramentas úteis' },
    { name: 'Eventos', href: '/events', description: 'Workshops e encontros' },
  ];

  const isActive = (href: string) => {
    if (href === '/' && location.pathname === '/') return true;
    if (href !== '/' && location.pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto">
        <div className="flex h-16 items-center justify-between px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Heart className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-lg tracking-tight">AccessibilityHub</div>
              <div className="text-xs text-muted-foreground -mt-1">Comunidade de Acessibilidade</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground ${
                  isActive(item.href)
                    ? 'bg-accent text-accent-foreground'
                    : 'text-muted-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-3">
            <ThemeToggle />
            <Button size="sm" className="hidden sm:inline-flex" asChild>
              <Link to="/newsletter/signup">
                <Heart className="w-4 h-4 mr-2" />
                Newsletter
              </Link>
            </Button>
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-background">
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? 'bg-accent text-accent-foreground'
                      : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div>{item.name}</div>
                  <div className="text-xs text-muted-foreground mt-1">{item.description}</div>
                </Link>
              ))}
              
              <div className="pt-4 border-t">
                <Button className="w-full" asChild>
                  <Link to="/newsletter/signup" onClick={() => setIsMenuOpen(false)}>
                    <Heart className="w-4 h-4 mr-2" />
                    Inscrever-se na Newsletter
                  </Link>
                </Button>
              </div>
              
              <div className="text-center pt-4">
                <Link 
                  to="/contact" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Fale Conosco
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}