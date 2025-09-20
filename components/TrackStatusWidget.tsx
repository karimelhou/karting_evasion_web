'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { weatherForecast } from '@/lib/data';
import { useLocaleContext } from './LocaleContext';
import { getTrackStatus, localize } from '@/lib/utils';

export function TrackStatusWidget() {
  const { locale, dictionary } = useLocaleContext();
  const [status, setStatus] = useState(() => getTrackStatus());
  useEffect(() => {
    const id = setInterval(() => setStatus(getTrackStatus()), 60_000);
    return () => clearInterval(id);
  }, []);

  const now = useMemo(() => new Date(), []);
  const weather = weatherForecast[now.getDay() % weatherForecast.length];
  const weatherText = localize(weather.condition, locale);

  return (
    <div
      aria-live="polite"
      className="card-surface"
      style={{
        padding: '0.75rem 1.1rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        borderRadius: '999px',
        background: status.isOpen
          ? 'linear-gradient(120deg, rgba(46, 204, 113, 0.18), rgba(39, 174, 96, 0.18))'
          : 'linear-gradient(120deg, rgba(231, 76, 60, 0.18), rgba(192, 57, 43, 0.18))'
      }}
    >
      <span aria-hidden className="badge" style={{ background: 'rgba(0,0,0,0.35)' }}>
        {status.isOpen ? '🟢' : '🔴'}
      </span>
      <div style={{ display: 'grid' }}>
        <strong style={{ fontSize: '0.95rem', letterSpacing: '0.03em' }}>
          {status.isOpen ? dictionary.status.open : dictionary.status.closed}
        </strong>
        <span style={{ fontSize: '0.8rem', color: 'rgba(241, 250, 238, 0.75)' }}>
          {dictionary.status.weatherLabel}: {weatherText} · {weather.temperature}
        </span>
      </div>
    </div>
  );
}
