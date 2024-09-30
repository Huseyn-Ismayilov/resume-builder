'use client'
import { useEffect, useState } from 'react';

const useDarkModeListener = () => {
  const [theme, setTheme] = useState('');

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = ({ matches }: { matches: boolean }) => {
      if (matches) {
        setTheme('dark');
      } else {
        setTheme('light');
      }
    };

    handleChange(mediaQuery);

    const mediaQueryListener = (event: MediaQueryListEvent) => handleChange(event);

    mediaQuery.addListener(mediaQueryListener);

    return () => {
      mediaQuery.removeListener(mediaQueryListener);
    };
  }, []);

  return theme;
};

export default useDarkModeListener;
