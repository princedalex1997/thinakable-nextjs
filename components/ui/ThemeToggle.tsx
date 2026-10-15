'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

interface ThemeToggleProps {
  showLabel?: boolean;
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ showLabel = false, className = '' }) => {
  const { theme, isDark, toggleTheme } = useTheme();

  return (
    <button
      id="theme-toggle-btn"
      onClick={toggleTheme}
      type="button"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className={`relative inline-flex items-center justify-center gap-2 p-2 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${
        isDark
          ? 'bg-slate-900/80 text-amber-300 hover:text-amber-200 hover:bg-slate-800/90 border border-slate-700/80 shadow-inner'
          : 'bg-white/90 text-amber-500 hover:text-amber-600 hover:bg-slate-100 border border-slate-200/90 shadow-sm'
      } ${className}`}
    >
      <div className="relative w-5 h-5 flex items-center justify-center overflow-hidden">
        <motion.div
          key={theme}
          initial={{ y: isDark ? 12 : -12, opacity: 0, rotate: isDark ? 45 : -45 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: isDark ? -12 : 12, opacity: 0, rotate: isDark ? -45 : 45 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          className="flex items-center justify-center"
        >
          {isDark ? (
            <Sun className="w-4 h-4 text-amber-300 fill-amber-300/20" />
          ) : (
            <Moon className="w-4 h-4 text-slate-700 fill-slate-700/10" />
          )}
        </motion.div>
      </div>

      {showLabel && (
        <span className={`text-xs font-semibold select-none ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
          {isDark ? 'Light Mode' : 'Dark Mode'}
        </span>
      )}
    </button>
  );
};
