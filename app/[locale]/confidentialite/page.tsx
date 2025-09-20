import React from 'react';
import { Locale, defaultLocale, isLocale } from '@/lib/i18n';

export default function ConfidentialitePage({ params }: { params: { locale: string } }) {
  const locale: Locale = isLocale(params.locale) ? params.locale : defaultLocale;
  return (
    <section className="section" data-surface>
      <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem' }}>
        {locale === 'fr' ? 'Politique de confidentialité' : 'Privacy policy'}
      </h1>
      <p style={{ color: 'rgba(241,250,238,0.75)', maxWidth: '60ch' }}>
        {locale === 'fr'
          ? 'Nous utilisons vos données uniquement pour gérer vos réservations et demandes. Version détaillée disponible prochainement.'
          : 'We only use your data to manage bookings and enquiries. Detailed policy available soon.'}
      </p>
    </section>
  );
}
