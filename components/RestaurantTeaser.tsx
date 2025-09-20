import React from 'react';
import Link from 'next/link';
import { restaurantImage } from '@/lib/data';

export function RestaurantTeaser({ title, description, cta, href }: { title: string; description: string; cta: string; href: string }) {
  return (
    <section className="section" style={{ position: 'relative' }}>
      <div
        className="image-fallback"
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${restaurantImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.25,
          borderRadius: 'var(--radius-lg)'
        }}
      />
      <div data-surface style={{ position: 'relative', padding: '3rem', borderRadius: 'var(--radius-lg)', display: 'grid', gap: '1.5rem' }}>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', margin: 0 }}>{title}</h2>
        <p style={{ maxWidth: '60ch', color: 'rgba(241,250,238,0.78)' }}>{description}</p>
        <Link href={href} className="btn-primary" style={{ width: 'fit-content' }}>
          {cta}
        </Link>
      </div>
    </section>
  );
}
