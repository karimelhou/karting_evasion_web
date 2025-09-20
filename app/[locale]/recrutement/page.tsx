import React from 'react';
import { Locale, defaultLocale, isLocale } from '@/lib/i18n';

export default function RecrutementPage({ params }: { params: { locale: string } }) {
  const locale: Locale = isLocale(params.locale) ? params.locale : defaultLocale;
  return (
    <section className="section" data-surface>
      <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem' }}>
        {locale === 'fr' ? 'Rejoindre l’équipe' : 'Join the team'}
      </h1>
      <p style={{ color: 'rgba(241,250,238,0.75)', maxWidth: '60ch' }}>
        {locale === 'fr'
          ? 'Envoyez CV et lettre de motivation à recrutement@kartingevasionrumilly.fr pour postes piste, accueil et restauration.'
          : 'Send resume and cover letter to recrutement@kartingevasionrumilly.fr for track, reception and restaurant roles.'}
      </p>
    </section>
  );
}
