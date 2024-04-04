import { useEffect, useState } from 'react';

const getInitialTheme = () => {
  const initialTheme = localStorage.getItem('theme');

  if (!initialTheme) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  }

  return initialTheme;
};

export const useTheme = () => {
  const [theme, setTheme] = useState(getInitialTheme());

  const getThemeFromLocalStorage = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  };

  const handleSetTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  useEffect(() => {
    getThemeFromLocalStorage();
    document.body.dataset.theme = theme;
  }, [theme]);

  console.log('theme', theme);

  return { theme, handleSetTheme };
};
