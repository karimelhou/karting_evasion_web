import React from 'react';

export const metadata = {
  title: 'Hors ligne'
};

export default function OfflinePage() {
  return (
    <section className="section" data-surface>
      <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', marginBottom: '1rem' }}>Vous êtes hors ligne</h1>
      <p style={{ color: 'rgba(241,250,238,0.75)' }}>
        Vérifiez votre connexion internet pour profiter de l’expérience complète Karting Évasion Rumilly.
      </p>
    </section>
  );
}
