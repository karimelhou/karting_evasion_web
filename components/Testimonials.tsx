import React from 'react';
import { testimonials } from '@/lib/data';
import { localize } from '@/lib/utils';
import type { Locale } from '@/lib/i18n';

export function Testimonials({ title, locale }: { title: string; locale: Locale }) {
  return (
    <section className="section" data-surface>
      <header style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', marginBottom: '0.75rem' }}>{title}</h2>
      </header>
      <div className="grid-responsive grid-responsive--three">
        {testimonials.map((item) => (
          <figure key={item.name} className="card-surface" data-glow>
            <blockquote>
              <p style={{ fontSize: '1rem', color: 'rgba(241,250,238,0.85)' }}>
                “{localize(item.quote, locale)}”
              </p>
            </blockquote>
            <figcaption style={{ marginTop: '1rem', fontWeight: 600 }}>{item.name}</figcaption>
            {item.company && <span style={{ fontSize: '0.85rem', color: 'rgba(241,250,238,0.6)' }}>{item.company}</span>}
          </figure>
        ))}
      </div>
    </section>
  );
}
