import React from 'react';
import { Locale, defaultLocale, isLocale } from '@/lib/i18n';

export default function MentionsLegales({ params }: { params: { locale: string } }) {
  const locale: Locale = isLocale(params.locale) ? params.locale : defaultLocale;
  return (
    <section className="section" data-surface>
      <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem' }}>
        {locale === 'fr' ? 'Mentions légales' : 'Legal notice'}
      </h1>
      <p style={{ color: 'rgba(241,250,238,0.75)', maxWidth: '60ch' }}>
        {locale === 'fr'
          ? "Informations légales disponibles sur demande auprès de l'accueil."
          : 'Legal information available on request from reception.'}
      </p>
    </section>
  );
}
