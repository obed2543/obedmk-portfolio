import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="w-9 h-9 p-0 will-change-transform"
    >
      {theme === 'dark' ? (
        <i className="fas fa-sun text-foreground" />
      ) : (
        <i className="fas fa-moon text-foreground" />
      )}
    </Button>
  );
};

export default ThemeToggle;