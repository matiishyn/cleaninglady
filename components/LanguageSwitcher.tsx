'use client';

import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  // Визначаємо поточну мову
  const currentLocale = pathname.startsWith('/en') ? 'en' : 'uk';

  const handleLanguageSwitch = () => {
    if (currentLocale === 'uk') {
      // Переходимо на англійську
      if (pathname === '/') {
        router.push('/en');
      } else {
        router.push(`/en${pathname}`);
      }
    } else {
      // Переходимо на українську
      const ukPath = pathname.replace('/en', '') || '/';
      router.push(ukPath);
    }
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleLanguageSwitch}
      className="flex items-center gap-2"
    >
      <Globe className="h-4 w-4" />
      {currentLocale === 'uk' ? 'EN' : 'UA'}
    </Button>
  );
}