'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface Props {
  children: React.ReactNode;
  defaultTheme: string;
}

interface ContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ContextType>({
  theme: 'dark',
  setTheme: () => {},
});

export function ThemeProvider({ children, defaultTheme }: Props) {
  const [theme, setThemeState] = useState<Theme>(defaultTheme as Theme);

  const applyTheme = (value: Theme) => {
    const root = document.documentElement;

    if (value === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  };


  useEffect(() => {
    const savedTheme = localStorage.getItem('dentalit-theme') as Theme | null;

    const currentTheme = savedTheme || (defaultTheme as Theme);

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setThemeState(currentTheme);
    applyTheme(currentTheme);
  }, [defaultTheme]);

  const setTheme = (value: Theme) => {
    setThemeState(value);

    localStorage.setItem('dentalit-theme', value);

    document.cookie = `dentalit-theme=${value}; path=/; max-age=31536000`;

    applyTheme(value);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
