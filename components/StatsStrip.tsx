import React from 'react';
import { homeStats } from '@/lib/data';
import { localize } from '@/lib/utils';
import type { Locale } from '@/lib/i18n';

export function StatsStrip({ title, subtitle, locale }: { title: string; subtitle: string; locale: Locale }) {
  return (
    <section className="section section--tight">
      <header style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '0.5rem' }}>{title}</h2>
        <p style={{ color: 'rgba(241,250,238,0.7)' }}>{subtitle}</p>
      </header>
      <div className="grid-responsive grid-responsive--three">
        {homeStats.map((stat) => (
          <div key={stat.value} className="card-surface" data-glow style={{ textAlign: 'center', paddingBlock: '2.5rem' }}>
            <div className="text-gradient" style={{ fontSize: '2.5rem', fontWeight: 700 }}>{stat.value}</div>
            <p style={{ fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              {localize(stat.label, locale)}
            </p>
            <p style={{ color: 'rgba(241,250,238,0.7)', fontSize: '0.95rem' }}>{localize(stat.detail, locale)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
