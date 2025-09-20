"use client";

import Link from 'next/link';
import React from 'react';
import { useLocaleContext } from './LocaleContext';
import { partnerLogos } from '@/lib/data';

export function Footer() {
  const { dictionary, locale } = useLocaleContext();
  return (
    <footer className="section section--tight" style={{ background: 'rgba(5,7,15,0.8)', marginTop: '4rem' }}>
      <div className="grid-responsive grid-responsive--three" style={{ alignItems: 'flex-start' }}>
        <div>
          <h3 style={{ fontFamily: 'var(--font-heading)', marginBottom: '1rem' }}>Karting Évasion Rumilly</h3>
          <p style={{ maxWidth: '28ch', color: 'rgba(241,250,238,0.7)' }}>
            Route de l’Albanais · 74150 Rumilly · +33 (0)4 50 01 02 03
          </p>
          <p style={{ fontSize: '0.85rem', color: 'rgba(241,250,238,0.6)' }}>{dictionary.footer.rights}</p>
        </div>
        <div>
          <h4 style={{ fontFamily: 'var(--font-heading)', marginBottom: '0.75rem' }}>Menu</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '0.45rem' }}>
            <li>
              <Link href={`/${locale}/mentions-legales`} aria-disabled className="btn-secondary" style={{ padding: '0.35rem 0.65rem', display: 'inline-flex' }}>
                {dictionary.footer.legal}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/confidentialite`} aria-disabled className="btn-secondary" style={{ padding: '0.35rem 0.65rem', display: 'inline-flex' }}>
                {dictionary.footer.privacy}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/cgv`} aria-disabled className="btn-secondary" style={{ padding: '0.35rem 0.65rem', display: 'inline-flex' }}>
                {dictionary.footer.terms}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/recrutement`} aria-disabled className="btn-secondary" style={{ padding: '0.35rem 0.65rem', display: 'inline-flex' }}>
                {dictionary.footer.careers}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/bons-cadeaux`} aria-disabled className="btn-secondary" style={{ padding: '0.35rem 0.65rem', display: 'inline-flex' }}>
                {dictionary.footer.giftCards}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 style={{ fontFamily: 'var(--font-heading)', marginBottom: '0.75rem' }}>{dictionary.home.partnersTitle}</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '0.35rem', fontSize: '0.95rem' }}>
            {partnerLogos.map((partner) => (
              <li key={partner.name} style={{ opacity: 0.8 }}>
                <span>{partner.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
