import React from 'react';
import { Locale, defaultLocale, getDictionary, isLocale } from '@/lib/i18n';
import { restaurantImage } from '@/lib/data';

const hours = [
  { day: 'Lun - Jeu', fr: '12h00 - 23h00', en: '12:00 - 23:00' },
  { day: 'Ven - Sam', fr: '12h00 - 01h00', en: '12:00 - 01:00' },
  { day: 'Dim', fr: '12h00 - 21h00', en: '12:00 - 21:00' }
];

export default function RestaurantPage({ params }: { params: { locale: string } }) {
  const locale: Locale = isLocale(params.locale) ? params.locale : defaultLocale;
  const dictionary = getDictionary(locale);

  return (
    <section className="section">
      <div data-surface style={{ padding: '3rem', borderRadius: 'var(--radius-lg)', display: 'grid', gap: '2rem' }}>
        <header>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.5rem, 5vw, 3.3rem)' }}>Le Melbourne</h1>
          <p style={{ color: 'rgba(241,250,238,0.75)', maxWidth: '60ch' }}>{dictionary.home.restaurantDescription}</p>
        </header>
        <div
          aria-hidden
          className="image-fallback"
          style={{
            backgroundImage: `url(${restaurantImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: 'var(--radius-lg)',
            height: '360px'
          }}
        />
        <div className="grid-responsive" style={{ gap: '1.5rem' }}>
          <div className="card-surface" data-glow>
            <h2 style={{ fontFamily: 'var(--font-heading)' }}>{locale === 'fr' ? 'Cuisine & ambiance' : 'Cuisine & atmosphere'}</h2>
            <p style={{ color: 'rgba(241,250,238,0.75)' }}>
              {locale === 'fr'
                ? 'Carte bistronomique inspirée de Melbourne : burgers signature, plats végétariens, sélection de vins locaux et bières artisanales. Vue panoramique sur les pistes depuis la terrasse chauffée.'
                : 'Bistronomic menu inspired by Melbourne: signature burgers, vegetarian plates, local wines and craft beers. Panoramic track view from the heated terrace.'}
            </p>
            <p style={{ color: 'rgba(241,250,238,0.75)' }}>
              {locale === 'fr'
                ? 'Privatisation possible pour groupes dès 30 convives avec menus personnalisés.'
                : 'Privatisation available for groups from 30 guests with tailored menus.'}
            </p>
          </div>
          <div className="card-surface" data-glow>
            <h2 style={{ fontFamily: 'var(--font-heading)' }}>{locale === 'fr' ? 'Horaires' : 'Opening hours'}</h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '0.5rem' }}>
              {hours.map((row) => (
                <li key={row.day} style={{ display: 'flex', justifyContent: 'space-between', color: 'rgba(241,250,238,0.75)' }}>
                  <span>{row.day}</span>
                  <span>{locale === 'fr' ? row.fr : row.en}</span>
                </li>
              ))}
            </ul>
            <p style={{ color: 'rgba(241,250,238,0.6)', marginTop: '1rem' }}>
              {locale === 'fr' ? 'Dernière commande 45 min avant la fermeture.' : 'Last order 45 min before closing.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
