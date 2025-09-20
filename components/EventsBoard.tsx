'use client';

import React, { useMemo, useState } from 'react';
import { events } from '@/lib/data';
import { useLocaleContext } from './LocaleContext';
import { localize, formatDate } from '@/lib/utils';

const filters = [
  { id: 'all', fr: 'Tous', en: 'All' },
  { id: 'competition', fr: 'Compétition', en: 'Competition' },
  { id: 'decouverte', fr: 'Découverte', en: 'Discovery' },
  { id: 'entreprise', fr: 'Entreprise', en: 'Corporate' }
];

export function EventsBoard() {
  const { locale } = useLocaleContext();
  const [filter, setFilter] = useState('all');

  const filtered = useMemo(() => {
    if (filter === 'all') return events;
    return events.filter((event) => event.category === filter);
  }, [filter]);

  return (
    <div>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
        {filters.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setFilter(item.id)}
            className={filter === item.id ? 'btn-primary' : 'btn-secondary'}
            style={{ padding: '0.5rem 1.2rem' }}
            aria-pressed={filter === item.id}
          >
            {locale === 'fr' ? item.fr : item.en}
          </button>
        ))}
      </div>
      <div className="grid-responsive" style={{ gap: '1.5rem' }}>
        {filtered.map((event) => (
          <article key={event.id} className="card-surface" data-glow>
            <p className="badge">{formatDate(event.date, locale)}</p>
            <h3 style={{ fontFamily: 'var(--font-heading)' }}>{localize(event.title, locale)}</h3>
            <p style={{ color: 'rgba(241,250,238,0.75)' }}>{localize(event.description, locale)}</p>
            <p style={{ fontSize: '0.85rem', color: 'rgba(241,250,238,0.6)' }}>
              {locale === 'fr' ? 'Catégorie' : 'Category'} : {locale === 'fr' ? filterLabel(event.category, 'fr') : filterLabel(event.category, 'en')}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}

function filterLabel(id: 'competition' | 'decouverte' | 'entreprise', lang: 'fr' | 'en') {
  const item = filters.find((entry) => entry.id === id);
  if (!item) return id;
  return lang === 'fr' ? item.fr : item.en;
}
