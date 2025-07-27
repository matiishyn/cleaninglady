import { type Locale } from '@/lib/i18n';
import 'server-only';

const dictionaries = {
  uk: () => import('./dictionaries/uk.json').then((module) => module.default),
  en: () => import('./dictionaries/en.json').then((module) => module.default),
} as const;

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]();

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>; 