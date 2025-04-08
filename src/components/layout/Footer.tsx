
import React from 'react';
import { NavLink } from 'react-router-dom';
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-display font-bold mb-4 text-gradient">Neelakandan NC</h3>
            <p className="text-muted-foreground">
              Documenting my journey, sharing my thoughts, and showcasing my work.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-display font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="text-muted-foreground animated-link">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/blog" className="text-muted-foreground animated-link">
                  Stories
                </NavLink>
              </li>
              <li>
                <NavLink to="/timeline" className="text-muted-foreground animated-link">
                  Timeline
                </NavLink>
              </li>
              <li>
                <NavLink to="/projects" className="text-muted-foreground animated-link">
                  Works
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        
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
