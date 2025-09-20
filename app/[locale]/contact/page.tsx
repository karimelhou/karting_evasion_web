import React from 'react';
import { Locale, defaultLocale, getDictionary, isLocale } from '@/lib/i18n';
import { ContactForm } from '@/components/ContactForm';

export default function ContactPage({ params }: { params: { locale: string } }) {
  const locale: Locale = isLocale(params.locale) ? params.locale : defaultLocale;
  const dictionary = getDictionary(locale);

  return (
    <section className="section">
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.5rem, 5vw, 3.3rem)' }}>{dictionary.contact.title}</h1>
        <p style={{ color: 'rgba(241,250,238,0.75)' }}>{dictionary.contact.description}</p>
      </header>
      <div className="grid-responsive" style={{ gap: '2rem' }}>
        <ContactForm />
        <div className="card-surface" data-glow>
          <h2 style={{ fontFamily: 'var(--font-heading)' }}>{dictionary.contact.infoTitle}</h2>
          <p>Route de l’Albanais, 74150 Rumilly</p>
          <p>+33 (0)4 50 01 02 03</p>
          <p>contact@kartingevasionrumilly.fr</p>
          <div
            role="img"
            aria-label={locale === 'fr' ? 'Plan d’accès Rumilly' : 'Rumilly access map'}
            className="image-fallback"
            style={{
              height: '280px',
              borderRadius: 'var(--radius-md)',
              backgroundImage: 'linear-gradient(135deg, rgba(69,123,157,0.4), rgba(29,53,87,0.4))',
              marginTop: '1.5rem',
              display: 'grid',
              placeItems: 'center',
              color: 'rgba(241,250,238,0.85)',
              fontWeight: 600,
              letterSpacing: '0.06em'
            }}
          >
            {locale === 'fr' ? 'Carte interactive bientôt disponible' : 'Interactive map coming soon'}
          </div>
        </div>
      </div>
    </section>
  );
}
