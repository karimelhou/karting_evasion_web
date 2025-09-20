'use client';

import React, { useMemo, useState } from 'react';
import { useLocaleContext } from './LocaleContext';
import { addons, estimateReservationTotal, formatPrice, grandPrixOptions } from '@/lib/pricing';
import { localize } from '@/lib/utils';

const cateringOption = {
  price: 32,
  label: {
    fr: 'Ajouter cocktail & restauration (32 € / personne)',
    en: 'Add cocktail & catering (€32 / person)'
  }
};

export function GroupQuoteBuilder() {
  const { locale, dictionary } = useLocaleContext();
  const [participants, setParticipants] = useState(12);
  const [packageId, setPackageId] = useState(grandPrixOptions[0].id);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [includeCatering, setIncludeCatering] = useState(true);
  const [email, setEmail] = useState('');

  const total = useMemo(() => {
    const base = estimateReservationTotal({ packageId, participants, addons: selectedAddons });
    const catering = includeCatering ? participants * cateringOption.price : 0;
    return base + catering;
  }, [packageId, participants, selectedAddons, includeCatering]);

  const toggleAddon = (id: string) => {
    setSelectedAddons((current) =>
      current.includes(id) ? current.filter((value) => value !== id) : [...current, id]
    );
  };

  return (
    <section className="section" data-surface>
      <header style={{ marginBottom: '1.5rem' }}>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem' }}>{dictionary.groups.builderTitle}</h2>
        <p style={{ color: 'rgba(241,250,238,0.75)' }}>{dictionary.groups.builderDescription}</p>
      </header>
      <form className="form-grid" aria-label={dictionary.groups.builderTitle}>
        <div>
          <label htmlFor="participants">{locale === 'fr' ? 'Participants' : 'Participants'}</label>
          <input
            id="participants"
            type="number"
            min={8}
            max={200}
            value={participants}
            onChange={(event) => setParticipants(Number(event.target.value))}
          />
        </div>
        <div>
          <label htmlFor="package">{locale === 'fr' ? 'Formule' : 'Package'}</label>
          <select id="package" value={packageId} onChange={(event) => setPackageId(event.target.value)}>
            {grandPrixOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {localize(option.name, locale)} – {formatPrice(option.pricePerDriver, locale)}
              </option>
            ))}
          </select>
        </div>
        <fieldset style={{ border: '1px solid rgba(255,255,255,0.15)', borderRadius: 'var(--radius-md)', padding: '1rem' }}>
          <legend>{locale === 'fr' ? 'Options' : 'Options'}</legend>
          <div className="form-grid two">
            {addons.map((addon) => (
              <label key={addon.id} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <input
                  type="checkbox"
                  checked={selectedAddons.includes(addon.id)}
                  onChange={() => toggleAddon(addon.id)}
                />
                <span>
                  {localize(addon.name, locale)} – {formatPrice(addon.price, locale)}
                </span>
              </label>
            ))}
            <label style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <input type="checkbox" checked={includeCatering} onChange={() => setIncludeCatering((value) => !value)} />
              <span>{localize(cateringOption.label, locale)}</span>
            </label>
          </div>
        </fieldset>
        <div>
          <label htmlFor="email">{dictionary.groups.emailPlaceholder}</label>
          <input
            id="email"
            type="email"
            placeholder={dictionary.groups.emailPlaceholder}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
      </form>
      <div className="card-surface" data-glow style={{ marginTop: '2rem' }}>
        <h3 style={{ fontFamily: 'var(--font-heading)' }}>{dictionary.groups.totalLabel}</h3>
        <p style={{ fontSize: '2rem', margin: '0.5rem 0' }}>{formatPrice(total, locale)}</p>
        <p style={{ color: 'rgba(241,250,238,0.65)', fontSize: '0.95rem' }}>
          {includeCatering
            ? locale === 'fr'
              ? 'Inclut cocktail & restauration.'
              : 'Includes cocktail & catering.'
            : locale === 'fr'
            ? 'Restauration optionnelle non incluse.'
            : 'Catering optional and not included.'}
        </p>
        <button type="button" className="btn-primary" style={{ width: 'fit-content' }}>
          {dictionary.groups.cta}
        </button>
      </div>
    </section>
  );
}
