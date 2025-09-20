import React from 'react';
import { Locale, defaultLocale, isLocale } from '@/lib/i18n';

export default function CgvPage({ params }: { params: { locale: string } }) {
  const locale: Locale = isLocale(params.locale) ? params.locale : defaultLocale;
  return (
    <section className="section" data-surface>
      <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem' }}>
        {locale === 'fr' ? 'Conditions générales de vente' : 'Terms & conditions'}
      </h1>
      <p style={{ color: 'rgba(241,250,238,0.75)', maxWidth: '60ch' }}>
        {locale === 'fr'
          ? 'Les CGV complètes sont disponibles au format PDF sur simple demande. Elles précisent nos modalités de réservation, d’annulation et de remboursement.'
          : 'Full terms are available as a PDF on request detailing booking, cancellation and refund policies.'}
      </p>
    </section>
  );
}
