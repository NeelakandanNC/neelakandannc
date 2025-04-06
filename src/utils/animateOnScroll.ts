
import { useEffect } from "react";

export const useAnimateOnScroll = () => {
  useEffect(() => {
    const animateElements = () => {
      const elementsToAnimate = document.querySelectorAll(".animate-on-scroll:not(.animated)");
      
      elementsToAnimate.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add("animated");
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
