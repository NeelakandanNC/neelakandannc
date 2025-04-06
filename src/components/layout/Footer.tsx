
import React from 'react';
import { NavLink } from 'react-router-dom';

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
            <p className="text-primary-foreground/80 mb-4">
              Feel free to reach out and connect with me on social media.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Twitter" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Twitter
              </a>
              <a href="#" aria-label="Github" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                GitHub
              </a>
              <a href="#" aria-label="LinkedIn" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                LinkedIn
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
