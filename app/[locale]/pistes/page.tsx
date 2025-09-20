import React from 'react';
import { Locale, defaultLocale, getDictionary, isLocale } from '@/lib/i18n';
import { getMDXDocuments } from '@/lib/mdx';
import { tracks } from '@/lib/data';
import { localize } from '@/lib/utils';

export default async function TracksPage({ params }: { params: { locale: string } }) {
  const locale: Locale = isLocale(params.locale) ? params.locale : defaultLocale;
  const dictionary = getDictionary(locale);
  const docs = await getMDXDocuments<{ title: string; surface?: string; record?: string; topSpeed?: string }>('tracks', locale);

  return (
    <section className="section">
      <header style={{ maxWidth: '60ch', marginBottom: '2rem' }}>
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}>{dictionary.tracks.title}</h1>
        <p style={{ color: 'rgba(241,250,238,0.75)' }}>{dictionary.tracks.intro}</p>
        <p className="badge">{dictionary.tracks.callout}</p>
      </header>
      <div className="grid-responsive" style={{ gap: '2rem' }}>
        {docs.map((doc) => {
          const baseSlug = doc.slug.replace(/-(fr|en)$/i, '');
          const meta = tracks.find((track) => track.slug === baseSlug);
          return (
            <article key={doc.slug} className="card-surface" data-glow style={{ overflow: 'hidden' }}>
              <div
                aria-hidden
                className="image-fallback"
                style={{
                  backgroundImage: `url(${meta?.image ?? 'https://source.unsplash.com/random/1200x800/?karting,track'})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '260px'
                }}
              />
              <div style={{ display: 'grid', gap: '1rem', marginTop: '1.5rem' }}>
                <h2 style={{ fontFamily: 'var(--font-heading)', margin: 0 }}>{doc.frontmatter.title}</h2>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', fontSize: '0.9rem', color: 'rgba(241,250,238,0.7)' }}>
                  {meta?.length && <span>🏁 {meta.length}</span>}
                  {doc.frontmatter.surface && <span>🛞 {doc.frontmatter.surface}</span>}
                  {doc.frontmatter.record && <span>⏱ {doc.frontmatter.record}</span>}
                  {doc.frontmatter.topSpeed && <span>🚀 {doc.frontmatter.topSpeed}</span>}
                </div>
                <div style={{ color: 'rgba(241,250,238,0.8)' }}>{doc.content}</div>
                {meta && (
                  <svg viewBox="0 0 840 360" role="img" aria-label={localize(meta.name, locale)} style={{ width: '100%', height: '140px' }}>
                    <path d={meta.mapPath} stroke={meta.mapColor} strokeWidth={16} fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
