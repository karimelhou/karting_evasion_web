import './globals.css';
import type { Metadata } from 'next';
import { Montserrat, Source_Sans_3 } from 'next/font/google';
import Script from 'next/script';
import React from 'react';

const heading = Montserrat({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['400', '600', '700']
});

const body = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '600']
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.karting-evasion-rumilly.fr'),
  title: {
    default: 'Karting Évasion Rumilly',
    template: '%s | Karting Évasion Rumilly'
  },
  description:
    "Vivez l'expérience karting ultime à Rumilly : deux pistes indoor & outdoor, offres Grand Prix, école de pilotage, événements et restaurant Le Melbourne.",
  keywords: ['karting', 'Rumilly', 'Grand Prix', 'piste 1150m', 'piste 550m', 'kart indoor', 'anniversaire'],
  authors: [{ name: 'Karting Évasion Rumilly' }],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://www.karting-evasion-rumilly.fr',
    siteName: 'Karting Évasion Rumilly',
    images: [
      {
        url: 'https://source.unsplash.com/random/1200x630/?karting,track',
        width: 1200,
        height: 630,
        alt: 'Pilote de karting sur piste à Rumilly'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Karting Évasion Rumilly',
    description:
      "Grandes sensations sur deux pistes mythiques, offres pour particuliers et entreprises, restaurant Le Melbourne, école de pilotage.",
    images: ['https://source.unsplash.com/random/1200x630/?karting,grandprix']
  },
  manifest: '/manifest.webmanifest'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${heading.variable} ${body.variable}`} suppressHydrationWarning>
      <body>
        {children}
        <Script id="service-worker-registration" strategy="afterInteractive">
          {`
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js').catch(() => {});
              });
            }
          `}
        </Script>
      </body>
    </html>
  );
}
