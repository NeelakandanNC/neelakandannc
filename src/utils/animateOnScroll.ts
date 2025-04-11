
import { useEffect } from "react";

export const useAnimateOnScroll = () => {
  useEffect(() => {
    const animateElements = () => {
      const elementsToAnimate = document.querySelectorAll(".animate-on-scroll:not(.animated)");
      
      elementsToAnimate.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          // Get custom delay if specified
          const delay = element.style.getPropertyValue('--delay') || '0s';
          
          // Apply animation with delay
          element.style.transitionDelay = delay;
          element.classList.add("animated");
          
          // Remove delay after animation completes
          setTimeout(() => {
            element.style.transitionDelay = '0s';
          }, 1000); // Adjust timeout based on animation duration
        }
      });
    };

    // Initial check
    animateElements();

    // Add event listeners
    window.addEventListener("scroll", animateElements);
    window.addEventListener("resize", animateElements);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", animateElements);
      window.removeEventListener("resize", animateElements);
    };
  }, []);
};

export default useAnimateOnScroll;
