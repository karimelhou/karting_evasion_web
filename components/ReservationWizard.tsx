'use client';

import React, { useMemo, useState } from 'react';
import { useLocaleContext } from './LocaleContext';
import {
  addons,
  estimateReservationTotal,
  formatPrice,
  grandPrixOptions,
  sessionOptions,
  schoolOptions
} from '@/lib/pricing';
import { localize } from '@/lib/utils';
import { reservationSchema, buildReservationPayload } from '@/lib/schemas';

const timeSlots = ['10:00', '11:30', '14:00', '16:00', '18:00', '20:30'];

export function ReservationWizard() {
  const { locale, dictionary } = useLocaleContext();
  const [step, setStep] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [errors, setErrors] = useState<string | null>(null);
  const [form, setForm] = useState({
    date: '',
    timeSlot: timeSlots[0],
    participants: 6,
    juniors: 0,
    packageId: sessionOptions[0].id,
    addons: [] as string[],
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    notes: ''
  });

  const packageGroups = useMemo(
    () => [
      {
        id: 'sessions',
        label: locale === 'fr' ? 'Sessions' : 'Sessions',
        items: sessionOptions.map((option) => ({
          id: option.id,
          title: localize(option.name, locale),
          description:
            locale === 'fr'
              ? `${option.durationMinutes} minutes · ${option.priceJunior ? 'Tarif junior disponible' : 'Tarif unique'}`
              : `${option.durationMinutes} minutes · ${option.priceJunior ? 'Junior rate available' : 'Single rate'}`,
          price: formatPrice(option.priceAdult, locale)
        }))
      },
      {
        id: 'grand-prix',
        label: 'Grand Prix',
        items: grandPrixOptions.map((option) => ({
          id: option.id,
          title: localize(option.name, locale),
          description: `${option.duration} – ${localize(option.description, locale)}`,
          price: formatPrice(option.pricePerDriver, locale)
        }))
      },
      {
        id: 'school',
        label: locale === 'fr' ? 'École de pilotage' : 'Racing school',
        items: schoolOptions.map((option) => ({
          id: option.id,
          title: localize(option.name, locale),
          description: localize(option.description, locale),
          price: formatPrice(option.price, locale)
        }))
      }
    ],
    [locale]
  );

  const total = useMemo(
    () => estimateReservationTotal({
      packageId: form.packageId,
      participants: form.participants,
      juniors: form.juniors,
      addons: form.addons
    }),
    [form.packageId, form.participants, form.juniors, form.addons]
  );

  const goNext = () => {
    if (step === steps.length - 1) return;
    setStep((current) => Math.min(current + 1, steps.length - 1));
  };

  const goBack = () => {
    setStep((current) => Math.max(current - 1, 0));
  };

  const handleSubmit = () => {
    const result = reservationSchema.safeParse({
      ...form,
      participants: Number(form.participants),
      juniors: Number(form.juniors)
    });
    if (!result.success) {
      setErrors(result.error.issues[0]?.message ?? 'Invalid data');
      return;
    }
    setErrors(null);
    const payload = buildReservationPayload(result.data, total);
    console.info('Reservation payload', payload);
    setCompleted(true);
  };

  const steps = [
    {
      title: dictionary.wizard.stepOne,
      content: (
        <div className="form-grid two">
          <div>
            <label htmlFor="date">{locale === 'fr' ? 'Date souhaitée' : 'Preferred date'}</label>
            <input
              id="date"
              type="date"
              value={form.date}
              onChange={(event) => setForm((prev) => ({ ...prev, date: event.target.value }))}
            />
          </div>
          <div>
            <label htmlFor="slot">{locale === 'fr' ? 'Créneau' : 'Time slot'}</label>
            <select
              id="slot"
              value={form.timeSlot}
              onChange={(event) => setForm((prev) => ({ ...prev, timeSlot: event.target.value }))}
            >
              {timeSlots.map((slot) => (
                <option key={slot}>{slot}</option>
              ))}
            </select>
          </div>
        </div>
      )
    },
    {
      title: dictionary.wizard.stepTwo,
      content: (
        <div className="form-grid two">
          <div>
            <label htmlFor="participants-field">{locale === 'fr' ? 'Participants total' : 'Total participants'}</label>
            <input
              id="participants-field"
              type="number"
              min={1}
              max={60}
              value={form.participants}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, participants: Number(event.target.value) }))
              }
            />
          </div>
          <div>
            <label htmlFor="juniors-field">{locale === 'fr' ? 'Participants juniors' : 'Junior drivers'}</label>
            <input
              id="juniors-field"
              type="number"
              min={0}
              max={60}
              value={form.juniors}
              onChange={(event) => setForm((prev) => ({ ...prev, juniors: Number(event.target.value) }))}
            />
          </div>
        </div>
      )
    },
    {
      title: dictionary.wizard.stepThree,
      content: (
        <div className="form-grid">
          {packageGroups.map((group) => (
            <fieldset
              key={group.id}
              style={{
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 'var(--radius-md)',
                padding: '1.25rem'
              }}
            >
              <legend style={{ fontFamily: 'var(--font-heading)' }}>{group.label}</legend>
              <div className="form-grid two">
                {group.items.map((item) => (
                  <label
                    key={item.id}
                    style={{
                      border: '1px solid rgba(255,255,255,0.2)',
                      borderRadius: 'var(--radius-md)',
                      padding: '1rem',
                      cursor: 'pointer',
                      display: 'grid',
                      gap: '0.35rem',
                      background:
                        form.packageId === item.id
                          ? 'linear-gradient(120deg, rgba(230,57,70,0.3), rgba(29,53,87,0.3))'
                          : 'transparent'
                    }}
                  >
                    <input
                      type="radio"
                      name="package"
                      value={item.id}
                      checked={form.packageId === item.id}
                      onChange={() => setForm((prev) => ({ ...prev, packageId: item.id }))}
                      style={{ marginBottom: '0.35rem' }}
                    />
                    <strong>{item.title}</strong>
                    <span style={{ fontSize: '0.9rem', color: 'rgba(241,250,238,0.75)' }}>{item.description}</span>
                    <span style={{ fontWeight: 600 }}>{item.price}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          ))}
          <fieldset
            style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: 'var(--radius-md)', padding: '1rem' }}
          >
            <legend>Extras</legend>
            <div className="form-grid two">
              {addons.map((addon) => (
                <label key={addon.id} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <input
                    type="checkbox"
                    checked={form.addons.includes(addon.id)}
                    onChange={() =>
                      setForm((prev) => ({
                        ...prev,
                        addons: prev.addons.includes(addon.id)
                          ? prev.addons.filter((value) => value !== addon.id)
                          : [...prev.addons, addon.id]
                      }))
                    }
                  />
                  <span>
                    {localize(addon.name, locale)} – {formatPrice(addon.price, locale)}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>
        </div>
      )
    },
    {
      title: dictionary.wizard.stepFour,
      content: (
        <div className="form-grid two">
          <div>
            <label htmlFor="first-name">{locale === 'fr' ? 'Prénom' : 'First name'}</label>
            <input
              id="first-name"
              value={form.firstName}
              onChange={(event) => setForm((prev) => ({ ...prev, firstName: event.target.value }))}
            />
          </div>
          <div>
            <label htmlFor="last-name">{locale === 'fr' ? 'Nom' : 'Last name'}</label>
            <input
              id="last-name"
              value={form.lastName}
              onChange={(event) => setForm((prev) => ({ ...prev, lastName: event.target.value }))}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
            />
          </div>
          <div>
            <label htmlFor="phone">{locale === 'fr' ? 'Téléphone' : 'Phone'}</label>
            <input
              id="phone"
              value={form.phone}
              onChange={(event) => setForm((prev) => ({ ...prev, phone: event.target.value }))}
            />
          </div>
          <div style={{ gridColumn: '1 / -1' }}>
            <label htmlFor="notes">{locale === 'fr' ? 'Précisions' : 'Notes'}</label>
            <textarea
              id="notes"
              rows={4}
              value={form.notes}
              onChange={(event) => setForm((prev) => ({ ...prev, notes: event.target.value }))}
            />
          </div>
        </div>
      )
    }
  ];

  if (completed) {
    return (
      <section className="section" data-surface>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem' }}>{dictionary.wizard.thankYouTitle}</h2>
        <p style={{ color: 'rgba(241,250,238,0.75)', maxWidth: '48ch' }}>{dictionary.wizard.thankYouBody}</p>
        <p style={{ marginTop: '1.5rem', fontWeight: 600 }}>
          {dictionary.wizard.totalLabel}: {formatPrice(total, locale)}
        </p>
      </section>
    );
  }

  return (
    <section className="section" data-surface>
      <header style={{ marginBottom: '1.5rem' }}>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem' }}>{steps[step].title}</h2>
        <p style={{ color: 'rgba(241,250,238,0.75)' }}>{dictionary.wizard.summaryTitle}</p>
        <p style={{ marginTop: '0.5rem', fontWeight: 600 }}>
          {dictionary.wizard.totalLabel}: {formatPrice(total, locale)}
        </p>
      </header>
      <div>{steps[step].content}</div>
      {errors && <p className="alert" style={{ marginTop: '1rem' }}>{errors}</p>}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
        <button type="button" className="btn-secondary" onClick={goBack} disabled={step === 0}>
          {dictionary.wizard.back}
        </button>
        {step < steps.length - 1 ? (
          <button type="button" className="btn-primary" onClick={goNext}>
            {dictionary.wizard.next}
          </button>
        ) : (
          <button type="button" className="btn-primary" onClick={handleSubmit}>
            {dictionary.wizard.submit}
          </button>
        )}
      </div>
    </section>
  );
}
