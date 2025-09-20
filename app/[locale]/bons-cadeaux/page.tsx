import React from 'react';
import { Locale, defaultLocale, isLocale } from '@/lib/i18n';

export default function BonsCadeauxPage({ params }: { params: { locale: string } }) {
  const locale: Locale = isLocale(params.locale) ? params.locale : defaultLocale;
  return (
    <section className="section" data-surface>
      <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem' }}>
        {locale === 'fr' ? 'Bons cadeaux' : 'Gift vouchers'}
      </h1>
      <p style={{ color: 'rgba(241,250,238,0.75)', maxWidth: '60ch' }}>
        {locale === 'fr'
          ? 'Offrez la sensation karting : bons personnalisables disponibles à l’accueil ou par email.'
          : 'Offer the karting thrill: personalised vouchers available at reception or via email.'}
      </p>
    </section>
  );
}
