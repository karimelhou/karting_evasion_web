'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { locales } from '@/lib/i18n';
import { useLocaleContext } from './LocaleContext';

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname() ?? '/fr';
  const { locale } = useLocaleContext();

  const switchTo = (target: string) => {
    if (target === locale) return;
    const parts = pathname.split('/').filter(Boolean);
    if (parts.length === 0) {
      parts.push(target);
    } else {
      parts[0] = target;
    }
    const href = `/${parts.join('/')}`;
    router.push(href);
  };

  return (
    <div role="group" aria-label="Changer de langue" style={{ display: 'flex', gap: '0.35rem' }}>
      {locales.map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => switchTo(code)}
          className="btn-secondary"
          style={{
            padding: '0.45rem 0.9rem',
            fontSize: '0.8rem',
            textTransform: 'uppercase',
            opacity: code === locale ? 1 : 0.6
          }}
          aria-pressed={code === locale}
        >
          {code}
        </button>
      ))}
    </div>
  );
}
