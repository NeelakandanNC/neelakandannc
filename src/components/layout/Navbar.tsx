
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  
  useEffect(() => {
    // Ensure dark mode is always applied
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if scrolled
      if (currentScrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Determine if should hide navbar
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Stories", path: "/blog" },
    { name: "Timeline", path: "/timeline" },
    { name: "Works", path: "/projects" },
  ];

  return (
    <header 
      className={cn(
        "fixed w-full top-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-background/80 backdrop-blur-md border-b border-border/50 py-2 shadow-sm" 
          : "bg-transparent py-4",
        isVisible ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <NavLink to="/" className="text-lg md:text-xl font-display font-bold text-gradient">
          Neelakandan NC
        </NavLink>
        
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                cn(
                  "animated-link text-base font-medium transition-colors",
                  isActive ? "text-primary" : "text-foreground hover:text-primary"
                )
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="md:hidden flex items-center">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Open menu</span>
          </Button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-background/95 backdrop-blur-md z-50 animate-fade-in">
            <div className="container mx-auto px-4 py-5 flex justify-between items-center">
              <span className="text-lg font-display font-bold text-gradient">Neelakandan NC</span>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setIsMenuOpen(false)}
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>
            <nav className="container mx-auto px-4 py-12 flex flex-col space-y-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    cn(
                      "text-xl font-medium py-2 transition-colors",
                      isActive ? "text-primary" : "text-foreground hover:text-primary"
                    )
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
