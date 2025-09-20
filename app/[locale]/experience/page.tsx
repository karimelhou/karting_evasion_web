import React from 'react';
import { SectionHeader } from '@/components/SectionHeader';
import { Locale, defaultLocale, getDictionary, isLocale } from '@/lib/i18n';
import { localize } from '@/lib/utils';

const audience = [
  {
    image: 'https://source.unsplash.com/random/1200x800/?karting,family',
    title: {
      fr: 'Familles & débutants',
      en: 'Families & first timers'
    },
    description: {
      fr: 'Karts biplaces, commande à distance, briefings ludiques et sessions de 10 minutes pour progresser en douceur.',
      en: 'Two-seater karts, remote assistance, playful briefings and 10-minute runs to build confidence.'
    }
  },
  {
    image: 'https://source.unsplash.com/random/1200x800/?karting,team',
    title: {
      fr: 'Teams & compétiteurs',
      en: 'Teams & competitors'
    },
    description: {
      fr: 'Chronométrage live, analyse vidéo, pneus slicks et configuration Grand Prix sur-mesure pour la performance.',
      en: 'Live timing, video review, slick tyres and bespoke Grand Prix formats built for performance.'
    }
  },
  {
    image: 'https://source.unsplash.com/random/1200x800/?karting,event',
    title: {
      fr: 'Événements & incentives',
      en: 'Events & incentives'
    },
    description: {
      fr: 'Privatisation, animateur bilingue, restauration premium et salle de réunion connectée.',
      en: 'Venue privatisation, bilingual host, premium catering and connected meeting room.'
    }
  }
];

const equipment = [
  {
    fr: 'Casques intégraux ventilés et cagoules individuelles fournies',
    en: 'Ventilated full-face helmets and personal balaclavas included'
  },
  {
    fr: 'Combinaisons ignifugées, colliers cervicaux et gants sur demande',
    en: 'Fireproof suits, neck braces and gloves on request'
  },
  {
    fr: 'Karts enfants 120cc, Junior 160cc, Adultes 270cc & bi-place accessible PMR',
    en: 'Kids 120cc, Junior 160cc, Adult 270cc & accessible two-seater karts'
  },
  {
    fr: 'Système RaceControl pour arrêt immédiat et limitation de vitesse',
    en: 'RaceControl system for instant stop and speed limit'
  }
];

export default function ExperiencePage({ params }: { params: { locale: string } }) {
  const locale: Locale = isLocale(params.locale) ? params.locale : defaultLocale;
  const dictionary = getDictionary(locale);

  return (
    <div className="section">
      <div data-surface style={{ padding: '3rem', borderRadius: 'var(--radius-lg)' }}>
        <SectionHeader title={dictionary.experience.title} subtitle={dictionary.experience.intro} />
        <div className="grid-responsive" style={{ gap: '2rem' }}>
          {dictionary.experience.sections.map((section) => (
            <article key={section.title} className="card-surface" data-glow>
              <h3 style={{ fontFamily: 'var(--font-heading)' }}>{section.title}</h3>
              <p style={{ color: 'rgba(241,250,238,0.75)' }}>{section.description}</p>
            </article>
          ))}
        </div>
        <SectionHeader
          title={locale === 'fr' ? 'Pour qui ?' : 'Who is it for?'}
          subtitle={
            locale === 'fr'
              ? 'Nous créons des expériences mémorables pour chaque profil.'
              : 'We tailor memorable experiences for every driver profile.'
          }
        />
        <div className="grid-responsive" style={{ gap: '2rem' }}>
          {audience.map((item) => (
            <article key={item.title.fr} className="card-surface" data-glow style={{ overflow: 'hidden' }}>
              <div
                aria-hidden
                className="image-fallback"
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '200px',
                  borderRadius: 'var(--radius-md)'
                }}
              />
              <h3 style={{ fontFamily: 'var(--font-heading)', marginTop: '1.25rem' }}>{localize(item.title, locale)}</h3>
              <p style={{ color: 'rgba(241,250,238,0.75)' }}>{localize(item.description, locale)}</p>
            </article>
          ))}
        </div>
        <SectionHeader
          title={locale === 'fr' ? 'Équipement & sécurité' : 'Equipment & safety'}
          subtitle={
            locale === 'fr'
              ? 'Matériel premium, maintenance quotidienne et procédures certifiées FFSA.'
              : 'Premium gear, daily maintenance and FFSA-certified procedures.'
          }
        />
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '0.75rem' }}>
          {equipment.map((item) => (
            <li key={item.fr} className="card-surface" data-glow style={{ padding: '1.25rem 1.5rem' }}>
              {localize(item, locale)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
