'use client';

import React, { createContext, useContext, useEffect } from 'react';
import type { Dictionary, Locale } from '@/lib/i18n';

type LocaleValue = {
  locale: Locale;
  dictionary: Dictionary;
};

const LocaleContext = createContext<LocaleValue | undefined>(undefined);

export function LocaleProvider({ value, children }: { value: LocaleValue; children: React.ReactNode }) {
  useEffect(() => {
    document.documentElement.lang = value.locale;
  }, [value.locale]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocaleContext() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error('useLocaleContext must be used within LocaleProvider');
  }
  return ctx;
}
