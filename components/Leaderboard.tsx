import React from 'react';
import { leaderboard } from '@/lib/data';
import type { Locale } from '@/lib/i18n';
import { format } from 'date-fns';

export function Leaderboard({ title, subtitle, locale }: { title: string; subtitle: string; locale: Locale }) {
  const min = Math.min(...leaderboard.map((entry) => entry.lapTime));
  const max = Math.max(...leaderboard.map((entry) => entry.lapTime));
  const range = max - min || 1;

  return (
    <section className="section" data-surface>
      <header style={{ marginBottom: '1.5rem' }}>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '0.5rem' }}>{title}</h2>
        <p style={{ color: 'rgba(241,250,238,0.7)' }}>{subtitle}</p>
      </header>
      <div className="grid-responsive" style={{ gap: '2.5rem' }}>
        <div style={{ overflowX: 'auto' }}>
          <table className="table" aria-label={title}>
            <thead>
              <tr>
                <th>#</th>
                <th>Pilote</th>
                <th>Équipe</th>
                <th>Temps</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map((entry, index) => (
                <tr key={entry.driver}>
                  <td>{index + 1}</td>
                  <td>{entry.driver}</td>
                  <td>{entry.team}</td>
                  <td>{entry.lapTime.toFixed(2)} s</td>
                  <td>{format(new Date(entry.date), locale === 'fr' ? 'dd/MM/yyyy' : 'MM/dd/yyyy')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="card-surface" style={{ minHeight: '260px' }}>
          <svg viewBox="0 0 400 220" role="img" aria-label="Graphique des meilleurs temps">
            <defs>
              <linearGradient id="lineGradient" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#e63946" />
                <stop offset="100%" stopColor="#f1faee" />
              </linearGradient>
            </defs>
            <polyline
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth={4}
              points={leaderboard
                .map((entry, index) => {
                  const x = (index / (leaderboard.length - 1 || 1)) * 380 + 10;
                  const normalized = (entry.lapTime - min) / range;
                  const y = 180 - normalized * 160;
                  return `${x},${y}`;
                })
                .join(' ')}
            />
            {leaderboard.map((entry, index) => {
              const x = (index / (leaderboard.length - 1 || 1)) * 380 + 10;
              const normalized = (entry.lapTime - min) / range;
              const y = 180 - normalized * 160;
              return (
                <g key={entry.driver}>
                  <circle cx={x} cy={y} r={6} fill="#e63946" />
                  <text x={x} y={y - 12} textAnchor="middle" fontSize="12" fill="#f1faee">
                    {entry.lapTime.toFixed(2)}s
                  </text>
                </g>
              );
            })}
            <line x1={10} y1={180} x2={390} y2={180} stroke="rgba(255,255,255,0.2)" strokeDasharray="4 6" />
            <line x1={10} y1={20} x2={10} y2={200} stroke="rgba(255,255,255,0.2)" strokeDasharray="4 6" />
          </svg>
        </div>
      </div>
    </section>
  );
}
