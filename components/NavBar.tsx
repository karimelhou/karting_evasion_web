'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocaleContext } from './LocaleContext';
import { TrackStatusWidget } from './TrackStatusWidget';
import { LanguageSwitcher } from './LanguageSwitcher';

export function NavBar() {
  const { dictionary, locale } = useLocaleContext();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const navItems = [
    { label: dictionary.nav.home, href: `/${locale}` },
    { label: dictionary.nav.experience, href: `/${locale}/experience` },
    { label: dictionary.nav.tracks, href: `/${locale}/pistes` },
    { label: dictionary.nav.offers, href: `/${locale}/offres` },
    { label: dictionary.nav.booking, href: `/${locale}/billetterie` },
    { label: dictionary.nav.gallery, href: `/${locale}/galerie` },
    { label: dictionary.nav.restaurant, href: `/${locale}/restaurant` },
    { label: dictionary.nav.events, href: `/${locale}/evenements` },
    { label: dictionary.nav.news, href: `/${locale}/actualites` },
    { label: dictionary.nav.contact, href: `/${locale}/contact` },
    { label: dictionary.nav.faq, href: `/${locale}/faq` }
  ];

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backdropFilter: 'blur(14px)',
        background: 'rgba(5, 7, 15, 0.7)',
        borderBottom: '1px solid rgba(255,255,255,0.08)'
      }}
    >
      <nav
        aria-label="Navigation principale"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.5rem',
          padding: '1rem clamp(1rem, 4vw, 3rem)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Link href={`/${locale}`} aria-label="Karting Évasion Rumilly" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span
              aria-hidden
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #e63946, #ff9f1c)',
                display: 'grid',
                placeItems: 'center',
                fontWeight: 700,
                letterSpacing: '0.06em'
              }}
            >
              KE
            </span>
            <div style={{ display: 'grid', lineHeight: 1.1 }}>
              <strong style={{ fontFamily: 'var(--font-heading)', letterSpacing: '0.08em' }}>Karting Évasion</strong>
              <span style={{ fontSize: '0.75rem', color: 'rgba(241,250,238,0.7)' }}>Rumilly</span>
            </div>
          </Link>
          <div className="hide-on-mobile" style={{ display: 'none', gap: '0.75rem' }}>
            <TrackStatusWidget />
          </div>
        </div>
        <button
          type="button"
          className="btn-secondary"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', paddingInline: '1rem' }}
        >
          <span aria-hidden>{open ? '✕' : '☰'}</span>
          <span style={{ fontSize: '0.9rem' }}>Menu</span>
        </button>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}
          className="desktop-nav"
        >
          <ul
            style={{
              display: 'none',
              listStyle: 'none',
              margin: 0,
              padding: 0,
              alignItems: 'center',
              gap: '1.2rem'
            }}
            className="desktop-nav-list"
          >
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="nav-link"
                  style={{
                    fontSize: '0.95rem',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    color: pathname?.startsWith(item.href) ? '#f1faee' : 'rgba(241,250,238,0.7)',
                    borderBottom: pathname === item.href ? '2px solid #e63946' : '2px solid transparent',
                    paddingBottom: '0.25rem'
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="desktop-actions" style={{ display: 'none', alignItems: 'center', gap: '0.75rem' }}>
            <TrackStatusWidget />
            <LanguageSwitcher />
            <Link href={`/${locale}/billetterie`} className="btn-primary">
              {dictionary.hero.bookCta}
            </Link>
          </div>
        </div>
      </nav>
      {open && (
        <div
          id="mobile-nav"
          className="card-surface"
          style={{
            margin: '0 1rem 1rem',
            padding: '1.5rem',
            display: 'grid',
            gap: '1rem'
          }}
        >
          <TrackStatusWidget />
          <LanguageSwitcher />
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: '0.75rem' }}>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} style={{ fontSize: '1rem', letterSpacing: '0.02em' }}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href={`/${locale}/billetterie`} className="btn-primary" style={{ textAlign: 'center' }}>
            {dictionary.hero.bookCta}
          </Link>
        </div>
      )}
      <style jsx>{`
        @media (min-width: 960px) {
          .hide-on-mobile {
            display: flex !important;
          }
          nav button {
            display: none;
          }
          .desktop-nav-list {
            display: flex !important;
          }
          .desktop-actions {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}
