import React from 'react';
import { Locale, defaultLocale, getDictionary, isLocale } from '@/lib/i18n';
import { EventsBoard } from '@/components/EventsBoard';

export default function EventsPage({ params }: { params: { locale: string } }) {
  const locale: Locale = isLocale(params.locale) ? params.locale : defaultLocale;
  const dictionary = getDictionary(locale);

  return (
    <section className="section">
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.5rem, 5vw, 3.3rem)' }}>{dictionary.nav.events}</h1>
        <p style={{ color: 'rgba(241,250,238,0.75)' }}>
          {locale === 'fr'
            ? 'Stages, compétitions, afterworks : trouvez l’événement qui vous correspond.'
            : 'Camps, competitions, afterworks: find the event that fits your team.'}
        </p>
      </header>
      <EventsBoard />
    </section>
  );
}
