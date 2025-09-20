import React from 'react';
import type { Locale } from '@/lib/i18n';

export function LocalBusinessJsonLd({ locale }: { locale: Locale }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Karting Évasion Rumilly',
    description:
      locale === 'fr'
        ? "Karting indoor & outdoor à Rumilly avec deux pistes, Grand Prix, école de pilotage, restaurant Le Melbourne et événements sur mesure."
        : 'Indoor & outdoor karting complex in Rumilly with two tracks, Grand Prix formats, racing school, Le Melbourne restaurant and bespoke events.',
    telephone: '+33450010203',
    url: 'https://www.karting-evasion-rumilly.fr',
    logo: 'https://source.unsplash.com/random/300x300/?karting,logo',
    image: 'https://source.unsplash.com/random/1200x800/?karting,grid',
    address: {
      '@type': 'PostalAddress',
      streetAddress: "Route de l'Albanais",
      addressLocality: 'Rumilly',
      postalCode: '74150',
      addressCountry: 'FR'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 45.8681,
      longitude: 5.9454
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        opens: '10:00',
        closes: '23:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Friday', 'Saturday'],
        opens: '09:00',
        closes: '01:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '09:00',
        closes: '20:00'
      }
    ],
    sameAs: [
      'https://www.facebook.com/kartingevasionrumilly',
      'https://www.instagram.com/kartingevasionrumilly'
    ]
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
