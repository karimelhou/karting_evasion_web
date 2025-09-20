import React from 'react';
import { Locale, defaultLocale, getDictionary, isLocale } from '@/lib/i18n';
import { getMDXDocument } from '@/lib/mdx';

export default async function FaqPage({ params }: { params: { locale: string } }) {
  const locale: Locale = isLocale(params.locale) ? params.locale : defaultLocale;
  const dictionary = getDictionary(locale);
  const { frontmatter } = await getMDXDocument<{ fr: Array<{ question: string; answer: string }>; en: Array<{ question: string; answer: string }> }>('', 'faq');
  const items = frontmatter[locale] ?? frontmatter[defaultLocale];
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item: any) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer }
    }))
  };

  return (
    <section className="section">
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.5rem, 5vw, 3.2rem)' }}>{dictionary.faq.title}</h1>
        <p style={{ color: 'rgba(241,250,238,0.75)' }}>{dictionary.faq.subtitle}</p>
      </header>
      <div className="grid-responsive" style={{ gap: '1rem' }}>
        {items.map((item: any) => (
          <article key={item.question} className="card-surface" data-glow>
            <h2 style={{ fontFamily: 'var(--font-heading)' }}>{item.question}</h2>
            <p style={{ color: 'rgba(241,250,238,0.75)' }}>{item.answer}</p>
          </article>
        ))}
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </section>
  );
}
