import { useEffect } from 'react';

export const useKeyPress = (targetKey, handler, enabled = true) => {
  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (event) => {
      if (event.key === targetKey) {
        handler();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [targetKey, handler, enabled]);
};
