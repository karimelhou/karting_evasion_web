import React from 'react';
import { tracks } from '@/lib/data';
import { localize } from '@/lib/utils';
import type { Locale } from '@/lib/i18n';

export function TrackHighlights({ locale, introTitle, introSubtitle }: { locale: Locale; introTitle: string; introSubtitle: string }) {
  return (
    <section className="section">
      <header style={{ marginBottom: '2rem', maxWidth: '60ch' }}>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.4rem', marginBottom: '0.75rem' }}>{introTitle}</h2>
        <p style={{ color: 'rgba(241,250,238,0.75)' }}>{introSubtitle}</p>
      </header>
      <div className="grid-responsive" style={{ gap: '2rem' }}>
        {tracks.map((track) => (
          <article key={track.slug} className="card-surface" data-glow style={{ overflow: 'hidden' }}>
            <div
              className="image-fallback"
              aria-hidden
              style={{
                backgroundImage: `url(${track.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: 'var(--radius-md)',
                height: '220px'
              }}
            />
            <div style={{ display: 'grid', gap: '0.75rem', marginTop: '1.5rem' }}>
              <div className="badge">{track.length}</div>
              <h3 style={{ fontFamily: 'var(--font-heading)', margin: 0 }}>{localize(track.name, locale)}</h3>
              <p style={{ color: 'rgba(241,250,238,0.75)' }}>{localize(track.description, locale)}</p>
              <svg viewBox="0 0 840 360" role="img" aria-label={localize(track.name, locale)} style={{ width: '100%', height: '120px' }}>
                <path d={track.mapPath} stroke={track.mapColor} strokeWidth={14} fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '0.35rem', fontSize: '0.95rem' }}>
                {track.technical.map((item) => (
                  <li key={item.fr} style={{ color: 'rgba(241,250,238,0.72)' }}>• {localize(item, locale)}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
