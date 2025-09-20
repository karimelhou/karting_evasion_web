'use client';

import React, { useState } from 'react';
import { useLocaleContext } from './LocaleContext';
import { contactSchema } from '@/lib/schemas';

export function ContactForm() {
  const { locale, dictionary } = useLocaleContext();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'error' | 'success'>('idle');
  const [error, setError] = useState<string | null>(null);

  const submit = () => {
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      setError(result.error.issues[0]?.message ?? 'Invalid data');
      setStatus('error');
      return;
    }
    setError(null);
    setStatus('success');
  };

  return (
    <div className="card-surface" data-glow>
      <h2 style={{ fontFamily: 'var(--font-heading)', marginBottom: '1rem' }}>{dictionary.contact.formTitle}</h2>
      <div className="form-grid">
        <label htmlFor="contact-name">
          {locale === 'fr' ? 'Nom complet' : 'Full name'}
          <input
            id="contact-name"
            value={form.name}
            onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
          />
        </label>
        <label htmlFor="contact-email">
          Email
          <input
            id="contact-email"
            type="email"
            value={form.email}
            onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
          />
        </label>
        <label htmlFor="contact-message">
          {locale === 'fr' ? 'Votre message' : 'Your message'}
          <textarea
            id="contact-message"
            rows={5}
            value={form.message}
            onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
          />
        </label>
        <button type="button" className="btn-primary" onClick={submit}>
          {locale === 'fr' ? 'Envoyer' : 'Send'}
        </button>
        {status === 'success' && (
          <p className="alert" role="status">
            {locale === 'fr'
              ? 'Merci ! Nous revenons vers vous très vite.'
              : 'Thank you! We will get back to you shortly.'}
          </p>
        )}
        {status === 'error' && error && (
          <p className="alert" role="alert">
            {locale === 'fr' ? 'Veuillez vérifier le formulaire.' : 'Please check the form.'}
          </p>
        )}
      </div>
    </div>
  );
}
