import { useState, useEffect } from "react";

export const useScrollPosition = () => {
    const [scrollPos, setScrollPos] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    // Definir o estado inicial
    handleScroll();

    // Cleanup do listener ao desmontar o componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollPos
}
