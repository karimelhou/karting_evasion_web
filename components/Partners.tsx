import React from 'react';
import { partnerLogos } from '@/lib/data';

export function Partners({ title }: { title: string }) {
  return (
    <section className="section section--tight" aria-labelledby="partners-title">
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: '1.5rem',
          justifyContent: 'center'
        }}
      >
        <h3 id="partners-title" style={{ fontFamily: 'var(--font-heading)', marginRight: '2rem' }}>
          {title}
        </h3>
        {partnerLogos.map((partner) => (
          <span
            key={partner.name}
            style={{
              fontSize: '1rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              opacity: 0.7
            }}
          >
            {partner.name}
          </span>
        ))}
      </div>
    </section>
  );
}
