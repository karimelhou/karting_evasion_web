import React from 'react';
import Link from 'next/link';
import { heroImage, highlights } from '@/lib/data';
import { localize } from '@/lib/utils';
import type { Locale } from '@/lib/i18n';

export function HeroSection({
  locale,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  tertiaryCta
}: {
  locale: Locale;
  title: string;
  subtitle: string;
  primaryCta: { href: string; label: string };
  secondaryCta: { href: string; label: string };
  tertiaryCta: { href: string; label: string };
}) {
  return (
    <section
      className="section"
      style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '80vh',
        display: 'grid',
        alignItems: 'center'
      }}
    >
      <div
        aria-hidden
        className="image-fallback"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.35,
          zIndex: -2
        }}
      />
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(120deg, rgba(5,7,15,0.92) 20%, rgba(5,7,15,0.4) 80%)',
          zIndex: -1
        }}
      />
      <div className="fade-in" style={{ maxWidth: '64ch', display: 'grid', gap: '1.5rem' }}>
        <p className="badge">Rumilly · Haute-Savoie</p>
        <h1
          style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            margin: 0,
            lineHeight: 1.05,
            fontFamily: 'var(--font-heading)'
          }}
        >
          {title}
        </h1>
        <p style={{ fontSize: '1.15rem', color: 'rgba(241,250,238,0.8)', maxWidth: '55ch' }}>{subtitle}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
          <Link href={primaryCta.href} className="btn-primary">
            {primaryCta.label}
          </Link>
          <Link href={secondaryCta.href} className="btn-secondary">
            {secondaryCta.label}
          </Link>
          <Link href={tertiaryCta.href} className="btn-secondary">
            {tertiaryCta.label}
          </Link>
        </div>
      </div>
      <div className="grid-responsive grid-responsive--three" style={{ marginTop: '3rem' }}>
        {highlights.map((item) => (
          <article key={item.title.fr} className="card-surface" data-glow>
            <span aria-hidden style={{ fontSize: '2rem' }}>
              {item.icon}
            </span>
            <h3 style={{ fontFamily: 'var(--font-heading)', marginTop: '0.5rem' }}>{localize(item.title, locale)}</h3>
            <p style={{ color: 'rgba(241,250,238,0.75)' }}>{localize(item.description, locale)}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
