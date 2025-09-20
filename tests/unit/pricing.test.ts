import { describe, expect, it } from 'vitest';
import {
  estimateReservationTotal,
  formatPrice,
  sessionOptions,
  grandPrixOptions,
  addons
} from '@/lib/pricing';

describe('pricing calculations', () => {
  it('calculates session total with juniors', () => {
    const session = sessionOptions[0];
    const total = estimateReservationTotal({ packageId: session.id, participants: 4, juniors: 1 });
    expect(total).toBe(session.priceAdult * 3 + (session.priceJunior ?? session.priceAdult));
  });

  it('calculates grand prix total with addons', () => {
    const gp = grandPrixOptions[1];
    const addon = addons[0];
    const total = estimateReservationTotal({
      packageId: gp.id,
      participants: 10,
      addons: [addon.id]
    });
    expect(total).toBe(gp.pricePerDriver * 10 + addon.price);
  });

  it('formats price in french locale', () => {
    expect(formatPrice(126, 'fr')).toBe('126,00 €');
  });
});
