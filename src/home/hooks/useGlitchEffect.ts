import { useEffect } from 'react';

export const useGlitchEffect = (id: string) => {
  useEffect(() => {
    const el = document.getElementById(id);
    if (!el) return;

    const glitch = () => {
      el.style.transform = `translate(${Math.random() * 2}px, ${Math.random() * 2}px)`;
      setTimeout(() => {
        el.style.transform = '';
      }, 100);
    };

    const interval = setInterval(glitch, 2000);
    return () => clearInterval(interval);
  }, [id]);
};
