
'use client';

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  isDark: boolean;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Same initial value during server rendering and the first client render.
  const [theme, setThemeState] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  // Load the saved preference after hydration.
  useEffect(() => {
    let savedTheme: Theme = 'dark';

    try {
      const storedTheme = localStorage.getItem('thinkable_theme');

      if (storedTheme === 'light' || storedTheme === 'dark') {
        savedTheme = storedTheme;
      }
    } catch {
      // localStorage may be unavailable; retain the default theme.
    }

    setThemeState(savedTheme);
    setMounted(true);
  }, []);

  // Apply the theme and persist user changes.
  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;

    root.classList.toggle('dark', theme === 'dark');
    root.style.colorScheme = theme;

    try {
      localStorage.setItem('thinkable_theme', theme);
    } catch {
      // The theme still works for the current session.
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setThemeState((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        isDark: theme === 'dark',
        toggleTheme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};
