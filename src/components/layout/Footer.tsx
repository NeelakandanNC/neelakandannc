
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Linkedin, Mail, Instagram, Twitter, Facebook, Youtube, ArrowUp } from 'lucide-react';
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
          
          <div>
            <h4 className="text-lg font-display font-semibold mb-4">Connect</h4>
            <div className="flex flex-wrap gap-3">
              <a 
                href="https://www.linkedin.com/in/neelakandan-nc/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="size-9 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="mailto:neelakandannithin@gmail.com"
                className="size-9 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a 
                href="https://www.instagram.com/neelakandannc/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="size-9 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://x.com/NeelakandanNC" 
                target="_blank" 
                rel="noopener noreferrer"
                className="size-9 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all duration-300"
                aria-label="X (Twitter)"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="https://www.facebook.com/NeelakandanNC" 
                target="_blank" 
                rel="noopener noreferrer"
                className="size-9 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://www.youtube.com/@Journeyofbuilders" 
                target="_blank" 
                rel="noopener noreferrer"
                className="size-9 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all duration-300"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
            </div>
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
