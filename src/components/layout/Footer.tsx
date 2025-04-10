
import React from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-card/50 border-t border-border/50 text-foreground pt-12 pb-8 relative">
      <Button 
        onClick={scrollToTop}
        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full size-10 bg-primary text-primary-foreground hover:bg-primary/80 neon-glow"
        aria-label="Back to top"
      >
        <ArrowUp size={18} />
      </Button>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="mt-12 pt-6 border-t border-border/20 text-center">
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} Neelakandan NC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
