'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { galleryItems } from '@/lib/data';
import { useLocaleContext } from './LocaleContext';
import { localize } from '@/lib/utils';

export function GalleryGrid() {
  const { locale } = useLocaleContext();
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div>
      <div
        className="grid-responsive"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}
      >
        {galleryItems.map((item, index) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setSelected(index)}
            className="image-fallback"
            style={{
              backgroundImage: `url(${item.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: 'var(--radius-md)',
              aspectRatio: '4 / 3',
              border: '1px solid rgba(255,255,255,0.15)'
            }}
            aria-label={localize(item.alt, locale)}
          />
        ))}
      </div>
      {selected !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="card-surface"
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(5,7,15,0.92)',
            display: 'grid',
            placeItems: 'center',
            padding: '2rem',
            zIndex: 60
          }}
        >
          <div style={{ maxWidth: '900px', width: '100%' }}>
            <Image
              src={`${galleryItems[selected].src}`}
              alt={localize(galleryItems[selected].alt, locale)}
              width={1280}
              height={720}
              style={{ width: '100%', height: 'auto', borderRadius: 'var(--radius-md)' }}
            />
            <p style={{ marginTop: '1rem', textAlign: 'right' }}>
              <button type="button" className="btn-secondary" onClick={() => setSelected(null)}>
                {locale === 'fr' ? 'Fermer' : 'Close'}
              </button>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
