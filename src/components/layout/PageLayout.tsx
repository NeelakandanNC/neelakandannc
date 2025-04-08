
import React, { ReactNode, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  useEffect(() => {
    // Ensure dark mode is set by default
    document.documentElement.classList.add('dark');
    
    // Scroll to top on page change
    window.scrollTo(0, 0);
    
    // Initialize intersection observer for animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        }
      });
    }, { threshold: 0.1 });
    
    // Target all elements with animate-on-scroll class
    document.querySelectorAll('.animate-on-scroll').forEach(element => {
      observer.observe(element);
    });
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16 md:pt-20 animate-fade-in">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;
