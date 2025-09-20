import React from 'react';
import Link from 'next/link';
import { Locale, defaultLocale, getDictionary, isLocale } from '@/lib/i18n';
import { getMDXDocuments } from '@/lib/mdx';
import { formatDate } from '@/lib/utils';

export default async function NewsPage({ params }: { params: { locale: string } }) {
  const locale: Locale = isLocale(params.locale) ? params.locale : defaultLocale;
  const dictionary = getDictionary(locale);
  const posts = await getMDXDocuments<{ title: string; excerpt: string; date: string }>('blog', locale);

  return (
    <section className="section">
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.5rem, 5vw, 3.2rem)' }}>{dictionary.nav.news}</h1>
        <p style={{ color: 'rgba(241,250,238,0.75)' }}>
          {locale === 'fr'
            ? 'Suivez les nouveautés de Karting Évasion Rumilly, nos formats de course et coulisses.'
            : 'Follow Karting Évasion Rumilly news, new race formats and behind-the-scenes stories.'}
        </p>
      </header>
      <div className="grid-responsive" style={{ gap: '1.5rem' }}>
        {posts.map((post) => {
          const slug = post.slug.replace(/-(fr|en)$/i, '');
          return (
            <article key={post.slug} className="card-surface" data-glow>
              <p className="badge">{formatDate(post.frontmatter.date, locale)}</p>
              <h2 style={{ fontFamily: 'var(--font-heading)' }}>{post.frontmatter.title}</h2>
              <p style={{ color: 'rgba(241,250,238,0.75)' }}>{post.frontmatter.excerpt}</p>
              <Link href={`/${locale}/actualites/${slug}`} className="btn-secondary" style={{ width: 'fit-content' }}>
                {locale === 'fr' ? 'Lire' : 'Read more'}
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}
