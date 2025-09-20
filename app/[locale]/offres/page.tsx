import React from 'react';
import { Locale, defaultLocale, getDictionary, isLocale } from '@/lib/i18n';
import { getMDXDocuments } from '@/lib/mdx';
import { GroupQuoteBuilder } from '@/components/GroupQuoteBuilder';

const sectionsOrder = ['sessions', 'grand-prix', 'ecole', 'groupes'];

export default async function OffersPage({ params }: { params: { locale: string } }) {
  const locale: Locale = isLocale(params.locale) ? params.locale : defaultLocale;
  const dictionary = getDictionary(locale);
  const docs = await getMDXDocuments<{ title: string }>('pricing', locale);
  const bySlug = Object.fromEntries(docs.map((doc) => [doc.slug.replace(/-(fr|en)$/i, ''), doc]));

  return (
    <div className="section">
      <header style={{ maxWidth: '60ch', marginBottom: '2rem' }}>
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.5rem, 5vw, 3.4rem)' }}>{dictionary.offers.title}</h1>
        <p style={{ color: 'rgba(241,250,238,0.75)' }}>{dictionary.home.trackSubtitle}</p>
      </header>
      <div className="grid-responsive" style={{ gap: '2rem' }}>
        <div style={{ display: 'grid', gap: '1.5rem' }}>
          {sectionsOrder.map((key) => {
            const current = bySlug[key];
            if (!current) return null;
            return (
              <section
                id={key === 'groupes' ? 'groupes' : undefined}
                key={key}
                className="card-surface"
                data-glow
                style={{ padding: '2rem' }}
              >
                <h2 style={{ fontFamily: 'var(--font-heading)', marginBottom: '1rem' }}>{current.frontmatter.title}</h2>
                <div style={{ color: 'rgba(241,250,238,0.8)', display: 'grid', gap: '0.75rem' }}>{current.content}</div>
              </section>
            );
          })}
        </div>
        <GroupQuoteBuilder />
      </div>
    </div>
  );
}
