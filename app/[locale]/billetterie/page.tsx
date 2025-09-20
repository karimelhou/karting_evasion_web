import React from 'react';
import { Locale, defaultLocale, getDictionary, isLocale } from '@/lib/i18n';
import { ReservationWizard } from '@/components/ReservationWizard';
import { sessionOptions, grandPrixOptions, schoolOptions, formatPrice } from '@/lib/pricing';
import { localize } from '@/lib/utils';

export default function BookingPage({ params }: { params: { locale: string } }) {
  const locale: Locale = isLocale(params.locale) ? params.locale : defaultLocale;
  const dictionary = getDictionary(locale);

  return (
    <div>
      <section className="section">
        <header style={{ maxWidth: '60ch', marginBottom: '2rem' }}>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}>{dictionary.nav.booking}</h1>
          <p style={{ color: 'rgba(241,250,238,0.75)' }}>{dictionary.home.wizardSubtitle}</p>
        </header>
        <div className="grid-responsive" style={{ gap: '2rem' }}>
          <ReservationWizard />
          <aside className="card-surface" data-glow style={{ position: 'sticky', top: '120px', alignSelf: 'start' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', marginBottom: '1rem' }}>{dictionary.offers.title}</h2>
            <div style={{ display: 'grid', gap: '1rem' }}>
              <section>
                <h3 style={{ fontFamily: 'var(--font-heading)' }}>{dictionary.offers.sessionsTitle}</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {sessionOptions.map((option) => (
                    <li key={option.id} style={{ marginBottom: '0.35rem', color: 'rgba(241,250,238,0.75)' }}>
                      {localize(option.name, locale)} · {formatPrice(option.priceAdult, locale)}
                    </li>
                  ))}
                </ul>
              </section>
              <section>
                <h3 style={{ fontFamily: 'var(--font-heading)' }}>{dictionary.offers.grandPrixTitle}</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {grandPrixOptions.map((option) => (
                    <li key={option.id} style={{ marginBottom: '0.35rem', color: 'rgba(241,250,238,0.75)' }}>
                      {localize(option.name, locale)} · {formatPrice(option.pricePerDriver, locale)}
                    </li>
                  ))}
                </ul>
              </section>
              <section>
                <h3 style={{ fontFamily: 'var(--font-heading)' }}>{dictionary.offers.schoolTitle}</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {schoolOptions.map((option) => (
                    <li key={option.id} style={{ marginBottom: '0.35rem', color: 'rgba(241,250,238,0.75)' }}>
                      {localize(option.name, locale)} · {formatPrice(option.price, locale)}
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
