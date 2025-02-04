import { useEffect } from "react";

const useScrollAnimationLeft = () => {
  useEffect(() => {
    const animatedElements = document.querySelectorAll(".scroll-animate");

    const handleScroll = () => {
      animatedElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add("active");
        }
      });
    };

    // Trigger animation on scroll
    window.addEventListener("scroll", handleScroll);

    // Trigger animation for already visible elements
    handleScroll();

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
};

export default useScrollAnimationLeft;
