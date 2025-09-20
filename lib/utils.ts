import { Locale, defaultLocale, isLocale } from './i18n';

export function localize<T>(value: Record<Locale, T>, locale: Locale): T {
  return value[locale] ?? value[defaultLocale];
}

export function ensureLocale(value?: string | null): Locale {
  if (!value) return defaultLocale;
  return isLocale(value) ? value : defaultLocale;
}

export function formatDate(date: string, locale: Locale) {
  return new Intl.DateTimeFormat(locale === 'fr' ? 'fr-FR' : 'en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(new Date(date + 'T12:00:00Z'));
}

export function getTrackStatus(now: Date = new Date()) {
  const day = now.getDay();
  const hour = now.getHours();
  const isWeekend = day === 0 || day === 6;
  const opening = isWeekend ? { open: 9, close: 24 } : { open: 10, close: 23 };
  const isOpen = hour >= opening.open && hour < opening.close;
  return { isOpen, opening };
}
