'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Switch } from '@/components/ui/switch';

import { FiSun, FiMoon } from "react-icons/fi"

export default function ThemeSwitcher() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const currentTheme = theme === 'system' ? systemTheme : theme;
    setIsDark(currentTheme === 'dark');
  }, [theme, systemTheme, mounted]);

  if (!mounted) return null; // avoid hydration mismatch

  const toggleTheme = (checked: boolean) => {
    setTheme(checked ? 'dark' : 'light');
  };

  if (isDark) {
  return (
    <div className='flex gap-2'>
      <Switch checked={isDark} onCheckedChange={toggleTheme} className='bg-[var(--second)]' />
      <FiMoon/>
    </div>
  );
  }
  if (!isDark) {
  return (
    <div className='flex gap-2'>
      <Switch checked={isDark} onCheckedChange={toggleTheme} className='bg-[var(--second)]' />
      <FiSun/>
    </div>
  );
  }

}
