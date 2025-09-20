import React from 'react';
import { Locale, defaultLocale, getDictionary, isLocale } from '@/lib/i18n';
import { LocaleProvider } from '@/components/LocaleContext';
import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';
import { LocalBusinessJsonLd } from '@/components/StructuredData';

export const dynamic = 'force-static';

export async function generateStaticParams() {
  return [{ locale: 'fr' }, { locale: 'en' }];
}

export default function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale: Locale = isLocale(params.locale) ? params.locale : defaultLocale;
  const dictionary = getDictionary(locale);

  return (
    <LocaleProvider value={{ locale, dictionary }}>
      <LocalBusinessJsonLd locale={locale} />
      <NavBar />
      <main>{children}</main>
      <Footer />
    </LocaleProvider>
  );
}
