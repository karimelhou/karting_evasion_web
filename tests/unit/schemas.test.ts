import { describe, expect, it } from 'vitest';
import { reservationSchema, groupQuoteSchema, buildReservationPayload } from '@/lib/schemas';

describe('schemas', () => {
  it('validates reservation payload', () => {
    const data = {
      date: '2024-06-20',
      timeSlot: '10:00',
      participants: 8,
      juniors: 2,
      packageId: 'mini-gp',
      addons: ['podium'],
      firstName: 'Anaïs',
      lastName: 'Martin',
      email: 'anais@example.com',
      phone: '+33000000000',
      notes: 'Allergies à signaler'
    };
    const parsed = reservationSchema.parse(data);
    const payload = buildReservationPayload(parsed, 1000);
    expect(payload.total).toBe(1000);
  });

  it('rejects juniors greater than participants', () => {
    expect(() =>
      reservationSchema.parse({
        date: '2024-06-20',
        timeSlot: '10:00',
        participants: 3,
        juniors: 5,
        packageId: 'session-10',
        addons: [],
        firstName: 'Test',
        lastName: 'Case',
        email: 'test@example.com',
        phone: '123456'
      })
    ).toThrow();
  });

  it('validates group quote', () => {
    const result = groupQuoteSchema.parse({
      company: 'Alpine',
      email: 'events@example.com',
      phone: '+33000000000',
      participants: 30,
      packageId: 'grand-prix',
      catering: true,
      addons: ['podium'],
      message: 'Organisation d’un challenge de fin de saison.'
    });
    expect(result.company).toBe('Alpine');
  });
});
