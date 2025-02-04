import { useEffect } from 'react';


const UseScrollAnimation = () => {
  useEffect(() => {
    const checkVisibility = () => {
      const triggerBottom = (window.innerHeight / 5) * 4;
      const boxes = document.querySelectorAll('.hidden_'); // Target elements with class `hidden_`

      boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
          box.classList.add('visible');
          box.classList.remove('hidden');
        } else {
          box.classList.remove('visible');
          box.classList.add('hidden');
        }
      });
    };

    // Debounce function to optimize scroll event performance
    const debounce = (func, wait = 20, immediate = true) => {
      let timeout;
      return function () {
        const context = this;
        const args = arguments;
        const later = function () {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    };

    const debouncedCheckVisibility = debounce(checkVisibility);
    window.addEventListener('scroll', debouncedCheckVisibility);

    // Initial visibility check
    checkVisibility();

    // Cleanup on unmount
    return () => {
      window.removeEventListener('scroll', debouncedCheckVisibility);
    };
  }, []);
};

export default UseScrollAnimation;