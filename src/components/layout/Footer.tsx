
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Linkedin, Mail, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-primary-foreground pt-12 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Neelakandan NC</h3>
            <p className="text-primary-foreground/80">
              Documenting my journey, sharing my thoughts, and showcasing my work.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/blog" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Stories
                </NavLink>
              </li>
              <li>
                <NavLink to="/timeline" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Timeline
                </NavLink>
              </li>
              <li>
                <NavLink to="/projects" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Works
                </NavLink>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex flex-wrap gap-3">
              <a 
                href="https://www.linkedin.com/in/neelakandan-nc/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a 
                href="mailto:neelakandannithin@gmail.com"
                className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
              <a 
                href="https://www.instagram.com/neelakandannc/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a 
                href="https://x.com/NeelakandanNC" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="X (Twitter)"
              >
                <Twitter size={16} />
              </a>
              <a 
                href="https://www.facebook.com/NeelakandanNC" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a 
                href="https://www.youtube.com/@Journeyofbuilders" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={16} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-primary-foreground/20 text-center">
          <p className="text-primary-foreground/70 text-sm">
            &copy; {currentYear} Neelakandan NC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
