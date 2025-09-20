import React from 'react';

export function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <header className="fade-in" style={{ marginBottom: '2rem', maxWidth: '60ch' }}>
      <h2
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          marginBottom: '0.75rem'
        }}
      >
        {title}
      </h2>
      {subtitle && <p style={{ color: 'rgba(241,250,238,0.75)', fontSize: '1.05rem' }}>{subtitle}</p>}
    </header>
  );
}
