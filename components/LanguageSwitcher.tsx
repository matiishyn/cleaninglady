'use client';

import { Button } from '@/components/ui/button';
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

  // Показуємо прапорець тієї мови, на яку можна перемкнути
  const targetFlag = currentLocale === 'uk' ? '🇬🇧' : '🇺🇦';
  const targetText = currentLocale === 'uk' ? 'English' : 'Українська';

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleLanguageSwitch}
      className="flex items-center gap-2 hover:scale-105 transition-transform"
      title={currentLocale === 'uk' ? 'Switch to English' : 'Перемкнути на українську'}
    >
      <span className="text-lg">{targetFlag}</span>
      <span className="font-medium">{targetText}</span>
    </Button>
  );
}