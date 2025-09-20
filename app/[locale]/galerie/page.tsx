import React from 'react';
import { Locale, defaultLocale, getDictionary, isLocale } from '@/lib/i18n';
import { GalleryGrid } from '@/components/GalleryGrid';

export default function GalleryPage({ params }: { params: { locale: string } }) {
  const locale: Locale = isLocale(params.locale) ? params.locale : defaultLocale;
  const dictionary = getDictionary(locale);

  return (
    <section className="section">
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.5rem, 5vw, 3.3rem)' }}>{dictionary.nav.gallery}</h1>
        <p style={{ color: 'rgba(241,250,238,0.75)' }}>
          {locale === 'fr'
            ? 'Ambiance course, événements privés, coulisses du restaurant : explorez notre univers.'
            : 'Race action, private events, restaurant vibes – explore the world of Karting Évasion.'}
        </p>
      </header>
      <GalleryGrid />
    </section>
  );
}
