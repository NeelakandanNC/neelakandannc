
import { useEffect } from "react";

export const useAnimateOnScroll = () => {
  useEffect(() => {
    const animateElements = () => {
      const elementsToAnimate = document.querySelectorAll(".animate-on-scroll:not(.animated)");
      
      elementsToAnimate.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          // Type cast element to HTMLElement since Element doesn't have style property
          const htmlElement = element as HTMLElement;
          
          // Get custom delay if specified
          const delay = htmlElement.style.getPropertyValue('--delay') || '0s';
          
          // Apply animation with delay
          htmlElement.style.transitionDelay = delay;
          htmlElement.classList.add("animated");
          
          // Remove delay after animation completes
          setTimeout(() => {
            htmlElement.style.transitionDelay = '0s';
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
