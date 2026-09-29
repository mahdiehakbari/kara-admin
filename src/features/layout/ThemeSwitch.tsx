'use client';

import { useTranslation } from 'react-i18next';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/providers/ThemeProvider';

const TRACK_WIDTH = 56;
const KNOB_SIZE = 24;
const KNOB_INSET = 2;

export function ThemeSwitch({ className = '' }: { className?: string }) {
  const { t } = useTranslation('home');
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type='button'
      role='switch'
      aria-checked={isDark}
      aria-label={isDark ? t('lightTheme') : t('darkTheme')}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={`relative shrink-0 rounded-full border border-(--border-color) transition-colors duration-300 ${
        isDark ? 'bg-[#0a192f]' : 'bg-(--light-primary)'
      } ${className}`}
      style={{ width: TRACK_WIDTH, height: KNOB_SIZE + KNOB_INSET * 2 }}
    >
      <Sun
        className='absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-amber-500'
        style={{ left: 6 }}
      />
      <Moon
        className='absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-(--primary-light)'
        style={{ right: 6 }}
      />
      <span
        className='absolute rounded-full bg-white shadow-md flex items-center justify-center transition-[left] duration-300 ease-in-out'
        style={{
          top: KNOB_INSET,
          left: isDark
            ? TRACK_WIDTH - KNOB_SIZE - KNOB_INSET
            : KNOB_INSET,
          width: KNOB_SIZE,
          height: KNOB_SIZE,
        }}
      >
        {isDark ? (
          <Moon className='w-3.5 h-3.5 text-(--primary)' />
        ) : (
          <Sun className='w-3.5 h-3.5 text-amber-500' />
        )}
      </span>
    </button>
  );
}
