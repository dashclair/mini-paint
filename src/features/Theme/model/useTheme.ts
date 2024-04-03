import { useEffect, useState } from 'react';

const getInitialTheme = () => {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  const initialTheme = localStorage.getItem('theme');
  if (!initialTheme) {
    console.log('prefered dark', prefersDark);
    return prefersDark ? 'dark' : 'light';
  }
  console.log('initial theme', initialTheme);
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
