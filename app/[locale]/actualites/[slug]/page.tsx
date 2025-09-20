import React from 'react';
import { notFound } from 'next/navigation';
import { Locale, defaultLocale, isLocale, locales } from '@/lib/i18n';
import { getMDXDocuments } from '@/lib/mdx';
import { formatDate } from '@/lib/utils';

export async function generateStaticParams() {
  const params: Array<{ locale: string; slug: string }> = [];
  for (const locale of locales) {
    const docs = await getMDXDocuments<{ date: string }>('blog', locale);
    docs.forEach((doc) => {
      params.push({ locale, slug: doc.slug.replace(/-(fr|en)$/i, '') });
    });
  }
  return params;
}

export default async function BlogArticle({ params }: { params: { locale: string; slug: string } }) {
  const locale: Locale = isLocale(params.locale) ? params.locale : defaultLocale;
  const docs = await getMDXDocuments<{ title: string; excerpt: string; date: string }>('blog', locale);
  const doc = docs.find((item) => item.slug.replace(/-(fr|en)$/i, '') === params.slug);
  if (!doc) return notFound();

  return (
    <article className="section" data-surface>
      <p className="badge">{formatDate(doc.frontmatter.date, locale)}</p>
      <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.5rem, 5vw, 3.3rem)', marginBottom: '1rem' }}>
        {doc.frontmatter.title}
      </h1>
      <div style={{ color: 'rgba(241,250,238,0.8)', display: 'grid', gap: '1rem', fontSize: '1.05rem' }}>{doc.content}</div>
      <p style={{ marginTop: '2rem' }}>
        <a href={`/${locale}/actualites`} className="btn-secondary">
          {locale === 'fr' ? '← Retour aux actualités' : '← Back to news'}
        </a>
      </p>
    </article>
  );
}
